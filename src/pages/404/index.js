import React ,{Fragment,Component} from "react";
import Body from '../../includes/body/index';

export default class NotFound extends Component{
  constructor(props){
    super(props);

  }


  render(){
    return(
      <Fragment>
        <Body>
          <h1>{"Страница не найдена"}</h1>
        </Body>
      </Fragment>
    )
  }






}
