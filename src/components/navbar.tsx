import { navItem } from "@/constant";
import Link from "next/link";

const Navbar = () => {
  return (
    <header  
  id='headr'
    >
      
        <div id="div1 ">
          <h1>Maila's <span id="">Portfplio</span></h1>
          
        </div>

    
          <ul id="div2">
            {navItem.map((items) => (
              <Link href={items.link}>
                {" "}
                <li>{items.title}</li>
              </Link>
            ))}
          </ul>
  
    
    </header>
  );
};

export default Navbar;
