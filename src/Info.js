import React, { useState, useEffect } from "react";
import {Badge, Card, CardTitle, CardSubtitle, CardText} from "reactstrap";

const Info =({title, date, explanation, copyright})=>{
    return (
    <Card body>
      <div className="photo-info">
        <CardTitle><Badge color = "primary" ><p>{date}</p></Badge></CardTitle>
        <CardSubtitle><h2>{title}</h2></CardSubtitle>
        <CardText className="text-center" ><p>{explanation}</p></CardText>
      </div>
      </Card>
    );
  };
export default Info; 