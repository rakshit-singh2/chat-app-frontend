import React from 'react';
import { Divider, Typography, useTheme, Stack, Box, Link, IconButton } from '@mui/material';
import { DownloadSimple, Image } from "phosphor-react";

const DocMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction="row"
            JustifyContent={el.incoming ? "start" : "end"}
        >
            <Box
                p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main,
                    borderRadius: 1.5, // 1.50 12 px
                    width: "max-content",
                }}
            >
                <Stack spacing={2}>
                    <Stack p={2}
                        direction="row"
                        spacing={3}
                        alignItems="center"
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1
                        }}
                    >
                        <Image size={48} />
                        <Typography variant="caption">
                            A.png
                        </Typography>
                        <IconButton>
                            <DownloadSimple />
                        </IconButton>
                    </Stack>
                    <Typography variant="caption2" sx={{ color: el.incoming ? theme.palette.text.primary : "#fff" }}>
                        fsfdsd
                    </Typography>
                </Stack>
            </Box>
        </Stack>
    )
}
const LinkMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction="row"
            JustifyContent={el.incoming ? "start" : "end"}
        >
            <Box
                p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main,
                    borderRadius: 1.5, // 1.50 12 px
                    width: "max-content",
                }}
            >
                <Stack spacing={2}>
                    <Stack p={2}
                        direction="column"
                        spacing={3}
                        alignItems="start"
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1
                        }}
                    >
                        < img
                            src={el.preview}
                            alt={el.message}
                            style={{ maxHeight: 218, borderRadius: "10px" }}
                        />
                    </Stack>
                    <Stack spacing={2}>
                        <Typography
                            variant="subtitle2"
                            color={el.incoming ? theme.palette.text : "#fff"}
                        >
                            Creating chat app
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color={theme.palette.primary.main}
                            component={Link}
                            to="//https://www.youtube.com/watch?v=g4Z-kRkWnU0&list=PLdLUE-L26MMbXYkddCi6Cb1jy5dKczosk&index=7"
                        >
                            www.youtube.com
                        </Typography>
                        <Typography
                            variant="body2"
                            color={el.incoming ? theme.palette.text : "#fff"}
                        >
                            {el.message}
                        </Typography>
                    </Stack>
                </Stack>
            </Box >
        </Stack >
    )
}

const ReplyMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction="row"
            justifyContent={el.incoming ? "start" : "end"}
        >
            <Box
                p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main,
                    borderRadius: 1.5, // 1.50 12 px
                    width: "max-content",
                }}
            >
                <Stack spacing={2}>
                    <Stack p={2}
                        direction="column"
                        spacing={3}
                        alignItems="center"
                        sx={{
                            backgroundColor: theme.palette.background.paper, borderRadius: 1
                        }}
                    >
                        <Typography
                            variant="body2"
                            color={theme.palette.text}
                        >
                            {el.message}
                        </Typography>
                    </Stack>
                    <Typography
                        variant="body2"
                        color={el.incoming ? theme.palette.text : "#fff"}
                    >
                        {el.reply}
                    </Typography>
                </Stack>
            </Box >
        </Stack >
    )
}

const MediaMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction="row"
            JustifyContent={el.incoming ? "start" : "end"}
        >
            <Box
                p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main,
                    borderRadius: 1.5, // 1.50 12 px
                    width: "max-content",
                }}
            >
                <Stack spacing={1}>
                    < img
                        src={el.img}
                        alt={el.message}
                        style={{ maxHeight: 218, borderRadius: "10px" }}
                    />
                    <Typography
                        variant="body2"
                        color={el.incoming ? theme.palette.text : "#fff"}
                    >
                        {el.message}
                    </Typography>
                </Stack>
            </Box >
        </Stack >
    )
}

const TextMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack direction="row" justifyContent={el.Incoming ? "start" : "end"}>
            <Box
                p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main,
                    borderRadius: 1.5, // 1.5 x 8 = 12
                    width: "max-content"
                }}
            >
                <Typography
                    variant="body2"
                    color={el.incoming ? theme.palette.text : "#fff"}
                >
                    {el.message}
                </Typography>
            </Box>
        </Stack >
    )
}

const TimeLine = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Divider sx={{ width: '46%' }} />
            <Typography variant="caption2" sx={{ color: theme.palette.text.primary }}>
                {el.text}
            </Typography>
            <Divider sx={{ width: '46%' }} />
        </Stack>
    );
}

export { TimeLine, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
