import React, { useState } from "react";
import { Box, Stack, IconButton, Avatar, Divider, MenuItem, Menu } from "@mui/material";
import { useTheme } from "@emotion/react";
import AntSwitch from "../../components/AntSwitch";
import useSettings from "../../hooks/useSettings";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";

function SideBar() {
    const theme = useTheme();
    const [active, setActive] = useState();
    const { onToggleMode } = useSettings();
    const [anchorEl, setAnchorEl] = useState(null);
    const ITEM_HEIGHT = 48;
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <Avatar id="long-button" src={faker.image.avatar()} />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: "20ch",
                            },
                        }}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        transformOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                    >
                        <Stack spacing={1} px={1}>
                            {Profile_Menu.map((el) => {
                                return (
                                    <MenuItem
                                        key={el.title}
                                        onClick={() => {
                                            handleClick();
                                        }}
                                    >
                                        <Stack
                                            sx={{ width: 100 }}
                                            direction={"row"}
                                            alignItems={"center"}
                                            justifyContent={"space-between"}
                                        >
                                            <span> {el.title}</span>
                                            {el.icon}
                                        </Stack>
                                    </MenuItem>
                                );
                            })}
                        </Stack>
                    </Menu>
                </Stack>
            </Stack>
        </Box>
    );
}

export default SideBar;
