import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
  ZoomInScrollOut,
  FadeUp,
} from "react-scroll-motion";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const ZoomOutScrollIn = batch(StickyIn(), ZoomIn(), ZoomOut());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const Zoom = batch(Fade(), Sticky(), ZoomOut());
  return (
    <div>
      <ScrollContainer>
        <ScrollPage>
          {/* <Animator animation={ZoomInScrollOut}> */}
          <Animator animation={ZoomOutScrollIn}>
            <span style={{ fontSize: "30px" }}>
              Te animas a hacer un firulais de zoom?✨
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={Zoom}>
            <span style={{ fontSize: "40px" }}>
              Gracias Por Tantas Milanesas ⛅️
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={MoveIn(-1000, 0)}>
                De parte de Todos 👋🏻
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>
                En este hermoso bootcamp 🙋🏻‍♀️
              </Animator>
              - Laia Organa -
              <Animator animation={MoveOut(1000, 0)}>
                De Parte De TODOS ✋🏻
              </Animator>
              <Animator animation={MoveOut(-1000, 0)}>
                Nos vemos SIEMPRE 💛
              </Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), ZoomIn())}>
            <span style={{ fontSize: "40px" }}>
              Ahora vamos a presentar nuestro proyecto
            </span>
            <br />
            <span style={{ fontSize: "30px" }}>
              Felipe Fontana, Lucia Rodriguez, Fer y Federico Gorriarán
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>{" "}
    </div>
  );
}
