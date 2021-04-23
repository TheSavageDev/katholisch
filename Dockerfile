FROM node:alpine
RUN mkdir -p /usr/src/katholisch-api && chown -R node:node /usr/src/katholisch-api
WORKDIR /usr/src/katholisch-api
COPY package.json yarn.lock ./
USER node
RUN yarn install --pure-lockfile
COPY --chown=node:node . .
EXPOSE 5000
