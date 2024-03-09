import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Hemoglobin A1c (HbA1c)',
    content:
      'Diabetes is a chronic condition characterized by high levels of glucose (sugar) in the blood. It occurs when the body either doesnot produce enough insulin or can not effectively use the insulin it produces, leading to serious health complications if left untreated.',
    user: {
      id: 1,
      name: 'Diabetes',
      // professional: 'UI/UX Engineer',
      photo: 'diabetess.png',
    },
  },
  {
    id: 2,
    title: 'Leukocyte count',
    content:
      'White blood cell count, also known as leukocyte count, measures the number of white blood cells in a sample of blood. It is an important indicator of the body immune system function and can help diagnose infections, inflammation, and certain medical conditions.',
    user: {
      id: 1,
      name: 'WBC Count',
      // professional: 'Software Engineer',
      photo: 'wbc.png',
    },
  },
  {
    id: 3,
    title: 'Erythrocyte count',
    content:
      'Red blood cell count, or erythrocyte count, assesses the number of red blood cells in a given volume of blood. This count is crucial for evaluating oxygen transport efficiency and diagnosing various types of anemia and other blood disorders.  ',
    user: {
      id: 1,
      name: 'RBC Count',
      // professional: 'FullStack Designer',
      photo: 'rbc.png',
    },
  },
  {
    id: 4,
    title: 'Platelet Count',
    content:
      'Platelets are crucial for blood clotting, preventing excessive bleeding, and maintaining vascular integrity. Abnormal platelet counts can indicate various conditions, including thrombocytopenia or thrombocytosis.      ',
    user: {
      id: 1,
      name: 'Mean platelet volume(MPV)',
      // professional: 'SEO Expert',
      photo: 'platelet.png',
    },
  },
  {
    id: 5,
    title: 'Lipid Panel',
    content:
      'Cholesterol is a fatty substance found in the blood, essential for building cell membranes and producing hormones. While necessary for bodily functions, high levels of cholesterol can lead to plaque buildup in arteries, increasing the risk of heart disease and stroke. ',
    user: {
      id: 1,
      name: 'Cholesterol test',
      // professional: 'Back-End Developer',
      photo: 'fat.png',
    },
  },
]
