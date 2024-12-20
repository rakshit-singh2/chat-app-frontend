import {Box, Stack, IconButton, Typography} from '@mui/material';
import {CaretLeft} from 'phosphor-react';
import {useTheme} from '@mui/material';
import ProfileForm from '../../components/forms/ProfileForm';

const Profile = () => {

    const theme = useTheme();
    
  return (
    <>
        <Stack
            direction={"row"}
            width={"100%"}
        >
            {/* Left Panel */}
            <Box
                sx={{
                    //overflowY: "scroll",
                    height: "100vh",
                    width: 320,
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                    boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
                }}
            >
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={3}
                    p={3}
                >
                    <IconButton>
                        <CaretLeft size={32} />
                    </IconButton>
                    <Typography variant='h5'>
                       Profile
                    </Typography>
                </Stack>                

                <ProfileForm />
   
            </Box>
            {/* Right Panel */}
            <Box
                sx={{
                    height: "100%",
                    width: "calc(100vw - 420px)",
                    backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
                }}
            >                

            </Box>
        </Stack>
    </>
  )
}

export default Profile;