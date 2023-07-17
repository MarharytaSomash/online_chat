import React from "react";
import { useState } from "react";
import { Box, Stack, IconButton, Typography, Tab, Tabs, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { UpdateSidebar } from "../../Redux/slices/app";
import { CaretLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Shared_Docs, Shared_Links } from "../../data";
import { DocumentMessege, LinkMessege } from "./TypeMessege";

function SharedMessages() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                        spacing={3}
                    >
                        <IconButton
                            onClick={() => {
                                dispatch(UpdateSidebar("CONTACT"));
                            }}
                        >
                            <CaretLeft />
                        </IconButton>
                        <Typography variant="subtitle2"> Shared Messages </Typography>
                    </Stack>
                </Box>
                <Tabs sx={{ pt: 2, px: 2 }} value={value} onChange={handleChange} centered>
                    <Tab label="Media" />
                    <Tab label="Link" />
                    <Tab label="Docs" />
                </Tabs>

                <Stack
                    sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }}
                    p={3}
                    spacing={value === 1 ? 1 : 3}
                >
                    {(() => {
                        switch (value) {
                            case 0:
                                return (
                                    <Grid container spacing={2}>
                                        {[0, 1, 2, 3, 4, 5, 6].map((el) => (
                                            <Grid item xs={4} key={el}>
                                                <img
                                                    src={faker.image.avatar()}
                                                    alt={faker.name.fullName()}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                );
                            case 1:
                                return Shared_Links.map((el) => {
                                    return <LinkMessege el={el} />;
                                });
                            case 2:
                                return Shared_Docs.map((el) => {
                                    return <DocumentMessege el={el} />;
                                });
                            default:
                                return null;
                        }
                    })()}
                </Stack>
            </Stack>
        </Box>
    );
}

export default SharedMessages;
