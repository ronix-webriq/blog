import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Badge, Grid, IconButton, Tooltip } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {useHistory} from 'react-router-dom';
import { Settings } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


export default function GameCardDesign(props) {
  const classes = useStyles();
  const history = useHistory();

  const handlePlay = (gameName) => {
    const path = String(gameName).toLowerCase().replace(' ', '')
    history.push(`/games/${path}`)
  }

  return (
    <Grid container spacing={2}>
      {props.games && props.games.map(item =>
        <Grid item xs={3} key={item.game_name}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={item.imageTitle}
                height="140"
                image={item.image_url}
                title={item.game_name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {item.game_name}
                </Typography>
                <Typography variant="caption" color="textSecondary" component="p">
                  Played times: {item.game_played_times}  |  High Score: 0
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Tooltip title="Play Game" placement='top'>
                <IconButton size='small' onClick={() => handlePlay(item.game_name)}>
                  <PlayArrowIcon />
                </IconButton>
              </Tooltip>            
              <Tooltip title="settings" placement='top'>
                <IconButton size='small'>
                  <Settings />
                </IconButton>
              </Tooltip>                
            </CardActions>
          </Card>
        </Grid>
      )}
    </Grid>
  );
}
