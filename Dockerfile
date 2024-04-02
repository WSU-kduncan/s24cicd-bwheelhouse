#docker run -d -p 80:80 --name webserver nginx

FROM nginx

COPY website /usr/share/nginx/html

EXPOSE 80