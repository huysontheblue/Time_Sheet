import React, { useState } from "react";
import { Box } from "@mui/system";
import logoNCC from "../../asset/images/logoNCC.png";
import { Avatar, Typography } from "@mui/material";
import { MoreVert, UploadFileRounded, DescriptionRounded, ArrowDropDown, Menu, SwapVert } from '@mui/icons-material';
import usa from '../../asset/images/usa.png'

const Header = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const handleClickSwap = () => {
        setOpen(true);
    }

    const handleClickMenu = () => {
        setOpen1(true);
    }
    
    return (
        <>
            <Box
                sx={{
                    background: "#f44336",
                    height: "65px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 2px 10px rgba(0.5,0.5,0.5,0.5)"
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", px: "25px" }}>
                    <Menu 
                        onClick={handleClickMenu}
                        sx={{
                            color: "#fff",
                            marginRight: "10px",
                            display: {xs: "block", sm: "block", md: "none"},
                            cursor: "pointer",
                        }}
                    />
                    <img src={logoNCC} width={20} height={20} alt="logoNCC" />
                    <Typography
                        sx={{ fontSize: "18px", lineHeight: "28px", color: "#fff", pl: '5px' }}
                    >
                        Timesheet
                    </Typography>
                </Box>
                
                <Box sx={{ px: "30px", display: 'flex', color: '#fff', cursor: 'pointer', fontSize: 15 }}>
                    <UploadFileRounded 
                        sx={{
                            display: {xs: "none", sm: "none", md: "block"}
                        }}
                    />
                    <DescriptionRounded 
                        sx={{
                            display: {xs: "none", sm: "none", md: "block"}
                        }}
                    />  

                    <Avatar sx={{
                        width: "20px",
                        height: "20px",
                        padding: "0 2px",
                        display: {xs: "none", sm: "none", md: "block"},
                    }} src={usa} />  

                    <Typography
                        sx={{
                            display: {xs: "none", sm: "none", md: "block"}
                        }}
                    >
                        English
                    </Typography>
                    <ArrowDropDown 
                        sx={{
                            display: {xs: "none", sm: "none", md: "block"}
                        }} 
                    />
                    <MoreVert 
                        sx={{
                            display: {xs: "none", sm: "none", md: "block"}
                        }}
                    />
                    <SwapVert 
                        onClick={handleClickSwap}
                        sx={{
                            display: {xs: "block", sm: "block", md: "none"}
                        }}
                    />
                </Box>
            </Box>
        </>
    );
};

export default Header;