ARG VERSION

# Dev image
FROM php:${VERSION}-fpm-alpine AS dev

ENV APP_ENV=dev
WORKDIR /app

## Install system dependencies
RUN apk update && \
    apk add --no-cache --virtual dev-deps git autoconf gcc g++ make && \
    apk add --no-cache bash zlib-dev libzip-dev

## Install php extensions
RUN pecl install xdebug && \
    docker-php-ext-enable xdebug && \
    docker-php-ext-install pdo_mysql zip

## Copy php default configuration
COPY ./build/php/default.ini /usr/local/etc/php/conf.d/default.ini

## Install composer
RUN wget https://getcomposer.org/installer && \
    php installer --install-dir=/usr/local/bin/ --filename=composer && \
    rm installer 
