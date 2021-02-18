import { Box, Divider, Typography } from '@material-ui/core'
import React from 'react'
import DrawerDesign from '../design/drawerDesign';
import GameCardDesign from '../design/gameCardDesign';
import {fetchGames} from '../sanityConfig/config';

function GamesList() {
    const [games, setGame] = React.useState(null);

    React.useEffect(() => {
        fetchGames(setGame)
    }, []);
    
    return (
        <div>
            <DrawerDesign>
                <Box padding={2}>
                    <Typography variant="h4">
                        Games List
                    </Typography>
                    <Divider />
                </Box>
                <Box padding={2}>
                    <GameCardDesign games={games}/>
                </Box>
            </DrawerDesign>
        </div>
    )
}

export default GamesList
