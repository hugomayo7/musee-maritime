ARG VERSION

# Dev image
FROM nginx:${VERSION}-alpine as dev

# Copy nginx config
COPY ./build/nginx/default.conf /etc/nginx/conf.d/default.conf

# Create de app directory
RUN mkdir /app

# Prod image
FROM dev as prod

RUN rm /etc/nginx/conf.d/default.conf
