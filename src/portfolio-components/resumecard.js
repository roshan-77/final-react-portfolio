import Card from 'react-bootstrap/Card';
const {v4:uuidv4} = require("uuid")

function ResumeCards({item}) {
  return (
    <Card style={{ boxShadow:"-10px 10px 50px black", marginBottom:"40px", width:"100%"}} bg="dark">
      <Card.Body style={{padding:"25px"}}>
        <Card.Title style={{marginBottom: "10px"}}><h3>{item.title}</h3></Card.Title>
        <Card.Subtitle style={{marginBottom: "25px"}}>{item.subTitle}</Card.Subtitle>
        {item.task ? item.task.map(item=>{
          return(
            <Card.Text key = {uuidv4()}>{item}</Card.Text>
          )
        }): item.text}
        
      </Card.Body>
    </Card>
  );
}

export default ResumeCards;