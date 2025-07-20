import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { AddItem } from "../Redux/cardsSlice";
import { toast } from "react-toastify";



const Card = ({name,id,image,price,type,qty}) => {
  const dispatch = useDispatch()
  const handleAdd =()=>{
     dispatch(AddItem({id:id, name:name,price:price,image:image,qty:1}))
     toast.success('item added')
  }

   
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 flex flex-col gap-3 rounded-lg shadow-lg'> 
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg hover:border-2 border-slate-300'>
           <img className='object-cover' src={image} alt="" />
        </div>
        <div className='text-2xl font-bold'>
        {name}
        </div>
        <div className='w-full flex justify-between items-center'>
            <div className='text-slate-500 text-lg font-bold'>Rs {price}/-</div>
          <div className='flex justify-center items-center text-slate-500 gap-2 text-lg  font-semibold'>
            {type==='veg'?<LuLeafyGreen/>:<GiChickenOven/>}
            <span>{type}</span>
          </div>
        </div>
        <button className='w-full p-3 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-400
        transition-all' onClick={handleAdd } >Add to dish</button>
    </div>
  )
}

export default Card