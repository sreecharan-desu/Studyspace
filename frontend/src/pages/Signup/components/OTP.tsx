import { useRecoilState } from "recoil";
import { otp } from "../../store/store";


export default function Email(){
    const [OTP, setOTP] = useRecoilState(otp);
    const OTPHandler =(event:any)=>{
        setOTP(event.target.value);
    }
    return(<>
        <input type={'password'} placeholder={'OTP'} className="p-2 m-2 rounded-md" style={{ border: '2px solid black' }} onChange={OTPHandler}/>                        
    </>)
}