import React,{ useState} from "react";
import { Row, Col, Button } from "react-bootstrap";

export const Counter =()=>{
    const [val,setVal]= useState(0);
    const increaseValue =()=>{
        setVal(val +1)};
     
    return(

             <div>
             <Row>
                 
             <Col lg={2}></Col>
             <Col lg={2}>
             <Button onClick={()=> setVal(val -1)}>-</Button>
             </Col>

             <Col lg={2}></Col>
             <Col lg={2}>
              <p>{val}</p>
             </Col>


             <Col lg={2}></Col>
             <Col lg={2}>
             <Button onClick={increaseValue}>+</Button>
             </Col>

             

            
             </Row>
             </div>

    )
}