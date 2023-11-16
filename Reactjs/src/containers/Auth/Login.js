import { push } from "connected-react-router";
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";

import './Login.scss';

// import component từ react 
class Login extends Component {
    // hàm tạo
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: true,
        }
    }
    handleonchangeusername = (event) => {
        this.handleChange(event, 'username');
    }
    handleonchangepassword = (event) => {
        this.handleChange(event, 'password');
    }

    handleChange = (event, field) => {
        this.setState({
            [field]: event.target.value
        });
    }
    handleshowhidepassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    handleLogin = () => {
        alert(this.state.username + this.state.password);
    }

    render() {
        //introducing JSX
        return (
            <div className="login-background" >
                <div className="login-container border border-danger  rounded border border-white bg-white">
                    <div className="login-content  p-3 row">
                        <div className="col-12 text-center font-weight-bold text-uppercase login-text pt-3">LOGIN</div>
                        <div className="col-12 form-group mb-3">
                            <label>Username :</label>
                            <input type="text" className="form-control" placeholder="Enter your username" value={this.state.username} onChange={(event) => this.handleonchangeusername(event)} />
                        </div>
                        <div className="col-12 form-group mb-3 login-input">
                            <label>PassWord :</label>
                            <div className="custom-input-password">
                                <input type={this.state.isShowPassword ? "text" : "password"} className="form-control" placeholder="Enter your password" value={this.state.password} onChange={(event) => this.handleonchangepassword(event)} />
                                <span onClick={() => { this.handleshowhidepassword() }}>
                                    <i className={this.state.isShowPassword ? 'eyeshow far fa-eye' : ' eyeshow fas fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn-login text-white py-3 " onClick={() => { this.handleLogin() }} >Login</button>
                        </div>
                        <div className="col-12 ">
                            <span className="forgot-password"> forgot password ?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className=""> Or Login with : </span>
                        </div>
                        <div className="col-12 text-center social-login d-flex justify-content-center mt-3">
                            <i className="fab fa-google-plus-g google mx-2  "></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
            // có thẻ thay bằng reacjs.regememnt để làm nhiều khối div
        )
    }
}

const mapStateToProps = state => {
    return {
        lanlanguageg: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
