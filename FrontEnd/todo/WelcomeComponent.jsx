import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../api/todo/HelloWorldService";

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccesfulResponse = this.handleSuccesfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
        this.state = {
            WelcomeMessage: ""
        }
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.params.name}. You can manage your todos{" "}
                    <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a customized mesage
                    <button onClick ={this.retrieveWelcomeMessage} className ="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.WelcomeMessage}
                </div>
            </>
        );
    }

    retrieveWelcomeMessage() {
        HelloWorldService.executedHelloWorldPathService(this.props.params.name)
        .then(response => this.handleSuccesfulResponse(response))
        .catch(error => this.handleError(error))
    }

    handleSuccesfulResponse(response) {
        this.setState({WelcomeMessage: response.data.message})
    }

    handleError(error) {
        //console.log(error.response.data.message)
        let errorMessage = '';
        if (error.message)
            errorMessage += error.message
        
        if (error.response && error.response.data)
        errorMessage += error.response.data.message
        this.setState({WelcomeMessage: errorMessage})
    }


}

export default WelcomeComponent

