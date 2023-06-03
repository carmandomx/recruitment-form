export interface FormValues {
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
}
