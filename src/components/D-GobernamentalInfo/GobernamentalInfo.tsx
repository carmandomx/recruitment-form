import { Box, Button, FormControl, IconButton, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

interface GobernamentalInfoProps {
  initialValues?: FromValuesGobernamentalInfo;
  birthCountry: string;
  handleNext: (values: any) => void;
  handlePrev: (values: any) => void;
}

interface FromValuesGobernamentalInfo {
  identification: string;
}

const INITIAL_VALUES: FromValuesGobernamentalInfo = {
  identification: "",
};

const validationSchema = yup.object().shape({
  identification: yup.string().required("Identification is required"),
});

export const GobernamentalInfo: React.FC<GobernamentalInfoProps> = ({
  handleNext,
  handlePrev,
  initialValues = INITIAL_VALUES,
  birthCountry,
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

  const labelField = () => {
    return birthCountry === "Mexico" ? "curp" : "passport";
  };

  return (
    <Box p={2}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl margin="normal" fullWidth>
          <TextField
            label={labelField()}
            name="identification"
            value={formik.values.identification}
            onChange={formik.handleChange}
            error={
              formik.touched.identification &&
              Boolean(formik.errors.identification)
            }
            helperText={
              formik.touched.identification && formik.errors.identification
            }
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
