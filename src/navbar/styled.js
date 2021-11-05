import styled from "styled-components";
export const NavbarWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 26px;
position: fixed;
background-color: white;
width: 100%;
box-shadow: 0 0 20px gray;
`;
export const NavbarCard = styled.div`
 display: flex;
`;
export const TimeZone = styled.img`
padding: 10px;
`;
export const Text = styled.p`
margin-left: 40px;
font-weight: 600;
font-family: "Josefin Sans",sans-serif;
color: #141517;
cursor: pointer;
&:hover{
 color: #fd7e14;
 transition-duration: 0.3s;
}
`;
export const Search = styled.img`
width: 20px;
font-weight: lighter;
margin-left: 0px;
font-size: 16px;
margin-right: 45px;
`;
