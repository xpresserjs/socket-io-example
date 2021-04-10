FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY . .
RUN yarn
EXPOSE 3000
CMD ["npm",  "start"]
