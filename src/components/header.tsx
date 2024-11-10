'use client';
import Image from "next/image"
import {useState,useEffect} from "react"

const Header = () => {
  const [name, setName]=useState("Front-end Developer")
  const names = ['Front-end Developer', 'UI/UX Designer', 'Client-Side developer', 'Web Designer', 'Interactive Developer'];

    const changeName=()=>{
    const currentIndex= names.indexOf(name);
console.log(currentIndex);
const nextIndex=(currentIndex + 1) % names.length
setName(names[nextIndex])
         }

  return (
  <section>
      <div id="head1">

        <div  id="head2">
<h1 id="head3"  data-aos="flip-left">Limitless Creativity</h1>

<p id="head4" data-aos="flip-left"> I'm a <p id="head5"> {name} </p> </p>
<button onClick={changeName} id="btn" data-aos="flip-left">Click me</button>
</div> 

{/* IMAGE */}
<Image src={'/img1 1.png'} alt='Alien' width={514} height={513} data-aos="flip-left"/>
         </div>
         </section>
  )
}

  export default Header

