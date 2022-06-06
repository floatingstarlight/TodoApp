import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";

//Login Component
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "in28minutes",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    //Field to be changed is also packages as a variable
    handleChange(event) {
        //console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    loginClicked() {
        //Pass in loginComponenet's username to the welcome Component through URL path params
        // if (this.state.username ==='in28minutes' && this.state.password ==='dummy')
        // ) {
        //     AuthenticationService.registerSuccessfulLogin(
        //         this.state.username,
        //         this.state.password
        //     );
        //     this.props.navigate(`/welcome/${this.state.username}`);
        // } else {
        //     this.setState({ hasLoginFailed: true });
        //     this.setState({ showSuccessMessage: false });
        // }

        AuthenticationService
        .executeBasicAuthenticationService(this.state.username, this.state.password)
        .then(() => {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.navigate(`/welcome/${this.state.username}`);
        }).catch( () =>{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        })

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div>Invalid Credentials </div>}
                    {this.state.showSuccessMessage && <div>Login Success </div>}
                    User Name:{" "}
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    Password:{" "}
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button className="button" onClick={this.loginClicked}>
                        Login
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginComponent
