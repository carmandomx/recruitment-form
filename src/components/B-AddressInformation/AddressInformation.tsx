import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  SnackbarContent,
  TextField,
} from "@mui/material";
import { FormValuesAddress } from "../../interface/FormValuesAddress";

interface AddressInformationProps {
  initialValues?: FormValuesAddress;
  handleNext: (values: any) => void;
  handlePrev: (values: any) => void;
}

const INITIAL_VALUES: FormValuesAddress = {
  streetA: "",
  streetB: "",
  colony: "",
  addressCity: "",
  addressState: "",
  postalCode: 0,
};

const validationSchema = yup.object().shape({
  streetA: yup.string().required("StreetA is required"),
  colony: yup.string().required("Colony is required"),
});

export const AddressInformation: React.FC<AddressInformationProps> = ({
  handleNext,
  handlePrev,
  initialValues = INITIAL_VALUES,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleNext(values);
    },
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    // Do something with the files
  };

  return (
    <Box p={2}>
      <SnackbarContent
        message={
          "Please provide your current address as we're going to deliver important documents later in the process"
        }
      />
      <form onSubmit={formik.handleSubmit}>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="StreetA"
            name="streetA"
            value={formik.values.streetA}
            onChange={formik.handleChange}
            error={formik.touched.streetA && Boolean(formik.errors.streetA)}
            helperText={formik.touched.streetA && formik.errors.streetA}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="StreetB"
            name="streetB"
            value={formik.values.streetB}
            onChange={formik.handleChange}
            error={formik.touched.streetB && Boolean(formik.errors.streetB)}
            helperText={formik.touched.streetB && formik.errors.streetB}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Colony"
            name="colony"
            value={formik.values.colony}
            onChange={formik.handleChange}
            error={formik.touched.colony && Boolean(formik.errors.colony)}
            helperText={formik.touched.colony && formik.errors.colony}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="City"
            name="addressCity"
            value={formik.values.addressCity}
            onChange={formik.handleChange}
            error={
              formik.touched.addressCity && Boolean(formik.errors.addressCity)
            }
            helperText={formik.touched.addressCity && formik.errors.addressCity}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="State"
            name="addressState"
            value={formik.values.addressState}
            onChange={formik.handleChange}
            error={
              formik.touched.addressState && Boolean(formik.errors.addressState)
            }
            helperText={
              formik.touched.addressState && formik.errors.addressState
            }
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Postal Code"
            name="postalCode"
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            error={
              formik.touched.postalCode && Boolean(formik.errors.postalCode)
            }
            helperText={formik.touched.postalCode && formik.errors.postalCode}
          />
        </FormControl>
        {/* Upload img */}
        <Button variant="contained" component="label">
          Upload file
          <input
            hidden
            accept=".pdf,.jpg,.png"
            multiple
            type="file"
            onChange={handleFileUpload}
          />
        </Button>
        <br />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input
            hidden
            accept=".pdf,.jpg,.png"
            type="file"
            onChange={handleFileUpload}
          />
        </IconButton>
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
