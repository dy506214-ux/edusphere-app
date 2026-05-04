# STEP 3 — NETLIFY FRONTEND DEPLOY

## 3.1 — Netlify Account Banao

1. https://netlify.com pe jao
2. "Sign up" click karo
3. "Continue with GitHub" se sign up karo

---

## 3.2 — New Site Deploy Karo

1. Netlify dashboard mein "Add new site" click karo
2. "Import an existing project" click karo
3. "Deploy with GitHub" click karo
4. GitHub authorize karo
5. "edusphere-app" repository select karo

---

## 3.3 — Build Settings Configure Karo

Ye settings EXACTLY bharo:

```
Base directory:      client
Build command:       npm run build
Publish directory:   client/.next
```

---

## 3.4 — Environment Variables Add Karo

"Advanced build settings" expand karo aur "New variable" se add karo:

| Key | Value |
|-----|-------|
| NEXT_PUBLIC_API_URL | https://edusphere-api.onrender.com/api |
| NEXT_PUBLIC_SOCKET_URL | https://edusphere-api.onrender.com |

NOTE: Render URL apna daalo (Step 2.7 mein mila tha)

---

## 3.5 — Deploy Click Karo!

"Deploy site" button click karo.
3-5 minute wait karo.

---

## 3.6 — Netlify Plugin Install Karo

Deploy hone ke baad:
1. "Plugins" tab click karo
2. "Go to plugins directory" click karo
3. "@netlify/plugin-nextjs" search karo
4. "Install" click karo
5. Site redeploy hoga automatically

---

## 3.7 — Apna URL Milega!

Deploy hone ke baad Netlify URL dega:
https://random-name-123.netlify.app

---

## 3.8 — ALLOWED_ORIGINS Update Karo (Important!)

Render pe wapas jao:
1. edusphere-api service open karo
2. Environment tab
3. ALLOWED_ORIGINS ki value update karo:
   https://random-name-123.netlify.app
4. "Save Changes" karo
5. Service automatically redeploy hogi

---

## 3.9 — Custom Name Set Karo (Optional)

1. Netlify → Site Settings → General
2. "Change site name" click karo
3. Name daalo: edusphere-school
4. URL ban jayega: https://edusphere-school.netlify.app

---

## ✅ STEP 3 COMPLETE!

Aapki site live hai:
https://edusphere-school.netlify.app

---

## 🧪 TEST KARO — SAARE PANELS

### Student Login:
URL: https://edusphere-school.netlify.app/auth/login/student
Email: eduspherestudent@gmail.com
Password: student123

### Teacher Login:
URL: https://edusphere-school.netlify.app/auth/login/teacher
Email: edusphereteacher@gmail.com
Password: teacher123

### Parent Login:
URL: https://edusphere-school.netlify.app/auth/login/parent
Email: edusphereparent@gmail.com
Password: parent123

### Admin Login:
URL: https://edusphere-school.netlify.app/auth/login/admin
Email: edusphereadmin@gmail.com
Password: admin123

### Accountant Login:
URL: https://edusphere-school.netlify.app/auth/login/accountant
Email: edusphereaccountant@gmail.com
Password: accountant123

### Transport Manager Login:
URL: https://edusphere-school.netlify.app/auth/login/transport
Email: eduspheretransportmanager@gmail.com
Password: transportmanager123

---

## 🎨 EXPECTED RESULTS:

Login karne ke baad:
- Student → Blue dashboard
- Teacher → Green dashboard
- Parent → Orange dashboard
- Admin → Purple dashboard
- Accountant → Teal dashboard
- Transport → Red dashboard

---

## 🐛 TROUBLESHOOTING:

### Build fail ho raha hai?
Check karo: Base directory = client (not root)

### Login nahi ho raha?
Mock auth kaam karega bina backend ke bhi.
Credentials page pe hi dikhenge.

### API error aa raha hai?
NEXT_PUBLIC_API_URL sahi set hai?
Render service chal rahi hai?

### CORS error?
ALLOWED_ORIGINS mein Netlify URL add kiya?

---

## 💡 PRO TIPS:

1. Render free tier pe server 15 min inactivity ke baad sleep ho jaata hai
   First request pe 30-60 sec lag sakta hai — normal hai!

2. Netlify pe har GitHub push pe auto-deploy hota hai

3. Custom domain ke liye:
   Namecheap pe .com domain = ~$10/year
   Netlify pe free SSL certificate milta hai

---

## ✅ DEPLOYMENT COMPLETE!

Congratulations! Aapka EduSphere app live hai!

Total Cost: ₹0 (FREE!)
