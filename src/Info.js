import React, { useState, useEffect } from "react";
import {Badge, Card, CardTitle, CardSubtitle, CardText, Container} from "reactstrap";
import styled from "styled-components";

const Ptext = styled.p `
font-size: 15px;
color: palevioletred;
background: papayawhip;


`;

const Info =({title, date, explanation, copyright})=>{

    return (
      <Container fluid ="md">
    <Card body>
      <div className="photo-info">
        <CardTitle><Badge color = "success" ><p>{date}</p></Badge></CardTitle>
        <CardSubtitle><Badge color = "secondary"><h2>{title}</h2></Badge></CardSubtitle>
        <Ptext>{explanation}</Ptext>
      </div>
      </Card>
      </Container>
    );
  };
export default Info; 