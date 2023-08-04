import React from "react";
import { Button, Dialog, DialogContent, DialogTitle, Slide, Stack } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { CallElement } from "../../components/CallElement";
import { MembersList } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function StartCall({ open, handleClose }) {
    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            sx={{ p: 4 }}
        >
            <DialogTitle> Start Call </DialogTitle>

            <DialogContent sx={{ mt: 4 }}>
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
                {MembersList.map((el) => (
                    <CallElement {...el} />
                ))}
            </DialogContent>
        </Dialog>
    );
}

export default StartCall;
