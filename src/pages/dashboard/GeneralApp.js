import React, { lazy } from "react";
import Chats from "./Chats";
import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";

const GeneralApp = () => {
    const theme = useTheme();
    return (
        <Stack direction="row" sx={{ width: "100%" }}>
            <Chats />
            <Box
                sx={{
                    height: "100%",
                    width: "100%",
                    backgroundColor:
                        theme.palette.mode === "light"
                            ? "#F0F4FA"
                            : theme.palette.background.default,
                }}
            >
                <Conversation />
            </Box>
            <Contact />
        </Stack>
    );
};

export default GeneralApp;
