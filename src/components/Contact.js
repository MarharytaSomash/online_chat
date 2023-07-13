import React from "react";
import { Avatar, Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../Redux/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";

function Contact() {
    const theme = useTheme();
    const dispatch = useDispatch();

    return (
        <Box sx={{ width: 500, height: "100%" }}>
            <Stack sx={{ height: "100%" }}>
                <Box
                    sx={{
                        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                        width: "100%",
                        backgroundColor:
                            theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
                    }}
                >
                    <Stack
                        sx={{ height: "100%", p: 2 }}
                        direction="row"
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        spacing={3}
                    >
                        <Typography variant="subtitle2"> Contact Info </Typography>
                        <IconButton
                            onClick={() => {
                                dispatch(ToggleSidebar());
                            }}
                        >
                            <X />
                        </IconButton>
                    </Stack>
                </Box>
                <Stack
                    sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }}
                    p={3}
                    s={3}
                >
                    <Stack alignItems={"center"} direction={"row"} spacing={2}>
                        <Avatar
                            src={faker.image.avatar()}
                            alt={faker.name.firstName()}
                            sx={{ width: 64, height: 64 }}
                        ></Avatar>
                        <Stack spacing={0.5}>
                            <Typography variant="article" fontWeight={600}>
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant="body2" fontWeight={500}>
                                {faker.phone.number()}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
                        <Stack spasing={1} alignItems={"center"}>
                            <IconButton>
                                <Phone />
                            </IconButton>
                            <Typography variant="overline">Voice</Typography>
                        </Stack>
                        <Stack spasing={1} alignItems={"center"}>
                            <IconButton>
                                <VideoCamera />
                            </IconButton>
                            <Typography variant="overline" p={1}>
                                Video
                            </Typography>
                        </Stack>
                    </Stack>
                    <Divider />
                    <Stack spacing={0.5} p={2}>
                        <Typography variant="article">About</Typography>
                        <Typography variant="bodu2">Imagination is the only limit</Typography>
                    </Stack>
                    <Divider />
                    <Stack
                        p={2}
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <Typography variant="subtitle2">Media,Links & Docs</Typography>
                        <Button endIcon={<CaretRight />}>401</Button>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        {[1, 2, 3].map((el) => {
                            return (
                                <Box key={el}>
                                    <img src={faker.image.cats()} alt={faker.name.sex} />
                                </Box>
                            );
                        })}
                    </Stack>
                    <Divider />
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Stack direction={"row"} alignItems={"center"} spacing={2} p={2}>
                            <Star size={23} />
                            <Typography variant="subtitle2"> Starred Messeges</Typography>
                        </Stack>
                        <IconButton>
                            <CaretRight />
                        </IconButton>
                    </Stack>
                    <Divider />
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Stack direction={"row"} alignItems={"center"} spacing={2} p={2}>
                            <Bell size={23} />
                            <Typography variant="subtitle2"> Mute Notifications </Typography>
                        </Stack>
                        <AntSwitch />
                    </Stack>
                    <Divider />
                    <Typography p={2}> 1 group in comon </Typography>
                    <Stack direction={"row"} spacing={2} p={2} alignItems={"center"}>
                        <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                        <Stack spacing={0.5}></Stack>
                        <Typography variant="subtutle2">Coding group</Typography>
                        <Typography variant="caption">Margharyta,Olga,Helen</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Button startIcon={<Prohibit />} fullWidth variant="outlined">
                            Block
                        </Button>
                        <Button startIcon={<Trash />} fullWidth variant="outlined">
                            Delete
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Contact;
