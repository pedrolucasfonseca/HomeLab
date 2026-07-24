FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.29-alpine AS production

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

RUN sed -i '/^pid /d' /etc/nginx/nginx.conf && \
    chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx

USER nginx

EXPOSE 80
COPY nginx.conf /etc/nginx/templates/default.conf.template

HEALTHCHECK --interval=10s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -qO- http://localhost:80 || exit 1
CMD ["nginx", "-g", "daemon off; pid /tmp/nginx.pid;"]