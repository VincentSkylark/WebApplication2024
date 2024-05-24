import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail, NameInvalidMessage, EmailInvalidMessage, PasswordInvalidMessage } from "../../utils/utils";

interface SignUpErrors {
    name: boolean;
    email: boolean;
    password: boolean;
};

const SignUpForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ name: false, email: false, password: false } as SignUpErrors);

    const handleRegister = async () => { };

    const handleBlur = (field: 'name' | 'email' | 'password') => {
        return () => {
            if (field === 'name') {
                if (name.length < 3) {
                    setErrors({ ...errors, name: true });
                } else {
                    setErrors({ ...errors, name: false });
                }
            }
            else if (field === 'email') {
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
                    <Typography variant="h5">Register</Typography>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onBlur={handleBlur('name')}
                                    error={errors.name}
                                    helperText={errors.name ? NameInvalidMessage : ''}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
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
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={handleBlur('password')}
                                    error={errors.password}
                                    helperText={errors.password ? PasswordInvalidMessage : ''}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={errors.name || errors.email || errors.password}
                            onClick={handleRegister}
                        >
                            Register
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/sign-in">Already have an account? Login</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export { SignUpForm };