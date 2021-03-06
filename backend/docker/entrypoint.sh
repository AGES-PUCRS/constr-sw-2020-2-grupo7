#!/bin/bash

su -c 'mkdir /data'\
'&& mkdir /data/db'\
'&& chmod 0755 /data/db'\
'&& chown -R $USER /data/db'\
'&& chmod -R go+w /data/db'

mongod --fork --logpath /var/log/mongod.log

mongo admin --eval 'db.createUser({user: "admin", pwd: "password", roles: [ "root" ]});'

node src/server.js > /var/log/api-alunos.log