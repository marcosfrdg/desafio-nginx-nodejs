FROM node:18

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

RUN npm install

# Adicione o pacote wget diretamente ao comando RUN do Node.js
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
    && rm dockerize-linux-amd64-v0.6.1.tar.gz
