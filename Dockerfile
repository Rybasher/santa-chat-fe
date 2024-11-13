FROM node:21.1.0-alpine

WORKDIR /app

COPY package.json *.lock ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

EXPOSE $PORT

CMD ["npm","run", "start"]