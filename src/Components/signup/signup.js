import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MultiSelect } from "react-multi-select-component";

import app from "../firebase_config";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry" },
];
const theme = createTheme();

export default function SignUp() {
  const [selected, setSelected] = useState([]);
  const [mobno, setMobno] = useState("");
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [verifyButton, setVerifyButton] = useState(false);
  const [otp, setOtp] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    adhar: "",
    adharcopy: "",
    experience: "",
    email: "",
    skills: selected,
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (event) => {
    if (event.target.name === "img") {
      var fread = new FileReader();
      fread.readAsDataURL(event.target.files[0]);
      fread.onloadend = function (event) {
        setEnteredImage(event.target.result);
      };
      setEnteredImage(event.target.files[0]);
    } else {
      setForm((prev) => {
        return {
          ...prev,
          [event.target.name]: event.target.value,
        };
      });
    }
  };

  const handleMobno = (e) => {
    const value = e.target.value;
    setMobno(value);
    if (mobno.length === 10 - 1) {
      setVerifyButton(true);
      setVerifyOtp(true);
    }
  };

  //firebase started

  const auth = getAuth(app);

  function onCaptchaVerify() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit()
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
      },
      auth
    );
  }

  function onSignInSubmit() {
    onCaptchaVerify()
    const phoneNumber = "+91" + mobno;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        alert('otp sent')
        setVerifyOtp(true)
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  }

  function verifyCode(){
    window.confirmationResult.confirm(otp).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user)
      alert("User verified")
      // ...
    }).catch((error) => {
      alert("Invalid otp")
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  //firebase ended

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div id="recaptcha-container"></div>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fname"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={handleChange}
                  value={form.fname}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lname"
                  autoComplete="family-name"
                  value={form.lname}
                  onChange={handleChange}
                />
              </Grid>
              {/* Mobile verify */}
              <Grid item xs={12}>
                <TextField
                  type="number"
                  required
                  fullWidth
                  id="mob-no"
                  label="Mobile No"
                  name="mobno"
                  autoComplete="Mobile No"
                  value={mobno}
                  onChange={(e) => handleMobno(e)}
                />
                {verifyButton ? (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={onSignInSubmit}
                  >
                    Verify mobile
                  </Button>
                ) : null}
              </Grid>
              {/* OTP */}
              {verifyOtp ? (
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="otp"
                    label="OTP"
                    name="otp"
                    autoComplete="OTP"
                    value={otp}
                    onChange={(e)=>setOtp(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    onClick={verifyCode}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onSubmit={handleSubmit}
                  >
                    Verify OTP
                  </Button>
                </Grid>
              ) : null}

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="adhar"
                  label="Adhar No"
                  name="adhar"
                  autoComplete="adhar"
                  value={form.adhar}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
              <label htmlFor="adharcopy">Upload any indentity proof:</label>
                <TextField
                  required
                  fullWidth
                  name="adharcopy"
                  type="file"
                  id="adharCopy"
                  autoComplete="img"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid style={{zIndex:"10"}} item xs={12}>
                <MultiSelect
                  label="Skills"
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="skills"
                  name="skills"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onSubmit={handleSubmit}
            >
              Sign up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/signin"} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
