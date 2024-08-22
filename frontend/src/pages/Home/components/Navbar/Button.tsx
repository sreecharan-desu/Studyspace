import { useNavigate } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { generate_message, is_authenticated, message, message_status } from "../../../store/store";
import { JOIN_SPACE_API } from "../../../apis/apis";

type PropsType = {
  text: string;
};

export default function Button({ text }: PropsType) {
  const setGenerateMessage = useSetRecoilState(generate_message);
  const setMessage = useSetRecoilState(message);
  const setMessageStatus = useSetRecoilState(message_status);
  const isAuthenticated = useRecoilValue(is_authenticated);
  const navigateTo = useNavigate();

  const displayMessage = (message:string,status:boolean)=>{
    setMessage(message);
    setMessageStatus(status);
    setGenerateMessage(true);
    setTimeout(() => {
      setGenerateMessage(false);
      setMessage('');
      setMessageStatus(true);
    }, 3000);
  }

  const onClickHandler = () => {
    if(isAuthenticated){
      const JoinSpace = async(space_id:string)=>{
        const tokenString = localStorage.getItem('token');
        const token = tokenString ? JSON.parse(tokenString) : null;
        const bodyData = JSON.stringify({
          space_id
        })
        const res = await fetch(JOIN_SPACE_API,{
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + token
          },
          body : bodyData
        })
        const data = await res.json(); 
        if(data.success){
          displayMessage(data.msg || "Successfully joined the space!",true)
        }else{
          displayMessage(data.msg || "Failed to joined the space please try again!",false)
        }
      }
    }else{
      displayMessage('You need to Signin to join the space!',false);
      navigateTo('/signin')
    }
  };

  return (
    <>
      <button
        className="px-4 py-1 bg-white text-black hover:bg-black hover:text-white font-semibold rounded ml-2"
        style={{ border: '2px solid black' }}
        onClick={onClickHandler}
      >
        {text}
      </button>
    </>
  );
}
