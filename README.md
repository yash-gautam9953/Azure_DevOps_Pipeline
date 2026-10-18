# Azure DevOps CI/CD Pipeline

A containerized Node.js and Express application deployed to Azure using an automated CI/CD pipeline.

## Overview

This project demonstrates an end-to-end CI/CD workflow for a Dockerized Node.js application.

The application is developed using Node.js and Express, containerized with Docker, stored in Azure Container Registry, and deployed to Azure App Service through Azure DevOps.

## Architecture

```text
GitHub
   |
   v
Azure DevOps
   |
   v
Docker Build
   |
   v
Azure Container Registry
   |
   v
Azure App Service
   |
   v
Live Web Application
