import React from 'react'
import Moment from 'react-moment';
import styled from 'styled-components';

const OtherMessage = (props) => {
  return (
    <Message>
    <div className='box1'>
     <Name>{props.name}</Name>
     <Time><Moment fromNow>{props.time}</Moment></Time>
     </div>
     <Text>{props.message}</Text>
  </Message>
  )
}

const Message = styled.div`
    margin:20px;
    margin-right:auto;
    display:grid;
    padding:5px;
    
    background-color:white;
`;
const Name = styled.div`
  font-size:15px;
  margin-right:10px;
  font-weight:bold;
`;

const Time = styled.div`
  font-size:13px;
  align-self:center;
  color:grey;
  margin-left:auto;

`;
const Text = styled.div`
  font-size:20px;
  max-width:300px;
`;

export default OtherMessage