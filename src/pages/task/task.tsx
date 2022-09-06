import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from '@mui/icons-material/Refresh';
import { getTask } from '../../redux/actions/taskAction'
import OtherTask from "./components/otherTask/otherTask";
import { setSearchName } from '../../redux/reducers/taskReducer'
import SearchTask from "./components/searchTask/searchTask";
import CreateTasks from "./components/createTask/createTask";
import CommonTask from "./components/commontask/commonTask";
import { 
  TaskContent, 
  TaskHeader,
  TitleHeader,
  AddContent,
  Add,
  Refresh,
  ButtonRefresh 
} from './taskCss'

const Tasks: React.FC = () => {
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    dispatch(getTask());
  });

  useEffect(() => {
    dispatch(
      setSearchName({
        searchName: searchItem,
      })
    );
  }, [searchItem, dispatch]);

  const [icon, setIcon] = useState(false);
    const handleClickIcon = () => {
        setIcon((prev) => !prev);
    };

  return (
    <TaskContent>
      <TaskHeader>
        <TitleHeader>Manage Tasks</TitleHeader>
        <Refresh>
            <div onClick={handleClickIcon}>
              <MoreVertIcon sx={{cursor: "pointer"}} />   
            </div>
            {icon ? (
            <ButtonRefresh onClick={() => window.location.reload()} 
            style={{ color: 'gray', display: "flex", paddingTop: 17, paddingLeft: 10}}>
              <RefreshIcon style={{color: "gray"}}/>Refresh
            </ButtonRefresh>
            ) : null}
        </Refresh>
      </TaskHeader>
      <AddContent>
        <Add>
          <CreateTasks />
          <SearchTask setSearchKey={setSearchItem} />
        </Add>
      </AddContent>
      <CommonTask />
      <OtherTask />
    </TaskContent>
  );
};

export default Tasks;