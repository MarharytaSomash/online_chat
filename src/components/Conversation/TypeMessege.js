import {
    Divider,
    Stack,
    Typography,
    useTheme,
    Box,
    Link,
    IconButton,
    MenuItem,
    Menu,
} from "@mui/material";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import { Message_options } from "../../data";
import { useState } from "react";

const TimeLine = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Divider width="45%" />
            <Typography variant="caption" sx={{ color: theme.palette.text }}>
                {el.text}
            </Typography>
            <Divider width="46%" />
        </Stack>
    );
};

function ReplyMessege({ el }) {
    const theme = useTheme();

    return (
        <>
            <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
                <Box
                    p={1.5}
                    sx={{
                        backgroundColor: el.incoming
                            ? theme.palette.background.default
                            : theme.palette.primary.main,
                        borderRadius: 1.5,
                        width: "max-content",
                    }}
                >
                    <Stack spacing={2}>
                        <Stack
                            p={2}
                            direction={"column"}
                            spacing={3}
                            alignItems={"center"}
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 1,
                            }}
                        >
                            <Typography variant="body2" color={theme.palette}>
                                {el.message}
                            </Typography>
                        </Stack>
                        <Typography
                            variant="body2"
                            color={el.incoming ? theme.palette.text : "#fff"}
                        >
                            {el.ReplyMessege}
                        </Typography>
                    </Stack>
                </Box>
                <MenuOptions />
            </Stack>
        </>
    );
}

function LinkMessege({ el }) {
    const theme = useTheme();

    return (
        <>
            <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
                <Box
                    p={1.5}
                    sx={{
                        backgroundColor: el.incoming
                            ? theme.palette.background.default
                            : theme.palette.primary.main,
                        borderRadius: 1.5,
                        width: "max-content",
                    }}
                >
                    <Stack spacing={1.5}>
                        <Stack
                            p={2}
                            direction={"column"}
                            spacing={2}
                            alignItems="center"
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 1,
                            }}
                        >
                            <img
                                src={el.preview}
                                alt={el.message}
                                style={{ maxHeight: 210, borderRadius: "10px" }}
                            ></img>
                            <Stack spacing={2}>
                                <Typography variant="subtitle2"> Create Chat App</Typography>
                                <Typography
                                    variant="subtitle2"
                                    component={Link}
                                    sx={{ color: theme.palette.primary.main }}
                                    to="https://www.google.com.ua"
                                >
                                    www.google.com
                                </Typography>
                            </Stack>
                            <Typography
                                variant="boddy2"
                                color={el.incoming ? theme.palette.text : "#fff"}
                            >
                                {el.message}
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
                <MenuOptions />
            </Stack>
        </>
    );
}
function ImgMessege({ el }) {
    const theme = useTheme();
    return (
        <>
            <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
                <Box
                    p={1.5}
                    sx={{
                        backgroundColor: el.incoming
                            ? theme.palette.background.default
                            : theme.palette.primary.main,
                        borderRadius: 1.5,
                        width: "max-content",
                    }}
                >
                    <Stack spacing={1}>
                        <img
                            src={el.img}
                            alt={el.message}
                            style={{ maxHeight: 210, borderRadius: "10px" }}
                        ></img>
                    </Stack>
                    <Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
                        {el.message}
                    </Typography>
                </Box>
                <MenuOptions />
            </Stack>
        </>
    );
}

function TextMessege({ el }) {
    const theme = useTheme();
    return (
        <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
            <Box
                p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content",
                }}
            >
                <Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
                    {el.message}
                </Typography>
            </Box>
            <MenuOptions />
        </Stack>
    );
}

function DocumentMessege({ el }) {
    const theme = useTheme();

    return (
        <>
            <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
                <Box
                    p={1.5}
                    sx={{
                        backgroundColor: el.incoming
                            ? theme.palette.background.default
                            : theme.palette.primary.main,
                        borderRadius: 1.5,
                        width: "max-content",
                    }}
                >
                    <Stack spacing={2}>
                        <Stack
                            p={2}
                            direction={"row"}
                            spacing={3}
                            alignItems={"center"}
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 1,
                            }}
                        >
                            <Image size={48} />
                            <Typography variant="caption">Something.png</Typography>
                            <IconButton>
                                <DownloadSimple />
                            </IconButton>
                        </Stack>
                        <Typography
                            variant="body2"
                            sx={{ color: el.incoming ? theme.palette.text : "#fff" }}
                        >
                            {el.message}
                        </Typography>
                    </Stack>
                </Box>
                <MenuOptions />
            </Stack>
        </>
    );
}

const MenuOptions = () => {
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
        <>
            <div>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <DotsThreeVertical />
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
                >
                    <Stack spacing={1} px={1}>
                        {Message_options.map((el) => {
                            return (
                                <MenuItem
                                    key={el.title}
                                    onClick={() => {
                                        handleClick();
                                    }}
                                >
                                    {el.title}
                                </MenuItem>
                            );
                        })}
                    </Stack>
                </Menu>
            </div>
        </>
    );
};

export { TimeLine, ReplyMessege, ImgMessege, TextMessege, LinkMessege, DocumentMessege };
