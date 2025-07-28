import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';



const cardsDef = [
    {
        logoText: 'D',
        header: 'Design',
        text: 'Unsloth is an open-source Python framework that speeds up the fine-tuning of large language models (LLMs). Its designed to help developers and researchers create custom models more quickly and efficiently.'
    },
    {
        logoText: 'D',
        header: 'Develop',
        text: 'Prompt engineering is the process of writing prompts to maximize the quality and relevance of the response.',
    },
    {
        logoText: 'S',
        header: 'Support',
        text: 'Prompt engineering is the process of writing prompts to maximize the quality and relevance of the response.',
    },
    {
        logoText: 'E',
        header: 'Enhance',
        text: 'Prompt engineering is the process of writing prompts to maximize the quality and relevance of the response.',
    }
]


function HomeCard(cardItem:any) {
    return (<Card
        sx={{
            maxWidth: 343,
            borderRadius: "20px",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            transition: "0.3s",
            margin: '5px',
            flex: 1,
            minWidth: '305px',
            minHeight: '305px',
            bgcolor: '#362a2e'
        }}
    >
        <Box sx={{ minWidth: 256 }}>
            <Box
                sx={{
                    padding: `4px 13px 0`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
            </Box>
        </Box>
        <CardContent sx={{ p: 3 }}>
            <Typography gutterBottom sx={{ color: '#9d8590', fontSize: 14 }}>{cardItem.area}</Typography>
            <Typography gutterBottom sx={{ color: '#f37b83', fontSize: '3em' }} component="div">{cardItem.header}</Typography>
            <Typography variant="body2" sx={{ color: '#9d8590' }}>
                {cardItem.text}
            </Typography>
        </CardContent>
    </Card>
    )
}

export default function HomeCards() {

    const cardItems:any[] = []

    cardsDef.forEach(item => {
        cardItems.push(HomeCard(item))
    });

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {cardItems}
        </Box>
    );
}