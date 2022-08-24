import React from 'react'
import Moment from 'react-moment';
import styled from 'styled-components';

const OtherMessage = (props) => {
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
    margin-right:auto;
    display:grid;
    padding:5px;
    background-color:white;
`;


export default OtherMessage