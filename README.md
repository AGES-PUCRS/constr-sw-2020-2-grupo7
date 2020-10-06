# API de alunos
> Authors: Henrique Kops, Guilherme Rizotto, Ramiro Lima & Vinicius Lima

## Local usage

**Build containers**
```sh
$ cd docker
$ docker-compose up

# how to use?
$ docker-compose help
```

**Access mongo**
```sh
$ docker exec -it <container_name> mongo -u<user> -p<password>

# how to use?
$ help
```
  
**Build app**
```sh
$ npm install
$ node src/server.js
```


## Documentation

**Check docs**

When the service is running, go to http://localhost:3000/api/docs

## Deploy
```sh
$ docker build -f docker/Dockerfile -t grupo7/api-alunos .
$ docker run -d -p 3000:3000 --name api-alunos grupo7/api-alunos

# how to use?
$ docker help
```

## Test

**Test routes**
```sh
$ curl -X GET http://localhost:3000/api/alunos
$ curl -X POST http://localhost:3000/api/alunos -H "Content-Type: application/json" -d '{"<key>": "<value>"}'

# how to use?
$ man curl
```