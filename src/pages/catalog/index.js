import React ,{Fragment,Component} from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux';
import Body from '../../includes/body/index';


class CatalogPage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props.items);
        return(
            <Fragment>
                <Body>
                <h1>{"Catalog page"}</h1>
                {this.props.items.map((item,i)=>
                    <div key={i}>
                        <p>{item.name}</p>
                        <p>{item.text}</p>
                    </div>
                )}

                {this.props.comments.map((item,i)=>
                    <div key={i}>
                        <p>{item.id}</p>
                        <p>{item.text}</p>
                    </div>
                )}

                {ReactDOM.createPortal(<h2>{"asdasdasd"}</h2>, document.getElementById('test'))}
                </Body>
            </Fragment>
        )
    }
}

const setStateToProps = (store) =>{
    return {
        items: store.items,
        comments: store.comments
    }
}

export default connect(setStateToProps)(CatalogPage)
