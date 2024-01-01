import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/Sidebar/SideBar";
import Grid from "@mui/material/Unstable_Grid2";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <LatestNews />
        </Grid>
        <Grid xs={4}>
          <SideBar />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
