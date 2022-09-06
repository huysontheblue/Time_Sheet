import React from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography, MenuItem, Modal } from "@mui/material";
import { useState } from 'react';

const MenuEdit = styled(MenuItem)``;

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const viewProject: React.FC = () => {
  const [open, setOpen] = useState(false);

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
                width={1000} 
                height={550}  
                bgcolor={"background.default"} 
                color={"text.primary"} 
                borderRadius={2} 
                p={3}
            >
              <Typography 
                variant='h5' 
                color="black"
                fontWeight={400}
              >
                View Project: 
              </Typography>
            </Box>
        </StyleModal>
    </MenuEdit>
  );
};

export default viewProject;
