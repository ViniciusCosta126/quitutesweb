import React, { useState } from "react";
import * as C from "./style";
import { Menu, XCircle, ShoppingCart, User2, ChevronDown, Facebook, Instagram, Phone } from "lucide-react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const logado = false;
  return (
    <C.NavBar>
      <C.Button onClick={() => setShowMenu(true)}>
        <Menu size={32} />
      </C.Button>

      <C.Nav visible={showMenu}>
        <div className="faixa">
          <h3>Menu</h3>
          <XCircle onClick={() => setShowMenu(false)} size={28} color="#fff" />
        </div>
        <C.NavItens>
          <li><a href="">Dias dos namorados</a></li>
          <li><a href="">Festa Junina</a></li>
          <li><a href="">Promoções</a></li>
          <li><a href="">Presentes</a></li>
          <li><a href="">Kits e combos</a></li>
        </C.NavItens>
        <C.SocialContainer>
          <h2>Redes Sociais</h2>
          <div>
            <a href="#"><Facebook size={28}/></a>
            <a href="https://instagram.com/quitutesdevenus?igshid=MmJiY2I4NDBkZg=="><Instagram size={28}/></a>
            <a href="https://wa.me/5516988594123?text=Ol%C3%A1%21+Gostaria+de+realizar+uma+encomenda%21"><Phone size={28}/></a>
          </div>
        </C.SocialContainer>
      </C.Nav>
      <C.Title>Quitutes de Venus</C.Title>
      <C.ContainerBtns>
        <a className="cart" href="#">
          <ShoppingCart size={32} color="#fff" />
          <span>1</span>
        </a>
        <a className="user" href="#">
          <User2 size={32} color="#fff" />
          
        </a>
      </C.ContainerBtns>
    </C.NavBar>
  );
};

export default NavBar;
