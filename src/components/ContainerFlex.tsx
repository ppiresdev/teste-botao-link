import { Container } from "@mui/material";
import { ReactElement } from "react";

type ContainerFlexProps = {
  children: ReactElement[] | ReactElement;
};

export default function ContainerFlex(props: ContainerFlexProps) {
  return (
    <>
      <Container
        maxWidth="md"
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "inherit",
          gap: "16px",
        }}
      >
        {props.children}
      </Container>
    </>
  );
}
