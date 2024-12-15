import { createContext } from "react";

const drugsList = [
  {
      name: "Paracetamol",
      pharmacy: "Caremed",
      quantity: 5
  },
  {
      name: "Atorvastatin",
      pharmacy: "Wellness Hub",
      quantity: 4
  },
  {
      name: "Lisinopril",
      pharmacy: "Healthplus",
      quantity: 5
  },
  {
      name: "Amoxicillin",
      pharmacy: "Medspan",
      quantity: 5
  },
  {
      name: "Amlodipine",
      pharmacy: "Heartwise",
      quantity: 5
  },
  {
      name: "Albuterol",
      pharmacy: "MedlineRx",
      quantity: 5
  },
  {
      name: "Metformin",
      pharmacy: "CareFirst",
      quantity: 7
  },
  {
      name: "Omeprazole",
      pharmacy: "PharmaEase",
      quantity: 8
  },
  {
      name: "Losartan",
      pharmacy: "Healthmart",
      quantity: 6
  },
  {
      name: "Gabapentin",
      pharmacy: "Pain Relief Rx",
      quantity: 10
  },
  {
      name: "Hydrochlorothiazide",
      pharmacy: "WellCare Pharmacy",
      quantity: 9
  },
  {
      name: "Levothyroxine",
      pharmacy: "ThyroCare",
      quantity: 12
  },
  {
      name: "Ciprofloxacin",
      pharmacy: "AntibioMed",
      quantity: 4
  },
  {
      name: "Clopidogrel",
      pharmacy: "CardioLife",
      quantity: 3
  },
  {
      name: "Pantoprazole",
      pharmacy: "GastroCare",
      quantity: 7
  },
  {
      name: "Simvastatin",
      pharmacy: "CholesterolRx",
      quantity: 6
  },
  {
      name: "Montelukast",
      pharmacy: "Breathe Easy",
      quantity: 8
  },
  {
      name: "Fluticasone",
      pharmacy: "Allergy Relief",
      quantity: 5
  },
  {
      name: "Ranitidine",
      pharmacy: "Digestive Health",
      quantity: 2
  }
];


const drugsContext = createContext(drugsList)

export default drugsContext;
