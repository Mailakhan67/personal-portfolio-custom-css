'use client'
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
const router=useRouter();
  return (
    <div id="mainDivFooter">
{/* 1st div */}
      <div id="mainDivFooter1">
      <h1 id="mainHeadh1">Get in touch </h1>
      <p id="mainPara1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus  reprehenderit explicabo optio  doloremque quas sitatibus quae asperiores.
      </p>
      <div id="mainDivIcon1">
      <MdEmail size={30}/><span id="span1"> xyz@gmail.com</span></div>

      <div id="mainDivIcon2">
      <BsFillTelephoneFill size={30}/><span id="span2"> +9446998</span></div>

      <div id="mainDivIcon3">
      <IoLocationSharp size={30}/> <span id="span3">Pakistan ,Karachi </span></div>

      <div id="mainDivIcon4">
      <FaGithub size={30}/> <span id="span4">Github Account </span></div>

      <div id="mainDivIcon5">
      < FaInstagram size={30} color={"pink"}/> <span id="span5">Instagram Account </span></div>

      <div id="mainDivIcon6">
      < FaWhatsapp size={30} color={"green"}/> <span id="span6">Whatsapp </span></div>
      </div>

      {/* 2nd div */}
      <div id="mainDivFooter2">
      <label htmlFor="" id="label1">
          Name
        </label>

        <br />
        <input
          type="text"
          id="input1" />

<label htmlFor="" id="label2">
          Email
        </label>
        <br />
        <input
          type="text"  id="input2"
        />

        <div id="divBtn">
         <button
          onClick={() => router.push("/")}
          id="buton"  
        >
          Submit
        </button>
        </div>

         </div>

    </div>
  )
}

export default Footer