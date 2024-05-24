
import { LockOutlined } from "@mui/icons-material";
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    TextField,
    Button,
    Grid,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail, EmailInvalidMessage, PasswordInvalidMessage } from "../../utils/utils";

interface SignInErrors {
    email: boolean;
    password: boolean;
}

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: false, password: false } as SignInErrors);

    const handleLogin = () => {
        console.log('Login', { email, password });
    };


    const handleBlur = (field: 'email' | 'password') => {
        return () => {
            if (field === 'email') {
                if (!validateEmail(email)) {
                    setErrors({ ...errors, email: true });
                } else {
                    setErrors({ ...errors, email: false });
                }
            } else if (field === 'password') {
                if (password.length < 6) {
                    setErrors({ ...errors, password: true });
                } else {
                    setErrors({ ...errors, password: false });
                }
            }
        }
    }

    return (
        <>
            <Container maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h5">Login</Typography>
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={handleBlur('email')}
                            error={errors.email}
                            helperText={errors.email ? EmailInvalidMessage : ''}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            onBlur={handleBlur('password')}
                            error={errors.password}
                            helperText={errors.password ? PasswordInvalidMessage : ''}
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={errors.email || errors.password}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                        <Grid container justifyContent={"flex-end"}>
                            <Grid item>
                                <Link to="/sign-up">Don't have an account? Register</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );

};

export { SignInForm };