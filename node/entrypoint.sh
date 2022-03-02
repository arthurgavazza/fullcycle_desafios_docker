#!/bin/sh

npm init -y && \ 
npm install --save express mysql && \ 
dockerize -wait tcp://db:3306 -timeout 20s docker-entrypoint.sh

exec "$@"