import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import FormProvider from "../../components/hook-form/FormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Stack, Alert, InputAdornment, IconButton, Link, Button } from "@mui/material";
import ControlTextField from "../../components/hook-form/TextField";
import { Eye, EyeSlash } from "phosphor-react";

function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email address"),
        password: Yup.string().required("Password is required"),
    });

    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "example@.com",
        password: "example123",
    };
    const methods = useForm({
        resolver: yupResolver(RegisterSchema),
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
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                {!!errors.afterSubmit && (
                    <Alert severity="error">{errors.afterSubmit.message}</Alert>
                )}

                <Stack direction={{ sx: "column", sm: "row" }} spacing={1} mt={2}>
                    <ControlTextField label="First Name" name="firstName" />
                    <ControlTextField label="Last Name" name="lastName" />
                </Stack>
                <ControlTextField label="Email" name="email" />
                <ControlTextField
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <Eye /> : <EyeSlash />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    type="submit"
                    color="inherit"
                    size="large"
                    variant="contained"
                    sx={{
                        bgcolor: "text.primary",
                        color: (theme) =>
                            theme.palette.mode === "light" ? "common.white" : "grey.800",
                        "&:hover": {
                            bgcolor: "text.primary",
                            color: (theme) =>
                                theme.palette.mode === "light" ? "common.white" : "grey.800",
                        },
                    }}
                    fullWidth
                >
                    Login
                </Button>
            </Stack>
        </FormProvider>
    );
}

export default RegisterForm;
