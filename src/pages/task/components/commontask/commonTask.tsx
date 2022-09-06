import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Alert, Snackbar } from "@mui/material";
import { resetProgress, taskSelector } from '../../../../redux/reducers/taskReducer'
import EditTasks from "../editTask/editTask";
import { RootState } from "../../../../redux/store";
import Archive from "../archiveTask/archiveTask";
import DeArchiveTask from "../deArchiveTask/deArchiveTask";
import DeleteTask from "../deleteTask/deleteTask";
import {
  Common,
  Title,
  TitleContent,
  TitleName,
  ListCommon,
  ItemRight,
} from './commontaskCss'

const CommonTask: React.FC = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const progress = useSelector((state: RootState) => state.task.progress);
  const message = useSelector((state: RootState) => state.task.error.message);
  const searchName = useSelector((state: RootState) => state.task.searchName);
  const commonTasks = useSelector(taskSelector.getCommonTaskSelector);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOpenSnackbar = () => {
    setOpen(false);
    setOpenSnackbar(true);
  };

  const handleSnackBarClose = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (progress === "done" && open) {
      dispatch(resetProgress());
      setOpen(true);
      // handleOpenSnackbar();
    }
  }, [progress, open, dispatch]);


  return (
    <Common>
      <Title>Common Task ({commonTasks && commonTasks.length})</Title>
      <TitleContent>
        These tasks are automatically added to all new projects
      </TitleContent>
      <ListCommon>
        <TitleName>Name</TitleName>
        {commonTasks &&
          commonTasks.filter((item) => item.name.toLowerCase().includes(searchName))
            .map((item, index) => {
              return (
                <Table
                  aria-label="simple table"
                  sx={{ border: 1, color: "#e9e9e9" }}
                  key={index}
                >
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell scope="row" sx={{ width: "5px", padding: "5px 5px" }}>
                        <EditTasks task={item} />
                      </TableCell>
                      <TableCell scope="row" sx={{ color: 'rgb(85, 85, 85)' }}>{item.name}</TableCell>
                      <TableCell
                        align="right"
                        sx={{ width: "5px", padding: "5px 5px" }}
                        onClick={handleClick}
                      >
                        {!(item.isDeleted) ? (
                          <ItemRight>
                            <Archive task={item} />
                            <Button
                              variant="outlined"
                              sx={{ color: "#333333" }}
                              style={{ background: "#fb483a", 
                                      textTransform: 'capitalize', 
                                      border: 'none', 
                                      outline: 'none' 
                                    }}
                              disabled
                            >
                              Delete
                            </Button>
                          </ItemRight>
                        ) : (
                          <ItemRight>
                            <DeArchiveTask task={item} />
                            <DeleteTask task={item} />         
                          </ItemRight>
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              );
            })}
      </ListCommon>
    </Common>
  );
};

export default CommonTask;