import React, { useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretLeft } from "phosphor-react";
import ProfileForm from "../../sections/settings/ProfileForm";

const Profile = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };
    const theme = useTheme();
    return (
        <>
            <Stack direction="row" sx={{ width: "100%" }}>
                <Box
                    sx={{
                        overflowY: "scroll",

                        height: "100vh",
                        width: 320,
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,

                        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                    }}
                >
                    <Stack p={4} spacing={5} sx={{ maxHeight: "100vh" }}>
                        <Stack alignItems={"center"} direction="row">
                            <IconButton>
                                <CaretLeft size={24} color={"#4B4B4B"} />
                            </IconButton>
                            <Typography variant="h5">Profile</Typography>
                        </Stack>
                        <ProfileForm />
                        <Stack
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            direction={"row"}
                        ></Stack>
                    </Stack>
                </Box>

                {/* Right */}
            </Stack>
        </>
    );
};

export default Profile;
