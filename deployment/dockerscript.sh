#! /bin/bash
docker stop webserver
docker rm webserver
docker pull bwheels00/3120-project4:latest
docker run -p 80:80 --name webserver --restart always -d bwheels00/3120-project4:latest