# Azure DevOps CI/CD Pipeline

A complete CI/CD pipeline for a containerized Node.js and Express application using **GitHub, Docker, Azure Container Registry, Azure DevOps, and Azure App Service**.

The project is designed to be reusable. Anyone can clone this repository, create their own Azure resources, configure the required Azure DevOps service connections, update a few placeholders, and deploy the application through an automated CI/CD pipeline.

---

## 🚀 Project Overview

This project demonstrates an end-to-end DevOps workflow where source code changes are automatically built, containerized, pushed to Azure Container Registry, and deployed to Azure App Service.

### CI/CD Workflow

```text
Developer
    |
    | git push
    v
GitHub
    |
    v
Azure DevOps Pipeline
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
Live Application
