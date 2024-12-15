import { createContext } from "react";

const doctorsList = [
    {
      name: "Dr. Olivia Carter",
      availability: true,
      specialization: "Cardiology",
      hospital: "Green Valley Medical Center"
    },
    {
      name: "Dr. Ethan Robinson",
      availability: false,
      specialization: "Dermatology",
      hospital: "Sunrise Hospital"
    },
    {
      name: "Dr. Sophia Martinez",
      availability: true,
      specialization: "Pediatrics",
      hospital: "City Care Hospital"
    },
    {
      name: "Dr. Liam Johnson",
      availability: true,
      specialization: "Orthopedics",
      hospital: "Harborview Medical Center"
    },
    {
      name: "Dr. Emma Brown",
      availability: false,
      specialization: "Oncology",
      hospital: "New Horizon Cancer Center"
    },
    {
      name: "Dr. Mason Garcia",
      availability: true,
      specialization: "Neurology",
      hospital: "Silverlake Neurological Institute"
    },
    {
      name: "Dr. Ava Smith",
      availability: false,
      specialization: "Gynecology",
      hospital: "Willow Creek Women's Hospital"
    },
    {
      name: "Dr. James Davis",
      availability: true,
      specialization: "Psychiatry",
      hospital: "Riverview Mental Health Center"
    },
    {
      name: "Dr. Mia Wilson",
      availability: false,
      specialization: "Endocrinology",
      hospital: "Evergreen Endocrine Center"
    },
    {
      name: "Dr. Benjamin Thompson",
      availability: true,
      specialization: "Ophthalmology",
      hospital: "Visionary Eye Clinic"
    },
    {
      name: "Dr. Amelia Lee",
      availability: false,
      specialization: "Rheumatology",
      hospital: "Central Arthritis Center"
    },
    {
      name: "Dr. Alexander White",
      availability: true,
      specialization: "Gastroenterology",
      hospital: "Pacific Digestive Health"
    },
    {
      name: "Dr. Charlotte Harris",
      availability: true,
      specialization: "General Surgery",
      hospital: "Lakeside General Hospital"
    },
    {
      name: "Dr. Daniel Perez",
      availability: false,
      specialization: "Pulmonology",
      hospital: "BreathEasy Pulmonary Clinic"
    },
    {
      name: "Dr. Abigail Clark",
      availability: true,
      specialization: "Hematology",
      hospital: "Redwood Blood Health Center"
    },
    {
      name: "Dr. Henry Lewis",
      availability: true,
      specialization: "Urology",
      hospital: "Blue Ridge Urology Center"
    },
    {
      name: "Dr. Emily Young",
      availability: false,
      specialization: "Nephrology",
      hospital: "Riverstone Kidney Center"
    },
    {
      name: "Dr. Michael Adams",
      availability: true,
      specialization: "Otolaryngology",
      hospital: "SoundWave ENT Clinic"
    },
    {
      name: "Dr. Grace Walker",
      availability: false,
      specialization: "Allergy and Immunology",
      hospital: "Springfield Allergy Clinic"
    },
    {
      name: "Dr. Samuel Hill",
      availability: true,
      specialization: "Sports Medicine",
      hospital: "Victory Sports Hospital"
    }
  ];

const doctorContext = createContext(doctorsList)
export default doctorContext;
