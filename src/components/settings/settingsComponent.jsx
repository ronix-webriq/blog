import { Box, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import DrawerDesign from '../design/drawerDesign';
import {useHistory} from 'react-router-dom';

function SettingsComponent() {
    const history = useHistory();
    const games = [
        {
            name: 'Math Quiz Setting',
            imgURL: 'https://assets.abcya.com/449c3086-9351-49b4-8767-5620db46f946',
            path: '/settings/mathquiz'
        }
    ]
    return (
        <div>
            <DrawerDesign>
                <Box padding={2}>
                    <Typography variant="h4">
                        Settings
                    </Typography>
                    <Divider />
                </Box>
                <Grid container spacing={3}>
                    {games.map(game => 
                    <Grid item xs={4} onClick={() => history.push(game.path)}>
                        <Box padding={2}>
                             <Box border='1px solid lightgray' height={200} width={200} borderRadius={20} bgcolor='#f5f5f5' className="cardGame">
                                 <Box padding={2}>
                                     <img src={game.imgURL} alt="MATH QUIZ" />
                                 </Box>
                                 <Typography align="center" variant="h6">{game.name}</Typography>
                             </Box>
                        </Box>
                     </Grid>    
                    )}
                </Grid>
            </DrawerDesign>
        </div>
    )
}

export default SettingsComponent
