import { Container, Box } from "@mui/system";
import { GitHub } from "@mui/icons-material";
import Link from "@mui/material/Link";
const AboutUs = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: "#8e806a7c", height: "100vh" }}
    >
      <Box>
        {" "}
        <h1
          style={{
            textAlign: "center",
            paddingTop: "7rem",
            textShadow: "2px 2px rgb(0,0,0,0.22)",
            color: "rgb(255,255,255)",
          }}
        >
          Sobre nosotros
        </h1>
        <p
          style={{
            textShadow: "2px 2px rgb(0,0,0,0.22)",
            color: "rgb(255,255,255)",
            paddingTop: "1rem",
            textAlign: "center",
          }}
        >
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          animi et dolor reiciendis laborum molestias aliquid debitis est aut
          iusto consequatur assumenda obcaecati libero ullam alias, facilis
          cumque, accusantium ad! Iure ex laudantium vitae, libero temporibus
          quo dolor perferendis aperiam perspiciatis rem commodi magnam
          repellendus ratione debitis. Omnis cumque voluptatum incidunt minus
          tempore consectetur! Debitis impedit distinctio reprehenderit vitae,
          inventore eligendi corrupti ullam quis deleniti earum. Dolore
          recusandae quo maxime! Earum ratione laudantium nemo repellat quia
          magnam saepe error, impedit, repudiandae eius, aspernatur laboriosam
          optio. Ut ab eum odio, minus sit sunt aspernatur. Doloremque dolorum
          illo sed, consequatur quos perspiciatis hic iste nesciunt nobis odit
          sapiente deserunt dignissimos autem voluptas optio expedita enim
          voluptatum maiores ullam velit reiciendis fugit quam! Voluptatem,
          totam molestias modi, officia sed consequuntur earum aspernatur
          impedit exercitationem quisquam itaque, officiis culpa! Possimus
          aliquid repellat exercitationem nobis. Voluptatum vel quidem
          distinctio iure, fugit eligendi ullam ratione modi dolor architecto
          eum ad consectetur nulla deserunt est placeat libero, nihil omnis unde
          animi molestias doloremque id quas enim! Ullam esse nostrum deleniti.
          Expedita animi eaque reprehenderit, accusamus laborum cumque? Nesciunt
          adipisci, nemo corporis vel eius nostrum sint expedita beatae possimus
          amet. Reprehenderit ab temporibus delectus accusamus illo.
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "3rem",
        }}
      >
        <div
          className="div"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <img
            style={{
              height: "200px",
              marginLeft: "15px",
              paddingTop: "15px",
              borderRadius: "50%",
            }}
            srcSet={require("../../assets/linkedin-profile-example-3.png")}
            alt=""
          />
          <Link
            href="https://github.com/fernando-bogorja"
            style={{
              marginLeft: "8px",
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <GitHub />
          </Link>
        </div>
        <div
          className="div"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <img
            style={{
              height: "200px",
              marginLeft: "15px",
              paddingTop: "15px",
              borderRadius: "50%",
            }}
            srcSet={require("../../assets/linkedin-profile-example-3.png")}
            alt=""
          />
          <Link
            href=""
            className="link-none"
            style={{
              marginLeft: "8px",
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <GitHub />
          </Link>
        </div>
        <div
          className="div"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <img
            style={{
              height: "200px",
              marginLeft: "15px",
              paddingTop: "15px",
              borderRadius: "50%",
            }}
            srcSet={require("../../assets/linkedin-profile-example-3.png")}
            alt=""
          />
          <Link
            href=""
            className="link-none"
            style={{
              marginLeft: "8px",
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <GitHub />
          </Link>
        </div>
        <div
          className="div"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <img
            style={{
              height: "200px",
              marginLeft: "15px",
              paddingTop: "15px",
              borderRadius: "50%",
            }}
            srcSet={require("../../assets/linkedin-profile-example-3.png")}
            alt=""
          />
          <Link
            href=""
            className="link-none"
            style={{
              marginLeft: "8px",
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <GitHub />
          </Link>
        </div>
        <div
          className="div"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <img
            style={{
              height: "200px",
              marginLeft: "15px",
              paddingTop: "15px",
              borderRadius: "50%",
            }}
            srcSet={require("../../assets/linkedin-profile-example-3.png")}
            alt=""
          />
          <Link
            href=""
            className="link-none"
            style={{
              marginLeft: "8px",
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <GitHub />
          </Link>
        </div>
      </Box>
    </Container>
  );
};

export default AboutUs;
