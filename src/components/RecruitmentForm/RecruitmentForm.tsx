import { Container, Grid, Paper } from "@mui/material";
import PersonalInformation from "../A-PersonalInformation";
import { AddressInformation } from "../B-AddressInformation/AddressInformation";
import { AddressExtraInfo } from "../C-AddressExtraInfo/AddressExtraInfo";
import { GobernamentalInfo } from "../D-GobernamentalInfo/GobernamentalInfo";
import { ExtraPersonalInfo } from "../E-ExtraPersonalInfo/ExtraPersonalInfo";
import { BankAccountInfo } from "../H-BankAccountInfo/BankAccountInfo";
import HorizontalLinearStepper from "../HorizontalLinearStepper/HorizontalLinearStepper";
import { Skills } from "../I-Skills/Skills";
import { useState } from "react";
import { DisplayInfo } from "../DisplayInfo/DisplayInfo";

type Props = {};

const steps = [
  "Personal Information",
  "Address Information",
  "Address Extra Info",
  "Gobernamental Info",
  "Extra Personal Info",
  "Bank Account Info",
  "Skills",
];

export const RecruitmentForm = (props: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState<any>();

  const handleNext = (values: any) => {
    setCurrentStep(currentStep + 1);
    setForm({ ...form, ...values });
  };
  const handlePrev = () => setCurrentStep(currentStep - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "100vh" }}
            >
              <Grid item>
                <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                  {/* Component form */}
                  <PersonalInformation handleNext={handleNext} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        );
      case 1:
        return (
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "100vh" }}
            >
              <Grid item>
                <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                  {/* Component form */}
                  <AddressInformation
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        );
      case 2:
        return (
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "100vh" }}
            >
              <Grid item>
                <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                  {/* Component form */}
                  <AddressExtraInfo
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        );
      case 3:
        return (
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "100vh" }}
            >
              <Grid item>
                <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                  {/* Component form */}
                  <GobernamentalInfo
                    birthCountry={form.birthCountry}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        );
      case 4:
        return (
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "100vh" }}
            >
              <Grid item>
                <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                  {/* Component form */}
                  <ExtraPersonalInfo
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        );
      case 5:
        return (
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "100vh" }}
            >
              <Grid item>
                <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                  {/* Component form */}
                  <BankAccountInfo
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        );
      case 6:
        return (
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "100vh" }}
            >
              <Grid item>
                <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                  {/* Component form */}
                  <Skills handleNext={handleNext} handlePrev={handlePrev} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        );
      case 7:
        return (
          <>
            <Container maxWidth="xl">
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
              >
                <Grid item>
                  <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                    {/* Component form */}
                    <DisplayInfo formData={form} />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </>
        );
      default:
        return "Error";
    }
  };

  return (
    <div>
      <HorizontalLinearStepper steps={steps} activeStep={currentStep} />
      {renderStep()}
    </div>
  );
};
