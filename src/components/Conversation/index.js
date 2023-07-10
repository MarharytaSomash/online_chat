import { Stack, Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Conversation = () => {
    return (
        <Stack height="100%" maxHeight="100vh" width="100%">
            <Header />
            <Box width="100%" sx={{ flexGrow: 1 }}></Box>
            <Footer />
        </Stack>
    );
};

export default Conversation;
