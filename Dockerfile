FROM node:16.15.1-alpine3.14

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app
