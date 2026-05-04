# Component Showcase - Visual Reference

## 🎨 Visual Component Breakdown

### 1. Role Selection Page Components

#### Header Component
```
┌─────────────────────────────────────────────────────────────┐
│  🎓  SMART SCHOOL MANAGEMENT SYSTEM                         │
│      ROLE SELECTION → ROLE-WISE LOGIN                       │
└─────────────────────────────────────────────────────────────┘
```
- **Background:** Dark gradient (slate-900 → blue-900 → indigo-900)
- **Icon:** Rotating on hover
- **Text:** White with yellow accent for subtitle

#### Features Bar
```
┌─────────────────────────────────────────────────────────────┐
│  🔒 Secure Data    ⚡ AI-Powered    📚 Integrated           │
│  🕐 Real-time      📊 Scalable      🎓 Smart Campus         │
└─────────────────────────────────────────────────────────────┘
```
- **Layout:** 2x3 grid on mobile, 1x6 on desktop
- **Icons:** Blue color (#2563eb)
- **Text:** Slate-700, medium weight

#### Role Selection Card (Left Panel)
```
┌─────────────────────────────────────┐
│  1. ROLE SELECTION                  │
│  Choose Your Role                   │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ 🎓  STUDENT                   │ │
│  └───────────────────────────────┘ │
│  ┌───────────────────────────────┐ │
│  │ 👥  TEACHER                   │ │
│  └───────────────────────────────┘ │
│  ┌───────────────────────────────┐ │
│  │ 👤  PARENT                    │ │
│  └───────────────────────────────┘ │
│  ┌───────────────────────────────┐ │
│  │ 🛡️  ADMIN                     │ │
│  └───────────────────────────────┘ │
│  ┌───────────────────────────────┐ │
│  │ 🧮  ACCOUNTANT                │ │
│  └───────────────────────────────┘ │
│  ┌───────────────────────────────┐ │
│  │ 🚌  TRANSPORT MANAGER         │ │
│  └───────────────────────────────┘ │
│                                     │
│  🛡️ Secure • Smart • Reliable      │
└─────────────────────────────────────┘
```
- **Card:** White background, shadow-2xl
- **Buttons:** Role-specific colors, hover effects
- **Icons:** Gradient backgrounds

#### Login Preview Grid (Right Panel)
```
┌─────────────────────────────────────┐
│  2. ROLE-WISE LOGIN                 │
│  Login based on selected role       │
│                                     │
│  ┌──────────┐  ┌──────────┐       │
│  │ STUDENT  │  │ TEACHER  │       │
│  │ LOGIN    │  │ LOGIN    │       │
│  │          │  │          │       │
│  │ [Form]   │  │ [Form]   │       │
│  └──────────┘  └──────────┘       │
│                                     │
│  ┌──────────┐  ┌──────────┐       │
│  │ PARENT   │  │ ADMIN    │       │
│  │ LOGIN    │  │ LOGIN    │       │
│  │          │  │          │       │
│  │ [Form]   │  │ [Form]   │       │
│  └──────────┘  └──────────┘       │
│                                     │
│  ┌──────────┐  ┌──────────┐       │
│  │ACCOUNTANT│  │TRANSPORT │       │
│  │ LOGIN    │  │ LOGIN    │       │
│  │          │  │          │       │
│  │ [Form]   │  │ [Form]   │       │
│  └──────────┘  └──────────┘       │
└─────────────────────────────────────┘
```
- **Grid:** 2 columns on desktop, 1 on mobile
- **Cards:** Hover effect (lift up)
- **Forms:** Preview only (non-functional)

#### Workflow Summary
```
┌─────────────────────────────────────────────────────────────┐
│                    WORKFLOW SUMMARY                          │
│                                                              │
│  👥 → 🔒 → 📊 → 📚 → ✅ → 📈                               │
│  Role   Login  Dashboard  Modules  Actions  Reports         │
└─────────────────────────────────────────────────────────────┘
```
- **Background:** Dark gradient
- **Icons:** White with backdrop blur
- **Arrows:** White with 50% opacity

### 2. Login Page Components

#### Desktop Layout (Two-Column)
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌──────────────────┐  ┌──────────────────────────────┐   │
│  │                  │  │  ← Back to Role Selection    │   │
│  │   🎓 ICON        │  │                               │   │
│  │                  │  │  🎓  STUDENT LOGIN           │   │
│  │  Welcome Back,   │  │  Access your learning...     │   │
│  │  Student!        │  │                               │   │
│  │                  │  │  ┌─────────────────────────┐ │   │
│  │  Access your...  │  │  │ Student ID / Username   │ │   │
│  │                  │  │  │ [________________]      │ │   │
│  │  📚 Access       │  │  └─────────────────────────┘ │   │
│  │  🏆 Track        │  │                               │   │
│  │  📅 View         │  │  ┌─────────────────────────┐ │   │
│  │                  │  │  │ Password                │ │   │
│  │                  │  │  │ [________________] 👁️   │ │   │
│  │                  │  │  └─────────────────────────┘ │   │
│  │                  │  │                               │   │
│  │                  │  │  ☑️ Remember me  Forgot?     │   │
│  │                  │  │                               │   │
│  │                  │  │  ┌─────────────────────────┐ │   │
│  │                  │  │  │       LOGIN             │ │   │
│  │                  │  │  └─────────────────────────┘ │   │
│  │                  │  │                               │   │
│  │                  │  │  Need help? Contact admin    │   │
│  └──────────────────┘  └──────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

#### Mobile Layout (Single Column)
```
┌─────────────────────────────┐
│  ← Back to Role Selection   │
│                              │
│  🎓  STUDENT LOGIN          │
│  Access your learning...    │
│                              │
│  ┌────────────────────────┐ │
│  │ Student ID / Username  │ │
│  │ [__________________]   │ │
│  └────────────────────────┘ │
│                              │
│  ┌────────────────────────┐ │
│  │ Password               │ │
│  │ [__________________] 👁️│ │
│  └────────────────────────┘ │
│                              │
│  ☑️ Remember me  Forgot?    │
│                              │
│  ┌────────────────────────┐ │
│  │       LOGIN            │ │
│  └────────────────────────┘ │
│                              │
│  Need help? Contact admin   │
└─────────────────────────────┘
```

### 3. Component States

#### Button States
```
Normal:    [    LOGIN    ]  (Gradient background)
Hover:     [    LOGIN    ]  (Darker gradient, shadow-xl)
Active:    [    LOGIN    ]  (Slightly smaller scale)
Loading:   [ ⟳  Signing in... ]  (Spinner animation)
Disabled:  [    LOGIN    ]  (Opacity 50%, no interaction)
```

#### Input States
```
Normal:    [________________]  (Border: slate-200)
Focus:     [________________]  (Border: role color, ring)
Error:     [________________]  (Border: red-500)
Disabled:  [________________]  (Background: slate-100)
```

#### Card States
```
Normal:    Card with shadow-lg
Hover:     Card with shadow-2xl, lifted (-5px)
Active:    Card with shadow-md, pressed
```

### 4. Color Swatches

#### Student (Blue)
```
██████ Primary: #2563eb
██████ Light: #3b82f6
██████ Dark: #1d4ed8
██████ Background: #eff6ff
██████ Border: #bfdbfe
```

#### Teacher (Green)
```
██████ Primary: #16a34a
██████ Light: #22c55e
██████ Dark: #15803d
██████ Background: #f0fdf4
██████ Border: #bbf7d0
```

#### Parent (Orange)
```
██████ Primary: #ea580c
██████ Light: #f97316
██████ Dark: #c2410c
██████ Background: #fff7ed
██████ Border: #fed7aa
```

#### Admin (Purple)
```
██████ Primary: #9333ea
██████ Light: #a855f7
██████ Dark: #7e22ce
██████ Background: #faf5ff
██████ Border: #e9d5ff
```

#### Accountant (Teal)
```
██████ Primary: #0d9488
██████ Light: #14b8a6
██████ Dark: #0f766e
██████ Background: #f0fdfa
██████ Border: #99f6e4
```

#### Transport (Red)
```
██████ Primary: #dc2626
██████ Light: #ef4444
██████ Dark: #b91c1c
██████ Background: #fef2f2
██████ Border: #fecaca
```

### 5. Typography Scale

```
Hero Title:     text-5xl font-bold (48px)
Page Title:     text-3xl font-bold (30px)
Section Title:  text-2xl font-bold (24px)
Card Title:     text-xl font-bold (20px)
Body Large:     text-xl (20px)
Body:           text-base (16px)
Body Small:     text-sm (14px)
Caption:        text-xs (12px)
```

### 6. Spacing Scale

```
Component Padding:  p-8 (32px)
Card Padding:       p-6 (24px)
Button Padding:     px-6 py-3 (24px 12px)
Section Gap:        gap-8 (32px)
Element Gap:        gap-4 (16px)
Small Gap:          gap-2 (8px)
```

### 7. Shadow Scale

```
Small:    shadow-sm
Medium:   shadow-md
Large:    shadow-lg
XLarge:   shadow-xl
2XLarge:  shadow-2xl
```

### 8. Border Radius Scale

```
Small:    rounded-lg (8px)
Medium:   rounded-xl (12px)
Large:    rounded-2xl (16px)
XLarge:   rounded-3xl (24px)
Full:     rounded-full (9999px)
```

### 9. Animation Variants

#### Fade In
```typescript
initial: { opacity: 0 }
animate: { opacity: 1 }
transition: { duration: 0.6 }
```

#### Slide In Left
```typescript
initial: { x: -100, opacity: 0 }
animate: { x: 0, opacity: 1 }
transition: { duration: 0.6 }
```

#### Slide In Right
```typescript
initial: { x: 100, opacity: 0 }
animate: { x: 0, opacity: 1 }
transition: { duration: 0.6 }
```

#### Slide In Up
```typescript
initial: { y: 50, opacity: 0 }
animate: { y: 0, opacity: 1 }
transition: { duration: 0.6 }
```

#### Scale In
```typescript
initial: { scale: 0 }
animate: { scale: 1 }
transition: { delay: 0.3, type: 'spring' }
```

#### Hover Scale
```typescript
whileHover: { scale: 1.03 }
transition: { duration: 0.3 }
```

#### Tap Scale
```typescript
whileTap: { scale: 0.98 }
```

### 10. Icon Sizes

```
Small:    h-4 w-4 (16px)
Medium:   h-5 w-5 (20px)
Large:    h-6 w-6 (24px)
XLarge:   h-8 w-8 (32px)
2XLarge:  h-10 w-10 (40px)
Hero:     h-20 w-20 (80px)
```

### 11. Responsive Grid

#### Role Selection
```
Mobile:   1 column (full width)
Tablet:   1 column (optimized)
Desktop:  3 columns (1 + 2 split)
```

#### Login Previews
```
Mobile:   1 column
Tablet:   2 columns
Desktop:  2 columns
```

#### Features Bar
```
Mobile:   2 columns
Tablet:   3 columns
Desktop:  6 columns
```

### 12. Z-Index Layers

```
Base:       z-0
Content:    z-10
Overlay:    z-20
Modal:      z-30
Dropdown:   z-40
Tooltip:    z-50
```

### 13. Transition Timings

```
Fast:       150ms
Normal:     300ms
Slow:       600ms
Very Slow:  1000ms
```

### 14. Breakpoints

```
sm:   640px   (Mobile landscape)
md:   768px   (Tablet)
lg:   1024px  (Desktop)
xl:   1280px  (Large desktop)
2xl:  1536px  (Extra large)
```

## 🎯 Usage Examples

### Creating a New Role Card
```typescript
{
  id: 'librarian',
  name: 'LIBRARIAN',
  icon: BookOpen,
  color: 'from-indigo-500 to-indigo-600',
  hoverColor: 'hover:from-indigo-600 hover:to-indigo-700',
  description: 'Manage library resources and books',
  bgColor: 'bg-indigo-50',
  borderColor: 'border-indigo-200',
  textColor: 'text-indigo-600',
  route: '/auth/login/librarian'
}
```

### Creating a Feature Item
```typescript
{
  icon: Shield,
  text: 'Your Feature Name'
}
```

### Creating a Workflow Step
```typescript
{
  label: 'Step Name',
  icon: IconComponent
}
```

## 📐 Design Principles

1. **Consistency** - Same patterns across all pages
2. **Hierarchy** - Clear visual importance
3. **Spacing** - Generous whitespace
4. **Color** - Role-specific but harmonious
5. **Typography** - Clear and readable
6. **Animation** - Smooth and purposeful
7. **Responsive** - Works on all devices
8. **Accessible** - Usable by everyone

---

**Use this showcase as a reference when customizing or extending the authentication system.**
