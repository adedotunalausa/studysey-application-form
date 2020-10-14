import React from 'react'
import { Button, Typography } from '@material-ui/core'
import {
  Box,
  Link,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// CSS Style
const useStyles = makeStyles(() => ({
  container: {
    paddingBottom: "3rem",
    textAlign: "center",
    background: "#FAFAFA",
  },
  responseBox: {
    maxWidth: "606px",
    padding: "1rem",
    background: "#FFFFFF",
    borderRadius: "16px",
    margin: "0 auto"
  },
  agentBoxContainer: {
    maxWidth: "606px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "0 auto",
  },
  agentBoxWrapper: {
    maxWidth: "370px",
    padding: "1rem",
    paddingRight: "2rem",
    background: "#FFFFFF",
    borderRadius: "8px",
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "2rem",
  },
}));

const Success = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.container}>
        <Box className={classes.responseBox}>
          <img src="/images/message-icon.svg" alt="message" />
          <Box>
            <Typography style={{ fontSize: "1.5rem", marginBottom: "1rem" }} variant={"h4"}>
              Your application has been received!
          </Typography>
            <Typography varient={"h6"}>
              A confirmation message has been sent
              to your mail. You would be notified
              via email or then channel in the my
              journey page on the status of your
              application.
          </Typography>
          </Box>
        </Box>
        <Typography style={{ fontSize: "2rem", margin: "4rem 0 2rem 0" }} variant={"h3"}>
          Connect with an Agent
        </Typography>
        <Box className={classes.agentBoxContainer}>
          <Box className={classes.agentBoxWrapper}>
            <img style={{ marginRight: "0.6rem" }} src="/images/ellipse.svg" alt="avatar" />
            <Box style={{ textAlign: "left" }}>
              <Typography >
                David Mobolaji
                 <img
                  style={{ marginLeft: "0.6rem" }}
                  src="/images/check-circle.svg"
                  alt="check-circle" />
              </Typography>
              <Typography style={{ fontSize: "0.8rem", color: "#182C51" }}>
                10 Students Onboarded
              </Typography>
              <Typography
                style={{
                  fontSize: "0.8rem",
                  marginBottom: "0.5rem",
                  color: "#182C51",
                }}>
                Works from Morocco, Spain
              </Typography>
              <Box>
                <Link
                  style={{
                    color: "rgba(0, 0, 0, 0.5)",
                    fontSize: "0.9rem",
                    marginRight: "0.6rem"
                  }}
                  component="button"
                  href="#">
                  View Profile
                </Link>
                <Button
                  style={{
                    fontSize: "0.8rem",
                    boxShadow: "none",
                    color: "#00487C",
                    backgroundColor: "#F4F7F9"
                  }}
                  variant="contained">
                  CONNECT
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className={classes.agentBoxWrapper}>
            <img
              style={{ marginRight: "0.6rem" }}
              src="/images/ellipse.svg"
              alt="avatar" />
            <Box style={{ textAlign: "left" }}>
              <Typography >
                Babatunde Sheriff
              </Typography>
              <Typography style={{ fontSize: "0.8rem", color: "#182C51" }}>
                2 Students Onboarded
              </Typography>
              <Typography
                style={{
                  fontSize: "0.8rem",
                  marginBottom: "0.5rem",
                  color: "#182C51",
                }}>
                Works from Morocco, Spain
              </Typography>
              <Box>
                <Link
                  style={{
                    color: "rgba(0, 0, 0, 0.5)",
                    fontSize: "0.9rem",
                    marginRight: "0.6rem"
                  }}
                  component="button"
                  href="#">
                  View Profile
                </Link>
                <Button
                  style={{
                    fontSize: "0.8rem",
                    boxShadow: "none",
                    color: "#00487C",
                    backgroundColor: "#F4F7F9"
                  }}
                  variant="contained">
                  CONNECT
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Success
