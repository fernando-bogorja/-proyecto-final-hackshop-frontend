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
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PersonIcon from "@mui/icons-material/Person";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@mui/material";
import { ImageList, ImageListItem } from "@mui/material";
import useCartHook from "../../../../Hooks/Cart";

function Product() {
  let params = useParams({});
  let urlGet = "http://localhost:3001/api/products/get?id=" + params.productId;
  //Definimos estado de Product
  const [product, setProduct] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [actualImg, setActualImg] = useState([]);
  const [cart, addToCart] = useCartHook();

  const handleAddToCart = () => {
    addToCart(product);
  };

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
  let pochoclo;
  useEffect(() => {
    marta();
    setActualImg(productImages[0]);
  }, [(pochoclo = productImages[0])]);

  const handleClickForChangeImage = (img) => {
    return setActualImg(img);
  };
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
              <ImageList cols={1} rowHeight={164}>
                {productImages.map((item) => (
                  <ImageListItem key={item}>
                    <img
                      onClick={() => handleClickForChangeImage(item)}
                      src={`${item}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={productImages[0]}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </List>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Box
            component="img"
            sx={{
              height: 500,
              width: 350,
              minHeight: "350px",
              minWidth: "350px",
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            alt={pochoclo}
            src={actualImg}
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
              <Button
                onClick={() => handleAddToCart()}
                variant="contained"
                disableElevation
              >
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
