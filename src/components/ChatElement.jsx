import { Box, Stack, Avatar, Typography, Badge } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import StyledBadge from '../components/StyledBadge';
import { useDispatch, useSelector } from 'react-redux';
import { SelectConversation } from '../redux/slices/app';

const truncateText = (string, n) => {
    return string?.length > n ? `${string?.slice(0, n)}...` : string;
};

const StyledChatBox = styled(Box)(({ theme }) => ({
    "&:hover": {
        cursor: "pointer",
    },
}));

const ChatElement = ({ img, name, msg, time, unread, online, id }) => {
    const dispatch = useDispatch();
    const { room_id } = useSelector((state) => state.app);
    const selectedChatId = room_id?.toString();

    let isSelected = +selectedChatId === id;

    if (!selectedChatId) {
        isSelected = false;
    }

    const theme = useTheme();

    return (
        <StyledChatBox
            onClick={() => {
                dispatch(SelectConversation({ room_id: id }));
            }}
            sx={{
                width: "100%",

                borderRadius: 1,

                backgroundColor: isSelected
                    ? theme.palette.mode === "light"
                        ? alpha(theme.palette.primary.main, 0.5)
                        : theme.palette.primary.main
                    : theme.palette.mode === "light"
                        ? "#fff"
                        : theme.palette.background.paper,
            }}
            p={2}
        >
            <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
            >
                <Stack direction="row" spacing={2}>
                    {" "}
                    {online ? (
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            variant="dot"
                        >
                            <Avatar alt={name} src={img} />
                        </StyledBadge>
                    ) : (
                        <Avatar alt={name} src={img} />
                    )}
                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{name}</Typography>
                        <Typography variant="caption">{truncateText(msg, 20)}</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} alignItems={"center"}>
                    <Typography sx={{ fontWeight: 600 }} variant="caption">
                        {time}
                    </Typography>
                    <Badge
                        className="unread-count"
                        color="primary"
                        badgeContent={unread}
                    />
                </Stack>
            </Stack>
        </StyledChatBox>
    );
};

export default ChatElement;
