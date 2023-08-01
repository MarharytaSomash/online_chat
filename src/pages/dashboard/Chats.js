import React from "react";
import { Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";

import Badge from "@mui/material/Badge";
import { ChatList } from "../../data";
import { useTheme } from "@emotion/react";
import ChatElement from "../../components/ChatElement";
import Search from "../../components/Search/Search";
import SearchIconWrapper from "../../components/Search/SearchIconWrapper";
import StyledInputBase from "../../components/Search/InputBase";
import { SimpleBarStyle } from "../../components/Scrollbar";

function Chats() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: "relative",
                width: 320,
                backgroundColor:
                    theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            }}
        >
            <Stack p={3} sx={{ height: "100%" }}>
                <Stack direction="row" alignItems={"center"} justifyContent="space-between">
                    <Typography variant="h5">Chat</Typography>

                    <IconButton>
                        <CircleDashed />
                    </IconButton>
                </Stack>
                <Stack sx={{ width: "100%" }}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709CE6" />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search..."
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>
                </Stack>
                <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                        <ArchiveBox size={24} />
                        <Button> Archive</Button>
                    </Stack>
                    <Divider />
                </Stack>
                <Stack
                    spacing={2}
                    direction="column"
                    sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
                >
                    <SimpleBarStyle timeout={500} clickOnTrack={false}>
                        <Stack spacing={2.4}>
                            <Typography sx={{ color: "#676767" }} variant="subtitle2">
                                Pined
                            </Typography>
                        </Stack>
                        {ChatList.filter((el) => el.pinned).map((el, index) => {
                            return <ChatElement key={index} {...el} />;
                        })}

                        <Stack direction="column">
                            <Stack spacing={2.4}>
                                <Typography sx={{ color: "#676767" }} variant="subtitle2">
                                    All Chats
                                </Typography>
                            </Stack>
                            {ChatList.filter((el) => !el.pinned).map((el, index) => {
                                return <ChatElement key={index} {...el} />;
                            })}
                        </Stack>
                    </SimpleBarStyle>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Chats;
