# Stage 1: Build Stage
FROM node:20-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --silent --no-fund
RUN npm install -g npm@10.8.3 --no-fund

COPY . .

RUN npm run build

# Stage 2: Serve the App with Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
