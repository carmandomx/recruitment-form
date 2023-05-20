import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FormValuesSkills } from "../../interface/FormValuesSkills";

interface SkillsProps {
  initialValues?: FormValuesSkills;
  handlePrev: (values: any) => void;
  handleNext: (values: any) => void;
}

const INITIAL_VALUES: FormValuesSkills = {
  knowProgramming: "",
  experience: "",
  disability: "",
};

const validationSchema = yup.object().shape({
  knowProgramming: yup
    .string()
    .required("Programming knowledge field is required"),
  experience: yup.string().required("Experience field is required"),
  disability: yup.string().required("Disability field is required"),
});

export const Skills: React.FC<SkillsProps> = ({
  handleNext,
  handlePrev,
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

  return (
    <Box p={2}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl margin="normal" fullWidth>
          <FormLabel component="legend">
            Do you know a programming language?
          </FormLabel>
          <TextField
            label="Write a programming language"
            name="knowProgramming"
            value={formik.values.knowProgramming}
            onChange={formik.handleChange}
            error={
              formik.touched.knowProgramming &&
              Boolean(formik.errors.knowProgramming)
            }
            helperText={
              formik.touched.knowProgramming && formik.errors.knowProgramming
            }
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel id="country-label">Amount of experience</InputLabel>
          <Select
            labelId="experience-label"
            name="experience"
            value={formik.values.experience}
            onChange={formik.handleChange}
            error={
              formik.touched.experience && Boolean(formik.errors.experience)
            }
            fullWidth
          >
            <MenuItem value="ThreeMonths">Less than 3 months</MenuItem>
            <MenuItem value="Three-SixMonths">3 to 6 months</MenuItem>
            <MenuItem value="Six-TwelveMonths">6 to 12 months</MenuItem>
            <MenuItem value="Twelve-PlusMonths">More than 12 months</MenuItem>
          </Select>
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel id="country-label">
            Do you have any disability?
          </InputLabel>
          <Select
            labelId="disability-label"
            name="disability"
            value={formik.values.disability}
            onChange={formik.handleChange}
            error={
              formik.touched.disability && Boolean(formik.errors.disability)
            }
            fullWidth
          >
            <MenuItem value="none">None</MenuItem>
            <MenuItem value="motorSkills">Motor skills</MenuItem>
            <MenuItem value="auditoryDisability">Auditory disability</MenuItem>
            <MenuItem value="visualImpairment">Visual impairment</MenuItem>
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
