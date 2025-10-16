FROM node:24.5.0-alpine3.22 AS node
FROM node AS base

WORKDIR /app

RUN npm i -g pnpm@10.15.0

COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile

FROM base AS build

COPY ./src ./src
COPY ./static ./static
COPY ./svelte.config.js ./tsconfig.json ./vite.config.ts ./

ARG PRIVATE_GROUP_ID
ARG PRIVATE_THREAD_ID
ARG PRIVATE_BOT_KEY
ARG PRIVATE_CAPTCHA
ARG PUBLIC_API_URL
ARG PUBLIC_GTAG_ID
ARG PUBLIC_BASE_URL
ARG PUBLIC_CAPTCHA

ENV PUBLIC_ADAPTER="node" \
    PRIVATE_GROUP_ID=${PRIVATE_GROUP_ID} \
    PRIVATE_THREAD_ID=${PRIVATE_THREAD_ID} \
    PRIVATE_BOT_KEY=${PRIVATE_BOT_KEY} \
    PRIVATE_CAPTCHA=${PRIVATE_CAPTCHA} \
    PUBLIC_API_URL=${PUBLIC_API_URL} \
    PUBLIC_GTAG_ID=${PUBLIC_GTAG_ID} \
    PUBLIC_BASE_URL=${PUBLIC_BASE_URL} \
    PUBLIC_CAPTCHA=${PUBLIC_CAPTCHA}

RUN pnpm svelte-kit sync && pnpm build

FROM node

WORKDIR /app

COPY ./package.json /app
COPY --from=build /app/build /app/build
COPY --from=base /app/node_modules /app/node_modules

ENV PORT=80

CMD ["build"]
