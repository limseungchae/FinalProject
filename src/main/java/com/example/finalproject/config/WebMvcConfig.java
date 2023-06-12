package com.example.finalproject.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    private final long MAX_AGE_SECS = 3600;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        //모든 경로에 대해
        registry.addMapping("/**")
                // Origin이 http:localhost:3000에 대해.
                /*.allowedOrigins("http://localhost:3000","http://43.200.177.16", "http://localhost:80", "http://localhost", "http://0.0.0.0:80")*/
                .allowedOriginPatterns("*")
                // GET, POST, PUT, PATCH, DELETE, OPTIONS 메서드를 허용
                .allowedMethods("GET","POST","PUT","PATCH","DELETE","OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(MAX_AGE_SECS);
    }
}
