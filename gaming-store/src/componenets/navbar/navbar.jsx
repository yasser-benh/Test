import { useState } from "react";
import './navbar.css'
import { Link} from "react-router-dom";
import { FaXbox } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa6";



export default function Navbar() {
  const [dropDown, setDropDown] = useState(null);

  const toggleDropDown = (id) => {
    if (dropDown === id) {
      setDropDown(null);
    } else {
      setDropDown(id);
    }
  };

  const linkarr = [
    {
      id: 1,
      to: "/",
      name: "Home",
    },
    {
      id: 2,
      to: "/console",
      name: "console",
    },

    {
      id: 3,
      to: "/games",
      name: "Games",
    },
  ];

  const linkConsole = [
    {
      id: 4,
      to: "/playstation",
      name: <FaPlaystation className="PS-icone"/>,
    },
    {
      id: 5,
      to: "/xbox",
      name: <FaXbox className="xbox-icone"/>,
    },
  ];

  const linkGames = [
    {
      id: 1,
      to: "/action",
      name: "Action",
    },

    {
      id: 2,
      to: "/adventeur",
      name: "adventeur",
    },
  ];

  return (
    <>
      <header>
      <div className="links-container">
        {linkarr.map((links) => (
            
            <Link to={links.to} key={links.id} className={dropDown===links.id ? 'links' : 'links-active'} onClick={() => toggleDropDown(links.id)}
            >{links.name}
               
                
                <div className="dropDown-navbar">
                {links.id === 2 &&
                dropDown === 2 &&
                linkConsole.map((droplinks) => (
                    <Link to={droplinks.to} key={droplinks.id} className="dropDown-links">
                    {droplinks.name}
                    </Link>
                ))}
               
                {links.id === 3 &&
                dropDown === 3 &&
                linkGames.map((dropDownGames) => (
                    <Link to={dropDownGames.to} key={dropDownGames.id}>
                    {dropDownGames.name}
                    </Link>
                ))}
             </div>
            </Link>
         
        ))}
         </div>
      </header>
    </>
  );
}
