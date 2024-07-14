'use client';

import { useEffect, useState } from "react";

const Login = () => {
    const [isLogined, setIsLogined] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        let eml = localStorage.getItem("email");
        if(eml){
            setIsLogined(true);
        }
    }, [])

    function onLogin(e) {
        e.preventDefault();
        localStorage.setItem("email", email);
        setIsLogined(true);s
    }

    return (
        <div className="flex flex-col w-screen h-screen gap-20 items-center justify-center">
            {
                isLogined ? 
                (<div>

                </div>) 
                : 
                (<div className="flex flex-col gap-10">
                    <input 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password" 
                        value={password}
                        placeholder="Enter your password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                        className="py-2 px-3 bg-green-500 text-white rounded-lg"
                        onClick={onLogin}>Login</button>
                </div>)
            }
            
        </div>
    )
}

export default Login;