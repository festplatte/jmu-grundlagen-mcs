FROM mhart/alpine-node:11.9

WORKDIR /usr/app
COPY . /usr/app

RUN npm ci

EXPOSE 3010

CMD npm start
