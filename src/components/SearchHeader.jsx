
import { Stack, Typography, IconButton, InputBase, Button, Divider } from "@mui/material";
import { CircleDashed, Users, MagnifyingGlass, ArchiveBox } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import Search from "./Search/Search";
import SearchIconWrapper from "./Search/SearchIconWrapper";
import StyledInputBase from "./Search/StyledInputBase";
import { useState } from "react";
import Friends from "../sections/main/Friends";

const SearchHeader = ({ header, }) => {
    const [openDialogueBox, setOpenDialogueBox] = useState(false);

    const theme = useTheme();

    const handleCloseDialogue = () => {
        setOpenDialogueBox(false);
    }
    const handleOpenDialogue = () => {
        setOpenDialogueBox(true);
    }

    return (
        <>
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Typography
                    variant="h5"
                    letterSpacing={1}
                >
                    {header}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton onClick={() => {
                        handleOpenDialogue();
                    }}>
                        <Users size={32} />
                    </IconButton>
                    <IconButton>
                        <CircleDashed size={32} />
                    </IconButton>
                </Stack>
            </Stack>
            <Stack
                sx={{
                    width: "100%"
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
            </Stack>
            {openDialogueBox && <Friends open={openDialogueBox} handleClose={handleCloseDialogue} />}
        </>
    )
}

export default SearchHeader;