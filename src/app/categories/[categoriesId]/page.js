import { getCategoryNews } from "@/utils/getCategoryNews";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";

const DynamicNewsPage = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);
  return (
    <div>
      <h1>
        Total <span className="font-bold">{searchParams.category}</span> news:{" "}
        {data.length}
      </h1>

      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data?.map((news) => (
          <Grid xs={6} key={news.id}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
            <Card>
              <CardActionArea>
                <CardMedia sx={{
                    "& img": {
                        width: "100%",
                        height: "250px"
                    }
                }}>
                    <Image src={news.thumbnail_url} alt="top news" width={800} height={100} />
                </CardMedia>
                <CardContent>
                  <span className="bg-red-500 text-white px-2 py-1 rounded">
                    {news.category}
                  </span>
                  <Typography gutterBottom className="my-2" variant="h6">
                    {news.title.length>30 ? news.title.slice(0,30)+"..." : news.title}
                  </Typography>

                  <Typography gutterBottom className="my-2">
                    By {news.author.name} - {news.author.published_date}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {news.details.length>200 ? news.details.slice(0,200)+"..." : news.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
