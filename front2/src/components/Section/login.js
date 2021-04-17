
import React,{Component} from 'react';
import './login.css'
export class login extends Component{
    render() {
        return (
            <div className={"section2"}>
                <div className="Back">

                    <div className="Login">

                        <div className="Login2">
                            <text>Log In</text>
                        </div>
                        <div className="colorText" >
                            <a className={"colorText"} href={"register"}>
                                SignUP
                            </a>
                        </div>
                    </div>
                    <div className="Input2">
                        <div className="InputArea">
                            <input type="text" placeholder="Enter Email or UserName"></input>
                        </div>
                        <div className="InputArea">
                            <input type="password" placeholder="Password"></input>
                        </div>

                    </div>
                    <div className="Forgot">
                        <nav>Forgot your password?</nav>
                    </div>
                    <div >
                        <button className="ButtonLog">Log in</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default login;
