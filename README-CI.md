# Project Overview

- what is the point of this project and what tools are used
  - To containerize applications using docker
  - Implement continuous implementation by automating the project pipline with GitHub actions
- Part 4 - Diagramming

# Run Project Locally

- how you installed docker + dependencies (WSL2, for example)
  - I'm using a Macbook so I installed directly from the docker site.
- how to build the container
- how to run the container
  - Create the image using the provided dockerfile and ran the command `docker build . -t webserver` to build the webserver image
  - Then created the webserver container using the command `docker run -d -p 80:80 --name webserver webserver`
- how to view the project running in the container (open a browser...go to ip and port...)
  - Open a broweser and go to `127.0.0.1:80` which takes you to the site that is copied in the docker file(my personal animations site that I made awhile back).

# DockerHub

- Process to create public repo in DockerHub
  - Create an account
  - I already had one so I just signed in.
  - Select create a repository and create it by selecting the namespace(your username), repo name, and a description.
- How to authenticate with DockerHub via CLI using Dockerhub credentials
  - `docker login -u USERNAME`
  - It will then prompt you for your password
  - what credentials would you recommend providing?
    - Your docker credentials
- How to push container to Dockerhub
  - `docker tag webserver:latest bwheels00/3120-project4:3120-project4`
  - `docker image ls`
  - `docker push bwheels00/3120-project4:3120-project4`
  - The first command tagged the webserver:latest image with 3120-project4
  - The next one verified that the image tag was correct
  - Finally the third command pushed the image to dockerhub
- **Link** to your DockerHub repository
  - [DockerHub](https://hub.docker.com/r/bwheels00/3120-project4)

# GitHub Actions

- Configuring GitHub Secrets
  - How to set a secret
    - go to the settings tab of the github repo.
    - Under Security and then Secrets and Variables, select actions and then new repo secret.
  - What secret(s) are set for this project
    - DOCKER_USERNAME and DOCKER_PASSWORD
- Behavior of GitHub workflow
  - what does it do and when
    - when the branch commits the workflow runs.
    - runs available yml files in the .github/workflows folder
  - what variables in workflow are custom to your project
    - the only thing unique to my workflow is the tags used for the docker repo and image
