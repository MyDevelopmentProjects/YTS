package app.qrme.core.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

/**
 * Created by MJaniko on 3/29/2017.
 */
@Configuration
public class MailConfiguration {

    @Bean
    public JavaMailSender javaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();

        mailSender.setHost("smtp.gmail.com");
        mailSender.setUsername("gvashakidze6@gmail.com");
        mailSender.setPassword("voidmain");
        mailSender.setPort(465);
        mailSender.setProtocol("smtps");
        mailSender.setDefaultEncoding("utf-8");

        Properties mailProps = new Properties();
        mailProps.put("mail.smtps.auth", "true");
        mailProps.put("mail.debug", "false"); // For Debug Purpose
        mailProps.put("mail.mime.charset", "utf8");

        mailSender.setJavaMailProperties(mailProps);

        return mailSender;
    }

}
