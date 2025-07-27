import { useContext, useEffect } from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { RiShoppingBag3Line } from "react-icons/ri";
import { dataContext } from '../context/UserContext';
import food_items from '../food';
import { useSelector } from 'react-redux';


const Nav = () => {
  const {input,setInput,cate,setCate,showCard,setShowCard} = useContext(dataContext);
     useEffect (()=>{
     let newslist = food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
      setCate(newslist)
     },[input]);
      const items =useSelector(state=>state.card)
    
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center 
        items-center rounded-md shadow-xl'>
         <IoFastFoodSharp className='w-[30px] h-[30px] text-slate-500'/>
        </div>
        <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md
        md:w-[70%]' onSubmit={(e)=>e.preventDefault()}>
          <IoIosSearch className='text-slate-500 w-[20px] h-[20px]'/>
          <input className='w-[100%] outline-none text-[16px] md:text-[20px] ' type="text"
           placeholder='search items' onChange={(e)=>setInput(e.target.value)} value={input}/>

        </form>
                   <div onClick={()=>{
                    setShowCard(true)
                   }} className='w-[60px] h-[60px] bg-white flex justify-center 
        items-center rounded-md shadow-xl relative cursor-pointer'>
            <span className='absolute top-0 right-2 text-slate-500 font-bold text-[18px]'>{items.length}</span>
         <RiShoppingBag3Line className='w-[30px] h-[30px] text-slate-500'/>
        </div>

    </div>
  )
}

export default Nav