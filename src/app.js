import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Suspense} from "react";
import ReactDOM from "react-dom";
//import Index from  "./components/index"

const Index = React.lazy(()=>import(/* webpackChunkName : 'main' */ "./components/index"));
import './style/style.scss';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reduces/index';
const store = createStore(reducers);


    ReactDOM.render(
        <Provider store={store}>
            <Suspense fallback={"Идет загрузка"}>
                <Index />
            </Suspense>
        </Provider>

    ,document.getElementById('app'));


