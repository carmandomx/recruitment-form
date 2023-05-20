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
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import UploadButton from "../UploadButton";
import { FormValuesExtraPersonalInfo } from "../../interface/FormValuesExtraPersonalInfo";

interface ExtraPersonalInfoProps {
  initialValues?: FormValuesExtraPersonalInfo;
  handlePrev: (values: any) => void;
  handleNext: (values: any) => void;
}

const INITIAL_VALUES: FormValuesExtraPersonalInfo = {
  phone: 0,
  email: "",
  altEmail: "",
  foundUs: "",
  otherFoundUs: "",
  comment: "",

  degree: "",
  noFormalEducation: "",
  otherDegree: "",

  universityName: "",
  universityCity: "",
  universityState: "",
  universityCountry: "",
  nameDegree: "",
  finishClass: "",
  haveDegree: "",
  license: "",
  scholarship: "",

  scholarshipLevel: "",
  scholarshipKind: "",
  duration: 0,
};

const degreeValidation = (fieldName: string) => {
  return yup.string().when("degree", {
    is: (value: string) =>
      [
        "degreeInProgress",
        "university",
        "mastersInProgress",
        "mastersDegree",
        "phdInProgress",
        "phd",
      ].includes(value),
    then: (schema) => schema.required(`${fieldName} is required`),
    otherwise: (schema) => schema.nullable(),
  });
};

