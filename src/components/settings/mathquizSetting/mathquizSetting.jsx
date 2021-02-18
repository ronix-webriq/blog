import { Box, Button, Divider, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import DrawerDesign from '../../design/drawerDesign'

export function Mathquizsetting(props) {
    const [addAns, setAddAns] = React.useState([]);
    const [ans, setAns] = React.useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;        
        setAns(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    React.useState(() => {
        setAddAns([...addAns, `item_${1}`])
    })
    const handleAddAnswer = () => {
        let count = 1;
        setAddAns([...addAns, `item_${count + 1}`])
    }

    const handleSubmit = () => {
        console.log(ans)
    }

    return (
        <DrawerDesign>
            <form>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4">
                        Math Quiz Settings
                    </Typography>
                    <div>
                        <Button type="submit" variant="contained" color="primary" size="small" onClick={handleSubmit}>
                            Save
                        </Button>
                    </div>
                </Box>
                <Divider />
                <Box padding={2}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <TextField required fullWidth variant='outlined' label='Question' size="small" name="question" onChange={(e) => handleChange(e)}/>
                        </Grid>
                        {addAns.map((ans, index) =>
                            <Grid item xs={3} key={index}>
                                <TextField required fullWidth variant='outlined' label={`Answer ${index + 1}`} size="small" name={`answer_${index + 1}`} onChange={(e) => handleChange(e)} />                                
                            </Grid>
                        )}
                        <Grid item xs={12}>
                           <Box display="flex" justifyContent="space-between">
                                <Button variant="contained" color="primary" size="small" onClick={handleAddAnswer}>
                                    Add Answer Field
                                </Button>                                                    
                           </Box>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </DrawerDesign>
    )
}
