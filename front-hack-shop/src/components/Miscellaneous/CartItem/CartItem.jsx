import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import MiniChip from "../MiniChip/SuperChip";

export default function CartItem({ item }) {
  return (
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
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            {item.name}
            <MiniChip variant="soft" color="" size="sm">
              {item.cartQuantity}
            </MiniChip>
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
            Añadido hace 1 hora(s)
          </Chip>
        </Box>
      </Box>
    </Card>
  );
}
