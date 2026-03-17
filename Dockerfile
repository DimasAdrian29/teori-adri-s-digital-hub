# Stage 1: Build project React
FROM node:18-alpine as build
WORKDIR /app

# Copy package.json dan install dependencies
COPY package*.json ./
RUN npm install

# Copy seluruh file project dan jalankan build
COPY . .
RUN npm run build
# Catatan: Jika Anda menggunakan Vite, ubah "npm run build" menjadi script build Anda, 
# dan pastikan folder outputnya benar (biasanya 'dist' bukan 'build').

# Stage 2: Sajikan dengan Nginx
FROM nginx:alpine

# Copy hasil build dari stage 1 ke folder public Nginx
# Jika pakai Vite, ubah /app/build menjadi /app/dist
COPY --from=build /app/build /usr/share/nginx/html 

# Expose port 80
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]