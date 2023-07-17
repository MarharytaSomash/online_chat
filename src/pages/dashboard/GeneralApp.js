import React from "react";
import Chats from "./Chats";
import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "../../Redux/store";
import Conversation from "../../components/Conversation";
import { X } from "phosphor-react";
import { ToggleSidebar } from "../../Redux/slices/app";
import Contact from "../../components/Contact";
import SheredMesseges from "../../components/Conversation/SheredMesseges";
import StarredMessages from "../../components/StarredMessages";

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
            {sidebar.open &&
                (() => {
                    switch (sidebar.type) {
                        case "CONTACT":
                            return <Contact />;
                        case "STARRED":
                            return <StarredMessages />;

                        case "SHARED":
                            return <SheredMesseges />;

                        default:
                            break;
                    }
                })()}
        </Stack>
    );
};

export default GeneralApp;
