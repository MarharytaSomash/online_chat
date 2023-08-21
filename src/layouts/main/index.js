import React from "react";
import { Outlet } from "react-router-dom";
import { Stack, Container } from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
import { Navigate } from "react-router-dom";

const isAuth = true;
const MainLayout = () => {
    if (isAuth) {
        return <Navigate to="/app" />;
    }
    return (
        <Container sx={{ mt: 5 }} maxWidth="sm">
            <Stack spacing={5}>
                <Stack direction="column" alignItems="center" sx={{ width: "100%" }}>
                    <img style={{ width: 120, height: 120 }} src={Logo} alt="logo" />
                </Stack>
            </Stack>
            <Outlet />
        </Container>
    );
};

export default MainLayout;
