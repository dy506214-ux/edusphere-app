
╔══════════════════════════════════════════════════════════════════╗
║          EDUSPHERE — COMPLETE DEPLOYMENT GUIDE                  ║
║          Netlify + Render + Supabase (ALL FREE)                 ║
╚══════════════════════════════════════════════════════════════════╝

ARCHITECTURE:
─────────────
  Browser
    │
    ▼
┌─────────────────────┐
│  NETLIFY (Frontend) │  ← Next.js App
│  edusphere.netlify  │  ← Login Pages + Dashboards
│  .app               │  ← FREE
└──────────┬──────────┘
           │ API Calls
           ▼
┌─────────────────────┐
│  RENDER (Backend)   │  ← Node.js + Express
│  edusphere-api      │  ← Authentication + Data
│  .onrender.com      │  ← FREE (750 hrs/month)
└──────────┬──────────┘
           │ Database
           ▼
┌─────────────────────┐
│  SUPABASE (Database)│  ← PostgreSQL
│  supabase.com       │  ← All school data
│                     │  ← FREE (500MB)
└─────────────────────┘

══════════════════════════════════════════════════════════════════

STEP 1: SUPABASE (5 minutes)
════════════════════════════

  1. https://supabase.com → Sign up with GitHub
  2. "New Project" → Name: edusphere-db
  3. Password: EduSphere@2024 (save karo!)
  4. Region: Singapore → Create
  5. Settings → Database → Connection string → URI copy karo

  Result: DATABASE_URL milega
  Example: postgresql://postgres:EduSphere@2024@db.xxx.supabase.co:5432/postgres

══════════════════════════════════════════════════════════════════

STEP 2: GITHUB (5 minutes)
═══════════════════════════

  1. https://github.com → Sign up
  2. New Repository → edusphere-app → Public → Create
  3. Terminal mein:

     cd C:\Users\DELL\OneDrive\Desktop\edusphere-app-cloned
     git init
     git add .
     git commit -m "EduSphere Complete App"
     git branch -M main
     git remote add origin https://github.com/USERNAME/edusphere-app.git
     git push -u origin main

  Result: Code GitHub pe upload ho jayega

══════════════════════════════════════════════════════════════════

STEP 3: RENDER BACKEND (10 minutes)
═════════════════════════════════════

  1. https://render.com → Sign up with GitHub
  2. New + → Web Service → edusphere-app repo select
  3. Settings:
     ┌─────────────────────────────────────────┐
     │ Name:          edusphere-api            │
     │ Root Dir:      server                   │
     │ Build Command: npm install &&           │
     │                npx prisma generate      │
     │ Start Command: node index.js            │
     │ Plan:          Free                     │
     └─────────────────────────────────────────┘

  4. Environment Variables add karo:
     ┌──────────────────┬──────────────────────────────────────────┐
     │ NODE_ENV         │ production                               │
     │ PORT             │ 5001                                     │
     │ JWT_SECRET       │ EduSphere_JWT_2024_SuperSecure           │
     │ COOKIE_SECRET    │ EduSphere_Cookie_2024_Key                │
     │ DATABASE_URL     │ (Supabase URL from Step 1)               │
     │ DIRECT_URL       │ (Same Supabase URL)                      │
     │ ALLOWED_ORIGINS  │ https://edusphere-school.netlify.app     │
     │ RATE_LIMIT_ENABLED│ false                                   │
     │ SCHOOL_NAME      │ EduSphere Academy                        │
     └──────────────────┴──────────────────────────────────────────┘

  5. "Create Web Service" → Wait 5-10 min

  6. Shell tab mein run karo:
     npx prisma db push
     node seed-test-users.js

  7. Test: https://edusphere-api.onrender.com/health
     Should show: {"status":"ok"}

  Result: Backend URL = https://edusphere-api.onrender.com

══════════════════════════════════════════════════════════════════

