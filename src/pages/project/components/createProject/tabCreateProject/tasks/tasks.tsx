import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ClearIcon from "@mui/icons-material/Clear";
import { RootState } from "../../../../../../redux/store";
import Checkbox from "@mui/material/Checkbox";
import {
  pushTask,
  removeTask,
  updateBillable,
} from "../../../../../../redux/reducers/projectReducer";
import { ITaskRequest } from "../../../../../../api/task/type";
import { Header, 
  LeftView, 
  LeftViewHeader, 
  NavHeader, 
  RightNav, 
  RightSelect, 
  RightView, 
  RightViewHeader, 
  Text, 
  TextView, 
  TextViewSelect, 
  ViewHeader, 
  ViewSelect, 
  ViewTask, 
  Wrapper, 
} from "./taskCss";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Tasks: React.FC = () => {
  const dispatch = useDispatch();

  const [openSelectTask, setOpenSelectTask] = React.useState(true);
  const handleClickSelectTask = () => {
    setOpenSelectTask(!openSelectTask);
  };
  const Tasks = useSelector((state: RootState) => state.project.viewTask);
  const selectedTasks = useSelector(
    (state: RootState) => state.project.selectedTasks
  );

  const [check, setCheck] = React.useState<boolean>(false);

  const handlePushTask = (task: ITaskRequest) => {
    dispatch(pushTask(task));
  };
  const handleRemoveTask = (task: ITaskRequest) => {
    dispatch(removeTask(task));
  };

  return (
    <Wrapper>
      <Header>
        <NavHeader>
          <Text>Tasks</Text>
          <RightNav>
            <Text>Billable</Text>
            <Checkbox {...label} color="error" defaultChecked />
          </RightNav>
        </NavHeader>
        {selectedTasks.map((task) => {
          return (
            <ViewHeader>
              <LeftViewHeader>
                <ClearIcon onClick={() => handleRemoveTask(task)} />
                <TextView>{task.name}</TextView>
              </LeftViewHeader>
              <RightViewHeader>
                <Checkbox
                  color="error"
                  value={check}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setCheck(event.target.checked);
                    dispatch(
                      updateBillable({
                        ...task,
                        billable: event.target.checked,
                      })
                    );
                  }}
                />
              </RightViewHeader>
            </ViewHeader>
          );
        })}
      </Header>
      <ViewSelect>
        <TextViewSelect>Select task</TextViewSelect>
        <RightSelect
          onClick={handleClickSelectTask}
          style={{ color: "rgb(85, 85, 85)" }}
        >
          {openSelectTask ? <ExpandLess /> : <ExpandMore />}
        </RightSelect>
      </ViewSelect>
      <Collapse in={openSelectTask} timeout="auto" unmountOnExit>
        {Tasks.map((item) => {
          return (
            <ViewTask>
              <LeftView>
                <AddCircleOutlineIcon
                  sx={{ marginLeft: "18px" }}
                  onClick={() => handlePushTask(item)}
                />
                <TextView>{item.name}</TextView>
              </LeftView>
              <RightView>
                {item.type === 0 ? (
                  <TextView>Common Task</TextView>
                ) : (
                  <TextView>Other Task</TextView>
                )}
              </RightView>
            </ViewTask>
          );
        })}
      </Collapse>
    </Wrapper>
  );
};

export default Tasks;