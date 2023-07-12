import React, { useState } from "react";
import { Stack, Box, IconButton, TextField, Tooltip } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import {
    LinkSimple,
    Smiley,
    PaperPlaneTilt,
    User,
    Sticker,
    Camera,
    File,
    Image,
} from "phosphor-react";
import Fab from "@mui/material/Fab";
import { useTheme } from "@emotion/react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import styled from "@emotion/styled";

const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px !important",
        paddingBottom: "12px !important",
    },
}));

const ChatInput = ({ setOpen }) => {
    const [openActions, setOpenActions] = useState(false);

    const handleLinkClick = () => {
        setOpenActions(!openActions);
    };

    return (
        <StyledInput
            fullWidth
            placeholder="Write a message..."
            variant="filled"
            InputProps={{
                disableUnderline: true,
                startAdornment: (
                    <Stack sx={{ width: "max-content" }}>
                        <Tooltip placement="right" title="Link">
                            <IconButton onClick={handleLinkClick}>
                                <LinkSimple />
                            </IconButton>
                        </Tooltip>
                        <Stack
                            sx={{
                                position: "relative",
                                display: openActions ? "inline-block" : "none",
                            }}
                        >
                            {Actions.map((el) => (
                                <Tooltip placement="right" title={el.title} key={el.title}>
                                    <Fab
                                        onClick={() => {
                                            setOpenActions((prev) => !prev);
                                        }}
                                        sx={{
                                            position: "absolute",
                                            top: -el.y,
                                            backgroundColor: el.color,
                                        }}
                                        aria-label="add"
                                    >
                                        {el.icon}
                                    </Fab>
                                </Tooltip>
                            ))}
                        </Stack>
                    </Stack>
                ),
                endAdornment: (
                    <InputAdornment>
                        <IconButton onClick={() => setOpen((prev) => !prev)}>
                            <Smiley />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

const Actions = [
    {
        color: "#4da5fe",
        icon: <Image size={24} />,
        y: 102,
        title: "Photo/Video",
    },
    {
        color: "#1b8cfe",
        icon: <Sticker size={24} />,
        y: 172,
        title: "Stickers",
    },
    {
        color: "#0172e4",
        icon: <Camera size={24} />,
        y: 242,
        title: "Image",
    },
    {
        color: "#0159b2",
        icon: <File size={24} />,
        y: 312,
        title: "Document",
    },
    {
        color: "#013f7f",
        icon: <User size={24} />,
        y: 382,
        title: "Contact",
    },
];

function Footer() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

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
                <Stack sx={{ width: "100%" }}>
                    <Box
                        sx={{
                            display: open ? "inline" : "none",
                            zIndex: 10,
                            position: "fixed",
                            bottom: 81,
                            right: 100,
                        }}
                    >
                        <Picker
                            data={data}
                            theme={theme.palette.mode}
                            onEmojiSelect={console.log}
                        />
                    </Box>
                    <ChatInput setOpen={setOpen} />
                </Stack>
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
