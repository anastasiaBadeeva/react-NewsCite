import React, { Component, Fragment, Suspense } from "react";
import Header from "../includes/header/header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./../pages/main/index";
import CatalogPage from "./../pages/catalog/index";
import NewsPage from "./../pages/news/index";
//import NotFound from "./../pages/404/index";
import Profile from "./../pages/profile/Profile";

const NotFound = React.lazy(() =>
  import(/* webpackChunkName : 'errors' */ "./../pages/404/index")
);
import NewsItemPage from "./../pages/news/itemInfo";
import ContactsPage from "./../pages/contacts/index";
import Login from "../pages/login/login";
import PrivateRoute from "../PrivetRoute";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        username: "Admin",
        password: 12345,
        login: false
      }
    };
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path={"/login"} component={Login} />
            <PrivateRoute exact path={"/profile"} component={Profile} />
            <Route exact path="/news" component={NewsPage} />
            {/* <Route exact path="/login" component={Login}/> */}
            <PrivateRoute exact path="/news/post/:id" component={NewsItemPage} />
            {/*<Route exact path="/contacts" component={ContactsPage}/>*/}
            <Suspense fallback={"Загрузка тут"}>
              <Route component={NotFound} />
            </Suspense>
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }

  componentDidMount() {
    let obj = {
      username: "Admin",
      password: 12345
    };

    let serialObj = JSON.stringify(obj); //сериализуем его
    localStorage.setItem("auth", "false"); //запишем его в хранилище по ключу "myKey"
    localStorage.setItem("myKey", serialObj); //запишем его в хранилище по ключу "myKey"

    let returnObj = JSON.parse(localStorage.getItem("myKey")); //спарсим его обратно объект
    console.log(returnObj);
  }
}
