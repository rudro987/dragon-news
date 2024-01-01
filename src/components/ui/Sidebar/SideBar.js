import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import sideBarNews from "@/assets/side-top-news.png";
import Image from "next/image";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideBarNews} alt="top news" width={800} />
          </CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 text-white px-2 my-5 rounded">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>

            <Typography gutterBottom className="my-3">
              By Tanvir Hossain - Mar 18 2023
            </Typography>

            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SideBar;
