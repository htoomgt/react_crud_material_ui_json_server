import React from "react";
import { Box, Typography, styled } from "@mui/material";
import Youtube from "../assets/images/youtube_channel.png";
import InstaTele from "../assets/images/InstaTele.jpeg";

const Header = styled(Box)`
margin: 50px;
& > div {
    margin-top: 50px;
}
`;

const Image = styled("img")({
    width: "50%",
    height: "50%",
});

const CodeForInterview = () => {
    return (
        <Header sx={{ mt: 10 }}>
            <Typography variant="h4" >Code for Interview</Typography>
            <Box style={{ display: "flex" }}>
                <Image src={Youtube} />
                <Image src={InstaTele} />
            </Box>
        </Header>
    );
};

export default CodeForInterview;
