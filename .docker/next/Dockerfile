FROM node:20.17.0-alpine

WORKDIR /app

RUN apk add vim

COPY ../../nextjs/package.json ./

RUN npm install

COPY ../../nextjs .

RUN npm run build

EXPOSE 3007

CMD ["npm", "run", "dev"]