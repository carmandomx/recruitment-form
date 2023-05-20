export interface FormGlobal {
  name: string;
  paternalLastName: string;
  maternalLastName?: string;
  gender: string;
  otherGender?: string;
  dateOfBirth: Date | null;
  placeOfBirth: string;
  birthCity: string;
  birthState: string;
  birthCountry: string;

  streetA: string;
  streetB?: string;
  colony: string;
  addressCity?: string;
  addressState?: string;
  postalCode?: number;

  TypeOfResidency: string;
  OtherTypeOfResidency: string;
  AmountOfPeople: string;

  identification: string;

  accountNumber: string;
  clabe: string;
  bank: string;

  phone: number;
  email: string;
  altEmail: string;
  foundUs: string;
  otherFoundUs: string;

  comment: string;

  degree: string;
  noFormalEducation: string;
  otherDegree?: string;
  universityName: string;
  universityCity: string;
  universityState: string;
  universityCountry: string;
  nameDegree: string;
  finishClass: string;
  haveDegree: string;
  license: string;
  scholarship: string;

  scholarshipLevel: string;
  scholarshipKind: string;
  duration: number;

  knowProgramming: string;
  experience: string;
  disability: string;
}
