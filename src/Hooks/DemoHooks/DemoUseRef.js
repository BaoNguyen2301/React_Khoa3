import React,{useState,useRef} from 'react'

export default function DemoUseRef(props) {

    let inputUserName = useRef(null);
    let inputPassWord = useRef(null);

    let userName = useRef('');

    let [userLogin, setUserLogin] = useState({userName:''});

    const handleLogin = () => {
        console.log('userName', userName.current);
        console.log('userLogin', userLogin.userName);

        userName.current = 'abc';
        setUserLogin({
            userName: userName.current
        })
    }

    return (
        <div className='container'>
            <h3>Login</h3>
            <div className='form-group'>
                <h3>UserName</h3>
                <input ref={inputUserName} name='userName' className='form-control'></input>
            </div>
            <div className='form-group'>
                <h3>PassWord</h3>
                <input ref={inputPassWord} name='passWord' className='form-control'></input>
            </div>
            <div className='form-group'>
                <button onClick={()=>{handleLogin()}} className='btn btn-success'>Login</button>
            </div>
        </div>
    )
}
