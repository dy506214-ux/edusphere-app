# 🚀 NETLIFY DEPLOYMENT GUIDE - EduSphere

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   NETLIFY (Frontend)          RENDER (Backend)      │
│   ─────────────────           ───────────────       │
│   Next.js App          ──►    Node.js API           │
│   edusphere.netlify.app       edusphere-api.onrender│
│                                                     │
│                               SUPABASE (Database)   │
│                               ───────────────────   │
│                               PostgreSQL DB         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## STEP 1: Database Setup (Supabase - FREE)

### 1.1 Create Supabase Account
1. Go to: https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub

### 1.2 Create New Project
1. Click "New Project"
2. Name: `edusphere-db`
3. Password: (save this!)
4. Region: Southeast Asia (Singapore)
5. Click "Create new project"

### 1.3 Get Database URL
1. Go to: Settings → Database
2. Copy "Connection string" (URI format)
3. It looks like:
   ```
   postgresql://postgres:[PASSWORD]@db.xxxx.supabase.co:5432/postgres
   ```
4. **Save this URL** - needed for Step 2

---

## STEP 2: Backend Deploy (Render - FREE)

### 2.1 Create Render Account
1. Go to: https://render.com
2. Sign up with GitHub

### 2.2 Connect GitHub Repository
1. Push your code to GitHub first:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/edusphere.git
   git push -u origin main
   ```

### 2.3 Create Web Service on Render
1. Click "New +" → "Web Service"
2. Connect your GitHub repo
3. Settings:
   - **Name:** `edusphere-api`
   - **Root Directory:** `server`
   - **Runtime:** Node
   - **Build Command:** `npm install && npx prisma generate`
   - **Start Command:** `node index.js`
   - **Plan:** Free

### 2.4 Add Environment Variables on Render
Click "Environment" tab and add:

```
NODE_ENV=production
PORT=5001
JWT_SECRET=edusphere_super_secret_jwt_key_2024_production
COOKIE_SECRET=edusphere_cookie_secret_2024_production
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.xxxx.supabase.co:5432/postgres
DIRECT_URL=postgresql://postgres:[PASSWORD]@db.xxxx.supabase.co:5432/postgres
ALLOWED_ORIGINS=https://YOUR-SITE.netlify.app
RATE_LIMIT_ENABLED=false
SCHOOL_NAME=EduSphere Academy
SCHOOL_ID=EDU001
FEE_CURRENCY=INR
```

### 2.5 Run Database Migrations
After deploy, go to Render Shell:
```bash
npx prisma migrate deploy
node seed-test-users.js
```

### 2.6 Note Your API URL
After deploy, Render gives you URL like:
```
https://edusphere-api.onrender.com
```
**Save this URL** - needed for Step 3

---

## STEP 3: Frontend Deploy (Netlify - FREE)

### 3.1 Create Netlify Account
1. Go to: https://netlify.com
2. Sign up with GitHub

### 3.2 Deploy from GitHub
1. Click "Add new site" → "Import an existing project"
2. Connect GitHub
3. Select your repository
4. Settings:
   - **Base directory:** `client`
   - **Build command:** `npm run build`
   - **Publish directory:** `client/.next`

### 3.3 Add Environment Variables on Netlify
Go to: Site Settings → Environment Variables → Add:

```
NEXT_PUBLIC_API_URL=https://edusphere-api.onrender.com/api
NEXT_PUBLIC_SOCKET_URL=https://edusphere-api.onrender.com
```

### 3.4 Install Netlify Next.js Plugin
In Netlify dashboard:
1. Go to: Plugins
2. Search "Next.js"
3. Install "@netlify/plugin-nextjs"

### 3.5 Deploy!
Click "Deploy site" - wait 2-3 minutes

### 3.6 Your Site is Live!
URL will be: `https://random-name.netlify.app`

You can customize: Site Settings → Domain Management → Custom domain

---

## STEP 4: Test Your Deployment

### 4.1 Test Login Pages
Open your Netlify URL and test:

| Role | URL | Email | Password |
|------|-----|-------|----------|
| 🔵 Student | /auth/login/student | eduspherestudent@gmail.com | student123 |
| 🟢 Teacher | /auth/login/teacher | edusphereteacher@gmail.com | teacher123 |
| 🟠 Parent | /auth/login/parent | edusphereparent@gmail.com | parent123 |
| 🟣 Admin | /auth/login/admin | edusphereadmin@gmail.com | admin123 |
| 🔷 Accountant | /auth/login/accountant | edusphereaccountant@gmail.com | accountant123 |
| 🔴 Transport | /auth/login/transport | eduspheretransportmanager@gmail.com | transportmanager123 |

### 4.2 Verify Backend
Open: `https://edusphere-api.onrender.com/health`
Should show: `{"status":"ok"}`

---

## STEP 5: Custom Domain (Optional)

### Netlify Custom Domain:
1. Buy domain from: Namecheap, GoDaddy, etc.
2. Netlify → Site Settings → Domain Management
3. Add custom domain
4. Update DNS records

### Free Subdomain:
Netlify gives free: `your-site-name.netlify.app`

---

## 🔧 TROUBLESHOOTING

### Build Fails on Netlify:
```
Error: Cannot find module 'xxx'
```
**Fix:** Check `client/package.json` has all dependencies

### API Not Connecting:
```
Network Error / CORS Error
```
**Fix:** Update `ALLOWED_ORIGINS` on Render with your Netlify URL

### Database Connection Error:
```
Can't reach database server
```
**Fix:** Check `DATABASE_URL` in Render environment variables

### Login Not Working:
- Mock auth works without backend
- For real auth, ensure Render server is running
- Check Render logs for errors

---

## 📋 QUICK CHECKLIST

### Before Deploy:
- [ ] Code pushed to GitHub
- [ ] Supabase database created
- [ ] DATABASE_URL copied

### Render (Backend):
- [ ] Web service created
- [ ] Environment variables added
- [ ] Build successful
- [ ] API URL noted

### Netlify (Frontend):
- [ ] Site created from GitHub
- [ ] Base directory set to `client`
- [ ] Environment variables added
- [ ] NEXT_PUBLIC_API_URL set to Render URL
- [ ] Build successful
- [ ] Site live

### Testing:
- [ ] Health check passes
- [ ] Login works
- [ ] Dashboard loads
- [ ] All 6 roles work

---

## 💰 COST

Everything is **FREE**:
- ✅ Netlify: Free tier (100GB bandwidth/month)
- ✅ Render: Free tier (750 hours/month)
- ✅ Supabase: Free tier (500MB database)
- ✅ GitHub: Free

**Total Cost: ₹0 / $0**

---

## 🚀 DEPLOYMENT COMMANDS

```bash
# 1. Push to GitHub
git add .
git commit -m "Deploy EduSphere"
git push origin main

# 2. Netlify auto-deploys from GitHub
# 3. Render auto-deploys from GitHub

# That's it! 🎉
```

---

## 📞 SUPPORT

If you face any issues:
1. Check Netlify build logs
2. Check Render service logs
3. Check browser console for errors
4. Verify environment variables are set correctly

---

**🎉 Your EduSphere app will be live at: https://YOUR-SITE.netlify.app**

