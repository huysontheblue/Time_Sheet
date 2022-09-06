import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from '@mui/icons-material/Refresh';
import { getProject } from '../../redux/actions/projectAction';
import SearchProject from "./components/searchProject/searchProject";
import ListProjects from "./components/listProject/listProject";
import CreateProjects from "./components/createProject/createProject";
import SelectProject from '../project/components/selectProject/selectProject';
import { 
  ProjectContent,
  HeaderProject,
  TitleHeader,
  AddContent,
  Refresh,
  ButtonRefresh
} from './projectCss';

const Projects: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProject({ status: 0 }));
    }, [dispatch]);

    const [icon, setIcon] = useState(false);
    const handleClickIcon = () => {
        setIcon((prev) => !prev);
    };

    return (
        <ProjectContent>
            <HeaderProject>
                <TitleHeader>Manage Projects</TitleHeader>
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
            </HeaderProject>
            <AddContent>
                <CreateProjects />
                <SelectProject/>
                <SearchProject/>
            </AddContent>
            <ListProjects />
        </ProjectContent>
    );
};

export default Projects;
