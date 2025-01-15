import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import { Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Contact from "../../components/RightSideBar/Contact";
import { useSelector } from "react-redux";
import StarredMessages from "../../components/RightSideBar/StarredMessages";
import SharedMessages from "../../components/RightSideBar/SharedMessages";

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
          width: sideBar.open ? "calc(100vw - 320px - 420px)" : "calc(100vw - 420px)",//320 for right side and 420 for left side
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