import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

const SingleCard = ({
  title,
  description,
  deployLink,
  githubLink,
  techStack,
  image,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 315,
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;",
      }}
    >
      <CardMedia
        sx={{ height: 230 }}
        className="border-t-2 border-x-2 "
        image={
          image
            ? image
            : "https://media.istockphoto.com/id/1420039900/photo/cyber-security-ransomware-email-phishing-encrypted-technology-digital-information-protected.webp?s=1024x1024&w=is&k=20&c=IF7urJ01pDieoE-QDg-hrMNL82vG3LCYnYjG2yGDN1o="
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title ? title : "Upcoming title"}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description ? description : "upcomng descreption"}
        </Typography>
        <Typography variant="body2" color="blue">
          {techStack ? techStack : "upcomng stack"}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between mx-2 mb-2">
        <Button size="small" href={deployLink} target="_blank">
          <AiOutlineLink size={20} /> <span className="ml-1">Live Preview</span>
        </Button>
        <Button size="small" href={githubLink} target="_blank">
          <AiOutlineGithub size={24} />
          <span className="ml-1">View Code</span>
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
