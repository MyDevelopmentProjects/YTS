angular.module('app').controller('PostController',
    ['$rootScope', '$scope', '$http', 'GridManager', 'ModalManager', 'FileUploader', '$sce',
        function ($rootScope, $scope, $http, GridManager, ModalManager, FileUploader, $sce) {

            var vm = $scope;

            var sectionsToSave = [];
            var tagsToSave = [];
            var sectionHasBeenChanged = false;
            var tagsHasBeenChanged = false;

            angular.extend(vm, {
                url: '/post/find',
                categoryURL: '/postCategory/list?size=100',
                saveURL: '/post/put',
                deleteURL: '/post/delete',
                bulkDeleteURL: '/post/removeMutl',
                sectionURL: '/section/list?size=100',
                postSection: '/postSection/',
                postTags: '/postTag/',
                allTags: '/tag/all',
                savePSURL: '/postSection/savePS/',
                init: {},
                categories: [],
                sections: [],
                tags: [],
                selectedSections: [],
                selectedTags: [],
                options: {
                    height: window.innerHeight - 430,
                    toolbar: [
                        ['edit', ['undo', 'redo']],
                        ['headline', ['style']],
                        ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
                        ['fontface', ['fontname']],
                        ['fontclr', ['color']],
                        ['fontsize', ['fontsize']],
                        ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
                        ['height', ['height']],
                        ['table', ['table']],
                        ['insert', ['link', 'picture', 'video', 'hr']],
                        ['view', ['fullscreen', 'codeview']],
                        ['help', ['help']]
                    ]
                }
            });

            GridManager.givePowerTo(vm);
            ModalManager.enableModals(vm);


            vm.selectedCat = '';
            vm.AmfTable.sortColumn = 'id';
            vm.AmfTable.sortDir = 'DESC';
            vm.AmfTable.openPage(0);

            vm.getCategories = getCategories;
            vm.getSections = getSections;
            vm.getPostSection = getPostSection;
            vm.getPostTags = getPostTags;
            vm.getTags = getTags;

            vm.AmfTable.showAddEdit = function (item) {
                sectionsToSave = [];
                vm.selectedSections = [];

                tagsToSave = [];
                vm.selectedTags = [];

                $('.redactor_editor').html('');

                $('#edit').html('');


                $($('.nav-active-border .nav-link')[0]).click();
                $('.sectionCheckbox:checked').prop('checked', false);
                vm.init.action = item ? 'რედაქტირება' : 'დამატება';
                vm.object = {};

                if (item) {
                    vm.object = angular.copy(item);
                    vm.getPostSection();
                    vm.getPostTags();
                    $('.redactor_editor').html(vm.object.descr);
                    $('#edit').html(vm.object.descr)
                }

                vm.toggle();

                setTimeout(function () {
                    $('#edit').redactor({
                        lang: 'ge',
                        iframe: false,
                        linkProtocol: '//',
                        imageUpload: '/upload/single',
                        fileUpload: '/upload/single',
                        //imageGetJson: '/uploads/list',
                        buttons: ['html', 'formatting',  'bold', 'italic', 'deleted', 'underline', 'unorderedlist', 'orderedlist',
                            'outdent', 'indent', 'image', 'video', 'table', 'link', 'alignment'],
                        plugins: ['fileupload', 'fontcolor', 'fontsize', 'fullscreen'],
                        toolbarFixed: true,
                        minHeight: 400,
                        deniedTags: ['font'],
                        placeHolder: true,
                        removeEmptyTags: false,
                        tidyHtml: false,
                        convertDivs: false,
                        xhtml: false
                    });
                }, 200)
            };

            vm.toggle = function () {
                $('#showAddEdit').toggle();
                $('#list-of-items').toggle();
            };

            vm.bulkStateChanged = function () {

                setTimeout(function () {
                    $('.selectedPostId').shiftSelectable();
                }, 1000)

            };

            vm.uploader.onCompleteItem = function (fileItem, response, status, headers) {
                if (response && response.length > 0) {
                    if (!$('#page-1').is(':visible')) {
                        vm.object.imgUrls = JSON.stringify([response[0].name])
                    } else {
                        vm.AmfTable.didPressedSave = false;
                    }
                }
            };

            vm.isFileSet = function () {
                return vm.object.imgUrls !== undefined && vm.object.imgUrls !== null && vm.object.imgUrls.length > 0
            };

            vm.getUrl = function () {
                if (vm.object && vm.object.videoUrls) {
                    return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + vm.object.videoUrls + "?rel=0&amp;controls=0");
                }
                return "";
            };

            vm.imageUpload = function (files, editor) {
                for (var i in files) {
                    vm.uploader.addToQueue(files[i]);
                }
                vm.uploader.uploadAll();
                vm.uploader.onCompleteItem = function (fileItem, response, status, headers) {
                    if (response && response.length > 0) {
                        if ($('#page-1').is(':visible')) {
                            for (var file in response) {
                                var fileName = response[file].name;
                                editor.insertImage(vm.editable, '/uploads/' + fileName, fileName);
                            }
                            vm.AmfTable.didPressedSave = false;
                        } else {
                            vm.object.imgUrls = JSON.stringify([response[0].name])
                        }
                    }
                };
            };

            vm.inSection = function (id) {
                for (var i = 0; i < vm.selectedSections.length; i++) {
                    if (vm.selectedSections[i].section.id === id) {
                        return true;
                    }
                }
                return false;
            };

            vm.inTag = function (id) {
                for (var i = 0; i < vm.selectedTags.length; i++) {
                    if (vm.selectedTags[i].tag.id === id) {
                        return true;
                    }
                }
                return false;
            };

            vm.uploader.onBeforeUploadItem = function (item) {
                if ($('#page-1').is(':visible')) {
                    item.formData.push({type: 'SLIDER_IMG'});
                } else {
                    item.formData.push({type: 'POST_IMG'});
                }
            };

            vm.bulkDelete = function() {
                var ids = [];
                $.each($('.selectedPostId:checked'), function (i,v) {
                    ids.push($(v).data('id'))
                })
                $http.post($scope.bulkDeleteURL, ids)
                    .success(function (response) {
                    $scope.AmfTable.reloadData();
                })
            };

            vm.showImage = function () {
                if (vm.object.imgUrls && JSON.parse(vm.object.imgUrls).length > 0) {
                    return '/uploads/' + JSON.parse(vm.object.imgUrls)[0]
                }
                return null;
            };

            vm.uploader.onCompleteAll = function () {
                if (vm.AmfTable.didPressedSave) {
                    $("input[type='file']").val('').clone(true);
                    if (vm.AmfTable.save !== undefined) {
                        vm.AmfTable.save()
                    }
                    vm.uploader.queue = [];
                }
            };

            vm.AmfTable.save = function () {
                var objectCopy = angular.copy(vm.object);
                objectCopy.createdBy = {id: 1};

                if (!objectCopy.numberOfViews) {
                    objectCopy.numberOfViews = 0;
                }

                objectCopy.descr = $('.redactor_editor').html();

                $http.post(vm.saveURL, objectCopy).success(function (response) {
                    if (!response.success) {
                        vm.showErrorModal(response.errorObj);
                        return;
                    }

                    if (sectionHasBeenChanged) {
                        if (response.content.id) {
                            vm.savePS(response.content.id);
                        } else {
                            vm.savePS(vm.object.id);
                        }
                    }

                    if (tagsHasBeenChanged) {
                        if (response.content.id) {
                            vm.saveT(response.content.id);
                        } else {
                            vm.saveT(vm.object.id);
                        }
                    }

                    vm.showSuccessAlert("Success");
                    vm.AmfTable.reloadData();
                    $('#showAddEdit').modal('hide');

                });
            };

            vm.savePS = function (id) {
                $http.post(vm.savePSURL + '?postId=' + id, sectionsToSave, function () {

                })
            };

            vm.saveT = function (id) {
                $http.post(vm.postTags + 'savePS?postId=' + id, tagsToSave, function () {

                })
            };

            vm.AmfTable.delete = function (itemId) {
                $http.post("/post/removePost", itemId).success(function (data) {
                    vm.AmfTable.reloadData();
                });
            };

            function getCategories() {
                $http.get(vm.categoryURL, {cache: true}).success(function (resp) {
                    if (resp.content)
                        vm.categories = resp.content;
                    else vm.categories = [];
                })
            }

            vm.getList = function (cat) {
                if (cat) {
                    vm.selectedCat = cat;
                    vm.AmfTable.customFilters = {categoryId: vm.selectedCat.id}
                } else {
                    vm.selectedCat = '';
                    vm.AmfTable.customFilters = undefined
                }
                vm.AmfTable.openPage(0);
            };

            function getSections() {
                $http.get(vm.sectionURL, {cache: true}).success(function (resp) {
                    if (resp.content) {
                        vm.sections = resp.content;
                    } else {
                        vm.sections = [];
                        sectionsToSave = [];
                    }
                    $(document).on('change', '.sectionCheckbox', function (e) {
                        e.preventDefault()
                        sectionHasBeenChanged = true;
                        sectionsToSave = [];

                        $.each($('.sectionCheckbox:checked'), function (itr, obj) {
                            sectionsToSave.push(parseInt($(this).attr('inpId')))
                        });
                    });
                })
            }

            function getTags() {
                $http.get(vm.allTags, {cache: true}).success(function (resp) {
                    vm.tags = resp;
                    if (resp.length === 0) {
                        tagsToSave = [];
                    }
                    $(document).on('change', '.tagCheckbox', function (e) {
                        e.preventDefault()
                        tagsHasBeenChanged = true;
                        tagsToSave = [];

                        $.each($('.tagCheckbox:checked'), function (itr, obj) {
                            tagsToSave.push(parseInt($(this).attr('inpId')))
                        });
                    });
                })
            }

            function getPostSection() {
                $http.get(vm.postSection + vm.object.id).success(function (resp) {
                    if (resp) {
                        vm.selectedSections = resp;
                        for (var i = 0; i < vm.selectedSections.length; i++) {
                            sectionsToSave.push(vm.selectedSections[i].section.id)
                        }
                    }
                })
            }

            function getPostTags() {
                $http.get(vm.postTags + vm.object.id).success(function (resp) {
                    if (resp) {
                        vm.selectedTags = resp;
                        for (var i = 0; i < vm.selectedTags.length; i++) {
                            tagsToSave.push(vm.selectedTags[i].tag.id)
                        }
                    }
                })
            }

            vm.getCategories();
            vm.getSections();
            vm.getTags();

            setTimeout(function () {
                $('.form_datetime').datetimepicker({
                    language: 'ka',
                    weekStart: 1,
                    todayBtn: 1,
                    autoclose: 1,
                    todayHighlight: 1,
                    startView: 2,
                    forceParse: 0,
                    showMeridian: 1
                });
            }, 1500);

            $.fn.shiftSelectable = function () {
                var lastChecked,
                    $boxes = this;

                $boxes.click(function (evt) {
                    if (!lastChecked) {
                        lastChecked = this;
                        return;
                    }

                    if (evt.shiftKey) {
                        var start = $boxes.index(this),
                            end = $boxes.index(lastChecked);
                        $boxes.slice(Math.min(start, end), Math.max(start, end) + 1)
                            .attr('checked', lastChecked.checked)
                            .trigger('change');
                    }

                    lastChecked = this;
                });
            }

        }
    ]);
