import { Box, IconButton, Stack, Tabs, Tab, Typography, useTheme, Grid } from "@mui/material";
import { ArrowLeft } from "phosphor-react";
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";

import Message from "./Conversation/Message";
const StarredMessages = () => {

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
        <Box
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
              Starred Messages
            </Typography>

          </Stack>
        </Box>
        {/* Body */}
        <Stack
          p={3}
          spacing={3}
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
            overflowX: "hidden"
          }}
        >
          <Message menu={false}/>
        </Stack>
      </Stack>
    </Box>

  )
}

export default StarredMessages;