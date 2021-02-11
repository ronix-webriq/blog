import { Box, Button, Divider, Typography } from '@material-ui/core'
import React from 'react'
import DrawerDesign from '../../design/drawerDesign'
import {useHistory} from 'react-router-dom';

export default function MathQuizComponent() {
    const history = useHistory();
    const handleClick = () => {
        history.push('/games/mathquiz/1')
    }
    return (
        <div>
            <DrawerDesign>
                <div>
                    <Box padding={2}>
                        <Typography variant="h4">Welcome to Math Quiz</Typography>
                        <Divider />
                    </Box>
                    <Box textAlign='center' margin={5}>
                        <Typography variant='button' >If you're ready, click Start button below to start!</Typography>                        
                    </Box>
                    <Box textAlign='center' margin={5}>
                        <Button size="small" variant="contained" color="primary" onClick={handleClick}>Start</Button>
                    </Box>                    
                </div>
            </DrawerDesign>
        </div>
    )
}
