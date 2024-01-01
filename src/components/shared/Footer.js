import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";

const Footer = () => {
    const navItems = [
        {
          route: "Home",
          pathName: "/"
        },
        {
          route: "Pages",
          pathName: "/pages"
        },
        {
          route: "Category",
          pathName: "/category"
        },
        {
          route: "News",
          pathName: "/news"
        },
        {
          route: "About",
          pathName: "/about"
        },
        {
          route: "Cpntact",
          pathName: "/contact"
        },
      ]

    return (
        <Box className="bg-black px-2 py-10">
            <Container>
            <Box className="w-full text-center" sx={{
            "& svg" : {
              color: "white",
            },
          }}>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          </Box>
          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathName}>
              <Button className="text-white">
                {item.route}
              </Button>
              </Link>
            ))}
          </Box>
          <Typography variant="body2" color="gray" textAlign="center">
            @2023 The Dragon News, Design by Tanvir.
          </Typography>
            </Container>
        </Box>
        
    );
};

export default Footer;