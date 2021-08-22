import { useState } from "react";
import { Link } from "react-router-dom";

const menuOptions = [
  {
    id: 1,
    description: "Home",
    img_url:
      "https://res.cloudinary.com/dw4g9x8wv/image/upload/v1629558347/home_wsvrhw.png",
    to: "/",
  },
  {
    id: 2,
    description: "Books",
    img_url:
      "https://res.cloudinary.com/dw4g9x8wv/image/upload/v1629558431/open-book_rte0ww.png",
    to: "/books",
  },
];

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        {menuOptions.map((option) => (
          <Link key={option.id} to={option.to} className='nav-selection'>
            <li>
              <img src={option.img_url} alt='home icon' />{" "}
              <p>{option.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
