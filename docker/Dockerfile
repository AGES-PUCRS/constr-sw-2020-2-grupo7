FROM ubuntu:18.04

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update

RUN apt-get install curl gnupg -y

RUN curl -sL https://deb.nodesource.com/setup_12.x| bash -

RUN apt-get install build-essential nodejs mongodb -y

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT "./docker/entrypoint.sh"
