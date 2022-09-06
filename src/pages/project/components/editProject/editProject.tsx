import React from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography, MenuItem, Modal, Tab } from "@mui/material";
import { useState } from 'react';
import './editProjectCss'
import { Header, ListTab, TitleHeader } from "./editProjectCss";
import { Close } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Team from "./tabEditProject/team/team";
import Tasks from "./tabEditProject/tasks/tasks";
import Notification from "./tabEditProject/notification/notification";
import General from "./tabEditProject/general/general";

const MenuEdit = styled(MenuItem)``;

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const EditProject: React.FC = () => {
  
  const [open, setOpen] = useState(false);
  const [value, setValueTab] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValueTab(newValue);
  };

  return (
    <MenuEdit>
      <EditIcon />
        <Typography onClick={(e)=>setOpen(true)}>
          Edit
        </Typography>
        <StyleModal
            open={open}
            onClose={(e) => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box 
                width={1150} 
                height={650}  
                bgcolor={"background.default"} 
                color={"text.primary"} 
                borderRadius={2} 
                p={3}
            >
              <form>
                <Header>
                  <TitleHeader>Edit project</TitleHeader>
                  <Close onClick={(e)=>setOpen(false)} sx={{
                    cursor: "pointer",
                  }}/>
                </Header>
                <Box sx={{ width: "100%", zIndex: 0, paddingTop: 3 }}>
                  <ListTab>
                    <TabContext value={value}>
                      <Box
                        sx={{
                          borderBottom: 1,
                          borderColor: "divider"
                        }}
                      >
                        <TabList
                          onChange={handleChange}
                          aria-label="lab API tabs example"
                        >
                          <Tab label="General" value="1" sx={{textTransform: "capitalize"}}/>
                          <Tab label="Teams" value="2" sx={{textTransform: "capitalize"}}/>
                          <Tab label="Tasks" value="3" sx={{textTransform: "capitalize"}}/>
                          <Tab label="Notification" value="4" sx={{textTransform: "capitalize"}}/>
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <General />
                      </TabPanel>
                      <TabPanel value="2">
                        <Team />
                      </TabPanel>
                      <TabPanel value="3">
                        <Tasks />
                      </TabPanel>
                      <TabPanel value="4">
                        <Notification />
                      </TabPanel>
                    </TabContext>
                  </ListTab>
                </Box>
              </form>        
            </Box>
        </StyleModal>
    </MenuEdit>
  );
};

export default EditProject;
