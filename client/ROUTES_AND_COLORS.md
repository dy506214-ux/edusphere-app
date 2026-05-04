# Routes and Color Schemes Reference

## 🗺️ Application Routes

### Main Routes
```
/ (root)
└── Redirects to /auth/role-selection (if not authenticated)
└── Redirects to /dashboard (if authenticated)

/auth/role-selection
└── Main landing page with all role options

/auth/login/student
/auth/login/teacher
/auth/login/parent
/auth/login/admin
/auth/login/accountant
/auth/login/transport
```

## 🎨 Role Color Schemes

### 1. Student (Blue Theme)
```css
Primary: #2563eb (blue-600)
Gradient: from-blue-500 to-blue-600
Hover: from-blue-600 to-blue-700
Background: #eff6ff (blue-50)
Border: #bfdbfe (blue-200)
Light BG: #dbeafe (blue-100)
```
**Icon:** GraduationCap
**Route:** `/auth/login/student`
**Description:** Access your learning resources and activities

### 2. Teacher (Green Theme)
```css
Primary: #16a34a (green-600)
Gradient: from-green-500 to-green-600
Hover: from-green-600 to-green-700
Background: #f0fdf4 (green-50)
Border: #bbf7d0 (green-200)
Light BG: #dcfce7 (green-100)
```
**Icon:** Users
**Route:** `/auth/login/teacher`
**Description:** Manage classes, students and academic activities

### 3. Parent (Orange Theme)
```css
Primary: #ea580c (orange-600)
Gradient: from-orange-500 to-orange-600
Hover: from-orange-600 to-orange-700
Background: #fff7ed (orange-50)
Border: #fed7aa (orange-200)
Light BG: #ffedd5 (orange-100)
```
**Icon:** UserCircle
**Route:** `/auth/login/parent`
**Description:** Track your child's performance and updates

### 4. Admin (Purple Theme)
```css
Primary: #9333ea (purple-600)
Gradient: from-purple-500 to-purple-600
Hover: from-purple-600 to-purple-700
Background: #faf5ff (purple-50)
Border: #e9d5ff (purple-200)
Light BG: #f3e8ff (purple-100)
```
**Icon:** Shield
**Route:** `/auth/login/admin`
**Description:** Manage system settings, users and configurations

### 5. Accountant (Teal Theme)
```css
Primary: #0d9488 (teal-600)
Gradient: from-teal-500 to-teal-600
Hover: from-teal-600 to-teal-700
Background: #f0fdfa (teal-50)
Border: #99f6e4 (teal-200)
Light BG: #ccfbf1 (teal-100)
```
**Icon:** Calculator
**Route:** `/auth/login/accountant`
**Description:** Manage fees, invoices and financial records

### 6. Transport Manager (Red Theme)
```css
Primary: #dc2626 (red-600)
Gradient: from-red-500 to-red-600
Hover: from-red-600 to-red-700
Background: #fef2f2 (red-50)
Border: #fecaca (red-200)
Light BG: #fee2e2 (red-100)
```
**Icon:** Bus
**Route:** `/auth/login/transport`
**Description:** Manage vehicles, routes and transportation

## 📋 Form Field Labels by Role

### Student
- Username: "Student ID / Username"
- Password: "Password"

### Teacher
- Username: "Teacher ID / Username"
- Password: "Password"

### Parent
- Username: "Mobile Number / Email"
- Password: "Password"

### Admin
- Username: "Admin ID / Username"
- Password: "Password"

### Accountant
- Username: "Accountant ID / Username"
- Password: "Password"

### Transport Manager
- Username: "Mobile Number / Username"
- Password: "Password"

## 🎯 Navigation Flow

```
User visits application
        ↓
    Not authenticated?
        ↓
/auth/role-selection
        ↓
User selects role (e.g., Student)
        ↓
/auth/login/student
        ↓
User enters credentials
        ↓
Authentication successful?
        ↓
    /dashboard
```

## 🔄 Back Navigation

All login pages have a "Back to Role Selection" button that navigates to:
```
/auth/role-selection
```

## 🎨 Common Design Elements

### Header (All Pages)
- Background: `bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900`
- Text: White
- Height: Auto (responsive padding)

### Footer (Role Selection)
- Background: `bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900`
- Text: White
- Content: "DIGITAL SCHOOL • SMARTER EDUCATION • BETTER FUTURE"

### Cards
- Background: `bg-white/80 backdrop-blur-sm`
- Shadow: `shadow-2xl`
- Border: Role-specific color with `border-2`
- Padding: `p-8`

### Buttons
- Height: `h-12`
- Font: `font-bold text-lg`
- Shadow: `shadow-lg hover:shadow-xl`
- Gradient: Role-specific colors

### Input Fields
- Height: `h-12`
- Border: `border-2 border-slate-200`
- Focus: Role-specific border color
- Transition: `transition-colors`

## 📱 Responsive Breakpoints

```css
/* Mobile First */
Default: Single column, full width

/* Tablet */
@media (min-width: 768px) {
  Grid: 2 columns for some sections
}

/* Desktop */
@media (min-width: 1024px) {
  Grid: 2 columns (left branding, right form)
  Show: Left panel with role benefits
}
```

## 🎭 Animation Timings

```typescript
// Page entrance
initial: { x: -100, opacity: 0 }
animate: { x: 0, opacity: 1 }
duration: 0.6s

// Staggered items
delay: 0.1s increments

// Hover effects
scale: 1.03
duration: 0.3s

// Button press
scale: 0.98
```

## 🔤 Typography

### Headers
- Role Selection Title: `text-3xl font-bold`
- Login Page Title: `text-3xl font-bold`
- Section Headers: `text-2xl font-bold`

### Body Text
- Description: `text-xl text-slate-600`
- Labels: `text-slate-700 font-semibold`
- Helper Text: `text-sm text-slate-600`

### Colors
- Primary Text: `text-slate-800`
- Secondary Text: `text-slate-600`
- Muted Text: `text-slate-500`

## 🎪 Feature Icons

### Role Selection Features Bar
1. Lock - "Secure Data Protection"
2. Zap - "AI-Powered Analytics & Insights"
3. BookOpen - "Integrated All Modules"
4. Clock - "Real-time Live Updates"
5. BarChart3 - "Scalable Future Ready"
6. GraduationCap - "Smart Digital Campus"

### Workflow Steps
1. Users - "Role Selection"
2. Lock - "Role-wise Login"
3. BarChart3 - "Dashboard Access"
4. BookOpen - "Module Selection"
5. CheckCircle2 - "Perform Actions"
6. TrendingUp - "Reports & Analytics"

## 🎨 Gradient Backgrounds

### Page Backgrounds
```css
Student:    bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50
Teacher:    bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50
Parent:     bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50
Admin:      bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50
Accountant: bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50
Transport:  bg-gradient-to-br from-red-50 via-rose-50 to-pink-50
```

## 🔗 Quick Reference

| Role | Color | Icon | Route |
|------|-------|------|-------|
| Student | Blue | 🎓 | /auth/login/student |
| Teacher | Green | 👥 | /auth/login/teacher |
| Parent | Orange | 👤 | /auth/login/parent |
| Admin | Purple | 🛡️ | /auth/login/admin |
| Accountant | Teal | 🧮 | /auth/login/accountant |
| Transport | Red | 🚌 | /auth/login/transport |

---

**Note:** All colors use Tailwind CSS color palette. Customize by modifying the color values in each component.
