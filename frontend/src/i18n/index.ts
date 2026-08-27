import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en: {
    translation: {
      appName: "Semay",
      appNameAm: "ሰማይ",
      tagline: "The digital sky for businesses and education",
      welcome: "Welcome",
      login: "Sign in",
      logout: "Sign out",
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
      amharic: "Amharic",
    },
  },
  am: {
    translation: {
      appName: "ሰማይ",
      appNameAm: "ሰማይ",
      tagline: "ለንግድ እና ለትምህርት ዲጂታል ሰማይ",
      welcome: "እንኳን ደህና መጡ",
      login: "ግባ",
      logout: "ውጣ",
      dashboard: "ዳሽቦርድ",
      restaurant: "ሬስቶራንት",
      school: "ትምህርት ቤት",
      pos: "የሽያጭ ነጥብ",
      kitchen: "ኩሽና",
      menu: "ምናሌ",
      staff: "ሰራተኞች",
      students: "ተማሪዎች",
      teachers: "መምህራን",
      attendance: "አቴንዳንስ",
      reports: "ሪፖርቶች",
      settings: "ቅንብሮች",
      todaySales: "የዛሬ ሽያጭ",
      activeOrders: "ንቁ ትዕዛዞች",
      openTables: "ክፍት ጠረጴዛዎች",
      sendToKitchen: "ወደ ኩሽና ላክ",
      online: "ኦንላይን",
      offline: "ኦፍላይን",
      language: "ቋንቋ",
      english: "English",
      amharic: "አማርኛ",
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
