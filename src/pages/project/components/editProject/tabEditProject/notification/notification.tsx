import React from 'react'
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0px;
  margin: 0px;  
`;
const Title = styled.div``;
const TitleId = styled.div``;
function Notification() {
  return (
    <Wrapper>
      <Title>
        <Checkbox />
        <label style={{fontWeight: 700, fontSize: 14}}>Gửi thông báo đến Komu</label>
      </Title>
      <TitleId>
        <p>komu Channel Id</p>
        <div style={{borderTopStyle: "dotted"}}></div>
      </TitleId>
    </Wrapper>
  );
};

export default Notification