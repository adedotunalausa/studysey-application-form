import React, { useState } from 'react'
import {
  Typography,
  Box,
  Grid,
  Radio,
  InputBase,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'

// CSS Styles
const useStyles = makeStyles(() => ({
  radio: {
    color: "#00487C",
  },
  container: {
    padding: "1rem",
    paddingBottom: "3rem",
    background: "#FFFFFF",
  },
  textField: {
    border: "1px solid #00487C",
    borderRadius: "5px",
    width: "250px",
    height: "42px",
    padding: "1rem",
    fontSize: "0.9rem",
    marginBottom: "2rem",
  },
  label: {
    marginBottom: "0.5rem",
    color: "000000, 90%",
    fontWeight: 400,
  },
  radioGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1.5rem",
  },
}));

const CustomRadio = withStyles({
  root: {
    color: "#00487C",
    '&$checked': {
      color: "#00487C",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const EducationalInfoForm = () => {
  const classes = useStyles();
  const [value, setValue] = useState('Spring (January to April) Year');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Box className={classes.container}>
        <>
          <Typography
            className={classes.label}
            component="legend">Level of Degree of Program</Typography>
          <InputBase className={classes.textField} variant="outlined" />
        </>
        <>
          <Typography
            className={classes.label}
            component="legend">University</Typography>
          <InputBase className={classes.textField} variant="outlined" />
        </>
        <Typography style={{ marginBottom: "0.8rem" }} component="legend">Preferred Start Date</Typography>
        <Box className={classes.radioGroup}>
          <Box style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
            <CustomRadio
              checked={value === "Spring (January to April) Year"}
              onChange={handleChange}
              value="Spring (January to April) Year"
              inputProps={{ 'aria-label': 'Spring (January to April) Year' }}
            />
            <Typography component="legend">Spring (January to April) Year</Typography>
          </Box>
          <Box style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
            <CustomRadio
              checked={value === "Summer (May to July) Year "}
              onChange={handleChange}
              value="Summer (May to July) Year "
              inputProps={{ 'aria-label': "Summer (May to July) Year " }}
            />
            <Typography component="legend">Summer (May to July) Year </Typography>
          </Box>
          <Box style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
            <CustomRadio
              checked={value === "Autumn (September to November) Year "}
              onChange={handleChange}
              value="Autumn (September to November) Year "
              inputProps={{ 'aria-label': "Autumn (September to November) Year " }}
            />
            <Typography component="legend">Autumn (September to November) Year </Typography>
          </Box>
        </Box>
        <>
          <Typography
            className={classes.label}
            component="legend">Highest Level of Education</Typography>
          <InputBase className={classes.textField} variant="outlined" />
        </>
        <>
          <Typography
            className={classes.label}
            component="legend">Type of Institution</Typography>
          <InputBase className={classes.textField} variant="outlined" />
        </>
        <>
          <Typography
            className={classes.label}
            component="legend">Name of Institution</Typography>
          <InputBase className={classes.textField} variant="outlined" />
        </>
        <>
          <Typography
            className={classes.label}
            component="legend">Address of Institution</Typography>
          <InputBase className={classes.textField} variant="outlined" />
        </>
        <Grid>
          <>
            <Typography
              className={classes.label}
              component="legend">Country</Typography>
            <InputBase className={classes.textField} variant="outlined" />
          </>
          <>
            <Typography
              className={classes.label}
              component="legend">State</Typography>
            <InputBase className={classes.textField} variant="outlined" />
          </>
        </Grid>
        <>
          <Typography
            className={classes.label}
            component="legend">Graduation Year</Typography>
          <InputBase className={classes.textField} variant="outlined" />
        </>
        <Typography style={{ fontSize: "1rem", marginBottom: "1rem" }} variant={"h4"}>
          DECLARATION OF INFORMATION
        </Typography>
        <Typography style={{ fontSize: "0.9rem", }} variant={"h6"}>
          I declare that all the information which
          I have provided on and with this form is
          complete, true and correct. I understand
          that giving false, inaccurate or incomplete
          information would negatively affect my application,
          enrolment and use of Studysey. I have read Studysey’s
          Terms of Use and I agree to it.
        </Typography>
      </Box>
    </div>
  )
}

export default EducationalInfoForm
