import React ,{Fragment,Component} from "react";
import {Card, CardText, CardBody, Alert} from 'reactstrap';
import { Link } from "react-router-dom";
import { Circle, Heart } from 'react-spinners-css';
import {connect} from "react-redux";
//import { getRandomColor } from '@bit/joshk.jotils.get-random-color'

class NewsItemPage extends Component{
  constructor(props){
    super(props);
    this.state= {
      info: undefined,
        comments: []
    }
  }


  render(){
    let id = this.props.match.params.id;
    return(
      <Fragment>
          <div className={"container"}>
          <Link className={"button8"} to={"/news/"}>Back </Link>
         { this.props.items.map((item,i)=>{
    
         return item.id==id ? 
         
         <Card key={i}>
             <CardBody className={"itemInfo"}>
                 <div>
                     <h1 className={"title"}>{item.title}</h1>
                     <div className={"data_post"}> {item.date_post}</div>
                     <div>{item.fulltext}</div>

                 </div>
                 <div>{item.gallery.map((item,i) =>(
                     <div>
                         <img src={item}/>
                     </div>
                 ))}</div>
                 <p>{item.body}</p>
                 <div>
                     {item.comments.map((item,i)=>(
                         <Alert color="secondary">
                             <p>Email: {item.email}</p>
                             <p>Name: {item.name}</p>
                             <p>{item.comment}</p>
                         </Alert>
                         ))}
                 </div>
              </CardBody>
            </Card>
            : null
         })}
 

</div>
      </Fragment>
    )
  }


    componentDidMount(){
  

        fetch(`/json/index.json`)
            .then(data=>data.json())
            .then(items=>   this.props.dispatch({
                    type :"Show_items",
                    data :items
                })
            )
    }
/*  componentDidMount (){
    let id = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(data=>data.json())
            .then(item =>this.setState({
              info: item
            }));
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
          .then(data => data.json())
          .then(comments => this.setState({comments: comments}));
  }*/
}
const setStateToProps = (store) =>{
  return {
    items:store.news
  }
}

export default connect(setStateToProps)(NewsItemPage)
