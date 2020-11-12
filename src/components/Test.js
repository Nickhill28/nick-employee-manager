import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props);
        this.state={
            a:10
        }
        console.log("Constructor calisti")
    }
    componentDidMount() {
        console.log("ComponentDidMount calisti")
        this.setState({
            a:20
        })
    }
    

    render() {
        console.log("Render calisti")
        return (
            <div>
                
            </div>
        )
    }
}

export default Test;
