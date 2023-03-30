FROM node:13-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=password

RUN mkdir -p /home/ktolga/app/public

COPY . /home/ktolga/app/public

CMD ["node", "/home/ktolga/app/index.js"]

