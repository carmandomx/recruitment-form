import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { FormValuesAddressExtraInfo } from "../../interface/FormValuesAddressExtraInfo";

interface AddressExtraInfoProps {
  initialValues?: FormValuesAddressExtraInfo;
  handleNext: (values: any) => void;
  handlePrev: (values: any) => void;
}

const INITIAL_VALUES: FormValuesAddressExtraInfo = {
  TypeOfResidency: "",
  OtherTypeOfResidency: "",
  AmountOfPeople: "",
};

const validationSchema = yup.object().shape({
  TypeOfResidency: yup.string().required("Type of Residency is required"),
  AmountOfPeople: yup.string().required("Amount of People is required"),
});

const typeOfHomes = [
  { value: "rented", label: "Rented" },
  { value: "ownedByMyParents", label: "Owned by my parents" },
  { value: "ownedByMe", label: "Owned by me" },
  { value: "other", label: "Other" },
];

export const AddressExtraInfo: React.FC<AddressExtraInfoProps> = ({
  handlePrev,
  handleNext,
  initialValues = INITIAL_VALUES,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleNext(values);
    },
  });

  const handleTypeOfResidencyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const TypeOfResidency = event.target.value;
    if (TypeOfResidency === "other") {
      formik.setFieldValue("OtherTypeOfResidency", "");
    }
    formik.handleChange(event);
  };

  return (
    <Box p={2}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl margin="normal" fullWidth>
          <FormLabel component="legend">Type of Residency</FormLabel>
          <RadioGroup
            name="TypeOfResidency"
            value={formik.values.TypeOfResidency}
            onChange={handleTypeOfResidencyChange}
            row
          >
            {typeOfHomes.map((typeOfHome) => (
              <FormControlLabel
                key={typeOfHome.value}
                value={typeOfHome.value}
                control={<Radio />}
                label={typeOfHome.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
        {formik.values.TypeOfResidency === "other" && (
          <FormControl margin="normal" fullWidth>
            <TextField
              label="Other type of Residency"
              value={formik.values.OtherTypeOfResidency}
              onChange={formik.handleChange}
              helperText={
                formik.touched.OtherTypeOfResidency &&
                formik.errors.OtherTypeOfResidency
              }
            />
          </FormControl>
        )}
        <FormControl margin="normal" fullWidth>
          <InputLabel id="amount-people">Amount of people</InputLabel>
          <Select
            labelId="amount-label"
            name="AmountOfPeople"
            value={formik.values.AmountOfPeople}
            onChange={formik.handleChange}
            error={
              formik.touched.AmountOfPeople &&
              Boolean(formik.errors.AmountOfPeople)
            }
            fullWidth
          >
            <MenuItem value="Alone">I live alone</MenuItem>
            <MenuItem value="Parents">I live with my parents</MenuItem>
            <MenuItem value="Others">I live with my significant other</MenuItem>
            <MenuItem value="OthersAndKids">
              I live with my significant other and my kids
            </MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Prev */}
          <Button
            onClick={handlePrev}
            variant="contained"
            color="primary"
            type="submit"
          >
            Prev
          </Button>
          {/* Next */}
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};
