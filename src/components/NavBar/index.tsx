import React, { useState } from "react";
import * as C from "./style";
import {
  Menu,
  XCircle,
  ShoppingCart,
  User2,
  Facebook,
  Instagram,
  Phone,
} from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { data: session } = useSession();
 
  return (
    <C.NavBar>
      <C.ButtonMenu onClick={() => setShowMenu(true)}>
        <Menu size={32} />
      </C.ButtonMenu>

      <C.Nav visible={showMenu}>
        <div className="faixa">
          <h3>Menu</h3>
          <XCircle onClick={() => setShowMenu(false)} size={28} color="#fff" />
        </div>
        <C.NavItens>
          <li>
            <a href="#">Dias dos namorados</a>
          </li>
          <li>
            <a href="#">Festa Junina</a>
          </li>
          <li>
            <a href="#">Promoções</a>
          </li>
          <li>
            <a href="#">Presentes</a>
          </li>
          <li>
            <a href="#">Kits e combos</a>
          </li>
        </C.NavItens>
        <C.SocialContainer>
          <h2>Redes Sociais</h2>
          <div>
            <a href="#">
              <Facebook size={28} />
            </a>
            <a href="https://instagram.com/quitutesdevenus?igshid=MmJiY2I4NDBkZg==">
              <Instagram size={28} />
            </a>
            <a href="https://wa.me/5516988594123?text=Ol%C3%A1%21+Gostaria+de+realizar+uma+encomenda%21">
              <Phone size={28} />
            </a>
          </div>
        </C.SocialContainer>
      </C.Nav>
      <Link href="/"><C.Title>Quitutes de Venus</C.Title></Link>
      <C.ContainerBtns>
        <a className="cart" href="#">
          <ShoppingCart size={32} color="#fff" />
          <span>1</span>
        </a>
        {session ? (
          <a className="user" href="#">
            <Image src={session.user.image} width={32} height={32} alt="foto usuario" />
            <p>Olá {session.user.name.split(" ")[0]}</p>
          </a>
        ) : (
          <Link className="user" href="/loguin">
            <User2 size={32} color="#fff" />
            <p>Faça Loguin</p>
          </Link>
        )}
      </C.ContainerBtns>
    </C.NavBar>
  );
};

export default NavBar;
