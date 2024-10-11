package edu.ucsb.cs156.example.controllers;

import java.util.Map;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.ServletWebRequest;

import org.springframework.web.context.request.WebRequest;

@Controller
@Slf4j
public class ErrorController implements org.springframework.boot.web.servlet.error.ErrorController {

    @Autowired
    private ErrorAttributes errorAttributes;

    @RequestMapping("/error")
    public @ResponseBody Map<String, Object> handleProblem(HttpServletRequest req) {

        WebRequest webRequest = new ServletWebRequest(req);
        Map<String, Object> errors = errorAttributes.getErrorAttributes(webRequest, ErrorAttributeOptions.defaults());
        log.info("ErrorController.handleProblem invoked with errors: " + errors);
        return errors;

    }

}