import Background from '../../assets/background.jpg';
import Logo from '../../assets/LazzarettiLogo.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Card,
  CardMedia,
  TextField,
  Typography
} from '@mui/material';

const validationSchema = Yup.object({
  email: Yup
    .string()
    .email()
    .required('E-mail or Username is required'),
  password: Yup
    .string()
    .min(8)
    .required('Password is required')
});

function Login() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      localStorage.setItem('email', values.email);
      localStorage.setItem('password', values.password);
    },
    validationSchema: validationSchema
  });

  return (
    <Box
      id='background'
      sx={{
        background: `url(${Background})`,
        alt: 'black marble background',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card
        id='loginCard'
        elevation={0}
        sx={{
          height: '599px',
          width: '474px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.95,
        }}
      >
        <Box
          id='CardStyles'
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            id='logoArea'
            sx={{
              mt: '54px',
              width: '150px',
              height: '100px'
            }}
          >
            <CardMedia
              component="img"
              image={Logo}
              alt="Lazzaretti Logo"
            />
          </Box>
          <Box
            sx={{
              width: '366px'
            }}
          >
            <form onSubmit={formik.handleSubmit}>
              <Box
                component='form'
                id='formArea'
                sx={{
                  width: '100%',
                  mt: '66px',
                  mb: '77px'
                }}
              >
                <Typography
                  sx={{
                    mb: '-15px',
                    color: 'neutral'
                  }}
                >
                  Username or E-mail
                </Typography>

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  placeholder='name@email.com'
                  id='email'
                  name='email'
                  autoComplete='email'
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />

                <Typography
                  sx={{
                    mb: '-15px',
                    color: 'neutral'
                  }}
                >
                  Password:
                </Typography>

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  placeholder='topsecret'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={
                    formik.touched.password && formik.errors.password
                  }
                />
              </Box>

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mb: '78px'
                }}
              >
                <Button
                  type='submit'
                  variant='contained'
                  sx={{
                    width: '165px',
                    height: '48px',
                    textTransform: 'none',
                    mb: '78px'
                  }}
                >
                  <Typography
                    variant='button'
                  >
                    Log In
                  </Typography>
                </Button>
              </Box>
            </form >
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
export default Login;
