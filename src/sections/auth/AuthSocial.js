import React from "react";
import Divider from "@mui/material/Divider";
import { IconButton, Stack } from "@mui/material";
import { GithubLogo, GoogleLogo, TwitterLogo } from "phosphor-react";

function AuthSocial() {
    return (
        <>
            <Divider
                sx={{
                    my: 2.5,
                    typografy: "overline",
                    color: 'text.disabled", "&::before, ::after: {borderTopStyle:"dashed"}',
                }}
            >
                {" "}
                OR
            </Divider>
            <Stack direction="row" justifyContent="center">
                <IconButton>
                    <GoogleLogo color="#DF3E30" />
                </IconButton>
                <IconButton color="inherit">
                    <GithubLogo />
                </IconButton>
                <IconButton>
                    <TwitterLogo color="#1C9CEA" />
                </IconButton>
            </Stack>
        </>
    );
}

export default AuthSocial;
