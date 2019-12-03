import React ,{Fragment,Component} from "react";
import {Card,  CardText, CardBody} from 'reactstrap';
import { Link } from "react-router-dom";



export default class Profile extends Component{
  constructor(props){
    super(props);

  }


  render(){
    return(
      <Fragment>
              <div className={"container" +" " +" profile"}>
                  <div className={"photo"}></div>
                  <div>
                      <p> Elena Gerencer</p>
                      <p>Admin</p>
                      <span>Elena Gerencer is a career expert who has published over 200 in-depth articles on Zety. Since 2016, she has been sharing advice on all things recruitment from writing winning resumes and cover letters to getting a promotion.</span>
                  </div>
              </div>
      </Fragment>
    )
  }}
