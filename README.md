# Simple social application with realtime functionality and online presence using Pusher and Ionic

![Application Demo](./demo/demo.gif)

[Link to Tutorial](https://pusher.com/tutorials/social-online-presence-ionic)

## Prerequisite
- [Ionic](https://ionicframework.com) installed on your machine, you can read up on how to do that here [] add link
- [NodeJS](https://nodejs.org) installed on your machine
- [Yarn](https://yarnpkg.com) Installed on your machine

## Getting Started
- Install the necessary node modules

```bash
yarn install
```

- [Obtain Pusher Crendtials](https://pusher.com)

- Enter Pusher Credentials in `src/providers/pusher-service/pusher-service.ts` and `server/server.js`

## Setting Up the Backend
- Change Directory and install node modules

```bash
cd server
yarn install
```

- Start Backend Server

```bash
node server,js
```

## Update Ionic Application
- Enter Backend Server URLs in `src/providers/pusher-service/pusher-service.ts` and `server/server.js`


## Start Ionic Application
- Run the command
```bash
ionic serve
```

## Built with
- [Pusher](https://pusher.com) - APIs to allow you add realtime functionality and online presence features to your applications
- [Ionic](https://ionicframework.com) - Ionic lets web developers build, test, and deploy cross-platform hybrid mobile apps easier than ever.
