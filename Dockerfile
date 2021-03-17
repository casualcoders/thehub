# Dockerfile

# base image
FROM node:alpine


# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install

# Buidl the app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Launch the app
CMD [ "npm", "run", "start" ]
