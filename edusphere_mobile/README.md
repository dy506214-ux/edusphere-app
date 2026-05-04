# 📱 EduSphere Mobile App

## 🎯 Overview

Complete Flutter mobile application for **Students** and **Teachers** with advanced UI/UX design.

### Features:
- ✅ Student Dashboard with all academic features
- ✅ Teacher Dashboard with class management
- ✅ Beautiful animations and transitions
- ✅ Dark mode support
- ✅ Offline-first architecture
- ✅ Biometric authentication
- ✅ Advanced UI/UX with glassmorphism

---

## 🚀 Quick Start

### Prerequisites:
- Flutter SDK 3.0+
- Dart 3.0+
- Android Studio / VS Code
- Android SDK / Xcode

### Installation:

```bash
# 1. Navigate to project
cd edusphere_mobile

# 2. Get dependencies
flutter pub get

# 3. Run the app
flutter run
```

---

## 📱 App Structure

```
lib/
├── main.dart                 # App entry point
├── config/
│   ├── theme.dart           # App theme configuration
│   ├── routes.dart          # Navigation routes
│   └── constants.dart       # App constants
├── models/
│   ├── user.dart            # User model
│   ├── student.dart         # Student model
│   └── teacher.dart         # Teacher model
├── services/
│   ├── auth_service.dart    # Authentication service
│   ├── api_service.dart     # API calls
│   └── storage_service.dart # Local storage
├── providers/
│   ├── auth_provider.dart   # Auth state management
│   └── theme_provider.dart  # Theme state management
├── screens/
│   ├── splash/              # Splash screen
│   ├── auth/                # Login screens
│   ├── student/             # Student panel
│   └── teacher/             # Teacher panel
├── widgets/
│   ├── common/              # Shared widgets
│   ├── student/             # Student widgets
│   └── teacher/             # Teacher widgets
└── utils/
    ├── helpers.dart         # Helper functions
    ├── validators.dart      # Form validators
    └── date_formatter.dart  # Date utilities
```

---

## 🎨 Design System

### Colors:

**Student Theme (Blue):**
- Primary: `#2563eb`
- Secondary: `#4f46e5`
- Gradient: `LinearGradient(#2563eb → #4f46e5)`

**Teacher Theme (Green):**
- Primary: `#16a34a`
- Secondary: `#059669`
- Gradient: `LinearGradient(#16a34a → #059669)`

### Typography:
- Font Family: Poppins
- Heading: Bold (700)
- Subheading: SemiBold (600)
- Body: Medium (500)
- Caption: Regular (400)

---

## 📱 Student Panel Features

### 1. Dashboard
- Welcome card with student info
- KPI cards (Attendance, Grades, Assignments)
- Quick actions
- Recent activities
- Upcoming events

### 2. Academic
- Class timetable
- Subject performance
- Study materials
- Online classes
- Academic calendar

### 3. Assignments
- Pending assignments
- Submitted work
- Upload files
- Submission history
- Due date reminders

### 4. Attendance
- Monthly view
- Calendar markers
- Attendance percentage
- Leave application
- Reports

### 5. Exams & Results
- Exam schedule
- Admit cards
- Results
- Grade cards
- Performance analytics

### 6. Profile
- Personal info
- Edit profile
- Change password
- Settings
- Logout

---

## 👨‍🏫 Teacher Panel Features

### 1. Dashboard
- Welcome card
- KPI cards (Classes, Students, Tasks)
- Quick actions
- Today's schedule
- Recent activities

### 2. My Classes
- Class list
- Student count
- Timetable
- Performance overview
- Class details

### 3. Attendance
- Mark attendance (swipe interface)
- Attendance reports
- Defaulter list
- Monthly summary
- Export data

### 4. Assignments
- Create assignment
- View submissions
- Grade work
- Assignment list
- Analytics

### 5. Grading
- Marks entry
- Grade book
- Student performance
- Subject analysis
- Export grades

### 6. Profile
- Personal info
- Teaching schedule
- Subjects
- Settings
- Logout

---

## 🔧 Technical Details

### State Management:
- **Provider** for app-wide state
- **ChangeNotifier** for reactive updates
- **Consumer** widgets for UI updates

### Navigation:
- **GoRouter** for declarative routing
- **Named routes** for easy navigation
- **Deep linking** support

### API Integration:
- **Dio** for HTTP requests
- **Interceptors** for auth tokens
- **Error handling** with try-catch
- **Retry logic** for failed requests

### Local Storage:
- **SharedPreferences** for simple data
- **Hive** for complex objects
- **Secure storage** for tokens

### Offline Support:
- **Cache API responses**
- **Queue failed requests**
- **Sync when online**
- **Offline indicators**

---

## 🎨 UI/UX Features

### Animations:
- Hero animations for images
- Page transitions
- Card animations
- Loading shimmer
- Micro-interactions

### Design Patterns:
- Glassmorphism effects
- Neumorphism shadows
- Gradient backgrounds
- Rounded corners
- Elevation shadows

### Responsive:
- Adaptive layouts
- Screen size detection
- Orientation support
- Tablet optimization

---

## 🔐 Security

- ✅ JWT token authentication
- ✅ Secure token storage
- ✅ Biometric authentication
- ✅ API encryption
- ✅ Auto-logout
- ✅ Session management

---

## 📦 Build & Deploy

### Android:

```bash
# Debug build
flutter build apk --debug

# Release build
flutter build apk --release

# App bundle for Play Store
flutter build appbundle --release
```

### iOS:

```bash
# Debug build
flutter build ios --debug

# Release build
flutter build ios --release
```

---

## 🧪 Testing

```bash
# Run all tests
flutter test

# Run with coverage
flutter test --coverage

# Integration tests
flutter drive --target=test_driver/app.dart
```

---

## 📱 Screenshots

### Student App:
- Login Screen (Blue gradient)
- Dashboard (Glassmorphism cards)
- Timetable (Color-coded)
- Assignments (List view)
- Profile (Stats cards)

### Teacher App:
- Login Screen (Green gradient)
- Dashboard (Quick actions)
- Classes (Grid view)
- Attendance (Swipe cards)
- Grading (Table view)

---

## 🐛 Troubleshooting

### Common Issues:

**1. Dependencies not installing:**
```bash
flutter clean
flutter pub get
```

**2. Build errors:**
```bash
flutter clean
flutter pub upgrade
flutter build apk
```

**3. Hot reload not working:**
```bash
# Restart app
r
# Hot restart
R
```

---

## 📚 Documentation

- [Flutter Docs](https://docs.flutter.dev/)
- [Dart Docs](https://dart.dev/guides)
- [Provider](https://pub.dev/packages/provider)
- [GoRouter](https://pub.dev/packages/go_router)
- [Dio](https://pub.dev/packages/dio)

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Team

- **Developer:** EduSphere Team
- **Designer:** UI/UX Team
- **Backend:** API Team

---

## 📞 Support

For support, email: support@edusphere.com

---

**Built with ❤️ using Flutter**

