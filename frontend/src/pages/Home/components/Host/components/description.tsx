import { useSetRecoilState } from "recoil";
import { space_description } from "../../../../store/store";


export default function Title(){
    const setdescription = useSetRecoilState(space_description);
    const DescHandler =(event:any)=>{
        setdescription(event.target.value);
    }
    return(<>
        <input type={'text'} placeholder={'Title'} className="p-2 m-2 rounded-md" style={{ border: '2px solid black' }} onChange={DescHandler}/>                        
    </>)
}