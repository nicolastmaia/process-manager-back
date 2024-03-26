# Stage Back

## How to run:

### Docker

1. Install Docker and Docker Compose from the [link](https://www.docker.com/products/docker-desktop/).
2. Enter the docker folder.
3. In the docker folder, create a .env based on the .env.example file and fill it with your variables values.
4. In the terminal, enter the docker folder and run `docker compose up`.

### Manually

1. Install NodeJS - version 20 from the [link](https://nodejs.org/en/download).
2. `npm i`
3. `npx prisma migrate dev --name init`
4. in the docker folder, create a .env based on the .env.example file and fill it with your variables values
