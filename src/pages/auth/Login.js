import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/LoginForm";

function Login() {
    return (
        <Stack spacing={2} sx={{ position: "relative", mb: 5 }}>
            <Stack direction={"column"} alignItems={"center"} justifyItems={"center"}>
                <Typography variant="h4"> Login </Typography>
                <Stack direction="row" spacing={0.5}>
                    <Typography variant="body2"> New User? </Typography>
                    <Link to="auth/register" component={Link} variant="subtitle2">
                        Create an account
                    </Link>
                </Stack>
            </Stack>
            <LoginForm />
            <AuthSocial />
        </Stack>
    );
}

export default Login;
