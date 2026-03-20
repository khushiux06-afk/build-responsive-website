# Deployment Guide: Dental Clinic Management System

## 🚀 Frontend Deployment (Vercel)

For the best experience, deploy the `client` folder to Vercel.

1.  **Framework Preset**: Vite
2.  **Root Directory**: `client`
3.  **Build Command**: `npm run build`
4.  **Output Directory**: `dist`
5.  **Environment Variables**:
    *   `VITE_API_URL`: Set this to your deployed backend URL (e.g., `https://your-backend.onrender.com/api/v1`)

> [!NOTE]
> I have included a `vercel.json` in the client folder to handle React routing automatically.

---

## ⚙️ Backend Deployment (Render / Railway)

Since this project uses a Node.js/Prisma backend, it is best suited for platforms like **Render.com** or **Railway.app**.

1.  **Framework**: Node.js
2.  **Root Directory**: `server`
3.  **Build Command**: `npm install && npx prisma generate && npm run build`
4.  **Start Command**: `npm run start:prod`
5.  **Environment Variables**:
    *   `DATABASE_URL`: Your PostgreSQL connection string.
    *   `JWT_SECRET`: A secure random string.
    *   `PORT`: `3000`

---

## 📦 Running Locally

1.  **Extract** the ZIP file.
2.  **Client**: `cd client && npm install && npm run dev`
3.  **Server**: `cd server && npm install && npx prisma migrate dev && npm run start:dev`
