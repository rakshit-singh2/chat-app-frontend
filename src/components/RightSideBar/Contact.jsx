import React, { forwardRef, useState } from "react";
import { Box, IconButton, Stack, Typography, Divider, Avatar, Button, useTheme, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Slide } from "@mui/material";
import { useDispatch } from "react-redux";
import { faker } from "@faker-js/faker";
import { VideoCamera, Phone, CaretRight, Star, Bell, Flag, Trash, XCircle } from "phosphor-react";
import AntSwitch from '../AntSwitch';
import { ToggleSideBar, UpdateSidebarType } from "../../redux/slices/app";
import RightSideHeader from "./RightSideHeader";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Block this contact</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure you want to block this Contact?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Yes</Button>
            </DialogActions>
        </Dialog>
    );
};

const DeleteDialog = ({ open, handleClose }) => {

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Delete this contact</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure you want to delete this Contact?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Yes</Button>
            </DialogActions>
        </Dialog>
    );
};

const Contact = () => {
    const [openBlock, setOpenBlock] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const theme = useTheme();
    const dispatch = useDispatch();
    const handleCloseBlock = () => {
        setOpenBlock(false);
    }

    const handleDeleteBlock = () => {
        setOpenDelete(false);
    }

    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }} >
                {/* Header */}
                <RightSideHeader title="Contact Info"/>
                {/* <Box
                    p={2}
                    sx={{
                        height: 90,
                        width: "100%",
                        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                        boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
                    }}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        sx={{
                            width: "100%",
                            height: "100%"
                        }}
                    >
                        <Typography variant="body1" fontWeight={600}>
                            Contact Info
                        </Typography>
                        <IconButton
                            onClick={() => {
                                dispatch(ToggleSideBar());
                            }}
                        >
                            <XCircle size={24} />
                        </IconButton>
                    </Stack>
                </Box> */}

                {/* Body */}
                <Stack
                    p={3}
                    spacing={3}
                    sx={{
                        height: "100%",
                        position: "relative",
                        flexGrow: 1,
                        overflowY: "auto",
                        overflowX: "hidden",
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    <Stack
                        alignItems={"center"}
                        direction={"row"}
                        spacing={2}
                    >
                        <Avatar src={faker.image.urlLoremFlickr({ category: 'avatar' })} alt={faker.person.firstName()} sx={{ height: 64, width: 64 }} />
                        <Stack
                            direction={"column"}
                            spacing={0.5}
                        >
                            <Typography variant="article" fontWeight={600}>
                                {faker.person.fullName()}
                            </Typography>
                            <Typography variant="body2" fontWeight={500}>
                                {faker.phone.number()}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-evenly"}
                    >
                        <Stack
                            spacing={1}
                            alignItems={"center"}
                        >
                            <IconButton>
                                <VideoCamera />
                            </IconButton>
                            <Typography variant="overLine">
                                Video
                            </Typography>

                        </Stack>
                        <Stack
                            spacing={1}
                            alignItems={"center"}
                        >
                            <IconButton>
                                <Phone />
                            </IconButton>
                            <Typography variant="overLine">
                                Voice
                            </Typography>
                        </Stack>
                    </Stack>

                    <Divider />

                    <Stack
                        spacing={0.5}
                    >
                        <Typography variant="article">
                            About
                        </Typography>
                        <Typography variant="body2">
                            Hi, this is Joe.
                        </Typography>
                    </Stack>

                    <Divider />

                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Typography variant="subtitle1">
                            Media, links and docs
                        </Typography>
                        <Button
                            endIcon={<CaretRight />}
                            onClick={() => {
                                dispatch(UpdateSidebarType("SHARED"));
                            }}
                        >
                            201
                        </Button>
                    </Stack>
                    <Stack
                        direction={"row"}
                        spacing={2}
                        alignItems={"center"}
                        justifyContent={"space-evenly"}
                    >
                        {[1, 2, 3].map((el, index) => (
                            <Box key={index}>
                                <img src={faker.image.urlLoremFlickr({ category: 'food' })} alt={faker.person.fullName()} />
                            </Box>
                        ))}
                    </Stack>

                    <Divider />

                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        spacing={2}
                    >
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                        >
                            <Star size={24} color="grey" />
                            <Typography variant="subtitle2">
                                Starred Messages
                            </Typography>
                        </Stack>

                        <IconButton
                            onClick={() => {
                                dispatch(UpdateSidebarType("STARRED"))
                            }}
                        >
                            <CaretRight size={18} />
                        </IconButton>

                    </Stack>

                    <Divider />

                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        spacing={2}
                    >
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                        >
                            <Bell size={24} color="grey" />
                            <Typography variant="subtitle2">
                                Mute Notifications
                            </Typography>
                        </Stack>

                        <IconButton>
                            <AntSwitch />
                        </IconButton>

                    </Stack>

                    <Divider />

                    <Stack
                        direction={"column"}
                        spacing={2}
                    >
                        <Typography variant="caption">
                            1 group in common
                        </Typography>
                        <Stack
                            direction={"row"}
                            spacing={2}
                            alignItems={"center"}
                        >
                            <Avatar src={faker.image.urlLoremFlickr({ category: 'avatar' })} alt={faker.person.fullName()} />
                            <Stack
                                direction={"column"}
                                spacing={0.5}
                            >
                                <Typography variant="article">
                                    Camel's Gang
                                </Typography>
                                <Typography variant="caption">
                                    Owl, Parrot, Rabbit, You
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack
                        direction={"row"}
                        spacing={2}
                        alignItems={"center"}
                    >
                        <Button
                            startIcon={<Flag />}
                            variant="outlined"
                            fullWidth
                            onClick={() => {
                                setOpenBlock(true);
                            }}
                        >
                            Block
                        </Button>
                        <Button
                            startIcon={<Trash />}
                            variant="outlined"
                            fullWidth
                            onClick={() => {
                                setOpenDelete(true);
                            }}
                        >
                            Delete
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
            {openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock} />}
            {openDelete && <DeleteDialog open={openDelete} handleClose={handleDeleteBlock} />}
        </Box>
    )
}

export default Contact;