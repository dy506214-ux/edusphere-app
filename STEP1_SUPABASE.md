# STEP 1 — SUPABASE DATABASE SETUP

## 1.1 — Account Banao

1. Browser mein kholo: https://supabase.com
2. "Start your project" click karo
3. "Continue with GitHub" se sign up karo
   (GitHub account nahi hai to pehle github.com pe banao)

---

## 1.2 — New Project Banao

1. Login ke baad "New Project" click karo
2. Ye details bharo:
   - Organization: (default rahne do)
   - Project name: edusphere-db
   - Database Password: EduSphere@2024 (YAD RAKHNA!)
   - Region: Southeast Asia (Singapore)
3. "Create new project" click karo
4. ⏳ 2-3 minute wait karo (project setup hoga)

---

## 1.3 — Database URL Copy Karo

1. Left sidebar mein "Settings" (gear icon) click karo
2. "Database" click karo
3. Neeche scroll karo "Connection string" section tak
4. "URI" tab select karo
5. Ye URL dikhega:
   postgresql://postgres:[YOUR-PASSWORD]@db.xxxx.supabase.co:5432/postgres
6. [YOUR-PASSWORD] ki jagah apna password daalo: EduSphere@2024
7. Poori URL copy karo — NOTEPAD MEIN SAVE KARO!

Example URL:
postgresql://postgres:EduSphere@2024@db.abcdefgh.supabase.co:5432/postgres

---

## 1.4 — Direct URL bhi Copy Karo

Same page pe "Connection pooling" section mein:
- "Transaction" mode ka URL copy karo
- Ye DIRECT_URL ke liye use hoga

---

## ✅ STEP 1 COMPLETE!

Aapke paas ab hai:
- DATABASE_URL = postgresql://postgres:EduSphere@2024@db.xxxx.supabase.co:5432/postgres
- DIRECT_URL = (same URL ya pooling URL)

NEXT: STEP 2 — RENDER (Backend)
