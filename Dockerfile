# syntax=docker/dockerfile:1.4
# Stage 1: Base image with build dependencies
FROM node:18-alpine AS base

# Stage 2: Install dependencies
FROM base AS deps

# Create the /app directory and set it as the working directory
WORKDIR /app

# Install make and libc6-compat only when needed for building
RUN apk add --no-cache libc6-compat make

# Copy package.json, package-lock.json, and other configuration files for installing dependencies
COPY package.json yarn.lock Makefile .npmrc ./

# Install project dependencies based on the preferred package manager (npm or yarn)
RUN make get-deps

# Stage 3: Build the Next.js application
FROM base AS builder
WORKDIR /app

# Copy only the dependencies from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application source code
COPY . .

# Next.js collects anonymous telemetry data about general usage.
ENV NEXT_TELEMETRY_DISABLED 1

RUN apk add --no-cache make

# Set the NODE_ENV environment variable to production
ENV NODE_ENV production
# Build the Next.js application
RUN make build

# Stage 4: Production image
FROM base AS runner

WORKDIR /app
# Set the NODE_ENV environment variable to production
ENV NODE_ENV production

# Next.js collects anonymous telemetry data about general usage.
ENV NEXT_TELEMETRY_DISABLED 1

# Copy the built public directory containing static assets
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Set the user context to the non-root user for better security
USER node

# Expose port 3000 for accessing the Next.js application
EXPOSE 3000

# Set default environment variables for the application
ENV PORT 3000
ENV HOSTNAME 0.0.0.0

# Start the Next.js server using 'server.js' script
CMD ["node", "server.js"]