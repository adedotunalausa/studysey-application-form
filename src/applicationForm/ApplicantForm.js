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
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

// CSS Styles
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1240,
      xl: 1920,
    },
  },
  spacing: factor => `${0.25 * factor}rem`,
});

const useStyles = makeStyles(() => ({
  backButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  container: {
    padding: "3rem 1rem",
    paddingBottom: "3rem",
    background: "#FAFAFA",
    [theme.breakpoints.up('sm')]: {
      padding: "3rem 3.5rem",
    },
  },
  stepperContainer: {
    maxWidth: "606px",
    margin: "0 auto",
    borderRadius: "8px 8px 0 0",
    [theme.breakpoints.up('sm')]: {
      padding: "1.5rem 4rem 1.5rem 4rem",
    },
  },
  formContainer: {
    maxWidth: "606px",
    background: "#FFFFFF",
    borderRadius: "0px 0px 16px 16px",
    padding: "2rem 1rem 5rem 1rem",
    margin: "1rem auto",
    [theme.breakpoints.up('sm')]: {
      padding: "2rem 4rem 5rem 4rem",
    },
  },
  buttonContainer: {
    margin: "0 auto",
    paddingLeft: "0.5rem",
    [theme.breakpoints.up('sm')]: {
      paddingLeft: "1.5rem",
    },
  }
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
        <Stepper className={classes.stepperContainer} activeStep={activeStep}>
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
              <Box className={classes.instructions}>
                {getStepContent(activeStep)}
              </Box>
              <div className={classes.buttonContainer}>
                <Button
                  style={{
                    fontSize: "0.8rem",
                    width: "46%",
                    height: "2.625rem",
                    color: "#00487C",
                    backgroundColor: "#F4F7F9",
                    marginRight: "1rem",
                    marginLeft: 0,
                  }}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
              </Button>
                <Button
                  style={{
                    fontSize: "0.8rem",
                    width: "46%",
                    height: "2.625rem",
                    backgroundColor: "#00487C",
                    marginRight: 0,
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
