import React from "react"
import ReactDOM from 'react-dom'
import { Button,Glyphicon,ButtonToolbar,ButtonGroup,Carousel } from 'react-bootstrap'
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
            id: this.props.id,
            displayIndex:1
        }
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            clase: nextProps.clase,
            id: nextProps.id
        })
    },
    showDetail(index){
        const newState = {
            clase: this.state.clase,
            id: this.state.id,
            displayIndex:index
        }
        this.setState(newState);
    },
    render(){
        return (<div id={this.state.id} className={this.state.clase}>
            <Detail displayIndex = {this.state.displayIndex}/>
            <Content id="navlist" displayIndex = {this.state.displayIndex} handleClick = {this.showDetail}/>
        </div>)
    }
});
const Detail = React.createClass({
    getInitialState(){
        return {item:this.props.displayIndex}
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            item: nextProps.displayIndex
        })
    },
    render(){
        return(<div className="details-container">
            <Page1 show={this.state.item == 1 ? "show" : "hidden"} />
            <Page2 show={this.state.item == 2 ? "show" : "hidden"}/>
            <Page3 show={this.state.item == 3 ? "show" : "hidden"}/>
            <Page4 show={this.state.item == 4 ? "show" : "hidden"}/>
        </div>)
    }
})
const Content = React.createClass({
    getInitialState(){
        return{key:1}
    },
    handleClick(_key){
        this.props.handleClick(_key);
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            key: nextProps.displayIndex
        })
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

const Page1 = React.createClass({
    getInitialState() {
        return { show: this.props.show }
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.show
        })
    },
    render() {
        return (<div className={this.state.show}><Carousel>
            <Carousel.Item>
                <img className="carousel-img-self" alt="900x500" src="./lib/data/images/souce1.jpg" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img-self" alt="900x500" src="./lib/data/images/souce1.jpg" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img-self" alt="900x500" src="./lib/data/images/souce1.jpg" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel></div>)
    }
});
const Page2 = React.createClass({
    getInitialState(){
        return {show:this.props.show}
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.show
        })
    },
    render(){
        return(<div className={this.state.show}>Page2</div>)
    }
});
const Page3 = React.createClass({
    getInitialState(){
        return {show:this.props.show}
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.show
        })
    },
    render(){
        return(<div className={this.state.show}>Page3</div>)
    }
});
const Page4 = React.createClass({
    getInitialState(){
        return {show:this.props.show}
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.show
        })
    },
    render(){
        return(<div className={this.state.show}>Page4</div>)
    }
});

window.onload = function () {
    //初始化页面html的字体
    initFont(window, document.getElementById('iframe'));
    ReactDOM.render(<View className="rootContainer" />, document.getElementById("root"));
}