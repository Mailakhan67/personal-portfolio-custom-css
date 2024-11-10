import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

const Skills = () => {
  return (
    <div>
      <h1 className='font-bold font-serif text-center text-8xl mt-[200px]'>My Skill Set</h1>
     <div className='grid grid-cols-4 mx-14 w-full mt-[110px]'>
     {/* 1 start */}
    <div className=" w-[290px] h-[360px] rounded-md shadow-lg border border-black shadow-slate-100 bg-slate-200  hover:bg-slate-300 flex flex-col justify-center items-center">
    <SiJavascript size={150}  color="blue" className=""/>
      <h1 className="mt-6  font-bold font-serif text-3xl">Javascript</h1>
    <p className="  p-3 leading-normal text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptate blanditiis, sapiente dignissimos libero itaque doloribus.</p>
    </div>
    {/* 1 end */}

     {/* 2 start */}
     <div className=" w-[290px] h-[360px] rounded-md shadow-lg border border-black shadow-slate-100 bg-slate-200  hover:bg-slate-300 flex flex-col justify-center items-center">
    <SiTypescript size={150}  color="blue" className=""/>
      <h1 className="mt-6  font-bold font-serif text-3xl">Typescript</h1>
    <p className="  p-3 leading-normal text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptate blanditiis, sapiente dignissimos libero itaque doloribus.</p>
    </div>
    {/* 2 end */}

     {/* 3 start */}
     <div className=" w-[290px] h-[360px] rounded-md shadow-lg border border-black shadow-slate-100  bg-slate-200  hover:bg-slate-300 flex flex-col justify-center items-center">
    <RiNextjsFill size={150}  color="blue" className=""/>
      <h1 className="mt-6  font-bold font-serif text-3xl">Next js</h1>
    <p className="  p-3 leading-normal text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptate blanditiis, sapiente dignissimos libero itaque doloribus.</p>
    </div>
    {/* 3 end */}

     {/* 4 start */}
     <div className="mr-20 w-[290px] h-[360px] rounded-md shadow-lg border border-black shadow-slate-100 bg-slate-200  hover:bg-slate-300 flex flex-col justify-center items-center">
    <RiTailwindCssFill size={150}  color="blue" className=""/>
      <h1 className=" mt-10 font-bold font-serif text-3xl">Tailwind css</h1>
    <p className="  p-3 leading-normal text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptate blanditiis, sapiente dignissimos libero itaque doloribus.</p>
    </div>
    {/* 4 end */}

     {/* 5 start */}
     <div className="mt-6  w-[290px] h-[360px] rounded-md shadow-lg border border-black shadow-slate-100 bg-slate-200  hover:bg-slate-300 flex flex-col justify-center items-center">
    <FaCss3Alt size={150}  color="blue" className=""/>
      <h1 className=" mt-10 font-bold font-serif text-3xl">Css</h1>
    <p className="  p-3 leading-normal text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptate blanditiis, sapiente dignissimos libero itaque doloribus.</p>
    </div>
    {/* 5 end */}

     {/* 6 start */}
     <div className="mt-6 w-[290px] h-[360px] rounded-md shadow-lg border border-black shadow-slate-100 bg-slate-200  hover:bg-slate-300 flex flex-col justify-center items-center">
    <FaHtml5 size={150}  color="blue" className=""/>
      <h1 className=" mt-10 font-bold font-serif text-3xl">Html</h1>
    <p className="  p-3 leading-normal text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptate blanditiis, sapiente dignissimos libero itaque doloribus.</p>
    </div>
    {/* 6 end */}

  
    </div>


    <div className="h-[400px]"></div>
    </div>
  )
}
 
export default Skills
