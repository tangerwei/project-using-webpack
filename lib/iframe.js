import React from "react"
import ReactDOM from 'react-dom'
import { Button,Glyphicon,ButtonToolbar,ButtonGroup } from 'react-bootstrap'
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
        return (<div id={this.state.id} className={this.state.clase}><Content id="navlist" /></div>)
    }
});
const Content = React.createClass({
    getInitialState(){
        return{key:1}
    },
    handleClick(_key){
        if(this.state.key != _key){
            this.setState({key:_key});
        }
    },
    render() {
        return (<ButtonToolbar className="difined-self-btntoolbar-nav">
            <ButtonGroup className="difined-self-btnstitle">
                <Button bsSize="large" bsStyle={this.state.key == 1 ? "success":"default"} onClick = {this.handleClick.bind(this,1)}><Glyphicon glyph="home" /></Button>
                <Button bsSize="large" bsStyle={this.state.key == 2 ? "success":"default"} onClick = {this.handleClick.bind(this,2)}><Glyphicon glyph="th-list" /></Button>
                <Button bsSize="large" bsStyle={this.state.key == 3 ? "success":"default"} onClick = {this.handleClick.bind(this,3)}><Glyphicon glyph="star" /></Button>
                <Button bsSize="large" bsStyle={this.state.key == 4 ? "success":"default"} onClick = {this.handleClick.bind(this,4)}><Glyphicon glyph="user" /></Button>
            </ButtonGroup>
        </ButtonToolbar>)
    }
})
window.onload = function () {
    //初始化页面html的字体
    initFont(window, document.getElementById('iframe'));
    ReactDOM.render(<View className="rootContainer" />, document.getElementById("root"));
}