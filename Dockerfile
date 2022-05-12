FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm ci --only=production

RUN npm install -g typescript 

RUN tsc -p .

EXPOSE 8080

CMD ["node", "dist/app.js"]