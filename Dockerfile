FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 5000
CMD ["/bin/sh", "-c", "sed -i 's/listen  .*/listen 5000;/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]

