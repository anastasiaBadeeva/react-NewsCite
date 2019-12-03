import React ,{Fragment,Component} from "react";
import CarouselMain from "../../components/carousel/index";
import TopNews from "../../components/topNews/index";
import item from "../../components/tree/item";
import {Card, CardBody} from "reactstrap";
import Body from "../../includes/body";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class HomePage extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <Fragment>
          <div className={"container"}>
        {/*<CarouselMain className={"body_carousel"}/>*/}
          {
              this.props.items.map((item,i)=>
                  item.status ==="new" ?    <Card key={i}>
                          <CardBody className={"main"}>
                              <div>
                                  <img src={item.preview}/>
                              </div>
                              <div>
                              <div className={"title"}>{item.title}</div>
                                  <div className={"data_post"}> {item.date_post}</div>
                              <div>{item.fulltext}</div>
                                  <Link className={"btn"} to={`/news/post/${item.id}`}>
                                      Read more
                                  </Link>
                              </div>
                          </CardBody>
                      </Card>
                      : null
              )
          }</div>
      </Fragment>

    )
  }
    componentDidMount() {

        fetch("/json/index.json")
            .then(data=>data.json())
            .then(items=>   this.props.dispatch({
                    type :"Show_items",
                    data :items
                })
            )

    }


}

const setStateToProps = (store) =>{
    return {
        items:store.news
    }
}

export default connect(setStateToProps)(HomePage)
