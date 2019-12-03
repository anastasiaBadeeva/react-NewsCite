import React ,{Fragment,Component} from "react";
import {Card,  CardText, CardBody} from 'reactstrap';
import ItemList from '../../pages/news/itemList';




export default class TopNews extends Component{
    constructor(props){
        super(props);
        this.state= {
            news: [],
            count: this.props.count
        }
    }


    render(){

        return(
            <Fragment>
                {
                    this.state.news.map((item,i)=>
                    <ItemList key={i} item={item}/>
                    )
                }
            </Fragment>
        )
    }

    randomInteger = (min, max) => {
        // случайное число от min до (max)
        let rand = min + Math.random() * (max - min);
        return Math.floor(rand);
    }

    componentDidMount () {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(data=>data.json())
            .then(item =>
            {
                let array = [];
                for(let i=0; i < this.state.count; i++) {
                  let id = this.randomInteger(1,item.length);
                  item.map((elem)=> elem.id == id ? array.push(elem): null);
                }
                this.setState({news:array});
            });
    }
}
