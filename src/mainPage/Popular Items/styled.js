import styled from "styled-components";
export const Popelar = styled.p`
color: #000;
font-size: 48px;
font-weight: 700;
text-align: center;
margin-bottom: 15px;
`;
export const PopularText = styled.p`
text-align: center;
color: #777;
font-family: "Roboto",sans-serif;
margin-bottom: 15px;
width: 700px;
margin: auto;
`;
export const PopularWrapper = styled.div`
display: flex;
justify-content: space-evenly;
margin: 20px 70px;
flex-wrap: wrap;
`;
export const PopularCard = styled.div`
width: 30%;
margin-top: 50px;
`;
export const Img = styled.img`
border-bottom: 4px solid red;
`;
export const Text = styled.p`
color: #444444;
font-weight: 700;
font-size: 24px;
text-align: center;
margin-bottom: 5px;
margin-top: 10px;
`;
export const Text1 = styled.p`
color: #444444;
font-weight: 700;
font-size: 20px;
text-align: center;
margin-top: 0px;
`;
export const Button = styled.button`
margin: auto;
width: fit-content;
padding: 15px 20px;
background-color: #ff2020;
color: white;
font-size: 16px;
cursor: pointer;
border: none;
font-weight: 600;
display: block;
margin-top: 100px;
border-radius: 3px;
margin-bottom: 150px;
&:hover{
background-color: grey;
 transition-duration: 0.5s;
}
`;