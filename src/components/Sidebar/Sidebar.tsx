import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { Home, Assessment } from '@mui/icons-material';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { GroupWork, Add } from '@mui/icons-material';
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import logoNCC from '../../asset/images/logoNCC.png'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { removeAccessToken } from '../../utils/LocalStorage'
import { useHistory } from "react-router-dom";
import {useState} from 'react';

import { 
    Container,  
    User, 
    UserInfo, 
    Info, 
    Logout, 
    ButtonLogout, 
    Title, 
    StyleLink 
} from './SidebarCss'

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const [btn, setBtn] = React.useState(false);
    const history = useHistory();

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickBtn = () => {
        setBtn((prev) => !prev);
    };

    const handleclickLogout = () => {
        removeAccessToken();
        history.push("/account/login");
    };

    return (
        <Container>
            <User>
                <UserInfo>
                    <Info>
                        <img src={`${logoNCC}`} alt="avatarAdmin" />
                        <div>
                            <Title>admin admin</Title>
                            <Title>admin@aspnetboilerplate.com</Title>
                        </div>
                    </Info>
                </UserInfo>
                <Logout>
                    <div onClick={handleClickBtn}>
                        <KeyboardArrowDownIcon />
                    </div>
                    {btn ? (
                        <ButtonLogout onClick={handleclickLogout} style={{ color: 'gray', cursor: 'pointer' }}>
                            <LogoutIcon />
                            Logout
                        </ButtonLogout>
                    ) : null}
                </Logout>
            </User>
            <List
                sx={{ width: "100%", 
                      heigh: "90%",
                      maxWidth: 300, 
                      bgcolor: "background.paper", 
                      fontSize: 10, 
                      overflowY: 'auto', 
                      fontWeight: 700,
                    }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="nested-list-subheader">
                    </ListSubheader>
                }
            >
                <StyleLink to="/app/home">
                    <ListItemButton style={{ fontSize: '10px' }}>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home Page" />
                    </ListItemButton>
                </StyleLink>

                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <GroupWork />
                    </ListItemIcon>
                    <ListItemText primary="Admin" />
                    {open ? <Add /> : <Add />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <StyleLink to="/app/main/tasks">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <ImportContactsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Tasks" />
                            </ListItemButton>
                        </StyleLink>
                    </List>
                </Collapse>
                <StyleLink to="/app/main/projects">
                    <ListItemButton>
                        <ListItemIcon>
                            <Assessment />
                        </ListItemIcon>
                        <ListItemText primary="Projects" />
                    </ListItemButton>
                </StyleLink>

            </List>
            <footer>
                <hr></hr>
                <small style={{  marginLeft: '15px' }}>© 2022 <b style={{ color: 'red' }}>Timesheet</b>.</small>
                <small style={{ display: 'block',  marginLeft: '15px' }}><b>Version</b> 4.3.0.0 [20221908]</small>
            </footer>
        </Container>
    );
};

export default SideBar;

