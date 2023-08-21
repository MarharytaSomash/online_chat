import React, { useCallback, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack, Alert, IconButton, Link, Button } from "@mui/material";
import ControlTextField from "../../components/hook-form/TextField";
import FormProvider from "../../components/hook-form/FormProvider";

function ProfileForm() {
    const [file, setFile] = useState();
    const LoginSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        about: Yup.string().required("About is required"),
        avatarURL: Yup.string().required("Avatar is required").nullable(true),
    });

    const defaultValues = {
        name: "",
        about: "",
    };
    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        setValue,
        handleSubmit,
        watch,
        control,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;

    const values = watch();

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

    const handleDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            setFile(file);

            const newFile = Object.assign(file, {
                preview: URL.createObjectURL(file),
            });

            if (file) {
                setValue("avatar", newFile, { shouldValidate: true });
            }
        },
        [setValue],
    );

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                {!!errors.afterSubmit && (
                    <Alert severity="error">{errors.afterSubmit.message}</Alert>
                )}
            </Stack>
            <Stack spacing={3}>
                <ControlTextField
                    name="name"
                    label="Name"
                    helperText={"This name is visible to your contacts"}
                />
                <ControlTextField
                    name="about"
                    label="About"
                    type={"text"}
                    multiline
                    rows={4}
                    maxRow={6}
                    sx={{ mt: 2.5 }}
                />
            </Stack>

            <Stack direction={"row"} justifyContent={"end"} sx={{ mt: 3 }}>
                <Button size="large" color="primary" type="submit" variant="outlined">
                    Save
                </Button>
            </Stack>
        </FormProvider>
    );
}

export default ProfileForm;