STEP 4: NETLIFY FRONTEND (5 minutes)
══════════════════════════════════════

  1. https://netlify.com → Sign up with GitHub
  2. "Add new site" → "Import an existing project"
  3. GitHub → edusphere-app repo select
  4. Build Settings:
     ┌─────────────────────────────────────────┐
     │ Base directory:   client                │
     │ Build command:    npm run build         │
     │ Publish dir:      client/.next          │
     └─────────────────────────────────────────┘

  5. Environment Variables:
     ┌──────────────────────────┬──────────────────────────────────┐
     │ NEXT_PUBLIC_API_URL      │ https://edusphere-api.onrender   │
     │                          │ .com/api                         │
     │ NEXT_PUBLIC_SOCKET_URL   │ https://edusphere-api.onrender   │
     │                          │ .com                             │
     └──────────────────────────┴──────────────────────────────────┘

  6. "Deploy site" → Wait 3-5 min

  7. Site Settings → Change name → edusphere-school

  Result: https://edusphere-school.netlify.app ← LIVE!

══════════════════════════════════════════════════════════════════

STEP 5: TEST KARO (2 minutes)
═══════════════════════════════

  Open browser aur test karo:

  ┌──────────────┬────────────────────────────────────┬──────────────────────────────────────┬──────────────────┐
  │ Role         │ URL                                │ Email                                │ Password         │
  ├──────────────┼────────────────────────────────────┼──────────────────────────────────────┼──────────────────┤
  │ 🔵 Student   │ /auth/login/student                │ eduspherestudent@gmail.com           │ student123       │
  │ 🟢 Teacher   │ /auth/login/teacher                │ edusphereteacher@gmail.com           │ teacher123       │
  │ 🟠 Parent    │ /auth/login/parent                 │ edusphereparent@gmail.com            │ parent123        │
  │ 🟣 Admin     │ /auth/login/admin                  │ edusphereadmin@gmail.com             │ admin123         │
  │ 🔷 Accountant│ /auth/login/accountant             │ edusphereaccountant@gmail.com        │ accountant123    │
  │ 🔴 Transport │ /auth/login/transport              │ eduspheretransportmanager@gmail.com  │ transportmanager │
  │              │                                    │                                      │ 123              │
  └──────────────┴────────────────────────────────────┴──────────────────────────────────────┴──────────────────┘

══════════════════════════════════════════════════════════════════

TROUBLESHOOTING
═══════════════

  ❌ Build fail on Netlify?
  ✅ Fix: Base directory = client (not root folder)

  ❌ API not connecting?
  ✅ Fix: NEXT_PUBLIC_API_URL sahi set karo

  ❌ CORS error?
  ✅ Fix: Render pe ALLOWED_ORIGINS = Netlify URL

  ❌ Database error?
  ✅ Fix: DATABASE_URL mein Supabase URL sahi hai?

  ❌ Render server slow (first request)?
  ✅ Normal hai! Free tier pe 30-60 sec cold start hota hai

══════════════════════════════════════════════════════════════════

COST BREAKDOWN
══════════════

  Platform    │ Free Tier Limits          │ Cost
  ────────────┼───────────────────────────┼──────
  Netlify     │ 100GB bandwidth/month     │ ₹0
  Render      │ 750 hours/month           │ ₹0
  Supabase    │ 500MB database            │ ₹0
  GitHub      │ Unlimited public repos    │ ₹0
  ────────────┼───────────────────────────┼──────
  TOTAL       │                           │ ₹0

══════════════════════════════════════════════════════════════════

DETAILED GUIDES
═══════════════

  📄 STEP1_SUPABASE.md  → Supabase setup detail
  📄 STEP2_RENDER.md    → Render setup detail
  📄 STEP3_NETLIFY.md   → Netlify setup detail

══════════════════════════════════════════════════════════════════

  🎉 DEPLOYMENT COMPLETE!
  Your EduSphere app: https://edusphere-school.netlify.app

══════════════════════════════════════════════════════════════════
