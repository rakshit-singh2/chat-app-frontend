import { Box } from '@mui/material';
import { Stack } from '@mui/material'; // Changed from 'phosphor-react' to '@mui/material'
import React from 'react';
import { Chat_History } from '../../data';
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from './MsgTypes';

const Message = ({ menu }) => {
    return (
        <Box p={3}>
            <Stack spacing={3}>
                {Chat_History.map((el, index) => {
                    switch (el.type) {
                        case "divider":
                            return <TimeLine key={index} el={el} />; 
                        case "msg":
                            switch (el.subtype) {
                                case "img":
                                    return <MediaMsg key={index} el={el} menu={menu} />; 
                                case "doc":
                                    return <DocMsg key={index} el={el} menu={menu} />; ; 
                                case "link":
                                    return <LinkMsg key={index} el={el} menu={menu} />;
                                case "reply":
                                    return <ReplyMsg key={index} el={el} menu={menu} />;
                                default:
                                    return <TextMsg key={index} el = {el} menu={menu} />;
                            }
                        default:
                            return <></>;
                    }
                })}
            </Stack>
        </Box>
    );
}

export default Message;
