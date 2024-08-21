import { useRecoilState } from "recoil";
import { signupPassword } from "../../store/store";


export default function Email(){
    const [password, setPassword] = useRecoilState(signupPassword);
    const PasswordHandler =(event:any)=>{
        setPassword(event.target.value);
    }
    return(<>
        <input type={'password'} placeholder={'Enter your password'} className="p-2 m-2 rounded-md" style={{ border: '2px solid black' }} onChange={PasswordHandler}/>                        
    </>)
}