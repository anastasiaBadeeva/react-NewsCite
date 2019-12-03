import React ,{Fragment,Component} from "react";
import { Button, ButtonGroup } from 'reactstrap';
import ItemTree from './item';
import Header from '../../includes/header/header'

export default class Tree extends Component{
  constructor(props){
    //console.log("-----const");
    super(props);
    this.x = 10;
    this.state ={
        data: [],
        copy : [],
        info: null
    }

  }


  render(){
    return(
      <Fragment>
          <Header count={this.state.copy.length}
                  done={this.sortDone}
                  all={this.sortAll}
                  undone={this.sortUndone}
                  />
          {
            this.state.copy.map((item,i)=><ItemTree
              key={i}
              data={item}
              done={this.done}
              remove={this.removeItem} />)
          }
      </Fragment>
    )
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => this.setState({
          data:json,
          copy: json
        }))
  }

  removeItem = (id) =>{
    let info = this.state.data.filter((item,i) => item.id!=id);
     this.setState({
       data: info,
       copy: info
     })
  }

  done = (id) =>{
    console.log('done----',id)
    let x = this.state.data.map((item,i) => {
      if(item.id==id) {
        item.completed=true;
        return item;
      }

      return item;
    });

     this.setState({
       data:x,
       //copy:x,
     })
  }

  sortDone =()=>{
    let x = this.state.data.filter((item,i) => item.completed);

     this.setState({
       copy:x
     })
  }

  sortUndone =()=>{
    let x = this.state.data.filter((item,i) => !item.completed);

     this.setState({
       copy:x
     })
  }

  sortAll =()=>{
    this.setState({
      copy:[...this.state.data]
    })
  }

}
