FROM node

WORKDIR /usr/app

COPY package.json /usr/app/

RUN npm i

COPY . /usr/app/

EXPOSE 3000

CMD ["npm", "start"]