import React, { useState, useEffect } from "react";
import {Badge, Card, CardTitle, CardSubtitle, CardText, Container} from "reactstrap";

const Info =({title, date, explanation, copyright})=>{
    return (
      <Container fluid ="md">
    <Card body>
      <div className="photo-info">
        <CardTitle><Badge color = "success" ><p>{date}</p></Badge></CardTitle>
        <CardSubtitle><Badge color = "secondary"><h2>{title}</h2></Badge></CardSubtitle>
        <CardText className="text-center" ><p>{explanation}</p></CardText>
      </div>
      </Card>
      </Container>
    );
  };
export default Info; 