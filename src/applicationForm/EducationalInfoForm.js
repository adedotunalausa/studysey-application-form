import React, { useState } from 'react'
import {
  Typography,
  Box,
  Grid,
  Radio,
  InputBase,
  Select,
  FormControl,
  MenuItem
} from '@material-ui/core'
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles'

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
});

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: "5px",
    position: 'relative',
    backgroundColor: "FFFFFF",
    border: "1px solid #00487C",
    fontSize: "0.9rem",
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#00487C',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(() => ({
  container: {
    padding: "1rem",
    paddingBottom: "3rem",
    background: "#FFFFFF",
  },
  textField: {
    border: "1px solid #00487C",
    borderRadius: "5px",
    width: "100%",
    height: "42px",
    padding: "1rem",
    fontSize: "0.9rem",
    marginBottom: "2rem",
    [theme.breakpoints.up('sm')]: {
      width: "235px",
    },
  },
  FormControl: {
    width: "100%",
    height: "42px",
    marginBottom: "2rem",
    [theme.breakpoints.up('sm')]: {
      width: "235px",
    },
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
  inputGrid: {
    [theme.breakpoints.up('sm')]: {
      display: "flex",
      justifyContent: "space-between",
    },
  }
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
  const [education, setEducation] = useState('');
  const [institution, setInstitution] = useState('');
  const [country, setCountry] = useState('');

  const handleRadio = (event) => {
    setValue(event.target.value);
  };

  const handleEducationSelect = (event) => {
    setEducation(event.target.value);
  };

  const handleInstitutionSelect = (event) => {
    setInstitution(event.target.value);
  };

  const handleCountrySelect = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <Box className={classes.container}>
        <Box>
          <Typography
            className={classes.label}
            component="legend">Level of Degree of Program</Typography>
          <InputBase style={{ width: "100%" }} className={classes.textField} variant="outlined" />
        </Box>
        <Box>
          <Typography
            className={classes.label}
            component="legend">University</Typography>
          <InputBase style={{ width: "100%" }} className={classes.textField} variant="outlined" />
        </Box>
        <Typography style={{ marginBottom: "0.8rem" }} component="legend">Preferred Start Date</Typography>
        <Box className={classes.radioGroup}>
          <Box style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
            <CustomRadio
              checked={value === "Spring (January to April) Year"}
              onChange={handleRadio}
              value="Spring (January to April) Year"
              inputProps={{ 'aria-label': 'Spring (January to April) Year' }}
            />
            <Typography component="legend">Spring (January to April) Year</Typography>
          </Box>
          <Box style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
            <CustomRadio
              checked={value === "Summer (May to July) Year "}
              onChange={handleRadio}
              value="Summer (May to July) Year "
              inputProps={{ 'aria-label': "Summer (May to July) Year " }}
            />
            <Typography component="legend">Summer (May to July) Year </Typography>
          </Box>
          <Box style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
            <CustomRadio
              checked={value === "Autumn (September to November) Year "}
              onChange={handleRadio}
              value="Autumn (September to November) Year "
              inputProps={{ 'aria-label': "Autumn (September to November) Year " }}
            />
            <Typography component="legend">Autumn (September to November) Year </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            className={classes.label}
            component="legend">Highest Level of Education</Typography>
          <FormControl style={{ width: "100%" }} className={classes.FormControl}>
            <Select
              style={{ width: "100%" }}
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={education}
              onChange={handleEducationSelect}
              input={<BootstrapInput />}
            >
              <MenuItem value="High School">High School</MenuItem>
              <MenuItem value="BSc">BSc</MenuItem>
              <MenuItem value="Msc">MSc</MenuItem>
              <MenuItem value="PhD">PhD</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography
            className={classes.label}
            component="legend">Type of Institution</Typography>
          <FormControl style={{ width: "100%" }} className={classes.FormControl}>
            <Select
              style={{ width: "100%" }}
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={institution}
              onChange={handleInstitutionSelect}
              input={<BootstrapInput />}
            >
              <MenuItem value="Institution1">Institution1</MenuItem>
              <MenuItem value="Institution2">Institution2</MenuItem>
              <MenuItem value="Institution3">Institution3</MenuItem>
              <MenuItem value="Institution4">Institution4</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography
            className={classes.label}
            component="legend">Name of Institution</Typography>
          <InputBase style={{ width: "100%" }} className={classes.textField} variant="outlined" />
        </Box>
        <Box>
          <Typography
            className={classes.label}
            component="legend">Address of Institution</Typography>
          <InputBase style={{ width: "100%" }} className={classes.textField} variant="outlined" />
        </Box>
        <Grid className={classes.inputGrid}>
          <Box>
            <Typography
              className={classes.label}
              component="legend">Country</Typography>
            <FormControl className={classes.FormControl}>
              <Select
                style={{ width: "100%" }}
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={country}
                onChange={handleCountrySelect}
                input={<BootstrapInput />}
              >
                <MenuItem value="Nigeria">Nigeria</MenuItem>
                <MenuItem value="South Africa">South Africa</MenuItem>
                <MenuItem value="Ireland">Ireland</MenuItem>
                <MenuItem value="Dominican Replublic">Dominican Replublic</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Typography
              className={classes.label}
              component="legend">State</Typography>
            <InputBase className={classes.textField} variant="outlined" />
          </Box>
        </Grid>
        <Box>
          <Typography
            className={classes.label}
            component="legend">Graduation Year</Typography>
          <InputBase className={classes.textField} variant="outlined" />
        </Box>
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
