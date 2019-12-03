import React ,{Fragment,Component} from "react";
import {Card,  CardText, CardBody} from 'reactstrap';
import { Link } from "react-router-dom";

export default class itemList extends Component{
  constructor(props){
    super(props);
  }


  render(){
    let {item} = this.props;
    return(
      <Fragment>
          <Card className={"item_news"} >
            <CardBody>
              <p>{item.id}</p>
              <p><Link to={`/news/post/${item.id}`}>{item.title}</Link></p>
              <p>{item.body}</p>
            </CardBody>
          </Card>

      </Fragment>
    )
  }
}
