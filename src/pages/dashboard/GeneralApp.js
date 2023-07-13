import React, { lazy } from "react";
import Chats from "./Chats";
import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "../../Redux/store";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";

const GeneralApp = () => {
    const theme = useTheme();
    const { sidebar } = useSelector((store) => store.app);
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
            {sidebar.open && <Contact />}
        </Stack>
    );
};

export default GeneralApp;
