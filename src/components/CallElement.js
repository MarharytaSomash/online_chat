import React from "react";
import { faker } from "@faker-js/faker";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography, Box, useTheme, IconButton } from "@mui/material";
import { StyledBadge } from "./ChatElement";
import { ArrowDownLeft, ArrowUpRight, Phone, VideoCamera } from "phosphor-react";

function CallLogElement({ online, incoming, missed }) {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
                }}
                p={2}
            >
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={2}
                    >
                        {online ? (
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                variant="dot"
                            >
                                <Avatar src={faker.image.avatar()} />
                            </StyledBadge>
                        ) : (
                            <Avatar src={faker.image.avatar()} />
                        )}
                        <Stack spacing={1}>
                            <Typography variant="subtitle2"> {faker.name.fullName()}</Typography>

                            <Stack spacing={1} alignItems="center" direction={"row"}>
                                {incoming ? (
                                    <ArrowDownLeft color={missed ? "red" : "green"} />
                                ) : (
                                    <ArrowUpRight color={missed ? "red" : "green"} />
                                )}
                                <Typography variant="caption"> Yesterday 22:00 </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <IconButton>
                        {" "}
                        <Phone color={missed ? "red" : "green"} />
                    </IconButton>
                </Stack>
            </Box>
        </>
    );
}
const CallElement = ({ online }) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                borderRadius: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
            }}
            p={2}
        >
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={2}
                >
                    {online ? (
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            variant="dot"
                        >
                            <Avatar src={faker.image.avatar()} />
                        </StyledBadge>
                    ) : (
                        <Avatar src={faker.image.avatar()} />
                    )}
                    <Stack spacing={1}>
                        <Typography variant="subtitle2"> {faker.name.fullName()}</Typography>
                    </Stack>
                </Stack>
                <Stack direction={"row"} alignItems={"center"}>
                    <IconButton>
                        <Phone color={"green"} />
                    </IconButton>
                    <IconButton>
                        <VideoCamera color={"green"} />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    );
};
export { CallLogElement, CallElement };
