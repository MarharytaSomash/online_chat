import React, { useState } from "react";
import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { CaretLeft } from "phosphor-react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import NewPasswordForm from "../../sections/auth/NewPasswordForm";

function NewPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const LoginSchema = Yup.object().shape({
        newPassword: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),

        confirmNewPassword: Yup.string()
            .required("Password is required")
            .oneOf([Yup.ref("newPassword"), null], "Password must match"),
    });

    const defaultValues = {
        newPassword: "",
        confirmNewPassword: "",
    };
    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;

    const onSubmit = async (data) => {
        try {
        } catch (error) {
            console.error(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            });
        }
    };
    return (
        <>
            <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
                <Typography variant="h3"> Reset Password </Typography>
                <Typography sx={{ color: "text.secondary", mb: 5 }}>
                    Please set your new password{" "}
                </Typography>
            </Stack>
            <NewPasswordForm />

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
        </>
    );
}

export default NewPassword;
