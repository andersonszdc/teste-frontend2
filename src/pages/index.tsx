import Head from "next/head";
import Link from "next/link";
import { StyledCardCompany, StyledHome } from "../styles/pages/Home";
import { RiArrowDropLeftLine } from "react-icons/ri";
import BackButton from "../components/backButton";

const Home = () => {
  return (
    <StyledHome>
      <Head>
        <title>Desafio Frontend - Onyma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Empresas</h1>
      <div className="list">
        <CardCompany name="a" />
        <CardCompany name="b" />
        <CardCompany name="c" />
      </div>
    </StyledHome>
  );
};

type CardCompanyProps = {
  name: string;
};

const CardCompany = ({ name }: CardCompanyProps) => {
  const goToList = () => {};
  return (
    <Link passHref href={`/${name}`}>
      <StyledCardCompany onClick={goToList}>
        <h1 className="logo">{name.toUpperCase()}</h1>
        <p className="name">Empresa {name.toUpperCase()}</p>
      </StyledCardCompany>
    </Link>
  );
};

export default Home;
