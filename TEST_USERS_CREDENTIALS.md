# 🔐 TEST USER CREDENTIALS

## All Test Users for EduSphere Application

Use these credentials to login and test different role dashboards:

---

### 1. 🔵 STUDENT
- **Email:** `eduspherestudent@gmail.com`
- **Password:** `student123`
- **Role:** STUDENT
- **Dashboard:** Blue theme with academic features
- **Login URL:** http://localhost:3001/auth/login/student

---

### 2. 🟢 TEACHER
- **Email:** `edusphereteacher@gmail.com`
- **Password:** `teacher123`
- **Role:** TEACHER
- **Dashboard:** Green theme with classroom management
- **Login URL:** http://localhost:3001/auth/login/teacher

---

### 3. 🟠 PARENT
- **Email:** `edusphereparent@gmail.com`
- **Password:** `parent123`
- **Role:** PARENT
- **Dashboard:** Orange theme with child monitoring
- **Login URL:** http://localhost:3001/auth/login/parent

---

### 4. 🟣 ADMIN
- **Email:** `edusphereadmin@gmail.com`
- **Password:** `admin123`
- **Role:** ADMIN
- **Dashboard:** Purple theme with system management
- **Login URL:** http://localhost:3001/auth/login/admin

---

### 5. 🔷 ACCOUNTANT
- **Email:** `edusphereaccountant@gmail.com`
- **Password:** `accountant123`
- **Role:** ACCOUNTANT
- **Dashboard:** Teal theme with fee management
- **Login URL:** http://localhost:3001/auth/login/accountant

---

### 6. 🔴 TRANSPORT MANAGER
- **Email:** `eduspheretransportmanager@gmail.com`
- **Password:** `transportmanager123`
- **Role:** TRANSPORT_MANAGER
- **Dashboard:** Red theme with vehicle management
- **Login URL:** http://localhost:3001/auth/login/transport

---

## Quick Copy-Paste Format

```
Student:
Email: eduspherestudent@gmail.com
Password: student123

Teacher:
Email: edusphereteacher@gmail.com
Password: teacher123

Parent:
Email: edusphereparent@gmail.com
Password: parent123

Admin:
Email: edusphereadmin@gmail.com
Password: admin123

Accountant:
Email: edusphereaccountant@gmail.com
Password: accountant123

Transport Manager:
Email: eduspheretransportmanager@gmail.com
Password: transportmanager123
```

---

## Database Setup Required

⚠️ **IMPORTANT:** These users need to be created in the database first!

### Option 1: Using Seed Script (Recommended)
```bash
cd server
node seed-test-users.js
```

### Option 2: Manual Database Insert
Run the SQL script in `server/create-test-users.sql`

### Option 3: Using API (Requires Admin Access)
Use the registration endpoint with admin authentication

---

## Testing Dashboard Panels

After creating users in database:

1. **Start both servers:**
   - Client: http://localhost:3001
   - Server: http://localhost:5001

2. **Login with any test user**

3. **Verify dashboard features:**
   - Check color theme matches role
   - Test all tabs
   - Verify feature cards
   - Check animations
   - Test responsive design

---

## Dashboard Color Themes

| Role | Color | Hex Code | Gradient |
|------|-------|----------|----------|
| Student | Blue | #2563eb | blue-600 → indigo-600 |
| Teacher | Green | #16a34a | green-600 → emerald-600 |
| Parent | Orange | #ea580c | orange-600 → amber-600 |
| Admin | Purple | #9333ea | purple-600 → violet-600 |
| Accountant | Teal | #0d9488 | teal-600 → cyan-600 |
| Transport | Red | #dc2626 | red-600 → rose-600 |

---

## Troubleshooting

### "Invalid credentials" error
- Users not created in database yet
- Run seed script or create users manually

### "Connection refused" error
- Backend server not running
- Start server: `cd server && npm run dev`

### "Database connection error"
- PostgreSQL not running
- Check DATABASE_URL in server/.env
- Start PostgreSQL service

---

**Created:** Current Session
**Purpose:** Testing all 6 role-based dashboard panels
**Status:** Ready to use (after database setup)

