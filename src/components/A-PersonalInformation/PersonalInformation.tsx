import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormValues } from "../../interface/FormValues";

export interface PersonalInformationProps {
  initialValues?: FormValues;
  handleNext: (values: any) => void;
}

export interface PersonalInfo {
  handleSubmit: () => void;
}

const INITIAL_VALUES: FormValues = {
  name: "",
  paternalLastName: "",
  maternalLastName: "",
  gender: "",
  otherGender: "",
  dateOfBirth: null,
  placeOfBirth: "",
  birthCity: "",
  birthState: "",
  birthCountry: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  paternalLastName: yup.string().required("Paternal last name is required"),
  maternalLastName: yup.string().nullable(),
  gender: yup.string().required("Gender is required"),
  otherGender: yup.string().nullable(),
  dateOfBirth: yup.date().required("Date of birth is required"),
  placeOfBirth: yup.string().required("Place of birth is required"),
  birthCity: yup.string().required("City is required"),
  birthState: yup.string().required("State is required"),
  birthCountry: yup.string().required("Country is required"),
});

const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
  { value: "preferNotToSay", label: "I'd rather not say" },
];

export const PersonalInformation: React.FC<PersonalInformationProps> = ({
  handleNext,
  initialValues = INITIAL_VALUES,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleNext(values);
    },
  });

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const gender = event.target.value;
    if (gender === "other") {
      formik.setFieldValue("otherGender", "");
    }
    formik.setFieldValue("gender", event.target.value);
    console.log(formik.values);
  };

  return (
    <Box p={2}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Paternal last name"
            name="paternalLastName"
            value={formik.values.paternalLastName}
            onChange={formik.handleChange}
            error={
              formik.touched.paternalLastName &&
              Boolean(formik.errors.paternalLastName)
            }
            helperText={
              formik.touched.paternalLastName && formik.errors.paternalLastName
            }
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Maternal last name"
            name="maternalLastName"
            value={formik.values.maternalLastName}
            onChange={formik.handleChange}
            error={
              formik.touched.maternalLastName &&
              Boolean(formik.errors.maternalLastName)
            }
            helperText={
              formik.touched.maternalLastName && formik.errors.maternalLastName
            }
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <FormLabel component="legend">Gender*</FormLabel>
          <RadioGroup
            name="gender"
            value={formik.values.gender}
            onChange={handleGenderChange}
            row
          >
            {genders.map((gender) => (
              <FormControlLabel
                key={gender.value}
                value={gender.value}
                control={<Radio />}
                label={gender.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
        {formik.values.gender === "other" && (
          <FormControl margin="normal" fullWidth>
            <TextField
              label="Other gender"
              name="otherGender"
              value={formik.values.otherGender}
              onChange={formik.handleChange}
              error={
                formik.touched.otherGender && Boolean(formik.errors.otherGender)
              }
              helperText={
                formik.touched.otherGender && formik.errors.otherGender
              }
            />
          </FormControl>
        )}
        <FormControl margin="normal" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth (YYYY-MM-DD)"
              value={formik.values.dateOfBirth}
              onChange={(date: Date | null) => {
                formik.setFieldValue("dateOfBirth", new Date(date as Date));
              }}
            />
          </LocalizationProvider>
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Place of Birth"
            name="placeOfBirth"
            value={formik.values.placeOfBirth}
            onChange={formik.handleChange}
            error={
              formik.touched.placeOfBirth && Boolean(formik.errors.placeOfBirth)
            }
            helperText={
              formik.touched.placeOfBirth && formik.errors.placeOfBirth
            }
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="City*"
            name="birthCity"
            value={formik.values.birthCity}
            onChange={formik.handleChange}
            error={formik.touched.birthCity && Boolean(formik.errors.birthCity)}
            helperText={formik.touched.birthCity && formik.errors.birthCity}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="State*"
            name="birthState"
            value={formik.values.birthState}
            onChange={formik.handleChange}
            error={
              formik.touched.birthState && Boolean(formik.errors.birthState)
            }
            helperText={formik.touched.birthState && formik.errors.birthState}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel id="birthCountry-label">Country*</InputLabel>
          <Select
            labelId="birthCountry-label"
            name="birthCountry"
            value={formik.values.birthCountry}
            onChange={formik.handleChange}
            error={
              formik.touched.birthCountry && Boolean(formik.errors.birthCountry)
            }
            fullWidth
          >
            <MenuItem value="USA">United States of America</MenuItem>
            <MenuItem value="Mexico">Mexico</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="Spain">Spain</MenuItem>
            <MenuItem value="France">France</MenuItem>
            <MenuItem value="Japan">Japan</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};
