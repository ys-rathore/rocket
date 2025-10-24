# --- STAGE 1: Build Image ---
# Use an official Node.js image as the base for building the app
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present) to optimize caching
COPY package*.json ./

# Install dependencies (Express)
RUN npm install

# Copy the rest of the application files (server.js, public/ folder, etc.)
COPY . .

# --- STAGE 2: Production Image ---
# Use a minimal base image for the final deployed service (for security and size)
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app .

# Define the port the container will listen on
ENV PORT 10000
EXPOSE 10000

# Specify the command to run the application when the container starts
CMD ["npm", "start"]