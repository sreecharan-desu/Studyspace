import { useRecoilState } from "recoil";
import { signupEmail } from "../../store/store";


export default function Email(){
    const [email, setEmail] = useRecoilState(signupEmail);

    const EmailHandler =(event:any)=>{
        setEmail(event.target.value);
    }
    return(<>
        <input type={'email'} placeholder={'2638978@iitb.ac.in'} className="p-2 m-2 rounded-md" style={{ border: '2px solid black' }} onChange={EmailHandler}/>                        
    </>)
}