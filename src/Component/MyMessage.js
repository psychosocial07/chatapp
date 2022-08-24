import React from 'react'
import Moment from 'react-moment';
import styled from 'styled-components';

const MyMessage = (props) => {
  return (
    <Message>
       <div>{props.name}</div>
       <div><Moment fromNow>{props.time}</Moment></div>
       <div>{props.message}</div>
    </Message>
  )
}

const Message = styled.div`
    margin:20px;
    margin-left:auto;
    display:grid;
    padding:5px;
    background-color:white;
`;


export default MyMessage