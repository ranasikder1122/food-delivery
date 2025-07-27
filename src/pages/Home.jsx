import Nav from '../component/Nav'
import Categories from '../Category'
import Card from '../component/Card'
import food_items from '../food'
import { useContext} from 'react'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import CardTwo from '../component/CardTwo'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Home = () => {
  let {cate,setCate,input,showCard,setShowCard} =useContext(dataContext)
  

  const filterFood = (category)=>{
        if(category==='all'){
          setCate(food_items)

        }else{
          const newList = food_items.filter((item)=>(item.food_category===category))
          setCate(newList)
        }
  }
   const items =useSelector(state=>state.card) 
 
   const subTotal =items.reduce((total,item)=>total+item.qty* item.price,0)
   const deliveryFee = 20;
   const taxes =  (subTotal*0.5/100).toFixed(2);
   const totalAmount = Math.floor(subTotal + deliveryFee + taxes);
      
  return (
    <div className='bg-gray-200 w-full min-h-screen'>
      <Nav/>
      {!input?    <div className='flex justify-center flex-wrap gap-5 items-center w-[100%]'>
          {Categories.map((item)=>{
            return <div className='w-[140px] h-[150px] bg-white flex flex-col gap-5 items-start
            p-5 justify-start text-[20px] font-semibold text-black-600 rounded-lg shadow-xl
            hover:bg-slate-200 cursor-pointer transition-all duration-200 '
            onClick={()=> filterFood(item.name)} >
                {item.icon}
              {item.name}
            
            </div>
          })}
          </div>:null}
     
        <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8 '>
             {cate.length>1?        cate.map((item)=>(
            <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
           )):<div className='flex justify-center items-center text-slate-500 font-semibold text-2xl'>No Dish Found</div>}
        </div>
        <div className={`w-full md:w-[40vw] h-[100%] bg-white fixed top-0 right-0 shadow-lg p-6 transition-all duration-500 overflow-auto
          ${showCard?'translate-x-0':'translate-x-full '}`}>
          <header className='w-[100%] flex justify-between items-center'> 
            <span className='text-slate-400 text-[18px] font-semibold'> Order items</span>
           < RxCross2 onClick={()=>setShowCard(false)} className='text-slate-400 text-[18px] font-semibold w-[30px] h-[30px] cursor-pointer
            hover:bg-slate-500 rounded-sm'/>
          </header>
            {items.length>0?     <>
            <div className='w-full mt-9 flex flex-col gap-8 overflow-hidden'>
          {items.map((item)=>(
            <CardTwo name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
          ))}
         </div>
            
          
         <div className='w-full border-t-2 border-b-2 border-gray-300 mt-7 flex flex-col gap-2 p-8'>
              <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>SubTotal</span>
                <span className='text-slate-400 font-semibold text-lg'>BD {subTotal}/-</span>
              </div>
                     <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>DeliveryFee</span>
                <span className='text-slate-400 font-semibold text-lg'>BD {deliveryFee}/-</span>
              </div>
                     <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
                <span className='text-slate-400 font-semibold text-lg'>BD {taxes}/-</span>
              </div>
         </div>
         <div>  
                 <div className='w-full flex justify-between items-center p-7'>
                <span className='text-xl text-gray-600 font-semibold'>Total</span>
                <span className='text-slate-400 font-semibold text-xl'>BD {totalAmount}/-</span>
              </div>
         <div className='flex justify-center mt-2'>
               <button className='w-[93%] p-3 bg-slate-200 font-bold text-slate-600 rounded-lg hover:bg-slate-400
        transition-all' onClick={()=>   toast.success ('Oder placed..')}> Place Order</button>
                        
              
         </div>
        
         
         </div>
         </>:<div className='flex justify-center items-center text-2xl text-slate-500 font-bold pt-9'> Empty Cart</div>}
    
        </div>



        
    </div>
  )
}

export default Home