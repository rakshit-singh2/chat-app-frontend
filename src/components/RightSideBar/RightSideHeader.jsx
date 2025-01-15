import { Box, Stack, Typography, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { ToggleSideBar, UpdateSidebarType } from '../../redux/slices/app';
import { useTheme } from '@mui/material/styles';
import { XCircle, ArrowLeft } from "phosphor-react";
import { useSelector } from "react-redux";

const RightSideHeader = ({ title }) => {

    const theme = useTheme();
    const dispatch = useDispatch();
    const { sideBar } = useSelector((store) => store.app);

    return (
        <Box
            p={2}
            sx={{
                height: 64,
                width: "100%",
                backgroundColor: theme.palette.mode === "light" ? "rgb(50, 143, 168)" : "rgb(30, 30, 30)",
                borderBottom: "1px solid rgba(145, 158, 171, 0.24)"
            }}
        >
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={sideBar.type === "CONTACT" ? "space-between" : ""}
                sx={{
                    width: "100%",
                    height: "100%"
                }}
            >
                {sideBar.type === "CONTACT" ? (
                    <>
                        <Typography variant="body1" fontWeight={600}>
                        {title}
                        </Typography>
                        <IconButton
                            onClick={() => {
                                dispatch(ToggleSideBar());
                            }}
                        >
                            <XCircle size={24} color={theme.palette.mode === 'light' ? "#000" : "#fff"} />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <IconButton
                            onClick={() => {
                                dispatch(UpdateSidebarType("CONTACT"));
                            }}
                        >
                            <ArrowLeft size={24} />
                        </IconButton>
                        <Typography variant="body1" fontWeight={600}>
                            {sideBar.type === "SHARED" ? "Shared Messages" : "Starred Messages"}
                        </Typography>
                    </>
                )
                }
            </Stack>
        </Box>
    )
}

export default RightSideHeader;