const validationSchema = yup.object().shape({
  phone: yup.string().required("Phone is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("E-Mail is required"),
  altEmail: yup.string().required("Alternative E-Mail is required"),
  foundUs: yup.string().required("How you found us? is required"),
  otherFoundUs: yup.string().nullable(),
  comment: yup.string().required("Comment is required"),

  degree: yup.string().required("Degree is required"),
  noFormalEducation: yup.string().nullable(),
  otherDegree: yup.string().nullable(),

  universityName: degreeValidation("University"),
  universityCity: degreeValidation("City"),
  universityState: degreeValidation("State"),
  universityCountry: degreeValidation("Country"),
  nameDegree: degreeValidation("Name of the degree"),
  finishClass: yup.string().nullable(),
  haveDegree: yup.string().nullable(),
  license: yup.string().nullable(),
  scholarship: yup.string().nullable(),
});

const howFoundUs = [
  { value: "recommendation", label: "Recommendation" },
  { value: "facebook", label: "Facebook" },
  { value: "linkedIn", label: "LinkedIn" },
  { value: "instragram", label: "Instragram" },
  { value: "myUniversity", label: "My university" },
  { value: "google", label: "Google" },
  { value: "other", label: "Other" },
];

export const ExtraPersonalInfo: React.FC<ExtraPersonalInfoProps> = ({
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

  const hanldeFoundUs = (event: React.ChangeEvent<HTMLInputElement>) => {
    const foundUs = event.target.value;
    if (foundUs === "other") {
      formik.setFieldValue("otherFoundUs", "");
    }
    formik.handleChange(event);
  };

  const optionalRender = () => {
    const validAnswers = [
      "degreeInProgress",
      "university",
      "mastersInProgress",
      "mastersDegree",
      "phdInProgress",
      "phd",
    ];

    return validAnswers.includes(formik.values.degree);
  };

  const degrees = [
    { value: "highschool", label: "Highschool or equivalent" },
    { value: "degreeInProgress", label: "Incomplete degree or in progress" },
    { value: "university", label: "University degree" },
    { value: "mastersInProgress", label: "Incomplete masters or in progress" },
    { value: "mastersDegree", label: "Masters degree" },
    { value: "phdInProgress", label: "Imcomplete PHD or in progress" },
    { value: "phd", label: "PHD" },
    { value: "noFormalEducation", label: "No formal education" },
    { value: "otherDegree", label: "Other" },
  ];

  const finishClasses = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const haveDegrees = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const licenses = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const scholarships = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  // Handlers
  const handleDegreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const degree = event.target.value;
    if (degree === "other") {
      formik.setFieldValue("otherDegreer", "");
    }
    formik.handleChange(event);
  };

  const handleFinishClassChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // const finishClass = event.target.value;

    formik.handleChange(event);
  };

  const handleHaveDegreeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // const haveDegree = event.target.value;

    formik.handleChange(event);
  };

  const handleScholarshipChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // const scholarship = event.target.value;

    formik.handleChange(event);
  };

  const handleLicenseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const license = event.target.value;

    formik.handleChange(event);
  };

  return (
    <Box p={2}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Alternative E-Mail"
            name="altEmail"
            value={formik.values.altEmail}
            onChange={formik.handleChange}
            error={formik.touched.altEmail && Boolean(formik.errors.altEmail)}
            helperText={formik.touched.altEmail && formik.errors.altEmail}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <FormLabel component="legend">How did you found about us?</FormLabel>
          <RadioGroup
            name="foundUs"
            value={formik.values.foundUs}
            onChange={hanldeFoundUs}
            row
          >
            {howFoundUs.map((items) => (
              <FormControlLabel
                key={items.value}
                value={items.value}
                control={<Radio />}
                label={items.label}
              ></FormControlLabel>
            ))}
          </RadioGroup>
        </FormControl>
        {formik.values.foundUs === "other" && (
          <FormControl margin="normal" fullWidth>
            <TextField
              label="Other"
              name="otherFoundUs"
              value={formik.values.otherFoundUs}
              onChange={formik.handleChange}
              error={
                formik.touched.otherFoundUs &&
                Boolean(formik.errors.otherFoundUs)
              }
              helperText={
                formik.touched.otherFoundUs && formik.errors.otherFoundUs
              }
            />
          </FormControl>
        )}
        <FormLabel component="legend">
          What do you like the most about Software Development?
        </FormLabel>
        <TextField
          name="comment"
          value={formik.values.comment}
          onChange={formik.handleChange}
          error={formik.touched.comment && Boolean(formik.errors.comment)}
          helperText={formik.touched.comment && formik.errors.comment}
          variant="outlined"
          placeholder="Write"
          multiline
          rows={6}
          // maxRows={6}
          fullWidth
        />

        <FormControl fullWidth>
          <FormLabel component="legend">
            What is your highest degree of studies?
          </FormLabel>
          <RadioGroup
            name="degree"
            value={formik.values.degree}
            onChange={handleDegreeChange}
            row
          >
            {degrees.map((degree) => (
              <FormControlLabel
                key={degree.value}
                value={degree.value}
                control={<Radio />}
                label={degree.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
        {formik.values.degree === "noFormalEducation" && (
          <FormControl margin="normal" fullWidth>
            <TextField
              label="No formal education"
              name="noFormalEducation"
              variant="outlined"
              placeholder="Write"
              multiline
              rows={6}
              fullWidth
              value={formik.values.noFormalEducation}
              onChange={formik.handleChange}
              error={
                formik.touched.noFormalEducation &&
                Boolean(formik.errors.noFormalEducation)
              }
              helperText={
                formik.touched.noFormalEducation &&
                formik.errors.noFormalEducation
              }
            />
          </FormControl>
        )}
        {formik.values.degree === "otherDegree" && (
          <FormControl margin="normal" fullWidth>
            <TextField
              label="Other"
              name="otherDegree"
              value={formik.values.otherDegree}
              onChange={formik.handleChange}
              error={
                formik.touched.otherDegree && Boolean(formik.errors.otherDegree)
              }
              helperText={
                formik.touched.otherDegree && formik.errors.otherDegree
              }
            />
          </FormControl>
        )}
        <hr />
        {optionalRender() && (
          <>
            <FormControl margin="normal" fullWidth>
              <TextField
                label="University Name*"
                name="universityName"
                value={formik.values.universityName}
                onChange={formik.handleChange}
                error={
                  formik.touched.universityName &&
                  Boolean(formik.errors.universityName)
                }
                helperText={
                  formik.touched.universityName && formik.errors.universityName
                }
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <TextField
                label="City*"
                name="universityCity"
                value={formik.values.universityCity}
                onChange={formik.handleChange}
                error={
                  formik.touched.universityCity &&
                  Boolean(formik.errors.universityCity)
                }
                helperText={
                  formik.touched.universityCity && formik.errors.universityCity
                }
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <TextField
                label="State*"
                name="universityState"
                value={formik.values.universityState}
                onChange={formik.handleChange}
                error={
                  formik.touched.universityState &&
                  Boolean(formik.errors.universityState)
                }
                helperText={
                  formik.touched.universityState &&
                  formik.errors.universityState
                }
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <TextField
                label="Country*"
                name="universityCountry"
                value={formik.values.universityCountry}
                onChange={formik.handleChange}
                error={
                  formik.touched.universityCountry &&
                  Boolean(formik.errors.universityCountry)
                }
                helperText={
                  formik.touched.universityCountry &&
                  formik.errors.universityCountry
                }
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <TextField
                label="Name of the degree*"
                name="nameDegree"
                value={formik.values.nameDegree}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameDegree && Boolean(formik.errors.nameDegree)
                }
                helperText={
                  formik.touched.nameDegree && formik.errors.nameDegree
                }
              />
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <FormLabel component="legend">
                Did you finish all your classes?
              </FormLabel>
              <RadioGroup
                name="finishClass"
                value={formik.values.finishClass}
                onChange={handleFinishClassChange}
                row
              >
                {finishClasses.map((items) => (
                  <FormControlLabel
                    key={items.value}
                    value={items.value}
                    control={<Radio />}
                    label={items.label}
                  ></FormControlLabel>
                ))}
              </RadioGroup>
            </FormControl>
            {formik.values.finishClass === "yes" && <UploadButton />}

            <FormControl margin="normal" fullWidth>
              <FormLabel component="legend">Do you have your degree?</FormLabel>
              <RadioGroup
                name="haveDegree"
                value={formik.values.haveDegree}
                onChange={handleHaveDegreeChange}
                row
              >
                {haveDegrees.map((items) => (
                  <FormControlLabel
                    key={items.value}
                    value={items.value}
                    control={<Radio />}
                    label={items.label}
                  ></FormControlLabel>
                ))}
              </RadioGroup>
            </FormControl>
            {formik.values.haveDegree === "yes" && <UploadButton />}

            <FormControl margin="normal" fullWidth>
              <FormLabel component="legend">
                Do you have your license (cedula profesional)?
              </FormLabel>
              <RadioGroup
                name="license"
                value={formik.values.license}
                onChange={handleLicenseChange}
                row
              >
                {licenses.map((items) => (
                  <FormControlLabel
                    key={items.value}
                    value={items.value}
                    control={<Radio />}
                    label={items.label}
                  ></FormControlLabel>
                ))}
              </RadioGroup>
            </FormControl>
            {formik.values.license === "yes" && <UploadButton />}

            <FormControl margin="normal" fullWidth>
              <FormLabel component="legend">
                Did you have an scholarship?
              </FormLabel>
              <RadioGroup
                name="scholarship"
                value={formik.values.scholarship}
                onChange={handleScholarshipChange}
                row
              >
                {scholarships.map((items) => (
                  <FormControlLabel
                    key={items.value}
                    value={items.value}
                    control={<Radio />}
                    label={items.label}
                  ></FormControlLabel>
                ))}
              </RadioGroup>
            </FormControl>
            {formik.values.scholarship === "yes" && (
              <>
                <FormControl margin="normal" fullWidth>
                  <InputLabel id="scholarshipLevel-label">Country*</InputLabel>
                  <Select
                    labelId="scholarshipLevel-label"
                    name="scholarshipLevel"
                    value={formik.values.scholarshipLevel}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.scholarshipLevel &&
                      Boolean(formik.errors.scholarshipLevel)
                    }
                    fullWidth
                  >
                    <MenuItem value="Highschool">Highschool</MenuItem>
                    <MenuItem value="University">University</MenuItem>
                    <MenuItem value="Masters">Masters</MenuItem>
                    <MenuItem value="PHD">PHD</MenuItem>
                  </Select>
                </FormControl>

                <FormControl margin="normal" fullWidth>
                  <InputLabel id="scholarshipKind-label">Country*</InputLabel>
                  <Select
                    labelId="scholarshipKind-label"
                    name="scholarshipKind"
                    value={formik.values.scholarshipKind}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.scholarshipKind &&
                      Boolean(formik.errors.scholarshipKind)
                    }
                    fullWidth
                  >
                    <MenuItem value="Academics">Academics</MenuItem>
                    <MenuItem value="Sports">Sports</MenuItem>
                    <MenuItem value="Goverment-backed">
                      Goverment-backed
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl margin="normal" fullWidth>
                  <TextField
                    label="Duration"
                    name="duration"
                    value={formik.values.duration}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.duration && Boolean(formik.errors.duration)
                    }
                    helperText={
                      formik.touched.duration && formik.errors.duration
                    }
                  />
                </FormControl>
              </>
            )}
          </>
        )}
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
