FROM node:18 AS build

WORKDIR /frontend

COPY package.json package-lock.json ./

RUN npm install
COPY . .


RUN npm run start
# FROM nginx:alpine

# COPY --from=build /frontend/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
