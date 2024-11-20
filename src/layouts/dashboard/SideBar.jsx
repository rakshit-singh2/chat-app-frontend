import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Stack, Tooltip } from "@mui/material";
import appimages from "../../assets/Images/AppImages";
import { Nav_Buttons } from "../../data"
import { faker } from '@faker-js/faker';
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";
import { useDispatch } from "react-redux";
import { Profile_Menu, Nav_Setting } from '../../data';
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../../redux/slices/auth";
const SideBar = () => {

    const dispatch = useDispatch();

    const theme = useTheme();
    const [selected, setSelected] = useState(0);
    const { onToggleMode } = useSettings();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getMenuPath = (index) => {
        switch (index) {
            case 0:
                console.log(index);
                return "/profile";

            case 1:
                return "/settings";

            case 2:
                // TODO => Update token and set isAuth
                return "auth/login";

            default:
                break;
        }
    }

    return (
        <Box
            padding={2}
            sx={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                height: "100vh",
                width: 100,
            }}
        >
            <Stack
                direction={"column"}
                sx={{ width: "100%", height: "100%" }}
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={3}
            >
                <Stack alignItems={"center"} spacing={4}>
                    <Box

                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: 64,
                            width: 64,
                            borderRadius: 1.5,
                        }}>
                        <img
                            src={appimages.images.logo}
                            alt="chat app logo"
                        />
                    </Box>
                    <Stack
                        spacing={3}
                        sx={{ width: "max-content" }}
                        direction="column"
                        alignItems="center">
                        {Nav_Buttons.map((el, index) => (
                            el.index === selected ?
                                <Box
                                    key={el.index}
                                    p={1}
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: 1.5
                                    }}
                                >
                                    <Tooltip title={el.title}>
                                        <IconButton key={el.index}
                                            sx={{
                                                width: "max-content",
                                                color: "#fff"
                                            }}
                                        >
                                            {el.icon}
                                        </IconButton>

                                    </Tooltip>
                                </Box>
                                : 
                                <Tooltip title={el.title} key = {index}>
                                    <IconButton
                                        onClick={() => {
                                            setSelected(el.index);
                                            navigate(el.route);
                                        }}
                                        key={el.index}
                                        sx={{
                                            width: "max-content",
                                            color: theme.palette.mode === 'light' ? "#000" : theme.palette.text.primary
                                        }}
                                    >
                                        {el.icon}
                                    </IconButton>
                                </Tooltip>
                        ))}
                        <Divider flexItem />
                        {selected === 4 ?
                            <Box
                                p={1}
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    borderRadius: 1.5
                                }}
                            >
                                <Tooltip title={Nav_Setting[0].title}>
                                    <IconButton
                                        sx={{
                                            width: "max-content",
                                            color: "#fff"
                                        }}
                                    >
                                        {Nav_Setting[0].icon}
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            :
                            <Tooltip title={Nav_Setting[0].title}>
                                <IconButton
                                    onClick={() => {
                                        setSelected(4);
                                        navigate(Nav_Setting[0].route);
                                    }}
                                    sx={{
                                        width: "max-content",
                                        color: theme.palette.mode === 'light' ? "#000" : theme.palette.text.primary
                                    }}
                                >
                                    {Nav_Setting[0].icon}
                                </IconButton>
                            </Tooltip>
                        }
                    </Stack>
                </Stack>
                <Stack spacing={4}>
                    <AntSwitch
                        defaultChecked
                        onChange={() => {
                            onToggleMode();
                        }}
                    />
                    <Avatar src={faker.image.avatar()}
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}

                    />
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}

                    >
                        {Profile_Menu.map((el, index) => (
                            <MenuItem key={index} onClick={() => {
                                handleClick();
                            }}>
                                <Stack
                                    onClick={() => {
                                        if (index === 2) {
                                            dispatch(LogoutUser());
                                        } else {
                                            navigate(getMenuPath(index));
                                        }
                                    }}
                                    sx={{ width: 100 }}
                                    direction={"row"}
                                    alignItems={"center"}
                                    justifyContent={"space-between"}>
                                    <span>{el.title}</span>
                                    {el.icon}
                                </Stack>
                            </MenuItem>
                        ))}
                    </Menu>
                </Stack>
            </Stack>
        </Box>
    )
}

export default SideBar;