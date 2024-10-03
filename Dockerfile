# Stage 1: Build Stage
FROM node:20-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --silent --no-fund
RUN npm install -g npm@10.8.3 --no-fund

COPY . .

# Build the app in production mode
RUN npm run build

# Stage 2: Use npm to Serve the App in Production Mode
FROM node:20-slim

WORKDIR /app

COPY --from=build /app/build /app

# Install 'serve' to serve the static files in production
RUN npm install -g serve

EXPOSE 8080

# Serve the app using the 'serve' package
CMD ["serve", "-s", "/app", "-l", "8080"]
