import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
export const SidebarData = [
    {
        title:"Profile",
        Icon: <AccountCircleIcon />,
        link: "/profile",
    },
    {
        title:"Transaction",
        Icon: <ReceiptIcon />,
        link: "/transaction",

    },
    {
        title:"Address",
        Icon: <HomeIcon />,
        link: "/address",

    },
    {
        title:"Favorite",
        Icon: <StarIcon />,
        link: "/favorite",

    }
]