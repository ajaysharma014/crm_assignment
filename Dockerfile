
---

    ### **Dockerfile**
    
    For a MERN project (`Node.js` backend, `React` frontend):
    
    ```dockerfile
    # Multi-stage build for MERN Stack Project
    
    # --- Backend Stage ---
    FROM node:18 AS backend
    
    WORKDIR /app/backend
    
    # Copy backend code
    COPY backend/package*.json ./
    RUN npm install
    COPY backend .
    
    # Expose backend port
    EXPOSE 5000
    
    # Start the backend
    CMD ["npm", "start"]
    
    # --- Frontend Stage ---
    FROM node:18 AS frontend
    
    WORKDIR /app/frontend
    
    # Copy frontend code
    COPY frontend/package*.json ./
    RUN npm install
    COPY frontend .
    
    # Build the frontend
    RUN npm run build
    
    # --- Final Stage ---
    FROM nginx:alpine
    
    WORKDIR /usr/share/nginx/html
    
    # Copy built frontend from previous stage
    COPY --from=frontend /app/frontend/build .
    
    # Expose frontend port
    EXPOSE 80
    
    # Start Nginx
    CMD ["nginx", "-g", "daemon off;"]
    