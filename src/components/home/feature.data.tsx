import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/AccountBox'
import AttachMoneyIcon from '@mui/icons-material/Sync'
import LocalLibraryIcon from '@mui/icons-material/ChatBubble'
import ContactSupportIcon from '@mui/icons-material/MedicalInformation'
import CommunityIcon from '@mui/icons-material/VolunteerActivism'



interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Registration',
    description: 'Our streamlined process efficiently gathers donor information, facilitating quick onboarding for seamless matching.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Real-Time Matching',
    description: 'Advanced algorithms swiftly pair donors with recipients based on factors like blood type, location, and availability, reducing response times in emergencies.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Secure Communication',
    description: 'Robust encryption ensures privacy in all interactions between donors, recipients, and healthcare providers, fostering trust within our platform.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Blood Report Insights',
    description: 'Providing personalized health assessments for donors and detailed analyses for healthcare professionals, aiding informed decisions in medical care.',
    icon: <ContactSupportIcon />,
  },
  {
    title: 'Community Engagement',
    description: 'Through awareness campaigns and volunteer opportunities, we foster a supportive community, amplifying the impact of blood donation and saving lives.',
    icon: <CommunityIcon />,
  },
]

