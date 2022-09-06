import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Avatar,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { removeMember } from '../../../../../../../redux/reducers/projectReducer'
import { IUserNotPagging } from '../../../../../../../api/project/type'
import { 
  BranchFour, 
  BranchOne, 
  BranchThree, 
  BranchTwo, 
  Header, 
  LevelFresher0, 
  LevelFresher1, 
  LevelFresher2, 
  LevelFresher3, 
  LevelIntern0, 
  LevelIntern1, 
  LevelIntern2, 
  LevelJunior0, 
  LevelJunior1, 
  LevelJunior2, 
  LevelMiddle0, 
  LevelMiddle1, 
  LevelMiddle2, 
  LevelSenior0, 
  LevelSenior1, 
  LevelSenior2, 
  TextView, 
  ViewHeader, 
  ViewMember 
} from "./headerTeamCss";


const HeaderTeam: React.FC<{selectedMember: IUserNotPagging;}> = ({ selectedMember }) => {
  const [memberType, setMemberType] = useState<string>("1");

  const dispatch = useDispatch();
  const handleChangeMemberType = (event: SelectChangeEvent) => {
    setMemberType(event.target.value);
  };
  const handleRemoveMember = (user: IUserNotPagging) => {
    dispatch(removeMember(user));
  };

  return (
    <Header>
      <ViewHeader>
        <ClearIcon onClick={() => handleRemoveMember(selectedMember)} />
        <ViewMember>
          <Avatar
            src={`http://dev.timesheetapi.nccsoft.vn/${selectedMember.avatarPath}`}
          />
          <TextView>{selectedMember.name}</TextView>
          {selectedMember.branch === 0 ? (
            <BranchOne>HN</BranchOne>
          ) : selectedMember.branch === 1 ? (
            <BranchTwo>ĐN</BranchTwo>
          ) : selectedMember.branch === 2 ? (
            <BranchThree>HCM</BranchThree>
          ) : (
            <BranchFour>Vinh</BranchFour>
          )}
          {selectedMember.type === 0 ? (
            <BranchOne>Staff</BranchOne>
          ) : selectedMember.type === 1 ? (
            <BranchTwo>Internship</BranchTwo>
          ) : selectedMember.type === 2 ? (
            <BranchThree>Collaborator</BranchThree>
          ) : null}
          {selectedMember.level === 0 ? (
            <LevelIntern0>Intern_0</LevelIntern0>
          ) : selectedMember.level === 1 ? (
            <LevelIntern1>Intern_1</LevelIntern1>
          ) : selectedMember.level === 2 ? (
            <LevelIntern2>Intern_2</LevelIntern2>
          ) : selectedMember.level === 3 ? (
            <LevelFresher0>Prefresher</LevelFresher0>
          ) : selectedMember.level === 4 ? (
            <LevelFresher1>Fresher-</LevelFresher1>
          ) : selectedMember.level === 5 ? (
            <LevelFresher2>Fresher+</LevelFresher2>
          ) : selectedMember.level === 6 ? (
            <LevelFresher3>Fresher+</LevelFresher3>
          ) : selectedMember.level === 7 ? (
            <LevelJunior0>Junior-</LevelJunior0>
          ) : selectedMember.level === 8 ? (
            <LevelJunior1>Junior</LevelJunior1>
          ) : selectedMember.level === 9 ? (
            <LevelJunior2>Junior+</LevelJunior2>
          ) : selectedMember.level === 10 ? (
            <LevelMiddle0>Middle-</LevelMiddle0>
          ) : selectedMember.level === 11 ? (
            <LevelMiddle1>Middle</LevelMiddle1>
          ) : selectedMember.level === 12 ? (
            <LevelMiddle2>Middle+</LevelMiddle2>
          ) : selectedMember.level === 13 ? (
            <LevelSenior0>Senior-</LevelSenior0>
          ) : selectedMember.level === 14 ? (
            <LevelSenior1>Senior</LevelSenior1>
          ) : selectedMember.level === 15 ? (
            <LevelSenior2>Senior+</LevelSenior2>
          ) : null}
        </ViewMember>
      </ViewHeader>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <Select
          id="demo-simple-select"
          value={memberType}
          onChange={handleChangeMemberType}
        >
          <MenuItem value={0}>Member</MenuItem>
          <MenuItem value={1}>Project Manager</MenuItem>
          <MenuItem value={2}>Shadow</MenuItem>
          <MenuItem value={3}>Deactive</MenuItem>
        </Select>
      </FormControl>
    </Header>
  );
};

export default HeaderTeam;
