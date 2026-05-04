# STEP 2 — RENDER BACKEND DEPLOY

## 2.1 — Pehle GitHub Pe Code Push Karo

### GitHub Account Banao (agar nahi hai):
1. https://github.com pe jao
2. "Sign up" karo

### New Repository Banao:
1. GitHub pe login karo
2. Right top corner mein "+" → "New repository"
3. Repository name: edusphere-app
4. Public select karo
5. "Create repository" click karo

### Code Push Karo:
Apne computer mein Terminal/Command Prompt kholo aur ye commands run karo:

```bash
cd C:\Users\DELL\OneDrive\Desktop\edusphere-app-cloned

git init
git add .
git commit -m "EduSphere School Management System"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/edusphere-app.git
git push -u origin main
```

NOTE: YOUR_GITHUB_USERNAME ki jagah apna GitHub username daalo

---

## 2.2 — Render Account Banao

1. https://render.com pe jao
2. "Get Started for Free" click karo
3. "Continue with GitHub" se sign up karo

---

## 2.3 — Web Service Create Karo

1. Render dashboard mein "New +" click karo
2. "Web Service" select karo
3. "Connect a repository" mein apna edusphere-app repo select karo
4. Ye settings bharo:

   Name: edusphere-api
   Region: Singapore
   Branch: main
   Root Directory: server
   Runtime: Node
   Build Command: npm install && npx prisma generate
   Start Command: node index.js
   Plan: Free

5. "Create Web Service" click karo

---

## 2.4 — Environment Variables Add Karo

Service create hone ke baad "Environment" tab click karo.
"Add Environment Variable" se ye saari variables add karo:

| Key | Value |
|-----|-------|
| NODE_ENV | production |
| PORT | 5001 |
| JWT_SECRET | EduSphere_JWT_Secret_2024_Very_Secure_Key |
| COOKIE_SECRET | EduSphere_Cookie_Secret_2024_Key |
| DATABASE_URL | (Supabase se copy kiya hua URL) |
| DIRECT_URL | (Supabase se copy kiya hua URL) |
| ALLOWED_ORIGINS | https://edusphere-school.netlify.app |
| RATE_LIMIT_ENABLED | false |
| SCHOOL_NAME | EduSphere Academy |
| SCHOOL_ID | EDU001 |
| FEE_CURRENCY | INR |

IMPORTANT: DATABASE_URL mein apna Supabase URL daalo!

---

## 2.5 — Deploy Hone Ka Wait Karo

1. "Events" tab mein deploy progress dekho
2. 5-10 minute lagenge
3. "Deploy succeeded" dikhne pe aage badho

---

## 2.6 — Database Tables Banao (Migrations)

Deploy hone ke baad:
1. Render dashboard mein apni service pe click karo
2. "Shell" tab click karo
3. Ye commands run karo:

```bash
npx prisma migrate deploy
```

Agar migration nahi hai to:
```bash
npx prisma db push
```

Phir test users create karo:
```bash
node seed-test-users.js
```

---

## 2.7 — API URL Note Karo

Deploy hone ke baad Render aapko URL dega:
https://edusphere-api.onrender.com

Is URL ko SAVE KARO — Step 3 mein chahiye!

---

## 2.8 — Test Karo

Browser mein kholo:
https://edusphere-api.onrender.com/health

Ye dikhna chahiye:
{"status":"ok","message":"EduSphere API is running"}

---

## ✅ STEP 2 COMPLETE!

Aapke paas ab hai:
- Backend URL: https://edusphere-api.onrender.com
- Database connected
- Test users created

NEXT: STEP 3 — NETLIFY (Frontend)
