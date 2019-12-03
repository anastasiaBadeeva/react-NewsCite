import React, {Fragment, Component} from "react";
import {Link} from "react-router-dom";
import '../../style/style.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"wrapper"}>
                {this.props.children}
            </div>
        )
    }
}
