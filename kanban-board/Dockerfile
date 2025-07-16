#source
FROM node:22-alpine
WORKDIR /kanban-board

#copy package json + lock json
COPY package*.json ./

#install dependencies
RUN npm ci

#copy source files
COPY . ./

#build the app
RUN npm run build

#configuration
EXPOSE 3000
CMD ["npm", "run", "start"]


