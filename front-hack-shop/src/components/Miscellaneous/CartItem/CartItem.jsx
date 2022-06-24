import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { CssVarsProvider } from "@mui/joy";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import es from "timeago.js/lib/lang/es";
timeago.register("es", es);

export default function CartItem({ item }) {
  return (
    <CssVarsProvider>
      <Card
        variant="outlined"
        row
        sx={{
          margin: ".5rem 0",
          minWidth: "100%",
          gap: 2,
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img src={item.images[0]} alt="" />
        </AspectRatio>
        <Box>
          <Box sx={{ ml: 0.5 }}>
            <Typography level="h2" fontSize="lg" id="card-description">
              {item.name}
              <Chip
                color="danger"
                variant="soft"
                size="sm"
                sx={{ margin: "0 10px" }}
              >
                Cantidad ({item.cartQuantity})
              </Chip>
              <Button size="sm" variant="plain" color="danger">
                Eliminar
              </Button>
            </Typography>
            <Typography
              fontSize="sm"
              aria-describedby="card-description"
              fontWeight="bold"
              mb={1}
            >
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: "text.tertiary" }}
              >
                USD {item.price}
              </Link>
            </Typography>
            <Chip
              variant="outlined"
              color="primary"
              size="sm"
              sx={{ pointerEvents: "none" }}
            >
              <TimeAgo datetime={item.addedAt} locale="es" />
            </Chip>
          </Box>
        </Box>
      </Card>
    </CssVarsProvider>
  );
}
