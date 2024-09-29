# Stage 1: Build the VuePress site

# Use an official Node.js image as the base for building
FROM node:16-slim as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the VuePress site (the output will be in docs/.vuepress/dist)
# RUN npm run build
RUN npm run build --verbose


# Stage 2: Serve the VuePress site using NGINX

# Use a lightweight NGINX image
FROM nginx:alpine

# Copy the built static files from the previous stage to the NGINX public directory
COPY --from=build /app/docs/.vuepress/dist /usr/share/nginx/html

# Expose port 80 to serve the site
EXPOSE 80

# Start NGINX server when the container is run
CMD ["nginx", "-g", "daemon off;"]
