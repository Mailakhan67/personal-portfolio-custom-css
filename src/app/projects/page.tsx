'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
const Projects = () => {
  const project1 =()=>{
    window.open("https://milestone5shareablelink.vercel.app/")
  }
  return (
    <div className="h-full mt-44">
      <h1 className="text-center font-bold mt-28 font-sans text-8xl sm:text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>Projects</h1>
    <div className="  h-full grid grid-cols-4 justify-center mt-14  items-center ps-20">


  {/* card 1 start */}
      <div className="bg-slate-200  mt-10 h-[500px] p-6 w-[300px] hover:bg-slate-300 transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/projectImg1.png"}
            alt=""
            width={300}
            height={200}
            className="  border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Periodic Table
          </h1>
          <p className="leading-normal text-2xl font-sans mt-3 text-[#000000] text-left px-3">
            Lorem ipsum dolor sit amet.
            doloremque quas asperiores.
          </p>
          <button onClick={project1} className="hover:bg-pink-350 rounded-full mt-6 text-2xl font-serif bg-pink-300 p-3">click me </button>
        </div>
        {/* card 1 end */}

         {/* card 2 start */}
      <div className="bg-slate-200   mt-10 h-[500px] p-6 w-[300px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/project2.jpg"}
            alt=""
            width={300}
            height={200}
            className="  border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Periodic Table
          </h1>
          <p className="leading-normal text-2xl font-sans mt-3 text-[#000000] text-left px-3">
            Lorem ipsum dolor sit amet.
            doloremque quas asperiores.
          </p>
          <button onClick={project1} className="hover:bg-pink-350 rounded-full mt-6 text-2xl font-serif bg-pink-300 p-3">click me </button>
        </div>
        {/* card 2 end */}

 {/* card 3 start */}
 <div className="bg-slate-200   mt-10 h-[500px] p-6 w-[300px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/project3.png"}
            alt=""
            width={300}
            height={200}
            className="  border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Periodic Table
          </h1>
          <p className="leading-normal text-2xl font-sans mt-3 text-[#000000] text-left px-3">
            Lorem ipsum dolor sit amet.
            doloremque quas asperiores.
          </p>
          <button onClick={project1} className="hover:bg-pink-350 rounded-full mt-6 text-2xl font-serif bg-pink-300 p-3">click me </button>
        </div>
        {/* card 3 end */}

         {/* card 4 start */}
      <div className="bg-slate-200   mt-10 h-[500px] p-6 w-[300px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/project4.png"}
            alt=""
            width={300}
            height={200}
            className="  border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Periodic Table
          </h1>
          <p className="leading-normal text-2xl font-sans mt-3 text-[#000000] text-left px-3">
            Lorem ipsum dolor sit amet.
            doloremque quas asperiores.
          </p>
          <button onClick={project1} className="hover:bg-pink-350 rounded-full mt-6 text-2xl font-serif bg-pink-300 p-3">click me </button>
        </div>
        {/* card 4 end */}

         {/* card 5 start */}
      <div className="bg-slate-200   mt-10 h-[500px] p-6 w-[300px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/project5.png"}
            alt=""
            width={300}
            height={200}
            className="  border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Periodic Table
          </h1>
          <p className="leading-normal text-2xl font-sans mt-3 text-[#000000] text-left px-3">
            Lorem ipsum dolor sit amet.
            doloremque quas asperiores.
          </p>
          <button onClick={project1} className="hover:bg-pink-350 rounded-full mt-6 text-2xl font-serif bg-pink-300 p-3">click me </button>
        </div>
        {/* card 5 end */}

         {/* card 6 start */}
      <div className="bg-slate-200   mt-10 h-[500px] p-6 w-[300px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/project6.png"}
            alt=""
            width={300}
            height={200}
            className="  border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Periodic Table
          </h1>
          <p className="leading-normal text-2xl font-sans mt-3 text-[#000000] text-left px-3">
            Lorem ipsum dolor sit amet.
            doloremque quas asperiores.
          </p>
          <button onClick={project1} className="hover:bg-pink-350 rounded-full mt-6 text-2xl font-serif bg-pink-300 p-3">click me </button>
        </div>
        {/* card 6 end */}
     
       {/* card 7 start */}
       <div className="bg-slate-200   mt-10 h-[500px] p-6 w-[300px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/project7.png"}
            alt=""
            width={300}
            height={200}
            className="  border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Periodic Table
          </h1>
          <p className="leading-normal text-2xl font-sans mt-3 text-[#000000] text-left px-3">
            Lorem ipsum dolor sit amet.
            doloremque quas asperiores.
          </p>
          <button onClick={project1} className="hover:bg-pink-350 rounded-full mt-6 text-2xl font-serif bg-pink-300 p-3">click me </button>
        </div>
        {/* card 7 end */}

         {/* card 8 start */}
       <div className="bg-slate-200 mt-10 h-[500px] p-6 w-[300px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/project8.png"}
            alt=""
            width={300}
            height={200}
            className="  border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Periodic Table
          </h1>
          <p className="leading-normal text-2xl font-sans mt-3 text-[#000000] text-left px-3">
            Lorem ipsum dolor sit amet.
            doloremque quas asperiores.
          </p>
          <button onClick={project1} className="hover:bg-pink-350 rounded-full mt-6 text-2xl font-serif bg-pink-300 p-3">click me </button>
        </div>
        {/* card 8 end */}
     
    </div>
       <div className="h-[200px]"> </div>
    </div>
  )
}

export default Projects
