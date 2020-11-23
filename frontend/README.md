# Frontend de aulas
> Authors: Henrique Kops, Guilherme Rizotto, Ramiro Lima & Vinicius Lima

## Local usage

**Build container**
```sh
$ make image
$ make container
```

**Access container**
```sh
$ docker exec -it front-aulas bash
```

## Deploy
Use github actions. 

## Test

**Test routes**
```sh
$ curl -X GET http://localhost:80

# how to use?
$ man curl
```