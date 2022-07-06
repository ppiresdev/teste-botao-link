import { Button } from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

type BotaoHomeProps = {
  children: string;
  destiny?: string;
  comp?: any;
};

export default function BotaoHome(props: BotaoHomeProps) {
  return (
    <>
      <Button
        component={props.comp}
        to={`${props.destiny}`}
        sx={{ width: "50%" }}
        variant="contained"
      >
        {props.children}
      </Button>
    </>
  );
}
