FROM node:13-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=password

RUN mkdir -p /home/ktolga/app

COPY . /home/ktolga/app

CMD ["node", "/home/ktolga/app/index.js"]