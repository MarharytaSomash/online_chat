import { Divider, Stack, Typography, useTheme, Box, Link, IconButton } from "@mui/material";
import { DownloadSimple, Image } from "phosphor-react";

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
                        sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}
                    >
                        <Typography variant="body2" color={theme.palette}>
                            {el.message}
                        </Typography>
                    </Stack>
                    <Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
                        {el.ReplyMessege}
                    </Typography>
                </Stack>
            </Box>
        </Stack>
    );
}

function LinkMessege({ el }) {
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
                <Stack spacing={1.5}>
                    <Stack
                        p={2}
                        direction={"column"}
                        spacing={2}
                        alignItems="center"
                        sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}
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
        </Stack>
    );
}
function ImgMessege({ el }) {
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
        </Stack>
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
        </Stack>
    );
}

function DocumentMessege({ el }) {
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
                <Stack spacing={2}>
                    <Stack
                        p={2}
                        direction={"row"}
                        spacing={3}
                        alignItems={"center"}
                        sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}
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
        </Stack>
    );
}

export { TimeLine, ReplyMessege, ImgMessege, TextMessege, LinkMessege, DocumentMessege };
