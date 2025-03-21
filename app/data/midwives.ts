export interface Review {
  id: number;
  content: string;
  author: string;
  rating: number;
}

export interface ExpertiseTranslation {
  en: string;
  am: string;
}

export interface Midwife {
  id: string;
  name: string;
  title: string;
  location: string;
  experience: string;
  imageUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  specialties: string[];
}

export const midwivesData: Midwife[] = [
  {
    id: "1",
    name: "ሃና በላይ",
    title: "የተመሰከረለት ሙያዊ አዋላጅ",
    location: "ጥሩነሽ በጂንግ ሆስፒታል",
    experience: "8+ ዓመታት",
    imageUrl: "/images/midwife1.jpg",
    coordinates: { lat: 9.032, lng: 38.742 },
    specialties: ["የቅድመ ወሊድ እንክብካቤ", "የተፈጥሮ ወሊድ እቅድ", "የድህረ ወሊድ እንክብካቤ"]
  },
  {
    id: "2",
    name: "Dr. Maria Rodriguez",
    title: "Lead Midwife",
    location: "Manchester, UK",
    experience: "12 years",
    imageUrl: "/images/midwife1.jpg",
    coordinates: { lat: 53.4808, lng: -2.2426 },
    specialties: ["High Risk Pregnancy", "Twin Births", "Emergency Care"]
  },
  {
    id: "3",
    name: "Dr. Emily Chen",
    title: "Specialist Midwife",
    location: "Birmingham, UK",
    experience: "8 years",
    imageUrl: "/images/midwife1.jpg",
    coordinates: { lat: 52.4862, lng: -1.8904 },
    specialties: ["Prenatal Care", "Postnatal Support", "Breastfeeding Support"]
  },
  {
    id: "4",
    name: "Dr. Lisa Thompson",
    title: "Senior Midwife",
    location: "Leeds, UK",
    experience: "10 years",
    imageUrl: "/images/midwife1.jpg",
    coordinates: { lat: 53.8008, lng: -1.5491 },
    specialties: ["Home Birth", "Birth Planning", "Natural Birth"]
  },
  {
    id: "5",
    name: "Dr. Amara Okafor",
    title: "Consultant Midwife",
    location: "Bristol, UK",
    experience: "14 years",
    imageUrl: "/images/midwife1.jpg",
    coordinates: { lat: 51.4545, lng: -2.5879 },
    specialties: ["Teenage Pregnancy", "Mental Health Support", "Family Planning"]
  },
  {
    id: "6",
    name: "Dr. Sophie Williams",
    title: "Research Midwife",
    location: "Edinburgh, UK",
    experience: "11 years",
    imageUrl: "/images/midwife1.jpg",
    coordinates: { lat: 55.9533, lng: -3.1883 },
    specialties: ["Clinical Research", "Pregnancy Education", "Birthing Techniques"]
  },
  {
    id: "7",
    name: "Dr. Hannah Baker",
    title: "Community Midwife",
    location: "Glasgow, UK",
    experience: "9 years",
    imageUrl: "/images/midwife1.jpg",
    coordinates: { lat: 55.8642, lng: -4.2518 },
    specialties: ["Community Care", "Breastfeeding Support", "Postnatal Care"]
  },
  {
    id: "8",
    name: "Dr. Priya Patel",
    title: "Specialist Midwife",
    location: "Cardiff, UK",
    experience: "13 years",
    imageUrl: "/images/midwife1.jpg",
    coordinates: { lat: 51.4816, lng: -3.1791 },
    specialties: ["Diabetes in Pregnancy", "Nutritional Support", "High Risk Care"]
  },
  {
    id: "9",
    name: "Dr. Rachel Foster",
    title: "Lead Midwife",
    location: "Liverpool, UK",
    experience: "16 years",
    imageUrl: "/images/midwife1.jpg",
    coordinates: { lat: 53.4084, lng: -2.9916 },
    specialties: ["Emergency Care", "Birth Trauma Recovery", "Mental Health"]
  },
  {
    id: "10",
    name: "Dr. Victoria Clarke",
    title: "Research Midwife",
    location: "Newcastle, UK",
    experience: "7 years",
    imageUrl: "/images/midwife1.jpg",
    coordinates: { lat: 54.9783, lng: -1.6178 },
    specialties: ["Clinical Trials", "Pregnancy Research", "Birth Complications"]
  },
  {
    id: "11",
    name: "Dr. Grace Wilson",
    title: "Specialist Midwife",
    location: "Sheffield, UK",
    experience: "12 years",
    imageUrl: "/images/midwife1.jpg",
    coordinates: { lat: 53.3811, lng: -1.4701 },
    specialties: ["Hypnobirthing", "Pain Management", "Water Birth"]
  },
  {
    id: "12",
    name: "Dr. Lucy Martinez",
    title: "Community Midwife",
    location: "Oxford, UK",
    experience: "10 years",
    imageUrl: "/images/midwife1.jpg",
    coordinates: { lat: 51.7520, lng: -1.2577 },
    specialties: ["Home Birth", "Antenatal Classes", "Family Support"]
  }
]; 