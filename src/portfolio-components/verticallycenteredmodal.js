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
      <Modal.Body className=' project-modal '>
        <img src ={props.details.img} alt="" style={{height: "250px", width:"auto", display:"block", margin:"0 auto"}}></img>
        <div className='project-modal-description' >
            <h4>Description</h4>
            <hr style={{marginTop:0}}/>
            <p>{props.details.description}</p>
            <h4>Links</h4>
            <hr style={{marginTop:0}}/>
            <p><a href = {props.details.gitlink} style={{textDecoration: "none", color: "black"}} target="_blank"><b>Github</b> : {props.details.gitlink}</a></p>
            <p><a href = {props.details.website} style={{textDecoration: "none", color: "black"}} target="_blank"><b>Website</b> : {props.details.website}</a></p>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;