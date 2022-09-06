import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { deArchiveTask } from '../../../../redux/actions/taskAction'
import { ITaskRequest } from '../../../../api/task/type'
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { 
  style,
  Form,
  TextTitle,
  TextName,
  DeArchiveButton,
 } from './deArchiveTaskCss'

const DeArchiveTask: React.FC<{ task: ITaskRequest }> = ({ task }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const onDeArchive = async (id: number) => {
    dispatch(deArchiveTask({ id }));
    handleClose();
  };

  return (
    <div>
      <Button
        defaultValue={task.id}
        style={{
          marginRight: "10px",
          background: "#FFFFFF",
          color: "black",
          textTransform: "none",
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Unarchive
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form>
            <ErrorOutlineIcon
              sx={{ width: "100px", height: "100px", color: "#f8bb86" }}
            />
            <TextTitle>Are you sure?</TextTitle>
            <TextName>Unarchive task : {task.name} ?</TextName>
            <DeArchiveButton>
              <Button
                variant="outlined"
                sx={{ color: "#555", 
                      fontWeight: 600, 
                      backgroundColor: 'rgb(239, 239, 239)',
                      border: 'none', 
                      outline: 'none', 
                      textTransform: 'capitalize',
                      ":hover":{
                        backgroundColor: "rgb(239, 239, 239)", 
                        border: 'none'
                      }
                    }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "white", 
                      background: "#7cd1f9", 
                      border: 'none', 
                      outline: 'none', 
                      textTransform: 'capitalize',
                      ":hover":{
                        background: "#7cd1f9", 
                        border: 'none'
                      } 
                    }}
                onClick={() => {
                  onDeArchive(task.id);
                }}
              >
                Yes
              </Button>
            </DeArchiveButton>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};

export default DeArchiveTask;
