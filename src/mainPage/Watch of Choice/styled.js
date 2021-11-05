import styled from "styled-components";
export const WatchWrapper = styled.div`
display: flex;
align-items: center;
margin:150px 0px 0px 150px;
`;
export const WatchCard = styled.div`
width: 40%;
margin: 0px 20px;
align-items: center;
`;
export const WatchCard1 = styled.div`
width: 40%;
margin: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const WatchText = styled.p`
font-size: 56px;
font-weight: 700;
margin-bottom: 40px;
color: #000;
margin-top: 0px;
`;
export const WatchText1 = styled.p`
color: #777;
font-family: "Roboto",sans-serif;
width: 100%;
font-weight: 700;
font-size: 18px;
`;
export const WatchButton = styled.button`
background-color: #ff2020;
color: #fff;
font-weight: 540;
padding: 22px  17px;
border: none;
font-size: 18px;
border-radius: 2px;
margin-top: 30px;
cursor: pointer;
&:hover{
 background-color: gray;
 transition-duration: 1s;
}
`;
export const WatchImg = styled.img`
width: 100%;
`;