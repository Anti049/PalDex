# Use this image as the platform to build the frontend
FROM node:18-alpine

# Set version label
ARG BUILD_DATE
ARG version
ARG PALDEX_VERSION
LABEL build_version="Paldex (frontend) version:- ${PALDEX_VERSION} Build-date:- ${BUILD_DATE} Version:- ${version}"
LABEL maintainer="nploetz049"

# Hardcode UTC as the timezone in case the user doesn't set it
ENV TZ="Etc/UTC"

# Set the working directory
WORKDIR /config/frontend

# Copy the package.json and package-lock.json files into the image
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy all local files into the image
COPY . .

# Build the frontend
RUN npm run build

# Remove unnecessary files
RUN rm -rf src/ static/ docker-compose.yml

# Expose the port
EXPOSE 5656

# Set the user to run the frontend
USER node:node

# Start the frontend
CMD ["node", "build/index.js"]