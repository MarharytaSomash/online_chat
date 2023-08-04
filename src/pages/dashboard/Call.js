import React, { useState } from "react";
import { Box, Stack, Typography, IconButton, Link, Divider } from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { useTheme } from "@mui/material/styles";
import { CallLogs, ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import { CallLogElement } from "../../components/CallElement";
import StartCall from "../../sections/main/StartCall";

function Call() {
    const [openDialog, setOpenDialog] = useState(false);
    const theme = useTheme();
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };
    return (
        <Stack direction="row" sx={{ width: "100%" }}>
            {/* Left */}

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
                <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
                    <Stack alignItems={"center"} justifyContent="space-between" direction="row">
                        <Typography variant="h5"> Call Logs </Typography>
                    </Stack>
                    <Stack sx={{ width: "100%" }}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color="#709CE6" />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                            />
                        </Search>
                    </Stack>
                    <Stack justifyContent={"space-between"} alignItems={"center"} direction={"row"}>
                        <Typography variant="subtitle2" sx={{}} component={Link}>
                            Start new conversation
                        </Typography>
                        <IconButton onClick={handleOpenDialog}>
                            <Plus style={{ color: (theme) => theme.palette.primary.main }} />
                        </IconButton>
                    </Stack>
                    <Divider />
                    <Stack sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
                        <SimpleBarStyle timeout={500} clickOnTrack={false}>
                            <Stack spacing={2.4}>
                                {CallLogs.map((el) => {
                                    return <CallLogElement {...el} />;
                                })}
                                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                                    All Chats
                                </Typography>
                            </Stack>
                        </SimpleBarStyle>
                    </Stack>
                </Stack>
            </Box>

            {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog} />}
        </Stack>
    );
}

export default Call;
