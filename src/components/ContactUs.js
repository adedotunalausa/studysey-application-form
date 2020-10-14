import React from 'react'
import {
  Box,
  Grid,
  Typography,
  InputBase,
  Button,
  TextareaAutosize,
} from '@material-ui/core'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'

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

const useStyles = makeStyles(() => ({
  container: {
    paddingBottom: "4rem",
  },
  maximumWidth: {
    maxWidth: "850px",
    margin: "0 auto",
  },
  header: {
    fontSize: "2rem",
    color: "#00487C",
    fontWeight: 600,
    padding: "3rem 1rem",
    [theme.breakpoints.up('sm')]: {
      paddingLeft: "3rem",
      paddingRight: "3rem",
    },
  },
  body: {
    padding: "4rem 1rem 0 1rem",
    maxWidth: "750px",
    margin: "0 auto",
    [theme.breakpoints.up('sm')]: {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      paddingLeft: "3rem",
      paddingRight: "3rem",
    },
  },
  bodyRight: {
    [theme.breakpoints.up('sm')]: {
      width: "400px",
    },
  },
  bodyLeft: {
    marginTop: "4rem",
    marginRight: "2rem",
    paddingTop: "4rem",
    width: "218px",
    height: "300px",
    border: "1.5px solid rgba(24, 44, 81, 0.05)",
    borderRadius: "5px",
    paddingLeft: "2rem",
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },
  },
  textArea: {
    border: "1px solid rgba(24, 44, 81, 0.3)",
    borderRadius: "5px",
    width: "98.5%",
    '&$focused$notchedOutline': {
      borderColor: 'orange'
    }
  },
  textField: {
    border: "1px solid rgba(24, 44, 81, 0.3)",
    borderRadius: "5px",
    width: "100%",
    height: "42px",
    padding: "1rem",
    fontSize: "0.9rem",
    marginBottom: "2rem",
    [theme.breakpoints.up('sm')]: {
      width: "188px",
    },
  },
  label: {
    marginBottom: "0.5rem",
    color: "000000, 90%",
    fontWeight: 400,
  },
  inputGrid: {
    [theme.breakpoints.up('sm')]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  button: {
    fontSize: "0.8rem",
    width: "100%",
    height: "2.625rem",
    color: "#FFFFFF",
    marginTop: "1.5rem",
    backgroundColor: "#00487C",
    marginRight: 0,
  }
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.container}>
        <Box style={{ background: "#F4F7F9", }}>
          <Box className={classes.maximumWidth}>
            <Typography className={classes.header} variant={"h1"}>
              Contact us
            </Typography>
          </Box>
        </Box>
        <Box className={classes.body}>
          <Box className={classes.bodyRight}>
            <Grid className={classes.inputGrid}>
              <Box>
                <Typography
                  className={classes.label}
                  component="legend">First Name</Typography>
                <InputBase
                  className={classes.textField}
                  variant="outlined" />
              </Box>
              <Box>
                <Typography
                  className={classes.label}
                  component="legend">Last Name</Typography>
                <InputBase
                  className={classes.textField}
                  variant="outlined" />
              </Box>
            </Grid>
            <Box>
              <Typography
                className={classes.label}
                component="legend">Email</Typography>
              <InputBase
                style={{ width: "100%" }}
                className={classes.textField}
                variant="outlined" />
            </Box>
            <Box>
              <Typography
                className={classes.label}
                component="legend">Subject</Typography>
              <InputBase
                style={{ width: "100%" }}
                className={classes.textField}
                variant="outlined" />
            </Box>
            <Box>
              <Typography
                className={classes.label}
                component="legend">Message</Typography>
              <TextareaAutosize
                className={classes.textArea}
                rowsMin={6}
                aria-label="message"
              />
            </Box>
            <Button className={classes.button} disableElevation variant="contained">
              SEND
            </Button>
          </Box>
          <Box className={classes.bodyLeft}>
            <Typography
              style={{
                marginBottom: "1.5rem",
                color: "#00487C"
              }}>
              info@studysey.com
            </Typography>
            <Box>
              <Typography style={{ color: "#222222" }}>
                UNITED KINGDOM
              </Typography>
              <Typography
                style={{
                  marginBottom: "1.5rem",
                  maxWidth: "11rem",
                  color: "#222222"
                }}>
                13B Old Kent Road,
                Manchester, London.
                +44 20 7234 3456
              </Typography>
            </Box>
            <Box>
              <Typography style={{ color: "#222222" }}>
                NIGERIA
              </Typography>
              <Typography
                style={{
                  marginBottom: "1.5rem",
                  maxWidth: "11rem",
                  color: "#222222",
                }}>
                3 Adenugba Road,
                Oregun, Ikeja, Lagos.
                +234 802 441 9462
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default ContactUs
