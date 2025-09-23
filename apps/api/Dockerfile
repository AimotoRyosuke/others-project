# Base image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Enable corepack to use yarn
RUN corepack enable

# Copy the root package.json and yarn files
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Copy workspace package.json files
COPY apps/api/package.json ./apps/api/package.json
COPY packages/*/package.json ./packages/*/

# Install dependencies
RUN yarn install --immutable

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Enable corepack to use yarn
RUN corepack enable

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/.yarn ./.yarn

# Copy all source files
COPY . .

# Build the API
RUN yarn workspace @others/api build

# Production image, copy all the files and run the app
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs

# Enable corepack to use yarn
RUN corepack enable

# Copy package files and install production dependencies
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
COPY apps/api/package.json ./apps/api/package.json
COPY packages/*/package.json ./packages/*/

# Install only production dependencies
RUN yarn install --immutable --production

# Copy built application
COPY --from=builder --chown=nestjs:nodejs /app/apps/api/dist ./apps/api/dist
COPY --from=builder --chown=nestjs:nodejs /app/packages ./packages

USER nestjs

EXPOSE 4000

ENV PORT 4000

CMD ["node", "apps/api/dist/main"]