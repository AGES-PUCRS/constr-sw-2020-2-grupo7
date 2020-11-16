# API de alunos
> Authors: Henrique Kops, Guilherme Rizotto, Ramiro Lima & Vinicius Lima

## Local usage

**Build container**
```sh
$ make image
$ make container
```

**Access container**
```sh
$ docker exec -it api-alunos bash
```

## Documentation

**Check docs**

When the service is running, go to http://localhost:3000/api/docs or [check production](http://ec2-3-236-239-112.compute-1.amazonaws.com:3000/api/docs/#/alunos).

## Deploy
Use github actions. 

## Test

**Test routes**
```sh
$ curl -X GET http://localhost:3000/api/alunos
$ curl -X POST http://localhost:3000/api/alunos -H "Content-Type: application/json" -d '{"<key>": "<value>"}'
$ curl -X PATCH ...

# how to use?
$ man curl
```
