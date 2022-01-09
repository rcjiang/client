import { useSearchParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Contents() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/cover.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`Id=${id}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            summary...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Contents
