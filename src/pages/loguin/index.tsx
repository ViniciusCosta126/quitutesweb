import Head from "next/head";
import Container from "../../components/Container";
import * as C from "../../global/styleLoguin";
import { Mail, Key } from "lucide-react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { signIn,getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

export default function Loguin() {
  return (
    <>
      <Head>
        <title>Quitutes de Venus | Loguin</title>
      </Head>
      <C.Container>
        <Container>
          <C.FormContainer>
            <C.FieldContainer>
              <C.LabelItem>
                <Mail />
                Email
              </C.LabelItem>
              <C.InputItem type="email" placeholder="example@1235.com" />
            </C.FieldContainer>
            <C.FieldContainer>
              <C.LabelItem>
                <Key />
                Senha
              </C.LabelItem>
              <C.InputItem type="password" placeholder="*****" />
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
}

export const getServerSideProps : GetServerSideProps = async (req)=>{
  const session = await getSession(req)
  if(session.user){
    return{
      redirect:{
        destination:"/",
        permanent:false
      }
    }
  }
  return{
    props:{}
  }
}