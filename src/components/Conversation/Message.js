import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
    ImgMessege,
    ReplyMessege,
    TextMessege,
    TimeLine,
    LinkMessege,
    DocumentMessege,
} from "./TypeMessege";

function Message() {
    return (
        <Box p={3}>
            <Stack spacing={3}>
                {Chat_History.map((el) => {
                    switch (el.type) {
                        case "divider":
                            return <TimeLine el={el} />;
                        case "msg":
                            switch (el.subtype) {
                                case "img":
                                    return <ImgMessege el={el} />;
                                case "doc":
                                    return <DocumentMessege el={el} />;
                                case "link":
                                    return <LinkMessege el={el} />;
                                case "reply":
                                    return <ReplyMessege el={el} />;
                                default:
                                    return <TextMessege el={el} />;
                            }
                            break;
                        default:
                            return <></>;
                    }
                })}
            </Stack>
        </Box>
    );
}

export default Message;
