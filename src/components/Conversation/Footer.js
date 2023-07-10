import React from "react";
import { Stack, Box, IconButton, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { LinkSimple, Smiley, PaperPlaneTilt } from "phosphor-react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px !important",
        paddingBottom: "12px !important",
    },
}));
function Footer() {
    const theme = useTheme();
    return (
        <Box
            p={2}
            sx={{
                height: 100,
                width: "100%",
                backgroundColor:
                    theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
            }}
        >
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
                <StyledInput
                    fullWidth
                    placeholder="Write a message..."
                    variant="filled"
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <LinkSimple />
                                </IconButton>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <Smiley />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Box
                    sx={{
                        height: 48,
                        width: 48,
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                    }}
                >
                    <Stack
                        sx={{ height: "100%", width: "100%" }}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <IconButton>
                            <PaperPlaneTilt color="#fff" />
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}

export default Footer;
