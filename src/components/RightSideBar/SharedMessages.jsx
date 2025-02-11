import { Box, IconButton, Stack, Tabs, Tab, Typography, useTheme, Grid } from "@mui/material";
import { ArrowLeft } from "phosphor-react";
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../../redux/slices/app";
import { SHARED_DOCUMENTS, SHARED_LINKS } from '../../data';
import { faker } from "@faker-js/faker";
import { DocMsg, LinkMsg } from "../../sections/dashboard/Conversation";
import RightSideHeader from "./RightSideHeader";

const SharedMessages = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const theme = useTheme();
    const dispatch = useDispatch();

    return (

        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack
                sx={{
                    height: "100%"
                }}
            >
                {/* Header */}
                <RightSideHeader title="Contact Info"/>
                {/* <Box
                    p={2}
                    sx={{
                        height: 100,
                        width: "100%",
                        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                        boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
                    }}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent="space-between"
                        sx={{
                            width: "100%",
                            height: "100%"
                        }}
                    >
                        <IconButton
                            onClick={() => {
                                dispatch(UpdateSidebarType("CONTACT"));
                            }}
                        >
                            <ArrowLeft size={24} />
                        </IconButton>
                        <Typography variant="body1" fontWeight={600}>
                            Shared Messages
                        </Typography>

                    </Stack>
                </Box> */}
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Media" />
                    <Tab label="Links" />
                    <Tab label="Docs" />
                </Tabs>
                {/* Body */}
                <Stack
                    alignItems={"center"}
                    p={3}
                    spacing={value === 1 ? 1 : 3}
                    sx={{
                        height: "100%",
                        position: "relative",
                        flexGrow: 1,
                        overflowY: "scroll",
                        overflowX: "hidden"
                    }}
                >
                    {(() => {

                        switch (value) {
                            case 0:
                                return (
                                    <Grid container spacing={2}>
                                        {
                                            [1, 2, 3, 4, 5, 6].map((el, index) => {
                                                return <Grid key={index} item xs={4}>
                                                    <img
                                                        src={faker.image.urlLoremFlickr({ category: 'avatar' })}
                                                        alt={faker.person.fullName()}
                                                    />
                                                </Grid>

                                            })
                                        }
                                    </Grid>
                                );

                            case 1:
                                return SHARED_LINKS.map((el, index) => <LinkMsg key={index} el={el} />);

                            case 2:
                                return SHARED_DOCUMENTS.map((el, index) => <DocMsg key={index} el={el} />);

                            default:
                                break;
                        }
                    })()}
                </Stack>

            </Stack>
        </Box>

    )
}

export default SharedMessages;