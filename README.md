# NPC front end

## Installation

```bash
$ git clone --recursive https://github.com/BLCKtech/npcFrontend.git
$ git submodule foreach npm install
$ [sudo] make install
```

## Development

```bash
$ npm start
```

## Tests

Run client and server tests

```bash
$ npm test
```

If you want to run the tests sepparately use:

```bash
$ gulp test-client
$ gulp test-server
```

## Coverage

Code coverage report is generated:

for client code in `coverage/client/`

for server code in `coverage/server/`

## Production

```bash
$ make build
```

Generates a `dist` diretory with all the files ready to serve.

Run in production mode.

```bash
$ make run
```

## API

The api is on it's own repository https://github.com/dciccale/angular-docker-boilerplate and is linked to
this container.

## Docker

Install [Docker](https://docs.docker.com/installation/#installation) and [Compose](https://docs.docker.com/compose/install/#install-compose)

Start docker and run:

```bash
$ docker-compose up
```

See [docker-compose.yml](docker-compose.yml) and [Dockerfile](Dockerfile)

Will install all dependencies, build the app for production and start the server.

Image at DockerHub [dciccale/angular-docker-boilerplate](https://registry.hub.docker.com/u/dciccale/angular-docker-boilerplate/)

## Continuous Integration

With [CircleCI](https://circleci.com/), see [circle.yml](circle.yml)

Build url: https://circleci.com/gh/dciccale/angular-docker-boilerplate

## Continuous Delivery

With [Tutum](https://www.tutum.co/), see [tutum.yml](tutum.yml)

[![Deploy to Tutum](https://s.tutum.co/deploy-to-tutum.png)](https://dashboard.tutum.co/stack/deploy/)

## Next

- For now it only provides a production ready docker image, I want to provide a development enviroment also.
