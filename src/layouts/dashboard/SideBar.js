import React, { useState } from "react";
import { Box, Stack, IconButton, Avatar, Divider } from "@mui/material";
import { useTheme } from "@emotion/react";
import AntSwitch from "../../components/AntSwitch";
import useSettings from "../../hooks/useSettings";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";

function SideBar() {
    const theme = useTheme();
    const [active, setActive] = useState();
    const [selected, setSelected] = useState(0);
    const { onToggleMode } = useSettings();
    return (
        <Box
            p={2}
            sx={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                height: "100vh",
                width: 100,
            }}
        >
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{ height: "100%" }}
                spacing={3}
            >
                <Stack alignItems="center" spacing={4}>
                    <Box
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: 64,
                            width: 64,
                            borderRadius: 1.5,
                        }}
                    >
                        <img src={Logo} alt="logo"></img>
                    </Box>
                    <Stack
                        sx={{ width: "max-content" }}
                        direction="column"
                        alignItems="center"
                        spacing={3}
                    >
                        {Nav_Buttons.map((el) =>
                            el.index === active ? (
                                <Box
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: 1.5,
                                    }}
                                    key={el.index}
                                >
                                    <IconButton
                                        sx={{ width: "max-content", color: "#fff" }}
                                        onClick={() => setActive(el.index)}
                                    >
                                        {el.icon}
                                    </IconButton>
                                </Box>
                            ) : (
                                <IconButton
                                    sx={{
                                        width: "max-content",
                                        color:
                                            theme.palette.mode === "light"
                                                ? "#000"
                                                : theme.palette.text.primary,
                                    }}
                                    key={el.index}
                                    onClick={() => setActive(el.index)}
                                >
                                    {el.icon}
                                </IconButton>
                            ),
                        )}
                        <Divider sx={{ width: 48 }} />
                        {active === 3 ? (
                            <Box
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    borderRadius: 1.5,
                                }}
                            >
                                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                                    <Gear />
                                </IconButton>
                            </Box>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    setActive(3);
                                }}
                            >
                                <Gear />
                            </IconButton>
                        )}
                    </Stack>
                </Stack>
                <Stack spacing={4}>
                    <AntSwitch
                        onChange={() => {
                            onToggleMode();
                        }}
                        defaultChecked
                    />
                    <Avatar src={faker.image.avatar()} />
                </Stack>
            </Stack>
        </Box>
    );
}

export default SideBar;
