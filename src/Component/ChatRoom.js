import React,{useEffect,useState,useRef} from 'react'
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import OtherMessage from './OtherMessage';
import MyMessage from './MyMessage';


function ChatRoom() {

    const location = useLocation()
    const [message,setMessage] = useState("");
    const [data,setData] = useState({})
    const inputRef = useRef(null);
    const [allMessages,setallMessages] = useState([]);

    const handleEvent = () => {
        setMessage(inputRef.current.value);
    }

    useEffect(()=>{
        setData(location.state);
        
    },[location])

    


  return (
    <Container>
         <ContainerText>{data.room} Chat Room</ContainerText>
         <ContainerMessages>
            {
                allMessages.map( msg => {
                    return data.name == msg.name
                    ?
                    <MyMessage name={msg.name} time={msg.time} message={msg.message}></MyMessage>
                    :
                    <OtherMessage></OtherMessage>
                })
            
            }
         </ContainerMessages>
         <Footer>
             <ContainerInput ref={inputRef} onChange={handleEvent} placeholder='Enter message here'></ContainerInput>
             <Button onClick={()=>{
                 const newMessage={time:new Date(),message,name:data.name}
                 setallMessages([...allMessages,newMessage])
                 console.log(allMessages);
             }}>Send</Button>
         </Footer>
    </Container>
  )
}

const Container= styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:auto;
    margin-top:7%;
    width:750px;
    height:700px;
    background-color:white;
    box-shadow: 5px 5px #888888:
    
`;
const ContainerText = styled.p`
    font-size:60px;
    margin-top:10px;
    margin-bottom:20px;
    font-weight:bold;
    color:rgb(211, 193, 93);
    
`;
const ContainerMessages = styled.div`
    background-color:grey;
    display:flex;
    flex-direction:column;
    width:97%;
    height:530px;
    margin-left:1.5%;
    margin-right:1.5%;
    overflow-y: scroll;

`;




const Button = styled.button`
width:13%;
margin-left:2%;
margin-top:20px;
height:35px;
padding:5px;
font-size:20px;
`;

const ContainerInput = styled.input`
    width:80%;
    padding:5px;
    font-size:20px;
    margin-left:1.5%;
    border:1px solid grey;
    margin-top:20px;
`;

const Footer = styled.div`
    display:flex;
    flex-firection:row;
    width:100%;
`;
export default ChatRoom