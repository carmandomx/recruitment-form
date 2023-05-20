import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Box, Button, FormControl, TextField } from "@mui/material";
import { FormValuesBankAccountInfo } from "../../interface/FormValuesBankAccountInfo";

interface BankAccountInfoProps {
  initialValues?: FormValuesBankAccountInfo;
  handlePrev: (values: any) => void;
  handleNext: (values: any) => void;
}

const INITIAL_VALUES: FormValuesBankAccountInfo = {
  accountNumber: "",
  clabe: "",
  bank: "",
};

const validationSchema = yup.object().shape({
  accountNumber: yup.string().required("Account number is required"),
  clabe: yup.string().required("Clabe is required"),
  bank: yup.string().required("Bank is required"),
});

export const BankAccountInfo: React.FC<BankAccountInfoProps> = ({
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

  return (
    <Box p={2}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Account number"
            name="accountNumber"
            value={formik.values.accountNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.accountNumber &&
              Boolean(formik.errors.accountNumber)
            }
            helperText={
              formik.touched.accountNumber && formik.errors.accountNumber
            }
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Clabe"
            name="clabe"
            value={formik.values.clabe}
            onChange={formik.handleChange}
            error={formik.touched.clabe && Boolean(formik.errors.clabe)}
            helperText={formik.touched.clabe && formik.errors.clabe}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Bank"
            name="bank"
            value={formik.values.bank}
            onChange={formik.handleChange}
            error={formik.touched.bank && Boolean(formik.errors.bank)}
            helperText={formik.touched.bank && formik.errors.bank}
          />
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
