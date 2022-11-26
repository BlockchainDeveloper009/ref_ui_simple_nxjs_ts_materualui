import { Box, Typography, Container, Grid, TextField, FormControlLabel ,Checkbox, Button} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
    const {register, handleSubmit } = useForm();
    const [ firstNameError, setfirstNameError ] = useState("");
    const [ lastNameError, setlastNameError ] = useState("");
    const [ emailError, setEmailError ] = useState("");
    const validateForm = (formData: any) => {
        let formDirty = false;
        console.log('form data is ',formData);
        if(formData.firstName ||  !formData.firstName.length){
            setfirstNameError("firstName is required");
            formDirty=true;
        }else{
            setfirstNameError("");
        }
        if(!formDirty && (formData.lastName || !formData.lastName.length)){
            setlastNameError("lastName is required");
            formDirty=true;
        }else{
            setlastNameError("");
        }
        if(!formDirty && (formData.email ||  !formData.email.length)){
            setEmailError("Email is required");
            formDirty=true;
        }else{
            setEmailError("");
        }
        return true;
    }
    const handleFormSubmit=(formData: any) => {
        
        validateForm(formData);

    }
    return (
       <Container component="main" maxWidth="xs">
         {/* <Typography component="h1" vairant="h5">
            Sign up
        </Typography> */}

        <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate sx = {{ mt:3}} >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        error={firstNameError && firstNameError.length ? true: false}
                        autoComplete="given-name"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"                     
                        autoFocus
                        {...register('firstName')}
                        helperText={firstNameError}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                            error={lastNameError && lastNameError.length ? true: false}       
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
                            error={emailError && emailError.length ? true: false}
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            
                            {...register('email')}
                            autoComplete="email"
                            helperText={emailError}
                        />
                </Grid>
                <Grid item xs={12}>
                      <FormControlLabel 
                        label="I agree to recive emails related to product updates" 
                        control= {<Checkbox value="allowExtraEmails" color="primary"></Checkbox>} />
                       
                </Grid>

            </Grid>
            <Button 
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt:3, mb:2 }}
            >
                Sign Up
            </Button>
        </Box>
       </Container>
    );
}



// 
