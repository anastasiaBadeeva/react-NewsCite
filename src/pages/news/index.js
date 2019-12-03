import React, { Fragment, Component } from "react";
import {Card, CardText, CardBody, Badge, ButtonGroup, Button} from "reactstrap";
import { Link } from "react-router-dom";
import ItemList from "./itemList";
import Body from "../../includes/body/index";
import { connect } from "react-redux";
import { Heart } from "react-spinners-css";
import item from "../../components/tree/item";

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      fillterOpen: false
    };
  }

  render() {
    console.log(this.props.items);
    return (
      <Fragment>

 <div className={"container"}>
   <div className={"btn_group"}>   <ButtonGroup>
     <Button color="dark" onClick={ this.checkAll}>All</Button>
     <Button color="dark" onClick={() => this.checkFillter("design")}>Desing</Button>
     <Button color="dark" onClick={() => this.checkFillter("photography")}>Photography</Button>
     <Button  color="dark" onClick={() => this.checkFillter("creative")}>Creative</Button>
   </ButtonGroup></div>

          {this.state.fillterOpen === false
            ? this.props.items.map((item, i) => (
                <Card key={i}>
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
              ))
            : this.state.category.map((item, i) => (
                <Card key={i}>
                  <CardBody className={"main"}>
                    <div>
                      <img src={item.preview} />
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
              ))}
          {}
          {/*<p>{item.id}</p>
                      <p><Link to={`/news/post/${item.id}`}>{item.title}</Link></p>
                      <p>{item.body}</p>*/}
 </div>
      </Fragment>
    );
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts").then(data=>data.json())
    //         .then(items =>this.setState({
    //           items: [...items]
    //         }))
    fetch("/json/index.json")
      .then(data => data.json())
      .then(items =>
        this.props.dispatch({
          type: "Show_items",
          data: items
        })
      );
  }

  checkAll = () => {
    console.log(6666);
    this.setState({
      fillterOpen: false
    });
  }

  checkFillter = str => {
    console.log(this.props);
    console.log(555);
    let category = this.props.items.filter((item, i) =>
      item.category === `${str}` ? item : null
    );
    this.setState({
      category: category,
      fillterOpen: !false
    });
    console.log(this.state);
  };
}



const setStateToProps = store => {
  return {
    items: store.news
  };
};

export default connect(setStateToProps)(NewsPage);
