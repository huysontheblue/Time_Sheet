import React from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { ITaskRequest } from '../../../../api/task/type'
import { archiveTask } from '../../../../redux/actions/taskAction'
import { 
  style,
  Form,
  TextTitle,
  TextName,
  ArchiveButton,
} from './archiveTaskCss'

const Archive: React.FC<{ task: ITaskRequest }> = ({ task }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const onArchive = async (id: number) => {
    dispatch(archiveTask(id));
    handleClose();
  };
  
  return (
    <div>
      <Button
        defaultValue={task.id}
        style={{
          background: "#FFFFFF",
          color: "black",
          marginRight: "10px",
          textTransform: "none",
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Archive
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
              sx={{ width: "100px", height: "100px", color: "#f8bb86"}}
            />
            <TextTitle>Are you sure?</TextTitle>
            <TextName>Archive task : {task.name}?</TextName>
            <ArchiveButton>
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
                  onArchive(task.id);
                }}
              >
                Yes
              </Button>
            </ArchiveButton>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};

export default Archive;