import { useState } from "react";
import Content from "./Content";

function Header() {
  const [contentShow, setContentShow] = useState(
    localStorage.getItem("contentShow") || false,
  );
  const [contentNumer, setContentNumer] = useState(
   Number( localStorage.getItem("contentNumer")) || 0,
  );

  const showHandler = (number) => {
    setContentShow(true);
    setContentNumer(number);
    localStorage.setItem("contentShow", true);
    localStorage.setItem("contentNumer", number);
  };
  const menuItem = [1, 2, 3, 4];
  return (
    <>
      <header>
        <h1>Tabs components with react</h1>
        <ul className="menue">
          {menuItem.map((number, index) => (
            <li
              onClick={() => showHandler(number)}
              className={contentNumer === number ? "active" : ""}
              key={index}
            >
              Task {number}
            </li>
          ))}
        </ul>
      </header>
      <Content contentShow={contentShow} contentNumer={contentNumer} />
    </>
  );
}

export default Header;
