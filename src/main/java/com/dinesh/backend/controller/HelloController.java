package com.dinesh.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping(value = "/hello", produces = "text/html")
    public String hello() {

        return """
        <!DOCTYPE html>
        <html>
        <head>
            <title>DevOps Project</title>

            <style>
                body{
                    background:#0f172a;
                    color:white;
                    font-family:Arial,sans-serif;
                    text-align:center;
                    padding-top:100px;
                }

                .card{
                    width:500px;
                    margin:auto;
                    background:#1e293b;
                    padding:30px;
                    border-radius:15px;
                    box-shadow:0 0 20px rgba(0,0,0,0.5);
                }

                h1{
                    color:#38bdf8;
                }

                p{
                    font-size:20px;
                }
            </style>

        </head>

        <body>

            <div class="card">
                <h1>🚀 DevOps Project</h1>
                <p>Spring Boot Running Successfully</p>
                <p>AWS EC2</p>
                <p>GitHub Actions CI/CD ✅</p>
            </div>

        </body>
        </html>
        """;
    }
}