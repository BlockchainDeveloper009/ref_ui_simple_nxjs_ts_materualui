
//import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Typography, Container, FormControl, InputLabel, Input, FormHelperText, FormLabel, FormControlLabel } from '@mui/material';
import { Select, MenuItem, FormGroup, Checkbox } from '@mui/material';
import { RadioGroup, Radio, Popover } from '@mui/material';
import { Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

//import { styles } from '../styles/global.css';
import { styles } from '../styles/BookAppointment.module.css';
let age = '35';
const pageHeader = 'Appointment';
const BookAppointment = () => {
  const { register, handleSubmit } = useForm();
  const [lastNameError, setlastNameError] = useState("");
  const [mobileNoError, setmobileNoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const handleFormSubmit = (formData) => {

    //   validateForm(formData);

  }
  return (
    <div>
      <h1>{pageHeader}</h1>
      <Container component="main" maxWidth="xs" >

        <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate sx={{ mt: 3 }} >

          <Box noValidate sx={{ mt: 3 }} >

            <Grid container spacing={6}>
              <FormControl>


                <Grid container spacing={2}>

                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="I am a New client"
                    name="radio-buttons-group"
                  >
                    <Grid item xs={6} sm={12}>
                      <FormControlLabel value="newClient" control={<Radio />} label="I am a New client" />
                    </Grid>

                    <Grid item xs={6} sm={12}>
                      <FormControlLabel value="returnClient" control={<Radio />} label="I am a Returning client" />
                    </Grid>


                  </RadioGroup>
                </Grid>




                {/* <InputLabel htmlFor="my-input">Email address</InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" />
                  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                  <br>
                  </br>
                  <InputLabel htmlFor="my-input">Mobile Number</InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" />
                  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}

              </FormControl>

              <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                  <TextField
                    error={lastNameError && lastNameError.length ? true : false}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"

                    {...register('lastName')}
                    autoComplete="family-name"
                    helperText={lastNameError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={lastNameError && lastNameError.length ? true : false}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"

                    {...register('lastName')}
                    autoComplete="family-name"
                    helperText={lastNameError}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    error={lastNameError && lastNameError.length ? true : false}
                    required
                    fullWidth
                    id="petName"
                    label="Pet Name"

                    {...register('lastName')}
                    autoComplete="family-name"
                    helperText={lastNameError}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    error={lastNameError && lastNameError.length ? true : false}
                    required
                    fullWidth
                    id="mobileNo"
                    label="Mobile No"

                    {...register('lastName')}
                    autoComplete="family-name"
                    helperText={lastNameError}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    error={lastNameError && lastNameError.length ? true : false}
                    required
                    fullWidth
                    id="email"
                    label="Email"

                    {...register('lastName')}
                    autoComplete="family-name"
                    helperText={lastNameError}
                  />
                </Grid>


              </Grid>
            </Grid>
          </Box>
          <Box noValidate sx={{ mt: 3 }} >


            <FormGroup>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={5}><FormControlLabel id="clientType" control={<Checkbox defaultChecked />} label="General Checkup" /></Grid>
                <Grid item xs={12} sm={5}><FormControlLabel id="VisitType" control={<Checkbox />} label="Vaccine" /></Grid>
                <Grid item xs={12} sm={2}><FormControlLabel id="clientType" control={<Checkbox />} label="Ultra Sound" /></Grid>

              </Grid>
              <br></br>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={5}><FormControlLabel id="clientType" control={<Checkbox />} label="Dental Care" /></Grid>
                <Grid item xs={12} sm={5}><FormControlLabel id="clientType" control={<Checkbox />} label="Pet Grooming" /></Grid>
                <Grid item xs={12} sm={2}><FormControlLabel id="clientType" control={<Checkbox />} label="Others" /></Grid>

              </Grid>
            </FormGroup>


          </Box>

          <Box noValidate sx={{ mt: 3 }} >

            <FormLabel id="demo-simple-select-label">Doctor</FormLabel>
            <Select
              labelId="demo-simple-select"
              id="demo-simple-select"
              value={age}
              label="dr"

            // onChange={handleChange}

            >
              <MenuItem value={10}>Dr. Marshall Biggins</MenuItem>
              <MenuItem value={20}>Dr. Walter White</MenuItem>
              <MenuItem value={30}>Dr. Gustavo Fring</MenuItem>
            </Select>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Book Appointment
          </Button>
        </Box>

      </Container>





      <div>

      </div>
      {/* 
    <div className={styles.formField}>
              <label className={styles.label}>Maturity Date with Time</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  value={datePickerValues.maturityDateWithTime}
                  onChange={handleDatePickerChange('maturityDateWithTime')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      label="Required"
                      size="small"
                      error={!!errors.maturityDateWithTime}
                      helperText={errors.maturityDateWithTime}
                    />
                  )}
                />
              </LocalizationProvider>
            </div> */}
    </div >

  )
}

export default BookAppointment;