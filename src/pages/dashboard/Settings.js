import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import { Box, IconButton, Stack, Typography, Avatar, Divider } from "@mui/material";
import {
    CaretLeft,
    Bell,
    Lock,
    Key,
    PencilCircle,
    Image,
    Note,
    Keyboard,
    Info,
} from "phosphor-react";
import Shortcuts from "../../sections/settings/Shortcuts";

function Settings() {
    const theme = useTheme();
    const [openShutCuts, setOpenShutCuts] = useState(false);

    const handleShortCuts = () => {
        setOpenShutCuts(!openShutCuts);
    };

    const list = [
        {
            key: 0,
            icon: <Bell size={20} />,
            title: "Notifications",
            onclick: () => {},
        },
        {
            key: 1,
            icon: <Lock size={20} />,
            title: "Privacy",
            onclick: () => {},
        },
        {
            key: 2,
            icon: <Key size={20} />,
            title: "Security",
            onclick: () => {},
        },
        {
            key: 3,
            icon: <PencilCircle size={20} />,
            title: "Theme",
            onclick: () => handleShortCuts(),
        },
        {
            key: 4,
            icon: <Image size={20} />,
            title: "Chat Wallpaper",
            onclick: () => {},
        },
        {
            key: 5,
            icon: <Note size={20} />,
            title: "Request Account Info",
            onclick: () => {},
        },
        {
            key: 6,
            icon: <Keyboard size={20} />,
            title: "Keyboard Shortcuts",
            onclick: () => handleShortCuts(),
        },
        {
            key: 7,
            icon: <Info size={20} />,
            title: "Help",
            onclick: () => {},
        },
    ];

    return (
        <>
            <Stack direction="row" sx={{ width: "100%" }}>
                <Box
                    sx={{
                        width: 320,
                        overflowY: "scroll",
                        height: "100vh",
                        backgroundColor:
                            theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
                        boxShadow: "0px 0px  2px rgba(0,0,0,0.25)",
                    }}
                >
                    <Stack p={4} spacing={5}>
                        <Stack direction={"row"} alignItems={"center"} spacing={3}>
                            <IconButton>
                                <CaretLeft size={24} color={"#4B4B4B"} />
                            </IconButton>
                            <Typography variant="h6"> Settings </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={3}>
                            <Avatar
                                sx={{ width: 56, height: 56 }}
                                src={faker.image.avatar()}
                                alt={faker.name.fullName()}
                            />
                            <Stack direction={"column"} spacing={0.5}>
                                <Typography variant="article">{faker.name.firstName()}</Typography>
                                <Typography variant="body2">{faker.random.words()}</Typography>
                            </Stack>
                        </Stack>

                        <Stack spacing={4}>
                            {list.map(({ key, icon, title, onclick }) => (
                                <Stack spacing={2} sx={{ cursor: "pointer" }} onClick={onclick}>
                                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                                        {icon}
                                        <Typography variant="body2"> {title} </Typography>
                                    </Stack>
                                    {key != list.length - 1 && <Divider />}
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
            {openShutCuts && <Shortcuts open={openShutCuts} handleClose={handleShortCuts} />}
        </>
    );
}

export default Settings;
