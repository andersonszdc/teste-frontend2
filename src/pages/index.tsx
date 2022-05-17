import Head from "next/head";
import Image from "next/image";
import {
  MainContainer,
  ContentContainer,
  Header,
  LogoContainer,
  Footer,
  Title,
  Icon,
  LinkedIn,
} from "../styles/pages/Home";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <MainContainer>
      <Head>
        <title>Desafio Frontend - Onyma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
            <LogoContainer>
              <Image
                alt="Logo da Onyma by Bencorp"
                src="/assets/Logo Onyma by Bencorp.svg"
                width="88px"
                height="53.59px"
                layout="intrinsic"
              />
            </LogoContainer>
          </Header>
      <ContentContainer>
        <Title>Coloque seu layout aqui.</Title>
      </ContentContainer>

      <Footer>
        <p>
          Feito com
          <Icon>
            <Image
              alt="Coração violeta"
              src="/assets/Blob footer.svg"
              width="16px"
              height="10px"
            />
          </Icon>
          pela Onyma
        </p>
        <LinkedIn
          href="https://www.linkedin.com/company/onymadigital/mycompany/"
          target="_blank"
        >
          <FaLinkedinIn />
        </LinkedIn>
      </Footer>
    </MainContainer>
  );
}
