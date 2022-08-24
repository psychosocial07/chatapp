import React,{useState,useRef} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function MainForm() {

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const selectRef = useRef(null);
  const [data,setData] = useState({name:"", room:""})

  const enterRoom = () => {
      if(!inputRef.current.value || !selectRef.current.value)
      {
        alert("Incomplete data entry")
      }
      else
      {
        console.log(data.room)
        navigate(`/chat/${data.room}`, { state: data})
      }
      }
  


  return (
    <Container>
      <ContainerText>Welcome to ChatApp</ContainerText>
      <ContainerInput ref={inputRef} onChange={()=>{ setData({
          name:inputRef.current.value
        })}} placeholder='Enter Name'></ContainerInput>
      <ContainerSelect onChange={()=>{setData({
          room:selectRef.current.value,
          name:inputRef.current.value
        })}} ref={selectRef}>
        <option value="">Select Room</option>
        <option value="Gaming">Gaming</option>
        <option value="Coding">Coding</option>
        <option value="Mathematics">Mathematics</option>
      </ContainerSelect>
      <Button onClick={enterRoom}>Submit</Button>
    </Container>
  )
}

const Container= styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:auto;
    margin-top:15%;
    width:450px;
    height:300px;
    background-color:white;
    box-shadow: 5px 5px #888888:
    
    `;

const ContainerText = styled.p`
    font-size:40px;
    margin-top:20px;
    font-weight:bold;
    color:rgb(211, 193, 93);
    
`;

const ContainerInput = styled.input`
    width:61%;
    padding:5px;
    font-size:20px;
    border:1px solid grey;
    margin-bottom:20px;
`;

const ContainerSelect = styled.select`
width:62%;
padding:5px;
font-size:20px;
margin-bottom:20px;
`;

const Button = styled.button`
width:62%;
padding:5px;
font-size:20px;
`;

export default MainForm