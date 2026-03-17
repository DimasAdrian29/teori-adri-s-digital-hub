# Stage 1: Build project React (Gunakan Node versi 22)
FROM node:22-alpine as build
WORKDIR /app

# Copy package.json dan install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy seluruh file project dan jalankan build
COPY . .
RUN npm run build

# Stage 2: Sajikan dengan Nginx
FROM nginx:alpine

# PASTIKAN mengambil dari /app/dist (karena Anda pakai Vite)
COPY --from=build /app/dist /usr/share/nginx/html 

# Expose port 80
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]