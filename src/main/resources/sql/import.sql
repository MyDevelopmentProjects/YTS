INSERT INTO qr_role (id, date_created, name) VALUES
(1, '2017-04-23 09:26:12', 'USER'),
(2, '2017-04-23 09:26:12', 'ADMIN');

INSERT INTO qr_language (id, date_created, date_updated, description, display_name, short_code) VALUES
(1, '2018-04-14 17:02:22', NULL, NULL, 'ქართული', 'GE'),
(2, '2018-04-14 17:02:22', NULL, NULL, 'English', 'EN');

INSERT INTO qr_organisation (id, date_created, date_updated, img_url, qr_code, user_id) VALUES
(1, '2018-04-14 17:13:23', NULL, NULL, '68faa7da6a48ffe8d9d628abbecdadf1', NULL);

INSERT INTO qr_organisation_locale (id, brand_name, formatted_address, lang_id, organisation_id) VALUES
(1, 'Strada', '7 სანდრო ეულის ქ. თბილისი', 1, 1),
(2, 'Strada', '7 Sandro Euli Street, Tbilisi', 2, 1);