import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const alinks = links.map((alink) => (
    <a key={alink} href={"#" + alink}>
      {alink}
    </a>
  ));

  return <nav>{alinks}</nav>;
}

export default NavBar;
