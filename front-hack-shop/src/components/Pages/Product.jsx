import * as React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PersonIcon from "@mui/icons-material/Person";
import CheckIcon from "@mui/icons-material/Check";
import useCartHook from "../../Hooks/Cart";
import { Link } from "react-router-dom";
import AppButton from "../Miscellaneous/AppButtons/AppButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCube,
  faStar,
  faMinimize,
  faArrowsUpDown,
  faArrowsLeftRight,
  faEarthAmericas,
  faCow,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import Model from "../Renders/Allscenes";

function Product() {
  let { productId } = useParams();
  let urlGet = "http://localhost:3001/api/products/get?id=" + productId;
  const [product, setProduct] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [actualImg, setActualImg] = useState([]);
  const [cart, addToCart] = useCartHook();
  const [is3D, setIs3D] = useState(false);

  const getProduct = async () => {
    try {
      const response = await axios.get(urlGet);
      setProductImages(response.data.data.images);
      return setProduct(response.data.data);
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  const handleAddToCart = () => {
    addToCart(product);
  };

  /* DISPLAY DE IMAGENES 2D*/
  let pochoclo;
  useEffect(() => {
    getProduct();
    setActualImg(productImages[0]);
  }, [(pochoclo = productImages[0])]);
  const handleClickForChangeImage = img => {
    return setActualImg(img);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      my={20}
      sx={{
        width: "100%",
      }}
    >
      <Box display="flex" alignItems="center" sx={{ width: "80%" }}>
        <Grid
          justifyContent="center"
          container
          spacing={2}
          columns={12}
          sx={{ backgroundColor: "#fff", padding: "20px 0", width: "100%" }}
        >
          <Grid item xl={1} lg={1} md={2} sm={1} xs={3}>
            <Box height="100%">
              <List
                sx={{
                  maxWidth: 360,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "0px",
                }}
              >
                {productImages.map((item, index) => (
                  <Button
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      onClick={() => handleClickForChangeImage(item)}
                      src={item}
                      srcSet={item}
                      alt={productImages[index]}
                      width="100%"
                      height="100%"
                      style={{
                        border: "2px solid #eaeaea",
                        borderRadius: "50%",
                      }}
                    />
                  </Button>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xl={7} lg={7} md={10} sm={11} xs={9}>
            <Box
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {is3D ? (
                <Model />
              ) : (
                <img
                  src={actualImg}
                  srcSet={actualImg}
                  alt={pochoclo}
                  width="60%"
                />
              )}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="0"
                left="0"
                sx={{ width: "50px", height: "50px", borderRadius: "15%" }}
              >
                <Button
                  sx={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "15%",
                    backgroundColor: "#eee",
                  }}
                  onClick={() => setIs3D(!is3D)}
                >
                  {" "}
                  <FontAwesomeIcon icon={faCube} size="2x" color="#000" />
                </Button>
              </Box>
              <Typography variant="h5">Descripción</Typography>
              <Typography variant="body1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
                autem. Unde, voluptates ea et, ullam similique iusto
                necessitatibus illo odio recusandae asperiores commodi ipsam
                vitae est tempora sit esse, neque temporibus fuga quasi ex minus
                repellat facilis? Totam ipsam cum ipsum sunt asperiores, odit
                obcaecati neque accusantium doloribus, velit tempore.
              </Typography>
            </Box>
            {/* alt={pochoclo} src={actualImg} */}
          </Grid>
          <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="h5"
                color="textPrimary"
                gutterBottom
                fontFamily={"Abhaya Libre"}
              >
                {product.name}
              </Typography>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <FontAwesomeIcon icon={faStar} size="1x" color="#000" />
                <Typography variant="body1">5.1</Typography>
              </Box>
              <Box
                width="100%"
                display="flex"
                justifyContent="flex-start"
                flexDirection="column"
                mt={4}
              >
                <Typography
                  sx={{ textAlign: "justify", fontWeight: 600 }}
                  variant="subtitle2"
                  align="center"
                  color="textPrimary"
                  paragraph
                >
                  Detalles del producto
                </Typography>
                <DetailBox
                  icon={faCow}
                  label="Tapizado"
                  value={product.upholstery}
                />
                <DetailBox
                  icon={faMinimize}
                  label="Tamaño"
                  value={product.size}
                />
                <DetailBox
                  icon={faEarthAmericas}
                  label="Hecho en"
                  value={product.made_in}
                />
                <DetailBox
                  icon={faArrowsLeftRight}
                  label="Largo"
                  value={product.length}
                />
                <DetailBox
                  icon={faCube}
                  label="Profundidad"
                  value={product.depth}
                />
                <DetailBox
                  icon={faArrowsUpDown}
                  label="Altura"
                  value={product.tall}
                />
              </Box>
              <PriceBox price={product.price} />
              <Typography
                sx={{ textAlign: "justify", fontWeight: 600 }}
                variant="subtitle2"
                align="center"
                color="textPrimary"
                paragraph
              ></Typography>
              <Box
                display="flex"
                justifyContent="flex-end"
                width={{ xs: "97%", xl: "85%" }}
              >
                <AppButton
                  onClick={() => handleAddToCart()}
                  backgroundColor=" #000"
                  color="white"
                >
                  Agregar al Carrito
                </AppButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const DetailBox = ({ label, value, icon }) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width={{ xs: "97%", xl: "85%" }}
      sx={{
        borderBottom: "1px solid #000",
      }}
      mb={2}
    >
      <Box
        width="50%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Box
          width="20px"
          height="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <FontAwesomeIcon icon={icon} size="1x" color="#464646" />
        </Box>
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{ marginLeft: "10px" }}
          color="#464646"
        >
          {label}:
        </Typography>
      </Box>
      <Box width="50%" textAlign="right">
        <Typography variant="body1" color="#888">
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

const PriceBox = ({ price, discount }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width={{ xs: "97%", xl: "85%" }}
      my={2}
      mb={2}
    >
      <Typography variant="h4" color="#000" fontFamily="inherit">
        ${price}
      </Typography>
      <Typography
        variant="body1"
        color="#000"
        fontFamily="inherit"
        textAlign="right"
      >
        O 3 pagos de ${(price / 3).toFixed(2)}
      </Typography>
    </Box>
  );
};

export default Product;
