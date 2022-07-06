import { Button, Container } from "@mui/material";
import Box from "@mui/material/Box";
import ContainerFlex from "../components/ContainerFlex";
import BotaoHome from "../components/BotaoHome";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <ContainerFlex>
        <BotaoHome destiny="">Jogar</BotaoHome>
        <BotaoHome destiny="ranking" comp={Link}>
          Classificação
        </BotaoHome>
        <BotaoHome destiny="options" comp={Link}>
          Opções
        </BotaoHome>
      </ContainerFlex>
    </>
  );
}
