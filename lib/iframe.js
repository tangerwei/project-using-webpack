import React from "react"
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
const initFont = require('./initFont.js').setFont;
const View = React.createClass({
    getInitialState() {
        return ({
            indexShow: true
        })
    },
    changeShow() {
        const newState = {
            indexShow: !this.state.indexShow
        };
        this.setState(newState);
    },
    render() {
        return (<div className={this.props.className}>
            <Index changeShow={this.changeShow} ids="indexContainer" clase={this.state.indexShow === true ? "show" : "hidden"} />
            <DetailContainer clase={this.state.indexShow === true ? "hidden" : "show"} />
        </div>)
    }
});
const Index = React.createClass({
    getInitialState() {
        console.log("Index init state");
        return {
            clase: this.props.clase,
            id: this.props.ids
        }
    },
    showDetail() {
        this.props.changeShow();
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            clase: nextProps.clase,
            id: nextProps.id
        })
    },
    render() {
        return (<div id={this.state.id} className={this.state.clase}>
            <Button onClick={this.showDetail} bsStyle="success">进入页面</Button>
        </div>)
    }
});
const DetailContainer = React.createClass({
    getInitialState() {
        console.log("DetailContainer init state");
        return {
            clase: this.props.clase,
            id: this.props.id
        }
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            clase: nextProps.clase,
            id: nextProps.id
        })
    },
    render() {
        return (<div id={this.state.id} className={this.state.clase}>detail</div>)
    }
});
window.onload = function () {
    //初始化页面html的字体
    initFont(window, document.getElementById('iframe'));
    ReactDOM.render(<View className="rootContainer" />, document.getElementById("root"));
}