import React ,{Fragment,Component} from "react";
import Body from '../../includes/body/index';
import Map from '../../components/map/index';
import {connect} from "react-redux";


class CatalogPage extends Component{
    constructor(props){
        super(props);
        this.name = React.createRef();
        this.text = React.createRef();
        this.title = React.createRef();
        this.state = {
            maps: [{
                coords:[53.90, 27.56],
                previewText: 'Привет мир',
                marker: 'islands#blueRapidTransitIcon',
                description: 'Привет мирПривет мирПривет мирПривет мир',
                address: 'ул.Карла Маркса, 25'
            },
                {
                    coords:[55.90, 22.56],
                    previewText: '222',
                    marker: 'islands#redRapidTransitIcon',
                    description: 'Привет мирПривет мирПривет мирПривет мир',
                    address: 'ул.Ленин, 25'
                }],
            show: undefined
        }
    }


    render(){
        console.log(this.props.items);
        
        return(
            <Fragment>
                <Body>
                    <h1 ref={this.title}>{"Catalog page"}</h1>
                {this.state.maps.map((item,i)=>
                    <p key={i} onClick={()=>this.addMarker(i)}>{item.address}</p>
                )}
                {
                    this.state.show != undefined ?
                        <Map item={this.state.maps[this.state.show]}></Map>: null
                }

                    <form onSubmit={this.handleSubmit}>
                        <input ref={this.name} type={"text"} name={"name"} placeholder={"введите название"}/>
                        <input ref={this.text} type={"text"} name={"text"} placeholder={"введите текст"}/>
                        <button>Добавить</button>
                    </form>
                </Body>
            </Fragment>
        )
    }
    addMarker = (id) => {
        this.setState({show:id});
    }

    handleSubmit = (e) => {

        e.preventDefault();
        console.log(this.name.current.value)
        console.log(this.text.current.value)
        console.log(this.title.current.innerHTML)

        // var formData = new FormData(e.currentTarget)
        //
        // this.props.dispatch({
        //     type: "ADD",
        //     data : {
        //         name: formData.get("name"),
        //         text: formData.get("text")
        //     }
        // })


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

export default connect(setStateToProps)(CatalogPage)
