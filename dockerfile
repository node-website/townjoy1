FROM hub.c.163.com/nce2/nodejs:0.12.2
MAINTAINER yanyj2001@163.com
RUN npm install
CMD nohup - node app.js &
EXPOSE 80
COPY . ~/www/
WORKDIR ~/www/