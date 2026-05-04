# 📤 GitHub Pe Push Karo - Step by Step

## Step 1: GitHub Account

1. https://github.com pe jao
2. Sign up / Login karo
3. "New Repository" click karo
4. Name: `edusphere-app`
5. Public select karo
6. "Create repository" click karo

---

## Step 2: Terminal mein ye commands run karo

```bash
# Project folder mein jao
cd C:\Users\DELL\OneDrive\Desktop\edusphere-app-cloned

# Git initialize karo
git init

# Saari files add karo
git add .

# First commit karo
git commit -m "EduSphere School Management System - Complete"

# GitHub repo se connect karo (apna username daalo)
git remote add origin https://github.com/YOUR_USERNAME/edusphere-app.git

# Push karo
git branch -M main
git push -u origin main
```

---

## Step 3: Netlify pe deploy karo

1. https://netlify.com pe jao
2. "Add new site" → "Import an existing project"
3. GitHub select karo
4. `edusphere-app` repo select karo
5. Settings:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `client/.next`
6. Environment Variables add karo:
   ```
   NEXT_PUBLIC_API_URL=https://edusphere-api.onrender.com/api
   ```
7. "Deploy site" click karo

---

## ✅ Done!

Aapki site live hogi: `https://YOUR-SITE.netlify.app`

---

## 📝 Important Notes

- `server/.env` file GitHub pe nahi jayegi (gitignore mein hai)
- Netlify pe environment variables manually add karne honge
- Backend ke liye Render.com use karo (DEPLOY_TO_NETLIFY.md dekho)

