import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface HorizontalLinearStepperProps {
  steps: string[];
  activeStep: number;
  handlePrev: () => void;
  handleNext: () => void;
}

const HorizontalLinearStepper: React.FC<HorizontalLinearStepperProps> = ({
  steps,
  activeStep,
  handlePrev,
  handleNext,
}) => {
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 99;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          {/* <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handlePrev}
            sx={{ mr: 1 }}
          >
            Back
          </Button> */}
          <Box sx={{ flex: "1 1 auto" }} />
          {/* <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button> */}
        </Box>
      </React.Fragment>
    </Box>
  );
};

export default HorizontalLinearStepper;
