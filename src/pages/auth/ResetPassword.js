import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import ResetPasswordForm from "../../sections/auth/ResetPasswordForm";

function ResetPassword() {
    return (
        <>
            <Stack spacing={2} sx={{ position: "relative", mb: 5 }} alignItems={"center"}>
                <Typography variant="h3" alignItems={"center"}>
                    Forgot your password?
                </Typography>

                <Typography sx={{ color: "text.secondary, mb:5" }}>
                    Please enter the email address associated with your account and We will email
                    you a link to reset your password{" "}
                </Typography>
                <ResetPasswordForm />
                <Link
                    component={RouterLink}
                    to="/auth/login"
                    color="inherit"
                    variant="subtitle2"
                    sx={{ mt: 3, mx: "auto", alignItems: "center", display: "inline-flex" }}
                >
                    <CaretLeft />
                    Return to Sign in
                </Link>
            </Stack>
        </>
    );
}

export default ResetPassword;
