//import { useGetSingleProductQuery } from "../../../../redux/api-requests/products-req";
import * as React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { convertLength } from "@mui/material/styles/cssUtils";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PersonIcon from "@mui/icons-material/Person";
import CheckIcon from "@mui/icons-material/Check";
import { Star } from "@mui/icons-material";
import { Button } from "@mui/material";
function Product() {
  let params = useParams({});
  let urlGet = "http://localhost:3001/api/products/get?id=" + params.productId;
  //Definimos estado de Product
  const [product, setProduct] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const marta = async () => {
    try {
      const response = await axios.get(urlGet);
      //Guardamos las imagenes de product.images por separado porque sino no se renderiza
      //te atrofia la llamada
      setProductImages(response.data.data.images);
      return setProduct(response.data.data);
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  useEffect(() => {
    marta();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Container sx={{ height: "71vh", marginTop: 15 }} fixed>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={2}>
          <Item>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItemAvatar>
                {productImages.map((img) => (
                  <Avatar
                    style={{ width: "100%" }}
                    className="imagen"
                    alt=""
                    src={img}
                  />
                ))}
              </ListItemAvatar>
            </List>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={productImages[0]}
          />
          <Box sx={{ textAlign: "center" }}>
            <h4>Descripción</h4>
            <p>{product.description}</p>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Container>
              <Typography
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                {product.name}
              </Typography>{" "}
              <Typography
                sx={{
                  marginTop: 5,
                  marginBottom: 5,
                  textAlign: "center",
                  fontWeight: 600,
                }}
                variant="h5"
                align="center"
                color="textPrimary"
                paragraph
              >
                USD {product.price}
              </Typography>
              <Typography
                sx={{ textAlign: "justify", fontWeight: 600 }}
                variant="subtitle2"
                align="center"
                color="textPrimary"
                paragraph
              >
                <p>Tapicería: {product.upholstery}</p>
                <p>Tamaño: {product.size}</p>
                <p>Hecho en: {product.made_in}</p>
                <p>Largo: {product.length}</p>
                <p>Profunidad: {product.depth}</p>
                <p>Altura: {product.tall}</p>
              </Typography>
              <Typography
                sx={{ textAlign: "justify", fontWeight: 600 }}
                variant="subtitle2"
                align="center"
                color="textPrimary"
                paragraph
              >
                <p>
                  <PersonIcon /> Operating since 1993
                </p>
                <p>
                  <StarOutlineIcon /> Avg Review 4.4/5
                </p>
                <p>
                  <CheckIcon />
                  Certifications: BSCI & SMECTA
                </p>
              </Typography>
              <Button variant="contained" disableElevation>
                Agregar al Carrito
              </Button>
            </Container>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
