FROM node:12.19-alpine
WORKDIR /usr/src/frontend
COPY . .
RUN npm i --silent
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]