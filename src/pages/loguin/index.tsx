import Head from "next/head";
import Container from "../../components/Container";
import * as C from "./style";
import { Mail, Key } from "lucide-react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { signIn } from "next-auth/react";
const Loguin = () => {
  return (
    <>
      <Head>
        <title>Quitutes de Venus | Loguin</title>
      </Head>
      <C.Container>
        <Container>
          <C.FormContainer>
            <C.FieldContainer>
              <C.Label>
                <Mail />
                Email
              </C.Label>
              <C.Input type="email" placeholder="example@1235.com" />
            </C.FieldContainer>
            <C.FieldContainer>
              <C.Label>
                <Key />
                Senha
              </C.Label>
              <C.Input type="password" placeholder="*****" />
            </C.FieldContainer>
            <a href="">Esqueceu a senha?</a>
            <C.BtnSubmit type="submit">Log in</C.BtnSubmit>
          </C.FormContainer>
          <div className="divider">
            <p>Ou</p>
          </div>
          <C.SocialContainer>
            {/*<FaFacebook size={30} color="#0E4791"  onClick={()=>signIn("facebook")}/>*/}
            <FaGoogle
              size={30}
              color="#4086F4"
              onClick={() => signIn("google")}
            />
            {/*<FaTwitter size={30} color="#1DA0F1"  onClick={()=>signIn("twitter")} />*/}
          </C.SocialContainer>
        </Container>
      </C.Container>
    </>
  );
};

export default Loguin;
