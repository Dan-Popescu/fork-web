FROM node:18
WORKDIR /app
EXPOSE 3000
COPY package*.json ./
COPY . .
RUN npm install
#CMD npm start
RUN npm run build --production
RUN npm install -g serve
CMD serve -s build
