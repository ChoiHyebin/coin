import { useState, useRef } from 'react';
import './LoginForm.css';

const LoginFrom = ()=>{
    const inputRef = useRef(); // { current : value }
    const pwRef = useRef(); 
    const [ pwShow, setPwShow ] = useState(false);
    const [ pwType, setPwType ] = useState('password');
 
    const login = ()=>{ 
        console.log( inputRef.current.value );  // event.target.value

        if( inputRef.current.value !== "")
            alert(`${inputRef.current.value}님 환영합니다.`);
        else    
            alert(`이름을 입력하세요`);
        
        inputRef.current.value = ''; 
        pwRef.current.value = ''; 
        inputRef.current.focus();
    }

    const onPasswordShow =()=>{
        setPwShow(!pwShow);
        setPwType( pwShow ? 'password' : 'text');
    }

    return (
        <div className='ref-container'>
            <h1>로그인</h1>
            <div className='id-form'>
                <label htmlFor="userid">아이디</label>
                <input type="text"  ref={ inputRef } 
                    id='userid'
                    autoFocus
                /> 
            </div>
            
            <div className='pw-form'>
                <label htmlFor="usepw">비밀번호</label>
                <input type={pwType}  ref={ pwRef } 
                    id='userpw'
                /> 
            </div>

            <div className='pw-check'>
                <input type="checkbox" onChange={ onPasswordShow } 
                    id="showpw"
                />
                <label htmlFor="showpw">비밀번호보기</label>
            </div>
            <button onClick={ login }>로그인</button>
        </div>
    )
}
export default LoginFrom;