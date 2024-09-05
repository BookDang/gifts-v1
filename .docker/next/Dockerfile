FROM node:20.10.0-alpine

WORKDIR /app

RUN apk add vim

COPY ../../nextjs/package.json ./

RUN npm install

COPY ../../nextjs .

RUN npm run build

EXPOSE 3002

CMD ["npm", "run", "dev"]