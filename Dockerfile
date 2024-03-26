FROM node:20-alpine

WORKDIR /usr/src/

COPY ./ ./stage/back/

ARG DATABASE_URL=postgres
ENV DATABASE_URL={DATABASE_URL}

EXPOSE 8000

WORKDIR /usr/src/stage/back/

RUN npm i

RUN npx prisma generate

CMD npx prisma migrate dev --name init && npx prisma migrate deploy --schema=./prisma/schema.prisma && npm start
