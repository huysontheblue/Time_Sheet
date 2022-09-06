import styled from "styled-components";
import { Link } from "react-router-dom";
import background from '../../asset/images/background.jpg'

export const Container = styled.div`
  width: 375px;
  height: 100%;
  font-size: 14px;
  @media (max-width: 560px) {
    display: none;
  };
  @media (min-width: 560px) and (max-width: 968px) {
    display: none;
  }
`;

export const primary = styled.div `
  font-size: 13px;
`;

export const User = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  padding: 10px 15px 0px ;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    padding-right: 10px;
  };
  div {
      padding:5px 0px 0px 0px
  }
`;

export const Logout = styled.div`
  display: flex;
  justify-content: flex-end;
  color:gray;
  padding:none;
  margin-left: 15px;
`;

export const ButtonLogout = styled.div`
  display: flex;
  gap: 5px;
  background: #fff;
  border: none;
  padding: 5px;
  position: absolute;
  margin: 15px;
  z-index: 1;
  :hover {
    background: #e9e9e9;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-size: 15px;
`;

export const StyleLink = styled(Link)`
  color: #000000;
  text-decoration: none;
`;
