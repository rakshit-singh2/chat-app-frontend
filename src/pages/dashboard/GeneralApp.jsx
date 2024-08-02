import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import { Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Contact from "../../components/Conversation/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();
  const {sideBar} = useSelector((store) => store.app);

  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100%"
      }}
    >
      {/* Chats */}     
      <Chats />
     
      <Box
        sx={{
          height: "100%",
          width: sideBar.open ? "calc(100vw - 320px - 320px - 100px + 10px)" : "calc(100vw - 320px - 100px + 10px)",//320 for right side and 420 for left side 10 px for some kind of error needs to be figured out
          backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
        }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>

      {/* Contact */}
      {sideBar.open && <Contact/>}
      
    </Stack>
  );
};

export default GeneralApp;