import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function CardContainer(props: any) {
  const { data, key, productHandler } = props;
  // const options = {
  //   item: 1,
  // };

  return (
    <Card key={key} className="h-100">
      <CardContent className="cardContent">
        <CardHeader
          title={data.title}
          subheader={`Price: ${data.price}`}
          onClick={productHandler}
          sx={{
            cursor: "pointer",
          }}
        />
        <OwlCarousel items={1} nav={true}>
          {data?.images?.map((img: string, index: number) => (
            // <img src={img} alt={data.title} className="img-fluid" />
            <CardMedia
              key={img}
              component="img"
              height="194"
              image={img}
              alt="Huawei P30"
            />
          ))}
        </OwlCarousel>

        <Typography
          variant="body2"
          color="text.secondary"
          className="cardDescription"
        >
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
