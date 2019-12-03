import React ,{Fragment,Component} from "react";
import {Badge , Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Modal from './../modal/index';
import User from './../user/index';

export default class ItemTree extends Component{
  constructor(props){
    super(props);
    this.state = {
      user:undefined,
      isOpen: false,
    }

  }


  render(){
    return(
      <Card className={"item"}>
          <CardBody className={"title"}>
            <p>
              <Badge color={"secondary"}>{this.props.data.id}</Badge>
              {this.props.data.title}

              <Badge color={this.props.data.completed ? "success" : "danger"}>
                {this.props.data.completed ? "Done" : "Undone"}
              </Badge>

            </p>
            <div>
              <Badge color={"danger"} onClick={()=>this.props.remove(this.props.data.id)}>
                {"remove"}
              </Badge>
              <Badge color={"info"} onClick={()=>this.userInfo(this.props.data.userId)} >
                {"user"}
              </Badge>

              {
                !this.props.data.completed ?
                  <Badge color={"warning"} onClick={()=>this.done(this.props.data.id)} >
                    {"finish"}
                  </Badge>

                :null
              }

              {/*
              <Badge color={"danger"} data-id={this.props.data.id} onClick={this.removeItem}>
                {"remove"}
              </Badge>*/}
            </div>
          </CardBody>
          {this.state.isOpen ?
              <Modal  header={"Подброная инфо о user"}
                      toggle={this.closeModal} >
                <User data={this.state.user} />
              </Modal> : null}
      </Card>
    )
  }

  removeItem = (id) =>{
    this.props.remove(id);
  }

  done = (id) =>{

    this.props.done(id);
  }

  closeModal = () =>{
    this.setState({
      isOpen:!this.state.isOpen
    })
  }

  userInfo = (id) =>{
    //let id=e.target.getAttribute("data-id")
    //this.props.remove(id);

      fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then(data=>data.json()).then(user=>{
            this.setState({
              user: user[0],
              isOpen:!this.state.isOpen
            })
        })


  }
}
