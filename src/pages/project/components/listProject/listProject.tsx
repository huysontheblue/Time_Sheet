import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Snackbar, Table, TableBody, TableHead, TableCell, TableRow } from "@mui/material";
import dayjs from "dayjs";
import { RootState } from "../../../../redux/store";
import Actions from "./actions";
import { IGroups, IProjectReq } from "../../../../api/project/type";
import {
  getProject,
  getAllCustomer,
  getUserNotPagging,
} from "../../../../redux/actions/projectAction";
import { getTask } from "../../../../redux/actions/taskAction";
import { 
  ContentTable, 
  ItemName, 
  ListItemFour, 
  ListItemOne, 
  ListItemThree, 
  ListItemTwo, 
  StyleActive, 
  StyleInactive, 
} from "./listProjectCss";


export const formatDay = (day: string) => dayjs(day).format("DD/MM/YYYY");
const ListProjects: React.FC = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.project.projects);

  useEffect (() => {
    dispatch(getProject({}));
  }, [dispatch]);

  const groups = projects.reduce((groups: IGroups, key: IProjectReq) => {
      (groups[key.customerName] = groups[key.customerName] || []).push(key);
      return groups;
    }, {});
  
  useEffect(()=>{
    dispatch(getTask());
    dispatch(getAllCustomer());
    dispatch(getUserNotPagging());
  })

  return (
    <ContentTable>
      {Object.keys(groups).map((group) => {
        return (
          <Table
            aria-label="simple table"
            sx={{
              color: "#e9e9e9",
              marginBottom: "20px",
              border: "none",
            }}
            key={Object.keys(groups).indexOf(group)}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={3}
                  sx={{
                    width: "100%",
                    background: "#d3d3d3",
                    padding: "10px",
                    color: "rgb(85, 85, 85)",
                    fontFamily: "Roboto, Arial, Tahoma, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  {group}
                </TableCell>
              </TableRow>
            </TableHead>
            {projects
              .filter((item) => item.customerName === group)
              .map((item) => {
                return (
                  <TableBody key={item.id}>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                          borderBottom: "1px solid rgb(238, 238, 238)",
                        },
                      }}
                    >
                      <TableCell
                        scope="row"
                        sx={{
                          width: "100%",
                          padding: "5px 5px",
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                          marginTop: "10px",
                        }}
                      >
                        <ItemName>{item.name}</ItemName>
                        <ListItemOne>{(item.pms.join(", "))}</ListItemOne>
                        <ListItemTwo>{item.activeMember} members</ListItemTwo>
                        {item.projectType === 0 ? (
                          <ListItemThree>T&M</ListItemThree>
                        ) : item.projectType === 1 ? (
                          <ListItemThree>FF</ListItemThree>
                        ) : item.projectType === 2 ? (
                          <ListItemThree>NB</ListItemThree>
                        ) : (
                          <ListItemThree>ODC</ListItemThree>
                        )}
                        {item.timeEnd ? (
                          <ListItemFour>
                            {`${formatDay(item.timeStart)}-${formatDay(
                              item.timeEnd
                            )}`}
                          </ListItemFour>
                        ) : (
                          <ListItemFour>
                            {`${formatDay(item.timeStart)}
                          `}
                          </ListItemFour>
                        )}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ width: "5px", padding: "5px 5px" }}
                      >
                        <Snackbar
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          autoHideDuration={2000}
                        >
                          <Alert variant="filled" severity="error"></Alert>
                        </Snackbar>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          {item.status === 1 ? (
                            <StyleInactive>
                              <h6>Inactive</h6>
                            </StyleInactive>
                          ) : (
                            <StyleActive>
                              <h6>Active</h6>
                            </StyleActive>
                          )}
                          <Actions project={item} />
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
          </Table>
        );
      })}
    </ContentTable>
  );
};

export default ListProjects;