import React, { useState } from "react";
import { Stack, Alert, InputAdornment, IconButton, Button } from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import ControlTextField from "../../components/hook-form/TextField";

function NewPasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const VerifySchema = Yup.object().shape({
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
        resolver: yupResolver(VerifySchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors },
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
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                    {!!errors.afterSubmit && (
                        <Alert severity="error">{errors.afterSubmit.message}</Alert>
                    )}
                </Stack>

                <ControlTextField
                    name="newPassword"
                    label="New Password"
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
                <ControlTextField
                    name="confirmNewPassword"
                    label="Confirm Password"
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
                        Submit
                    </Button>
                </Stack>
            </FormProvider>
        </>
    );
}

export default NewPasswordForm;
