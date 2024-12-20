import { forwardRef } from 'react';
import { Box, Dialog, DialogContent, DialogTitle, Typography, Stack, Slide, Button, IconButton } from '@mui/material';
import { XCircle, MagnifyingGlass } from 'phosphor-react';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { CallElement } from '../../components/CallElement';
import { MembersList } from '../../data';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
    return (
        <Dialog
            maxWidth="md"
            open={open}
            onClose={handleClose}
            keepMounted
            TransitionComponent={Transition}
            sx={{
                p: 4,
            }}
        >
            <Box
                width={380}
                sx={{
                    overflowY: "auto",
                    overflowX: "hidden",
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                <DialogTitle>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}

                    >
                        <Typography
                            p={2}
                            variant="h4"
                        >
                            Start Call
                        </Typography>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={2}
                        sx={{
                            mb: "20px"
                        }}
                    >
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color="#709CE6" size={32} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <IconButton
                            onClick={handleClose}
                        >
                            <XCircle size={24} />
                        </IconButton>
                    </Stack>
                    {/* Call List */}
                    <Box
                        width={"100%"}
                        sx={{
                            maxHeight: "500px",
                            overflowY: "auto",
                            overflowX: "hidden",
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >

                        {MembersList.map((el) => <CallElement {...el} key={el.id} />)}

                    </Box>
                </DialogContent>
            </Box>
        </Dialog>
    )
}

export default StartCall;