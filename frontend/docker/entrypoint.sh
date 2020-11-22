#!/bin/bash

nginx -p $(pwd) -c docker/nginx.conf

tail -f log/access.log 