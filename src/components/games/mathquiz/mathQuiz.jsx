import { Box, Button, Divider, Typography} from '@material-ui/core';
import React from 'react'
import DrawerDesign from '../../design/drawerDesign'
import {fetchGames} from '../../sanityConfig/config';
import {useHistory} from 'react-router-dom'
export default function Mathquiz() {
    const [games, setGames] = React.useState(null);
    const history = useHistory();

    const handleStartGame = () => {
        history.push('/games/mathquiz/0')
    }
    return (
        <DrawerDesign>
            <Box paddingBottom={5}>
                <Typography variant="h3" align='center'>WELCOME TO MATH QUIZ</Typography>
                <Divider />
            </Box>                  
            <Box textAlign='center' padding={10}>
                <Typography variant="h6" align='center'>
                    Click the button below if you want to start the quiz
                </Typography>
            </Box>
            <Box textAlign='center' padding={2}>
                <Button color='primary' variant='contained' onClick={handleStartGame}>Start Game</Button>
            </Box>            
        </DrawerDesign>
    )
}
