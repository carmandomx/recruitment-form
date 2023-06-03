import * as React from "react";
import { FormGlobal } from "../../interface/FormGlobal";
import Typography from "@mui/material/Typography";

type DisplayInfoData = {
  formData: FormGlobal;
};

export const DisplayInfo = ({ formData }: DisplayInfoData) => {
  const {
    name,
    paternalLastName,
    maternalLastName,
    gender,
    dateOfBirth,
    placeOfBirth,
    birthCity,
    birthState,
    birthCountry,

    streetA,
    streetB,
    colony,
    addressCity,
    addressState,
    postalCode,

    TypeOfResidency,
    OtherTypeOfResidency,
    AmountOfPeople,

    identification,

    phone,
    email,
    altEmail,
    foundUs,
    otherFoundUs,
    comment,
    degree,
    noFormalEducation,
    otherDegree,
    universityName,
    universityCity,
    universityState,
    universityCountry,
    nameDegree,
    finishClass,
    haveDegree,
    license,
    scholarship,
    scholarshipLevel,
    scholarshipKind,
    duration,

    accountNumber,
    clabe,
    bank,
    knowProgramming,
    experience,
    disability,
  } = formData;

  return (
    <>
      <Typography>Personal Information</Typography>
      <Typography>Name: {name}</Typography>
      <Typography>Paternal Last Name: {paternalLastName}</Typography>
      <Typography>Maternal Last Name: {maternalLastName}</Typography>
      <Typography>gender: {gender}</Typography>
      <Typography>Date of birth: {`${dateOfBirth}`}</Typography>
      <Typography>Place of birth: {placeOfBirth}</Typography>
      <Typography>City: {birthCity}</Typography>
      <Typography>State: {birthState}</Typography>
      <Typography>Country: {birthCountry}</Typography>
      <hr />
      <Typography>Address Information</Typography>
      <Typography>Street A: {streetA}</Typography>
      <Typography>Street B: {streetB}</Typography>
      <Typography>Colony: {colony}</Typography>
      <Typography>City: {addressCity}</Typography>
      <Typography>State: {addressState}</Typography>
      <Typography>Postal Code: {postalCode}</Typography>
      <hr />
      <Typography>Address Extra Information</Typography>
      <Typography>Type of residency: {TypeOfResidency}</Typography>
      <Typography>Type of residency: {OtherTypeOfResidency}</Typography>
      <Typography>Amount of people: {AmountOfPeople}</Typography>
      <hr />
      <Typography>Gobernamental Information</Typography>
      <Typography>
        {birthCountry === "Mexico" ? "curp" : "passport"}: {identification}
      </Typography>
      <hr />
      <Typography>Extra Personal Information</Typography>
      <Typography>Phone: {phone}</Typography>
      <Typography>E-Mail: {email}</Typography>
      <Typography>Alternative E-Mail: {altEmail}</Typography>
      <Typography>How do you found about us?: {foundUs}</Typography>
      <Typography>How do you found about us?: {otherFoundUs}</Typography>
      <Typography>Comment: {comment}</Typography>
      <Typography>Degree: {degree}</Typography>
      <Typography>Degree: {otherDegree}</Typography>
      <Typography>No Formal Education: {noFormalEducation}</Typography>
      <Typography>University Name: {universityName}</Typography>
      <Typography>City: {universityCity}</Typography>
      <Typography>State: {universityState}</Typography>
      <Typography>Country: {universityCountry}</Typography>
      <Typography>Name degree: {nameDegree}</Typography>
      <Typography>Finish Class: {finishClass}</Typography>
      <Typography>Have Degree: {haveDegree}</Typography>
      <Typography>License: {license}</Typography>
      <Typography>Scholarship: {scholarship}</Typography>
      <Typography>Scholarship level: {scholarshipLevel}</Typography>
      <Typography>Kind of scholarship: {scholarshipKind}</Typography>
      <Typography>Duration: {duration}</Typography>
      <hr />
      <Typography>Bank Account Info</Typography>
      <Typography>Account Number: {accountNumber}</Typography>
      <Typography>CLABE: {clabe}</Typography>
      <Typography>Bank: {bank}</Typography>
      <hr />
      <Typography>Skills</Typography>
      <Typography>Know Programming: {knowProgramming}</Typography>
      <Typography>Experience: {experience}</Typography>
      <Typography>Disability: {disability}</Typography>
    </>
  );
};
