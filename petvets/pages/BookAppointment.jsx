
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
      <Container component="main" maxWidth="xs">

        <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate sx={{ mt: 3 }} >
          <Grid container spacing={2}>
            <FormControl>

              <Grid container spacing={2}>
                <FormLabel id="demo-radio-buttons-group-label">Client Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="I am a New client"
                  name="radio-buttons-group"
                >
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel value="newClient" control={<Radio />} label="I am a New client" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel value="returnClient" control={<Radio />} label="I am a Returning client" />
                  </Grid>



                </RadioGroup>
              </Grid>
              <FormGroup>
                <FormLabel id="demo-radio-buttons-group-label">Visit Type</FormLabel>
                <FormControlLabel id="VisitType" control={<Checkbox defaultChecked />} label="Vaccine" />
                <FormControlLabel id="clientType" control={<Checkbox defaultChecked />} label="General Checkup" />
                <FormControlLabel id="clientType" control={<Checkbox defaultChecked />} label="General Checkup" />
              </FormGroup>

              <FormLabel id="demo-simple-select-label">Doctor</FormLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
              // onChange={handleChange}
              >
                <MenuItem value={10}>Dr. Marshall Biggins</MenuItem>
                <MenuItem value={20}>Dr. Walter White</MenuItem>
                <MenuItem value={30}>Dr. Gustavo Fring</MenuItem>
              </Select>

              {/* <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
              <br>
              </br>
              <InputLabel htmlFor="my-input">Mobile Number</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}

            </FormControl>



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
            <Grid item xs={12} sm={6}>
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
          </Grid>
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
    </div>

  )
}

export default BookAppointment;