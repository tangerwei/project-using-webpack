import React from "react"
import ReactDOM from 'react-dom'
var Iframe = React.createClass({
    render(){
        return(<iframe className="iframe" frameBorder="0" scrolling="no" src={this.props.src}></iframe>)
    }
})
function init(){
    console.log('index into');
    let d = window.innerWidth;
    if(d < 420){
        //手机显示
        initMobile();
    }else{
        //pc显示
        initPc();
    }
}
function initMobile(){
    window.location = 'iframe.html';
}
function initPc(){
    console.log('index initpc');
    ReactDOM.render(<Iframe src="iframe.html" />,document.getElementById('root'));
}
window.onload = function(){
    init();
}