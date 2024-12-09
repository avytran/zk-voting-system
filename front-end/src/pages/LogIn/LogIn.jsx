import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Flag_of_the_US, Green_Statue } from "../../assets/images";
import { getVoterId } from "../../api/api";
import './LogIn.css'

export const LogIn = ({setVoter, setLogIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/voting'); 
    };

    const handleLogIn = async () => {
        try {            
            const getVoter = await getVoterId({email, password});
            if(getVoter !== ''){
                setVoter(getVoter.data);
                setLogIn(true);
                handleNavigate();
            }
            else{
                alert('Vui lòng nhập lại tài khoản hoặc mật khẩu!');
            }
            
          } catch (error) {
            console.error('Error generate proof:', error.message);
          }
        
    }

    return(
        <div className="log-in-section">
            <div className="log-in">
                <p className="log-in-heading">Log In</p>
                <div className="log-in-item">
                    <p>Email</p>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="email" type="text" />
                </div>
                <div className="log-in-item">
                    <p>PassWord</p>
                    <input value={password} onChange={(e) => setPassWord(e.target.value)} className="password" type="password" />
                </div>
                <button className="btn-login" onClick={handleLogIn}>Log in</button>
            </div>
            <div className="america">
                <img src={Flag_of_the_US} alt="" className="flag" />
                <img src={Green_Statue} alt="" className="statue" />
            </div>
        </div>
    )
}