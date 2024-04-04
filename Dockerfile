#to build start docker and then run the following commands
#docker build . -t webserver
#docker run -d -p 80:80 --name webserver webserver

FROM nginx

COPY website /usr/share/nginx/html

EXPOSE 80