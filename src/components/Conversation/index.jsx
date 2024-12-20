import React from 'react'
import { Box, Stack } from "@mui/material";
import Header from '../Conversation/Header';
import Message from '../Conversation/Message';
import Footer from '../Conversation/Footer';

const Conversation = () => {

    return (
        <Stack
            direction="column"
            height={"100%"}
            maxHeight={"100vh"}
            width={"100%"}
        >
            {/* Chat Header */}
            <Header />

            {/* Msg */}
            <Box
                width={"100%"}
                sx={{
                    flexGrow: 1,
                    height: "100%",
                    overflowY: "auto",
                    overflowX: "hidden",
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                <Message menu={true} />

            </Box>

            {/* Chat Footer */}
            <Footer />
        </Stack>
    )
}

export default Conversation;
