import React from "react"
import ReactDOM from 'react-dom'
import {Button} from 'react-bootstrap'
const View = React.createClass({
    getInitialState(){
        return({
            indexShow:true
        })
    },
    render(){
        return (<div className={this.props.className}>
            <Index id="indexContainer" className={this.state.indexShow === true ? "show":"hidden"}/>
            <DetailContainer className={this.state.indexShow === true ? "hidden":"show"}/>
        </div>)
    }
});
const Index = React.createClass({
    getInitialState(){
        return{
            className:this.props.className,
            id:this.props.id
        }
    },
    render(){
        return (<div id={this.state.id} className={this.state.className}>
            <Button bsStyle="success">Success</Button>
        </div>)
    }
});
const DetailContainer = React.createClass({
    getInitialState(){
        return{
            className:this.props.className,
            id:this.props.id
        }
    },
    render(){
        return (<div id={this.state.id} className={this.state.className}>detail</div>)
    }
});
window.onload = function(){
    ReactDOM.render(<View className="rootContainer" />,document.getElementById("root"));
}