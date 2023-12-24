import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './styles/signin.css';

export const Sign = () => {
    const [userroll, SetUserroll] = useState();
    const [userdob, SetUserdob] = useState();

    const move = useNavigate();

    const handleSubmit = () => {
        console.log(userroll, userdob)
        move(`/home/${userroll}`);
    }

    return (
        <>

            <div className="sign-in">
                <div className='login_container'>
                    <div className='login'>
                        <div className='login-img'>
                            <img className='login-imgg' src='https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/261838698_384268606818774_6025582059090286849_n.jpg?ccb=11-4&oh=01_AdQeQ0ubItjUduUeO2OwpkIimtpJ64CeWrjNIyjDDOOCiQ&oe=658A57A9&_nc_sid=e6ed6c&_nc_cat=111'></img>
                        </div>

                        <span className='login-title'>ईo आरo पीo लॉगिन
                        </span>
                        <div className='login-content'>
                            <div className='login_input'>
                                <input className='input100' type='number' name='userroll' placeholder='यूजर आई० डी०' onChange={(e) => SetUserroll(e.target.value)} />



                                <span className='focus'></span>
                            </div>
                            <div className='login_input'>
                                <input className='input100' type='date' name='userdob' placeholder='पासवर्ड' onChange={(e) => SetUserdob(e.target.value)} />

                            </div>

                            <div className='loginbtn'>
                                <button className='loginbutton' title='"Click here to login. (लॉगिन  करने की लिए क्लिक करें।)"' onClick={handleSubmit}>लॉगिन करें</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
