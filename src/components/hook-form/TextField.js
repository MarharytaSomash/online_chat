import React from "react";
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

TextField.PropTypes = {
    name: PropTypes.string,
    helperText: PropTypes.node,
};
function ControlTextField({ name, helperText, ...other }) {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    fullWidth
                    value={typeof field.value === "number" && field.value === 0 ? " " : field.value}
                    error={!!error}
                    helperText={error ? error.message : helperText}
                    {...other}
                    sx={{ mb: 3 }}
                />
            )}
        ></Controller>
    );
}

export default ControlTextField;
