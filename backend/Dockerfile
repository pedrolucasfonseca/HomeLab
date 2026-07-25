FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM alpine:3.19 AS production
WORKDIR /app
ENV NODE_ENV=production

RUN apk add --no-cache nodejs=20.15.1-r0

COPY --from=builder /app/node_modules ./node_modules
COPY src/ ./src/
COPY package*.json ./

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3001

HEALTHCHECK --interval=10s --timeout=5s --start-period=10s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3001/health', r => process.exit(r.statusCode === 200 ? 0 : 1))"
CMD ["node", "src/index.js"]