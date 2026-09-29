import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en: {
    translation: {
      appName: "Semaiy",
      appNameAm: "\u1230\u121b\u12ed",
      tagline: "The digital sky for businesses and education",
      welcome: "Welcome",
      signInSubtitle: "Sign in to your account",
      login: "Sign in",
      logout: "Sign out",
      newHere: "New here?",
      createAccount: "Create account",
      dashboard: "Dashboard",
      restaurant: "Restaurant",
      school: "School",
      pos: "POS",
      kitchen: "Kitchen",
      menu: "Menu",
      staff: "Staff",
      students: "Students",
      teachers: "Teachers",
      attendance: "Attendance",
      reports: "Reports",
      settings: "Settings",
      todaySales: "Today's Sales",
      activeOrders: "Active Orders",
      openTables: "Open Tables",
      sendToKitchen: "Send to Kitchen",
      online: "Online",
      offline: "Offline",
      language: "Language",
      english: "English",
      amharic: "\u12a0\u121b\u122d\u129b",
      email: "Email",
      password: "Password",
    },
  },
  am: {
    translation: {
      appName: "\u1230\u121b\u12ed",
      appNameAm: "\u1230\u121b\u12ed",
      tagline: "\u1208\u1295\u130d\u12f5 \u12a5\u1293 \u1208\u1275\u121d\u1205\u122d\u1275 \u12f2\u1302\u1273\u120d \u1230\u121b\u12ed",
      welcome: "\u12a5\u1295\u12ad\u12cb\u1295 \u12f0\u1205\u1293 \u1218\u1321",
      signInSubtitle: "\u12c8\u12f0 \u1218\u1208\u12eb\u12ce \u12ed\u130d\u1261",
      login: "\u130d\u1263",
      logout: "\u12cd\u1323",
      newHere: "\u12a0\u12f2\u1235 \u1290\u12ce\u1275?",
      createAccount: "\u1218\u1208\u12eb \u12ed\u134d\u1320\u1229",
      dashboard: "\u12f3\u123d\u1266\u122d\u12f5",
      restaurant: "\u122c\u1235\u1276\u122b\u1295\u1275",
      school: "\u1275\u121d\u1205\u122d\u1275 \u1264\u1275",
      pos: "\u12e8\u123d\u12eb\u132d \u1290\u1325\u1265",
      kitchen: "\u12a9\u123d\u1293",
      menu: "\u121c\u1291",
      staff: "\u1230\u122b\u1270\u1296\u127d",
      students: "\u1270\u121b\u122a\u12ce\u127d",
      teachers: "\u1218\u121d\u1205\u122b\u1295",
      attendance: "\u12a0\u1274\u1295\u12f3\u1295\u1235",
      reports: "\u122a\u1356\u122d\u1276\u127d",
      settings: "\u1245\u1295\u1265\u122e\u127d",
      todaySales: "\u12e8\u12db\u122c \u123d\u12eb\u132d",
      activeOrders: "\u1295\u1241 \u1275\u12d5\u12db\u12de\u127d",
      openTables: "\u12ad\u134d\u1275 \u1320\u1228\u1324\u12db\u12ce\u127d",
      sendToKitchen: "\u12c8\u12f0 \u12a9\u123d\u1293 \u120b\u12ad",
      online: "\u12a6\u1295\u120b\u12ed\u1295",
      offline: "\u12a6\u134d\u120b\u12ed\u1295",
      language: "\u124b\u1295\u124b",
      english: "English",
      amharic: "\u12a0\u121b\u122d\u129b",
      email: "\u12a2\u121c\u12ed\u120d",
      password: "\u12e8\u12ed\u1208\u134d \u1243\u120d",
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })

export default i18n
