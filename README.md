# C2SMR - WEB Readme

---

Welcome to the C2SMR web application! This document provides information on how to try, install, set up the development environment, and contribute to the project.

## TECHNO

---

##  CI

![CI](https://github.com/Karimarf/fork-web/workflows/main_checks.yml/badge.svg)

### Front
![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
### API
![](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)
![](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
### Other
![](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)

## Installation

---

To install the program, follow these steps:

### Clone the repository:

```shell
git clone 'repository_url'
cd 'repository_directory'
```

### Build the Docker containers:

```shell
docker compose up --build
```

For API-only :
```shell
docker compose up --build mysql api
```


## Set Up Development Environment

---

If you want to contribute to the project and set up a development environment, follow these steps:

### Create a Docker network and build the docker containers:

```shell
docker create network web
docker compose up --build
```

## Contributing to the Project

---

If you're interested in contributing to the project, please follow these guidelines:

### Fork the repository on GitHub.

### Clone your fork locally with:

```shell 
git clone 'your_fork_url'
cd 'repository_directory'
```

### Create a new branch for your changes:

```shell 
git checkout -b 'branch_name'
```

Make your changes, commit them and push the changes to your fork:

```shell 
git add .
git commit -m "commit message"
```

Create a pull request on the original repository.

## Try the Program

---

To try the program, you can access the following URLs based on the environment:

- Local: __http://127.0.0.1:5000/__
- Staging: __http://79.137.39.19:5000/__
- Prod: __https://api.c2smr.fr/__

