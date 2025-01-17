import React, { useEffect, useState } from "react";
import { Box, Stack, Button, Divider, useTheme } from "@mui/material";
import { ArchiveBox } from "phosphor-react";
import SearchHeader from '../../components/SearchHeader';
import PinnedConversations from '../../components/PinnedConversations';
import AllConversations from '../../components/AllConversations';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Friends from "../../sections/main/Friends";
import { socket } from "../../utils/socket";
import { FetchDirectConversations } from "../../redux/slices/conversation";

const user_id = window.localStorage.getItem("user_id");

const Chats = () => {

  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const { conversations } = useSelector((state) => state.conversation.direct_chat);

  useEffect(() => {
    socket.emit("get_direct_conversations", { user_id }, (data) => {
      // data => list of conversations                    
      dispatch(FetchDirectConversations({ data }));
    })
  }, []);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate('/generalchat');
  };


  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 420,
          backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
        }}
      >
        <Stack p={3} spacing={2} sx={{ height: "100vh" }} >

          <SearchHeader header={"Chats"} />

          <Stack spacing={1}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1.5}
            >
              <ArchiveBox size={24} />
              <Button>Archive</Button>
            </Stack>
            <Divider />
          </Stack>
          <Stack
            direction={"column"}
            sx={{
              flexGrow: 1,
              height: "100%",
              overflowX: "hidden",
              scrollbarColor: theme.palette.primary.dark,
            }}
            spacing={2}
          >

            <PinnedConversations chatType="Chat" conversations={conversations} />

            <AllConversations chatType="Chat" conversations={conversations} />

          </Stack>
        </Stack>
      </Box>
      {openDialog && <Friends open={openDialog} handleClose={handleCloseDialog} />}

    </>
  )
}

export default Chats