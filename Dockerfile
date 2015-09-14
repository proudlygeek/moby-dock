FROM node:4.0.0

RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /src

ADD ./app /src/
RUN npm install

EXPOSE 8000

CMD npm start