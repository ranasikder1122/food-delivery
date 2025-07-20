import { useDispatch } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { DecrementQty, IncrementQty, RemoveItem } from "../Redux/cardsSlice";

const CardTwo = ({name,id,image,price,qty}) => {
    const dispatch = useDispatch()
      const handleDelete = () => {

    dispatch(RemoveItem(id));
  };
  const handleIncrementQty =()=>{
        dispatch(IncrementQty(id))
  }
    const handleDecrement=()=>{
        qty>1?dispatch(DecrementQty(id)):1;
  }
  
  return (
    <div className="w-full h-[120px] p-2 shadow-lg flex justify-between ">
        <div className="w-[60%] h-full rounded-lg flex gap-5">
            <div className="w-[60%] h-full overflow-hidden rounded-lg">
                <img className="object-cover" src={image}alt="" />
            </div>
            <div className="w-[40%] f-full flex flex-col gap-3 justify-center overflow-hidden ">
                <div className="text-lg text-gray-600 font-semibold">{name}</div>
                <div className="w-[110px] h-[50px] flex overflow-hidden rounded-lg  shadow-lg  
                font-bold border-2 border-slate-400 text-xl ">
                    <button className="w-[30%] h-full bg-white  flex justify-center items-center text-slate-400 hover:bg-slate-200"
                    onClick={handleDecrement}>-</button>
                    <span  className="w-[40%] h-full bg-yellow-900  text-slate-400 flex justify-center items-center ">{qty}</span>
                    <button  className="w-[30%] h-full bg-white  flex justify-center items-center text-slate-400 hover:bg-slate-200"
                    onClick={ handleIncrementQty}>+</button>
                </div>
            </div>
        </div>
        <div  className="flex flex-col justify-start items-end gap-6">
           <span className="text-xl text-slate-400 font-semibold ">Rs {price}/-</span> 
            <RiDeleteBinLine onClick = { handleDelete} className="w-[30px] h-[30px] text-red-500 cursor-pointer hover:bg-red-400 rounded-sm"/>
        </div>
    </div>
  )
}

export default CardTwo