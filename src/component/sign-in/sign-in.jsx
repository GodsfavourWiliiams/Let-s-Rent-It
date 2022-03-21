import React, { Component } from 'react';
import './sign-in.css';
import FormInput from '../formInput/formInput';
import Button from '../button-component/button';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../Assets/084 crown.svg'

export default class SignIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            email:  '',
            password: ''
        }


    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })

        alert(this.state.name)
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [ name ]: value });
    }
  render() {
    return (
    <div className="auth-wrapper">
        <div className="px-2">
            <div className="">
                <div className="text-center">
                    <Logo/>
                    <h1 className="">Welcome Back!</h1>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    value={this.state.email}
                    onChange={this.handleChange}
                    label="Email"
                    required />
                    <br />

                    <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    label="Password"
                    required/>


                    <Button type="submit">Sign In</Button> 
                </form>

                <hr className='mx-auto my-3'/>

                <div className="">
                   <Link to='/' className="">
                       Forgot Password
                     </Link>
                     <br />
                     <Link to="/SignUp" className="">
                        Create an Account!!
                    </Link> 
                </div>
        </div>
    </div>
</div>

          
    )
  }
}
