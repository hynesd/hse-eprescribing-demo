# HSE ePrescribing Demo

A complete, standalone React Native (Expo) demo mockup of the HSE Health App focused on **Electronic Prescribing** functionality. Built for a tender demonstration — 100% original code.

> ⚠️ **Demo only** — all data is mock/hardcoded. No real health data is used or stored.

---

## 🚀 How to Run

```bash
npm install
npx expo start
```

Then scan the QR code with the **Expo Go** app on your phone, or press:
- `i` for iOS Simulator
- `a` for Android Emulator
- `w` for web browser

---

## 📱 Screens

| Screen | Description |
|--------|-------------|
| **Welcome** | HSE-branded dark green splash screen with "Log in with MyGovID" and "Continue without logging in" options |
| **Login** | Simulated MyGovID login (email + password fields, biometrics option) — any input navigates to the dashboard |
| **Home Dashboard** | Greeting with user initials avatar, summary cards for prescriptions ready, repeat prescriptions, and nominated pharmacy |
| **Prescriptions Landing** | Hub screen linking to the three prescription sub-sections |
| **Ready for Dispensing** | Lists prescriptions currently ready to collect (Amoxicillin, Omeprazole) with green status badges |
| **Dispensed Prescriptions** | Historical dispensed prescriptions (Atorvastatin, Salbutamol, Paracetamol) with grey status badges |
| **Repeat Prescriptions** | Prescriptions needing renewal with a "Request Renewal" button that shows a confirmation alert |
| **My Nominated Pharmacy** | Shows current nominated pharmacy (Hickey's, Grafton Street) with "Change Pharmacy" flow and confirmation alert |
| **Profile** | User profile details with MyGovID verification status and sign out option |

---

## 🗺️ Navigation Structure

```
Root Stack Navigator
├── Welcome Screen
├── Login Screen
└── Main (Bottom Tab Navigator)
    ├── 🏠 Home
    ├── 💊 Prescriptions (Stack Navigator)
    │   ├── Prescriptions Landing
    │   ├── Ready for Dispensing
    │   ├── Dispensed Prescriptions
    │   └── Repeat Prescriptions
    ├── 🏥 My Pharmacy
    └── 👤 Profile
```

---

## 🎨 Tech Stack

- **React Native** with **Expo** (managed workflow)
- **TypeScript**
- **React Navigation** — `@react-navigation/native`, `@react-navigation/bottom-tabs`, `@react-navigation/native-stack`
- **Expo Linear Gradient** — for the Welcome screen background
- **@expo/vector-icons** (Ionicons) — for all icons
- **No backend** — all data is hardcoded mock data in `src/data/mockData.ts`

---

## 🎨 HSE Brand Theme

The app uses HSE's official brand colours:

| Token | Hex | Usage |
|-------|-----|-------|
| `darkGreen` | `#02594C` | Primary brand, header accents |
| `green` | `#02A78B` | Ready/active states |
| `darkPurple` | `#5F3DC4` | Buttons, CTAs |
| `purple` | `#782CC3` | Repeat prescription accents |
| `black` | `#212B32` | Body text |

---

## 📂 Project Structure

```
/
├── App.tsx                        # Entry point
├── app.json                       # Expo config
├── package.json
├── tsconfig.json
├── babel.config.js
└── src/
    ├── theme/
    │   └── index.ts               # HSE brand colours, spacing, typography
    ├── data/
    │   └── mockData.ts            # All mock prescriptions, pharmacies, user data
    ├── navigation/
    │   └── index.tsx              # Root stack, tab navigator, prescription stack
    ├── components/
    │   ├── Button.tsx             # Reusable HSE-styled button
    │   ├── StatusBadge.tsx        # Coloured status pill (ready/dispensed/repeat)
    │   ├── PrescriptionCard.tsx   # Prescription list card with coloured left border
    │   ├── PharmacyCard.tsx       # Pharmacy info card
    │   └── SummaryCard.tsx        # Home dashboard summary card
    └── screens/
        ├── WelcomeScreen.tsx
        ├── LoginScreen.tsx
        ├── HomeScreen.tsx
        ├── PrescriptionsLandingScreen.tsx
        ├── ReadyForDispensingScreen.tsx
        ├── DispensedScreen.tsx
        ├── RepeatPrescriptionsScreen.tsx
        ├── NominatedPharmacyScreen.tsx
        └── ProfileScreen.tsx
```

---

## ℹ️ Notes

- This demo was built entirely from scratch — no code was copied from any other HSE repository
- The app is for demonstration purposes only and does not connect to any real systems
- All patient names, PPS numbers, and prescription data are fictional

