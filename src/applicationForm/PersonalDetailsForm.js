import React, { useState } from 'react'
import {
  Box,
  Grid,
  Typography,
  Radio,
  Divider,
  InputBase,
} from '@material-ui/core'
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles'

// CSS Style
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

const useStyles = makeStyles(() => ({
  container: {
    margin: "0 auto",
    padding: "1rem",
    paddingBottom: "2rem",
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
  radio: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "1rem",
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


const PersonalDetailsForm = () => {
  const classes = useStyles();
  const [value, setValue] = useState('male');
  const [booleanValue, setBooleanValue] = useState("yes");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleBooleanChange = (event) => {
    setBooleanValue(event.target.value);
  }

  return (
    <div>
      <Box className={classes.container}>
        <Grid className={classes.inputGrid}>
          <Box>
            <Typography
              className={classes.label}
              component="legend">First Name</Typography>
            <InputBase className={classes.textField} variant="outlined" />
          </Box>
          <Box>
            <Typography
              className={classes.label}
              component="legend">Last Name</Typography>
            <InputBase className={classes.textField} variant="outlined" />
          </Box>
        </Grid>
        <Grid className={classes.inputGrid}>
          <Box>
            <Typography
              className={classes.label}
              component="legend">Middle Name</Typography>
            <InputBase className={classes.textField} variant="outlined" />
          </Box>
          <Box>
            <Typography
              className={classes.label}
              component="legend">Date of Birth</Typography>
            <InputBase
              className={classes.textField}
              variant="outlined"
              type="date"
            />
          </Box>
        </Grid>
        <Typography component="legend">Gender</Typography>
        <Box className={classes.radio}>
          <Box style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
            <CustomRadio
              checked={value === 'male'}
              onChange={handleChange}
              value="male"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'Male' }}
            />
            <Typography component="legend">Male</Typography>
          </Box>
          <Box style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
            <CustomRadio
              checked={value === 'female'}
              onChange={handleChange}
              value="female"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'Female' }}
            />
            <Typography component="legend">Female</Typography>
          </Box>
          <Box style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
            <CustomRadio
              checked={value === 'other'}
              onChange={handleChange}
              value="other"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'Other' }}
            />
            <Typography component="legend">Other</Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            className={classes.label}
            component="legend">Phone Number</Typography>
          <InputBase className={classes.textField} variant="outlined" />
        </Box>
        <Box>
          <Typography
            className={classes.label}
            component="legend">Email Address</Typography>
          <InputBase className={classes.textField} variant="outlined" />
        </Box>
        <Divider className={classes.margin} />
        <Box>
          <Typography
            className={classes.label}
            component="legend">Nationality</Typography>
          <InputBase className={classes.textField} variant="outlined" />
        </Box>
        <Box>
          <Typography
            className={classes.label}
            component="legend">Official Home Address</Typography>
          <InputBase className={classes.textField} variant="outlined" />
        </Box>
        <Grid className={classes.inputGrid}>
          <Box>
            <Typography
              className={classes.label}
              component="legend">City</Typography>
            <InputBase className={classes.textField} variant="outlined" />
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
            component="legend">Postal/Zip Code</Typography>
          <InputBase className={classes.textField} variant="outlined" />
        </Box>
        <Typography component="legend">Do you currently live at this address?</Typography>
        <Box className={classes.radio}>
          <Box style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
            <CustomRadio
              checked={booleanValue === 'yes'}
              onChange={handleBooleanChange}
              value="yes"
              inputProps={{ 'aria-label': 'Yes' }}
            />
            <Typography component="legend">Yes</Typography>
          </Box>
          <Box style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
            <CustomRadio
              checked={booleanValue === 'no'}
              onChange={handleBooleanChange}
              value="no"
              inputProps={{ 'aria-label': 'Yes' }}
            />
            <Typography component="legend">No</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default PersonalDetailsForm
