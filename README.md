# API de alunos
> Authors: Henrique Kops, Guilherme Rizotto, Ramiro Lima & Vinicius Lima

## Local usage

**Build containers**
```sh
$ cd docker
$ docker-compose up
```

**Access mongo**
```sh
$ docker exec -it <container_name> mongo -u<user> -p<password>
$ help
```
  
**Build app**
```sh
$ npm install
$ node src/server.js
```

**Check docs**
When the service is running, go to http://localhost:3000/api/docs

**Test routes**
```sh
$ curl -X GET http://localhost:3000/api/alunos
$ curl -X POST http://localhost:3000/api/alunos -H "Content-Type: application/json" -d '{"<key>": "<value>"}'
$ man curl
```
