import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cards({service}) {
  return (
    <Card className = "whatIDo-card"  bg="dark">
      <Card.Body style={{padding:"20px"}}>
        <FontAwesomeIcon icon={service.icons} style={{color:"#FFDB58", fontSize:"40px", marginBottom:"20px"}}></FontAwesomeIcon>
        <Card.Title style={{marginBottom: "15px"}}><h3>{service.title}</h3></Card.Title>
        <Card.Text>
          {service.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;