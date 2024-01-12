import React, { Component } from 'react'
import './UserProfile.css'
// eslint-disable-next-line no-unused-vars
import { type } from '@testing-library/user-event/dist/type';
import Swal from 'sweetalert2'
export default class UserProfile extends Component {


    state = {
        values: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            passWord: '',
            passWordConfirm: ''
        },
        errors: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            passWord: '',
            passWordConfirm: ''
        }
    }

    handkeChangeValue = (event) => {
        let { name, value, type } = event.target;

        let newValues = { ...this.state.values, [name]: value };
        let newErrors = { ...this.state.errors };

        if (value.trim() === '') {
            newErrors[name] = name + ' is required!';
        } else {
            newErrors[name] = '';
        }

        if (type === "email") {
            // eslint-disable-next-line no-useless-escape
            const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value)) {
                newErrors[name] = name + " is invalid!";
            } else {
                newErrors[name] = '';
            }

        }

        if (type === "password") {
            const regexPassWord = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
            if (!regexPassWord.test(value)) {
                newErrors[name] = name + " is invalid!";
            } else {
                newErrors[name] = '';
            }
        }

        if (name === 'passWordConfirm') {
            if (value === newValues['passWord']) {
                newErrors[name] = '';
            } else {
                newErrors[name] = name + " is invalid!";
            }
        }

        this.setState({
            values: newValues,
            errors: newErrors
        })
    }

    handleSubmit = (event) => {
        //can trinh duyen submit reload lai trang
        event.preventDefault();
        let { values, errors } = this.state;
        let valid = true;
        let profileContent = '';
        let profileError = '';
        for (let key in values) {
            if (values[key] === '') {
                valid = false;
                profileError += `
                <p class = "text-left"><b>${key}</b>: is required</p>
            `;
            }
            profileContent += `
                <p class = "text-left"><b>${key}</b>: ${values[key]}</p>
            `;
        }

        for (let key in errors) {
            if (errors[key] !== '') {
                profileError += `
            <p class = "text-left"><b class="text-danger">${key}</b>: ${errors[key]}</p>
        `;
                valid = false;
            }

        }

        if (!valid) {
            return Swal.fire({
                title: 'Error!',
                html: profileError,
                icon: 'error',
                confirmButtonText: 'Cool'
            });
        }

        // return alert ('Thanh cong!');
        return Swal.fire({
            title: 'Your profile!',
            html: profileContent,
            icon: 'success',//success, error. warning, question
            confirmButtonText: 'Xác nhận!'
        })

    }



    render() {
        return (
            <div>
                <div className='container'>
                    <div className="text">
                        User Profile
                    </div>
                    <form onSubmit={this.handleSubmit} action="#">
                        <div className="form-row row">
                            <div className='col-6'>
                                <div className="input-data">
                                    <input value={this.state.values.firstName} type="text" name='firstName' onChange={this.handkeChangeValue} />
                                    <div className="underline" />
                                    <label htmlFor>First Name</label>
                                    <span className='text-warning'>{this.state.errors.firstName}</span>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="input-data">
                                    <input value={this.state.values.lastName} type="text" name='lastName' onChange={this.handkeChangeValue} />
                                    <div className="underline" />
                                    <label htmlFor>Last Name</label>
                                    <span className='text-warning'>{this.state.errors.lastName}</span>
                                </div>
                            </div>

                        </div>
                        <div className="form-row row">
                            <div className='col-12'>
                                <div className="input-data">
                                    <input value={this.state.values.userName} type="text" name='userName' onChange={this.handkeChangeValue} />
                                    <div className="underline" />
                                    <label htmlFor>userName</label>
                                    <span className='text-warning'>{this.state.errors.userName}</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-row row">
                            <div className='col-12'>
                                <div className="input-data">
                                    <input value={this.state.values.email} type="email" name='email' onChange={this.handkeChangeValue} />
                                    <div className="underline" />
                                    <label htmlFor>Email address</label>
                                    <span className='text-warning'>{this.state.errors.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-row row">
                            <div className='col-6'>
                                <div className="input-data">
                                    <input value={this.state.values.passWord} type="password" name='passWord' onChange={this.handkeChangeValue} />
                                    <div className="underline" />
                                    <label htmlFor>passWord</label>
                                    <span className='text-warning'>{this.state.errors.passWord}</span>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="input-data">
                                    <input value={this.state.values.passWordConfirm} type="password" name='passWordConfirm' onChange={this.handkeChangeValue} />
                                    <div className="underline" />
                                    <label htmlFor>passWordConfirm</label>
                                    <span className='text-warning'>{this.state.errors.passWordConfirm}</span>
                                </div>
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <div className="form-row submit-btn">
                                    <div className="input-data">
                                        <div className="inner" />
                                        <input type="submit" defaultValue="submit" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
