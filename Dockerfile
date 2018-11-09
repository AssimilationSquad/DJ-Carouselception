# Use an official Python runtime as a parent image
FROM node:10

# Make working directory
# RUN mkdir -p /src/app

# Set the working directory to /src/app
# WORKDIR /src/app

# Copy the current directory contents into the container at /app
COPY . ./

# Install any needed packages specified in package.json
RUN npm install --production

# Make port 3003 available to the world outside this container
EXPOSE 3003

# Define environment variable
ENV PORT 3000

# Run server when the container launches
CMD ["node", "server/index.js"]