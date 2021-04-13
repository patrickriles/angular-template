FROM node:12.15.0
MAINTAINER      GNS HFX Curation <gngnshfxcuration@nielsen.com>

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .
RUN npm ci
RUN npm run build:prod

EXPOSE 3000
CMD [ "npm", "start" ]