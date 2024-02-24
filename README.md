# mit10s-github-app

> A GitHub App built with [Probot](https://github.com/probot/probot)

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t temp-probot-app .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> temp-probot-app
```
