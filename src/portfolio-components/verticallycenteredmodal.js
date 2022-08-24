import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.details.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex justify-content-between'>
        <img src ={props.details.img} alt="" style={{width:"15vw"}}></img>
        <div style={{marginLeft:"20px"}}>
            <h4>Description</h4>
            <hr style={{marginTop:0}}/>
            <p>{props.details.description}</p>
            <h4>Links</h4>
            <hr style={{marginTop:0}}/>
            <p><a href = {props.details.gitlink} style={{textDecoration: "none", color: "black"}}><b>Github</b> : {props.details.gitlink}</a></p>
            <p><a href = {props.details.website} style={{textDecoration: "none", color: "black"}}><b>Website</b> : {props.details.website}</a></p>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;