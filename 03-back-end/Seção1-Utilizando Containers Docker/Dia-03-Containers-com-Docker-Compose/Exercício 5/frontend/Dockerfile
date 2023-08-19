FROM node:18-alpine

WORKDIR /frontend

COPY package*json .

RUN npm i

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]