import React from "react";
import { useState } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack, Alert, InputAdornment, IconButton, Link, Button } from "@mui/material";
import ControlTextField from "../../components/hook-form/TextField";
import { Eye, EyeSlash } from "phosphor-react";

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email address"),
        password: Yup.string().required("Password is required"),
    });

    const defaultValues = {
        email: "example@.com",
        password: "example123",
    };
    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });
    console.log(methods);
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
            <Stack spacing={3}>
                {!!errors.afterSubmit && (
                    <Alert severity="error">{errors.afterSubmit.message}</Alert>
                )}
            </Stack>
            <ControlTextField name="email" label="Email" />
            <ControlTextField
                name="password"
                label="Password"
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
            <Stack alignItems={"flex-end"} sx={{ my: 2 }}>
                <Link variant="body2" color="inherit" underline="always">
                    Forgot password?
                </Link>
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

export default LoginForm;
