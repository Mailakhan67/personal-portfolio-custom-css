"use client";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  return (
    
    <div className=" h-screen  mt-60">
      <h1 className="font-bold ml-40 w-[850px] text-end  font-serif text-5xl text-purple-950">
        Connect With Us
      </h1>
      <form
        action=""
        className="border bg-rose-200 mr-10 mt-10 border-black shadow-lg gap-x-10 shadow-gray-500 h-[680px] w-[700px] p-[60px] ml-[490px]"
      >
        <label htmlFor="" className="font-bold text-2xl text-left">
          Name
        </label>
        <br />
        <input
          type="text"
          className="border shadow-lg shadow-green-200  hover:border-yellow-700 border-black h-17 h-[50px] w-[600px] mb-6 "
        />
        <br />

        <label htmlFor="" className="font-bold text-2xl gap-y-6">
          Email
        </label>
        <br />
        <input
          type="email"
          className="border mb-6 hover:border-yellow-700 border-black h-[50px] w-[600px] shadow-lg shadow-green-200 "
        />
        <br />

        <label htmlFor="" className="font-bold text-2xl">
          Message
        </label>
        <br />
        <input
          type="number"
          className="border shadow-lg shadow-green-200 hover:border-yellow-700 border-black h-17 h-[50px] w-[600px]"
        />
        
        <label htmlFor="" className="font-bold text-2xl   gap-y-6">
          Subject
        </label>
        <br />
        <input
          type="number"
          className="border shadow-lg shadow-green-200 hover:border-yellow-700 border-black h-17 mt-3 h-[50px] w-[600px]"
        />
        
        <br />
        <button
          onClick={() => router.push("/")}
          className=" mt-28 p-4 hover:bg-blue-500 w-[200px] rounded-md shadow-lg shadow-gray-500 font-serif border border-gray-500 hover:border-gray-500  font-bold text-3xl bg-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
