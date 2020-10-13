import React, { useState } from 'react'
import PersonalDetailsForm from "./PersonalDetailsForm"
import EducationalInfo from "./EducationalInfoForm"
import Success from "./Success"
import {
  Step,
  StepLabel,
  Stepper,
  Button,
  Box,
}
  from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

// CSS Styles
const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  container: {
    padding: "3rem 1rem",
    paddingBottom: "3rem",
    background: "#FAFAFA",
  },
  formContainer: {
    maxWidth: "606px",
    background: "#FFFFFF",
    borderRadius: "0px 0px 16px 16px",
    padding: "2rem 4rem 5rem 4rem",
    margin: "1rem auto",
  },
}));

function getSteps() {
  return ['PERSONAL DETAILS', 'EDUCATIONAL INFORMATION'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <PersonalDetailsForm />;
    case 1:
      return <EducationalInfo />;
    default:
      return 'Unknown stepIndex';
  }
}

const ApplicantForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.container}>
      {activeStep === steps.length ? "" : (
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel style={{ color: "#182C51", }}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      )}
      <div>
        {activeStep === steps.length ? (
          <div>
            <Success />
          </div>
        ) : (
            <div className={classes.formContainer}>
              <Box className={classes.instructions}>{getStepContent(activeStep)}</Box>
              <div>
                <Button
                  style={{
                    width: "7.5rem",
                    color: "#00487C",
                    backgroundColor: "#F4F7F9"
                  }}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
              </Button>
                <Button
                  style={{
                    width: "7.5rem",
                    backgroundColor: "#00487C",
                  }}
                  disableElevation
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'APPLY' : 'NEXT'}
                </Button>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default ApplicantForm
