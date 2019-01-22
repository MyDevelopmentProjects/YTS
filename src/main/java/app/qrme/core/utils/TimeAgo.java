package app.qrme.core.utils;

import java.util.Calendar;

public class TimeAgo {

    public static String timeAgo(long time_ago) {
        long cur_time = (Calendar.getInstance().getTimeInMillis()) / 1000;
        long time_elapsed = cur_time - time_ago;
        long seconds = time_elapsed;
        int minutes = Math.round(time_elapsed / 60);
        int hours = Math.round(time_elapsed / 3600);
        int days = Math.round(time_elapsed / 86400);
        int weeks = Math.round(time_elapsed / 604800);
        int months = Math.round(time_elapsed / 2600640);
        int years = Math.round(time_elapsed / 31207680);

        // Seconds
        if (seconds <= 60) {
            return "ახლა";
        }
        //Minutes
        else if (minutes <= 60) {
            if (minutes == 1) {
                return "1 წუთის წინ";
            } else {
                return minutes + " წუთის წინ";
            }
        }
        //Hours
        else if (hours <= 24) {
            if (hours == 1) {
                return "1 საათის წინ";
            } else {
                return hours + " საათის წინ";
            }
        }
        //Days
        else if (days <= 7) {
            if (days == 1) {
                return "გუშინ";
            } else {
                return days + " დღის წინ";
            }
        }
        //Weeks
        else if (weeks <= 4.3) {
            if (weeks == 1) {
                return "1 კვირის წინ";
            } else {
                return weeks + " კვირის წინ";
            }
        }
        //Months
        else if (months <= 12) {
            if (months == 1) {
                return "1 თვის წინ";
            } else {
                return months + " თვის წინ";
            }
        }
        //Years
        else {
            if (years == 1) {
                return "1 წლის წინ";
            } else {
                return years + " წლის წინ";
            }
        }
    }
}