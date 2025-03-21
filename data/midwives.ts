export interface Review {
  id: number;
  content: string;
  author: string;
  rating: number;
}

export interface Midwife {
  id: string;
  name: string;
  title: string;
  location: string;
  experience: string;
  languages: string[];
  about: string;
  expertise: string[];
  reviews: Review[];
  imageUrl: string;
  email: string;
  phone: string;
}

export const midwivesData: Midwife[] = [
  {
    id: "1",
    name: "Hanna Belay",
    title: "Certified Professional Midwife",
    location: "Tirunesh Beijing Hospital",
    experience: "8+ years",
    languages: ["English", "Amharic"],
    about: "Hi, I'm Hanna Belay, a certified professional midwife with over 8 years of experience. I am passionate about providing comprehensive prenatal care and supporting mothers through their pregnancy journey. I believe in creating a safe, judgment-free space where expectant mothers can discuss their concerns and receive personalized care.",
    expertise: [
      "Prenatal Care & Support",
      "Natural Birth Planning",
      "Postpartum Care",
      "Breastfeeding Support",
      "Pregnancy Health Education",
      "Birth Preparation Classes",
      "Emotional Support During Pregnancy",
      "Newborn Care Guidance"
    ],
    reviews: [
      {
        id: 1,
        content: "Hanna was incredibly supportive throughout my pregnancy. Her knowledge and compassion made all the difference.",
        author: "Meron",
        rating: 5
      },
      {
        id: 2,
        content: "I felt so well cared for during my pregnancy journey. Highly recommended!",
        author: "Bethel",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-1.png",
    email: "hanna@example.com",
    phone: "+1234567890"
  },
  {
    id: "2",
    name: "Meklit Abay",
    title: "Senior Midwife Practitioner",
    location: "Tulu Dimtu Health Center",
    experience: "10+ years",
    languages: ["English", "Amharic", "Oromo"],
    about: "Hello, I'm Meklit Abay, a senior midwife practitioner with a decade of experience in maternal healthcare. My approach focuses on empowering mothers with knowledge and confidence throughout their pregnancy journey. I specialize in high-risk pregnancies and natural birthing techniques.",
    expertise: [
      "High-Risk Pregnancy Care",
      "Natural Birthing Techniques",
      "Prenatal Education",
      "Labor Support",
      "Postpartum Recovery",
      "Lactation Consulting",
      "Family Planning",
      "Maternal Mental Health Support"
    ],
    reviews: [
      {
        id: 1,
        content: "Meklit's expertise in high-risk pregnancies gave me peace of mind throughout my journey.",
        author: "Sara",
        rating: 5
      },
      {
        id: 2,
        content: "Her holistic approach to maternal care is exceptional. I couldn't have asked for better support.",
        author: "Tigist",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-2.png",
    email: "meklit@example.com",
    phone: "+1234567890"
  },
  {
    id: "3",
    name: "Workenesh Gizew",
    title: "Certified Nurse-Midwife",
    location: "Gelan Health Center",
    experience: "12+ years",
    languages: ["English", "Amharic"],
    about: "Greetings! I'm Workenesh Gizew, a certified nurse-midwife with over 12 years of dedicated service in maternal healthcare. My passion lies in combining modern medical knowledge with traditional care practices to provide the best possible experience for mothers and their babies.",
    expertise: [
      "Advanced Prenatal Care",
      "Traditional Birth Practices",
      "Emergency Obstetric Care",
      "Newborn Assessment",
      "Maternal Health Education",
      "Pregnancy Wellness",
      "Birth Planning",
      "Postpartum Support"
    ],
    reviews: [
      {
        id: 1,
        content: "Workenesh's blend of modern and traditional practices made my birth experience truly special.",
        author: "Hirut",
        rating: 5
      },
      {
        id: 2,
        content: "Her extensive experience and calm demeanor helped me feel confident throughout my pregnancy.",
        author: "Senait",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-3.png",
    email: "workenesh@example.com",
    phone: "+1234567890"
  },
  {
    id: "4",
    name: "Yordanos Kebede",
    title: "Registered Midwife",
    location: "Adama General Hospital",
    experience: "6+ years",
    languages: ["English", "Amharic", "Afar"],
    about: "I'm Yordanos Kebede, a registered midwife committed to ensuring safe and healthy pregnancies. I work closely with mothers to address their unique needs and provide compassionate care.",
    expertise: [
      "Prenatal Nutrition",
      "Labor Pain Management",
      "Postpartum Depression Counseling",
      "Newborn Screening",
      "Infant Feeding Support",
      "Maternal Vaccination Guidance",
      "Birthing Plan Development",
      "Community Health Outreach"
    ],
    reviews: [
      {
        id: 1,
        content: "Yordanos was amazing at guiding me through my prenatal nutrition plan. Truly grateful!",
        author: "Selam",
        rating: 5
      },
      {
        id: 2,
        content: "She goes above and beyond to ensure her patients are comfortable and informed.",
        author: "Bekelech",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-1.png",
    email: "yordanos@example.com",
    phone: "+1234567890"
  },
  {
    id: "5",
    name: "Eyerusalem Tadesse",
    title: "Senior Nurse-Midwife",
    location: "Jimma University Medical Center",
    experience: "9+ years",
    languages: ["English", "Amharic", "Somali"],
    about: "As a senior nurse-midwife, I bring nearly a decade of experience to help mothers navigate their pregnancy journeys. My focus is on building trust and fostering strong relationships with my patients.",
    expertise: [
      "Antenatal Checkups",
      "Cesarean Section Support",
      "Neonatal Care",
      "Maternal Fitness Programs",
      "Stress Management During Pregnancy",
      "Prenatal Yoga Guidance",
      "Postnatal Exercise Plans",
      "Childbirth Education"
    ],
    reviews: [
      {
        id: 1,
        content: "Eyerusalem's calming presence made my delivery experience much smoother.",
        author: "Almaz",
        rating: 5
      },
      {
        id: 2,
        content: "She truly understands the challenges of pregnancy and provides excellent advice.",
        author: "Abeba",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-2.png",
    email: "eyerusalem@example.com",
    phone: "+1234567890"
  },
  {
    id: "6",
    name: "Tsion Desta",
    title: "Midwifery Specialist",
    location: "Hawassa University Comprehensive Specialized Hospital",
    experience: "7+ years",
    languages: ["English", "Amharic", "Sidamo"],
    about: "I'm Tsion Desta, a midwifery specialist dedicated to supporting women during one of the most transformative periods of their lives. My goal is to ensure every mother feels empowered and prepared.",
    expertise: [
      "Water Birth Assistance",
      "Home Birth Coordination",
      "Maternal Diet Planning",
      "Prenatal Massage Therapy",
      "Postpartum Healing Techniques",
      "Parenting Workshops",
      "Sibling Preparation Classes",
      "Sleep Training for Newborns"
    ],
    reviews: [
      {
        id: 1,
        content: "Tsion's home birth coordination was seamless and stress-free. Thank you!",
        author: "Bruktawit",
        rating: 5
      },
      {
        id: 2,
        content: "She has an incredible ability to make you feel at ease during labor.",
        author: "Kalkidan",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-3.png",
    email: "tsion@example.com",
    phone: "+1234567890"
  },
  {
    id: "7",
    name: "Mahlet Alemu",
    title: "Certified Midwife Practitioner",
    location: "Debre Berhan Referral Hospital",
    experience: "5+ years",
    languages: ["English", "Amharic", "Tigrinya"],
    about: "I'm Mahlet Alemu, a certified midwife practitioner who believes in a holistic approach to maternal care. I strive to create a nurturing environment for both mothers and babies.",
    expertise: [
      "Reproductive Health Counseling",
      "Birth Doula Services",
      "Postpartum Anxiety Support",
      "Baby Sleep Schedules",
      "Pregnancy Meditation",
      "Breastfeeding Challenges",
      "Maternal Weight Management",
      "Preconception Consultations"
    ],
    reviews: [
      {
        id: 1,
        content: "Mahlet's meditation sessions helped me stay calm during my pregnancy.",
        author: "Zenebu",
        rating: 5
      },
      {
        id: 2,
        content: "Her attention to detail and kindness made all the difference.",
        author: "Liya",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-1.png",
    email: "mahlet@example.com",
    phone: "+1234567890"
  },
  {
    id: "8",
    name: "Meaza Solomon",
    title: "Senior Midwife Consultant",
    location: "Bahir Dar Felege Hiwot Referral Hospital",
    experience: "11+ years",
    languages: ["English", "Amharic", "Wolaytta"],
    about: "With over a decade of experience, I, Meaza Solomon, aim to provide mothers with the tools and confidence they need to embrace motherhood fully. My focus is on individualized care.",
    expertise: [
      "Maternal Diabetes Management",
      "Premature Birth Care",
      "Postpartum Physical Therapy",
      "Infant Immunization Scheduling",
      "Maternal Blood Pressure Monitoring",
      "Pregnancy Acupuncture",
      "Pelvic Floor Exercises",
      "Perinatal Mood Disorders"
    ],
    reviews: [
      {
        id: 1,
        content: "Meaza's guidance on managing diabetes during pregnancy was invaluable.",
        author: "Fikirte",
        rating: 5
      },
      {
        id: 2,
        content: "She is incredibly knowledgeable and always available to answer questions.",
        author: "Mihret",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-2.png",
    email: "meaza@example.com",
    phone: "+1234567890"
  },
  {
    id: "9",
    name: "Rediet Abebe",
    title: "Nurse-Midwife Practitioner",
    location: "Dire Dawa Regional Hospital",
    experience: "8+ years",
    languages: ["English", "Amharic", "Harari"],
    about: "I'm Rediet Abebe, a nurse-midwife practitioner with a passion for maternal health education. I enjoy helping mothers understand their bodies and prepare for childbirth.",
    expertise: [
      "Prenatal Ultrasound Coordination",
      "Vaginal Birth After Cesarean (VBAC)",
      "Postpartum Pelvic Health",
      "Infant CPR Training",
      "Maternal Herbal Remedies",
      "Childbirth Pain Relief Options",
      "Postnatal Depression Screening",
      "Parenting Skills Development"
    ],
    reviews: [
      {
        id: 1,
        content: "Rediet's VBAC support gave me the confidence to pursue a natural birth after my C-section.",
        author: "Ayantu",
        rating: 5
      },
      {
        id: 2,
        content: "Her classes on infant CPR were incredibly helpful and informative.",
        author: "Yohannes",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-3.png",
    email: "rediet@example.com",
    phone: "+1234567890"
  },
  {
    id: "10",
    name: "Liyu Abebaw",
    title: "Midwifery Educator",
    location: "Arba Minch General Hospital",
    experience: "6+ years",
    languages: ["English", "Amharic", "Gamo"],
    about: "I'm Liyu Abebaw, a midwifery educator focused on training future midwives while continuing to serve mothers directly. I believe in lifelong learning and growth in maternal care.",
    expertise: [
      "Maternal Hygiene Practices",
      "Teen Pregnancy Counseling",
      "Multiparous Birth Support",
      "Postpartum Hair Loss Solutions",
      "Pregnancy Skin Care Tips",
      "Maternal Dental Health",
      "Infant Growth Tracking",
      "Safe Delivery Techniques"
    ],
    reviews: [
      {
        id: 1,
        content: "Liyu's teen pregnancy counseling program is making a real difference in our community.",
        author: "Kidist",
        rating: 5
      },
      {
        id: 2,
        content: "She is an inspiring role model for young women pursuing careers in midwifery.",
        author: "Eden",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-1.png",
    email: "liyu@example.com",
    phone: "+1234567890"
  },
  {
    id: "11",
    name: "Tsedal Wondimu",
    title: "Certified Midwife",
    location: "Mekelle Hospital",
    experience: "7+ years",
    languages: ["English", "Amharic", "Tigrinya"],
    about: "I'm Tsedal Wondimu, a certified midwife committed to delivering quality care to mothers in rural areas. I travel extensively to reach underserved communities.",
    expertise: [
      "Mobile Maternity Clinics",
      "Rural Pregnancy Support",
      "Maternal Emergency Response",
      "Community Breastfeeding Initiatives",
      "Pregnancy Yoga for Beginners",
      "Postpartum Herbal Baths",
      "Maternal Nutrition Supplements",
      "Newborn Jaundice Monitoring"
    ],
    reviews: [
      {
        id: 1,
        content: "Tsedal's mobile clinics have been a lifeline for our village.",
        author: "Feven",
        rating: 5
      },
      {
        id: 2,
        content: "She is dedicated to improving maternal health in remote areas.",
        author: "Daniel",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-2.png",
    email: "tsedal@example.com",
    phone: "+1234567890"
  },
  {
    id: "12",
    name: "Yemiserach Assefa",
    title: "Lead Midwife",
    location: "Addis Ababa University Black Lion Hospital",
    experience: "10+ years",
    languages: ["English", "Amharic", "Oromo"],
    about: "I'm Yemiserach Assefa, the lead midwife at Black Lion Hospital. My mission is to ensure that every mother receives the highest standard of care during her pregnancy and delivery.",
    expertise: [
      "High-Risk Labor Management",
      "Fetal Heart Monitoring",
      "Postpartum Hemorrhage Prevention",
      "Pregnancy Stretch Mark Treatments",
      "Maternal Mental Health Awareness",
      "Infant Safe Sleep Practices",
      "Birthing Pool Usage",
      "Maternal Blood Tests Coordination"
    ],
    reviews: [
      {
        id: 1,
        content: "Yemiserach's leadership in high-risk deliveries is unmatched.",
        author: "Ashenafi",
        rating: 5
      },
      {
        id: 2,
        content: "She is a true advocate for maternal health and safety.",
        author: "Hiwot",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-3.png",
    email: "yemiserach@example.com",
    phone: "+1234567890"
  },
  {
    id: "13",
    name: "Zeritu Haile",
    title: "Midwifery Supervisor",
    location: "Gondar University Teaching Hospital",
    experience: "9+ years",
    languages: ["English", "Amharic", "Agaw"],
    about: "I'm Zeritu Haile, a midwifery supervisor with a passion for mentoring new midwives and improving maternal healthcare systems.",
    expertise: [
      "Midwifery Team Leadership",
      "Maternal Policy Development",
      "Clinical Supervision",
      "Pregnancy Risk Assessments",
      "Maternal Anemia Treatment",
      "Postpartum Constipation Remedies",
      "Infant Colic Solutions",
      "Maternal Fitness Challenges"
    ],
    reviews: [
      {
        id: 1,
        content: "Zeritu's mentorship has inspired many young midwives in our hospital.",
        author: "Eleni",
        rating: 5
      },
      {
        id: 2,
        content: "Her dedication to systemic improvements is commendable.",
        author: "Kebede",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-1.png",
    email: "zeritu@example.com",
    phone: "+1234567890"
  },
  {
    id: "14",
    name: "Bereket Gebre",
    title: "Senior Midwife Coordinator",
    location: "Wollo University Referral Hospital",
    experience: "12+ years",
    languages: ["English", "Amharic", "Konso"],
    about: "I'm Bereket Gebre, a senior midwife coordinator with extensive experience in managing large teams and delivering exceptional maternal care.",
    expertise: [
      "Midwifery Resource Allocation",
      "Maternal Healthcare Budgeting",
      "Team Performance Reviews",
      "Pregnancy Complication Management",
      "Postpartum Incontinence Solutions",
      "Maternal Stress Reduction Techniques",
      "Infant Allergy Testing",
      "Parenting Conflict Resolution"
    ],
    reviews: [
      {
        id: 1,
        content: "Bereket's leadership ensures smooth operations in our maternity ward.",
        author: "Tadele",
        rating: 5
      },
      {
        id: 2,
        content: "His strategic planning skills are second to none.",
        author: "Alemitu",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-2.png",
    email: "bereket@example.com",
    phone: "+1234567890"
  },
  {
    id: "15",
    name: "Kalkidan Tekle",
    title: "Midwifery Researcher",
    location: "Saint Paul's Hospital Millennium Medical College",
    experience: "8+ years",
    languages: ["English", "Amharic", "Gurage"],
    about: "I'm Kalkidan Tekle, a midwifery researcher focused on advancing evidence-based practices in maternal healthcare.",
    expertise: [
      "Maternal Health Data Analysis",
      "Clinical Trials Coordination",
      "Pregnancy Research Studies",
      "Postpartum Weight Loss Strategies",
      "Maternal Sleep Disorder Treatments",
      "Infant Developmental Milestones",
      "Birthing Position Recommendations",
      "Maternal Bone Health"
    ],
    reviews: [
      {
        id: 1,
        content: "Kalkidan's research has significantly improved our understanding of maternal health.",
        author: "Berhanu",
        rating: 5
      },
      {
        id: 2,
        content: "Her contributions to the field are groundbreaking.",
        author: "Tigist",
        rating: 5
      }
    ],
    imageUrl: "/images/user-cover-3.png",
    email: "kalkidan@example.com",
    phone: "+1234567890"
  }
];