export interface Prescription {
  id: string;
  medicationName: string;
  dosage: string;
  form: string;
  prescriberName: string;
  prescriberClinic: string;
  dateIssued?: string;
  dateDispensed?: string;
  lastDispensed?: string;
  status: 'ready' | 'dispensed' | 'repeat';
  pharmacyName: string;
  refillsRemaining?: number;
  totalRefills?: number;
}

export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  city: string;
  phone?: string;
  openingHours?: string;
}

export interface User {
  firstName: string;
  lastName: string;
  initials: string;
  dateOfBirth: string;
  ppsNumber: string;
}

export const currentUser: User = {
  firstName: 'Siobhán',
  lastName: "O'Sullivan",
  initials: 'SO',
  dateOfBirth: '15/04/1985',
  ppsNumber: '1234567T',
};

export const readyPrescriptions: Prescription[] = [
  {
    id: 'rx-001',
    medicationName: 'Amoxicillin',
    dosage: '500mg',
    form: 'Capsules',
    prescriberName: 'Dr. Aoife Murphy',
    prescriberClinic: 'Baggot Street Clinic',
    dateIssued: '20 Mar 2026',
    status: 'ready',
    pharmacyName: "Hickey's Pharmacy, Grafton Street",
  },
  {
    id: 'rx-002',
    medicationName: 'Omeprazole',
    dosage: '20mg',
    form: 'Capsules',
    prescriberName: 'Dr. Aoife Murphy',
    prescriberClinic: 'Baggot Street Clinic',
    dateIssued: '18 Mar 2026',
    status: 'ready',
    pharmacyName: "Hickey's Pharmacy, Grafton Street",
  },
];

export const dispensedPrescriptions: Prescription[] = [
  {
    id: 'rx-003',
    medicationName: 'Atorvastatin',
    dosage: '40mg',
    form: 'Tablets',
    prescriberName: 'Dr. Aoife Murphy',
    prescriberClinic: 'Baggot Street Clinic',
    dateDispensed: '10 Mar 2026',
    status: 'dispensed',
    pharmacyName: "Hickey's Pharmacy, Grafton Street",
  },
  {
    id: 'rx-004',
    medicationName: 'Salbutamol',
    dosage: '100mcg',
    form: 'Inhaler',
    prescriberName: "Dr. Ciarán O'Brien",
    prescriberClinic: 'Rathmines Medical Centre',
    dateDispensed: '28 Feb 2026',
    status: 'dispensed',
    pharmacyName: "McCabe's Pharmacy, Camden Street",
  },
  {
    id: 'rx-005',
    medicationName: 'Paracetamol',
    dosage: '500mg',
    form: 'Tablets',
    prescriberName: 'Dr. Aoife Murphy',
    prescriberClinic: 'Baggot Street Clinic',
    dateDispensed: '15 Feb 2026',
    status: 'dispensed',
    pharmacyName: "Hickey's Pharmacy, Grafton Street",
  },
];

export const repeatPrescriptions: Prescription[] = [
  {
    id: 'rx-006',
    medicationName: 'Atorvastatin',
    dosage: '40mg',
    form: 'Tablets',
    prescriberName: 'Dr. Aoife Murphy',
    prescriberClinic: 'Baggot Street Clinic',
    lastDispensed: '10 Mar 2026',
    status: 'repeat',
    pharmacyName: "Hickey's Pharmacy, Grafton Street",
    refillsRemaining: 0,
    totalRefills: 6,
  },
];

export const nominatedPharmacy: Pharmacy = {
  id: 'ph-001',
  name: "Hickey's Pharmacy",
  address: '21 Grafton Street, Dublin 2, D02 FK81',
  city: 'Dublin',
  phone: '(01) 677 0043',
  openingHours: 'Mon-Sat: 08:00–20:00, Sun: 10:00–18:00',
};

export const alternativePharmacies: Pharmacy[] = [
  {
    id: 'ph-002',
    name: "McCabe's Pharmacy",
    address: '30 Camden Street Lower, Dublin 2',
    city: 'Dublin',
    phone: '(01) 475 1363',
    openingHours: 'Mon-Fri: 09:00–18:00, Sat: 09:00–17:00',
  },
  {
    id: 'ph-003',
    name: 'Boots Pharmacy',
    address: "St Stephen's Green Shopping Centre, Dublin 2",
    city: 'Dublin',
    phone: '(01) 478 4368',
    openingHours: 'Mon-Sat: 09:00–19:00, Sun: 11:00–18:00',
  },
  {
    id: 'ph-004',
    name: 'LloydsPharmacy',
    address: '4 Henry Street, Dublin 1',
    city: 'Dublin',
    phone: '(01) 873 0427',
    openingHours: 'Mon-Sat: 08:30–18:30, Sun: 12:00–18:00',
  },
  {
    id: 'ph-005',
    name: 'Cara Pharmacy',
    address: 'Jervis Shopping Centre, Dublin 1',
    city: 'Dublin',
    phone: '(01) 878 8070',
    openingHours: 'Mon-Sat: 09:00–18:30, Sun: 12:00–18:00',
  },
];
