import React from "react"
import { Button, Modal } from 'react-bootstrap';
import "./w3modal.scss";

export default class extends React.Component{

  constructor(props){

    super(props);

    // console.log("Props.Show", props.show);
    this.state = {
      modal:{
        show: props.show,
        showButtons: true
      }
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      modal:{
        show: nextProps.show,
        showButtons: true
      }
    })
  }

  parentPropsChange(modalShow){
    
    this.props.onModalChange({
      modal:{
        show: modalShow
      }
    })

  }

  handleShow(){
    //setShow(true)
    this.props.onClick();
    this.parentPropsChange(true);
    this.setState({
      modal:{
        show: true
      }
    })
  }

  handleClose(){
    // setShow(false);
    this.parentPropsChange(false);
    this.setState({
      modal:{
        show: false
      }
    })
  }

  render(){
    return (
      <>

        {/* <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button> */}
  
        <Modal 
          className={`w3-modal ${this.props.className ? this.props.className:''}`}
          show={this.state.modal.show} 
          onHide={this.handleClose}
          backdrop='static'
          animation={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
          { 
            this.props.showFooter === true ?
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
              :
              ''
          }

          </Modal>
      </>
    );
  }
}