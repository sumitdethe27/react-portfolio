# Stage 1: Build the React app
FROM node:18.20.2-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
EXPOSE 3000

# Start Nginx when the container launches
CMD ["npm", "run", "start"]
