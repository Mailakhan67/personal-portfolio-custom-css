'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

const Hero = () => {
  

  const handleClick =()=>{
    window.open("https://milestone5shareablelink.vercel.app/")
  }
  return (
    <div id="mainDiv" >
      <div id="mainDiv1" >
<Image src={'/b-09-512 1.png'} alt="" width={600} height={500} id="img"/>
    
  <div id="mainDiv2">
      <h1 id="mainhead">You Can Download <br /> My CV </h1>
      <p id="para"  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo obcaecati aliquid facilis, animi, quos explicabo amet recusandae vitae!</p>
      <button onClick={handleClick} id="btn2">Download Cv </button>
      </div>
      </div>
    </div>
  )
}

export default Hero
