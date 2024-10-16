import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import { Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import StarredMessages from "../../components/StarredMessages";
import SharedMessages from "../../components/SharedMessages";

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
          width: sideBar.open ? "calc(100vw - 320px - 320px - 100px)" : "calc(100vw - 320px - 100px)",//320 for right side and 420 for left side 10 px for some kind of error needs to be figured out
          backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
        }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>

      {/* Contact */}
      {sideBar.open && (() => {
        switch (sideBar.type) {
          case "CONTACT":            
            return <Contact />;
                      
          case "STARRED":

            return <StarredMessages />
          
          case "SHARED":

            return <SharedMessages />;

          default: 
            break;
        }

      })()}
      
    </Stack>
  );
};

export default GeneralApp;