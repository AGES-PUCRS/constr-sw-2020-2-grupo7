FROM ubuntu:18.04

WORKDIR /usr/src/app

RUN apt-get update

RUN apt-get install curl gnupg -y

RUN curl -sL https://deb.nodesource.com/setup_12.x| bash -

RUN apt-get install build-essential nodejs nginx -y

COPY . .

RUN npm install -g @angular/cli

RUN npm install

RUN ng build --prod

RUN mkdir log

RUN touch log/access.log

RUN touch log/error.log

EXPOSE 80

RUN "ls"

ENTRYPOINT ["docker/entrypoint.sh"]