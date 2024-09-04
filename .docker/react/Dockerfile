FROM node:20.10.0-alpine

WORKDIR /app

RUN apk add vim

COPY ../../reactjs/package.json ./

RUN npm install

COPY ../../reactjs .

RUN npm run build

EXPOSE 3002

CMD ["npm", "run", "start"]