# FROM node:12-buster as build1
FROM node:15.12.0 as build1

# Env
ARG NPM_ENV=production

WORKDIR /app

# Copy our node module specification
COPY package.json package.json

# Copy our node module specification
COPY package-lock.json package-lock.json

# RUN npm cache clean --force
RUN npm install
#< Here we turn off audits with "--no-audit"; but in production,
# we should probably take advantage of NPM audits somewhere in the
# deployment process.

# Copy all files from current directory to working dir in image
# Except the one defined in '.dockerignore'
COPY . .

ARG API_HOST
ARG NODE_ENV
RUN API_URL=$API_HOST NODE_ENV=$NODE_ENV npm run build

FROM nginx:stable-alpine

COPY --from=build1 /app/dist /usr/share/nginx/html

COPY deployment/nginx-app.conf /etc/nginx/conf.d/default.conf
