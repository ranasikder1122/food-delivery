import { IoAppsOutline } from "react-icons/io5";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { IoPizzaOutline } from "react-icons/io5";
import { TbBurger } from "react-icons/tb";


 const Categories =[
    {
        id:1,
        name:'all',
        icon:<IoAppsOutline className="w-[60px] h-[60px] text-slate-500 "/>

    },
      {
        id:2,
        name:'breakfast',
        icon:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-slate-500"/>

    },
      {
        id:3,
        name:'soups',
        icon:<TbSoup className="w-[60px] h-[60px] text-slate-500"/>

    },
      {
        id:4,
        name:'pasta',
        icon:<CiBowlNoodles className="w-[60px] h-[60px] text-slate-500"/>

    },
      {
        id:5,
        name:'main_course',
        icon:<MdOutlineFoodBank className="w-[60px] h-[60px] text-slate-500"/>

    },
        {
        id:6,
        name:'pizza',
        icon:<IoPizzaOutline className="w-[60px] h-[60px] text-slate-500"/>

    },
        {
        id:7,
        name:'burger',
        icon:<TbBurger className="w-[60px] h-[60px] text-slate-500"/>

    }
];
export default Categories;