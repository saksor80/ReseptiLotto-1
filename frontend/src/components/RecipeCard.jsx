import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List, ListItem } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeCard({ recipe }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: 345, maxWidth: 600, ml: 2, mr: 2, mb: 2, boxShadow: 2 }}>
      <CardHeader
        title={recipe?.title}
        subheader={recipe?.timeToCook}
      />
      <CardMedia
        component="img"
        height="240"
        image={recipe?.image}
        alt={recipe?.title || "Recipe Image"}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {recipe?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="näytä lisää"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ fontWeight: 'medium' }}>Ainekset:</Typography>
          <List>
            {recipe?.ingredients?.map((ingredient) => (
              <ListItem key={ingredient} >
                {ingredient}
              </ListItem>
            ))}
          </List>
          <br />
          <Typography sx={{ fontWeight: 'medium' }}>Ohjeet:</Typography>
          <List>
            {recipe?.steps?.map((step) => (
              <ListItem key={step} >
                {step}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}