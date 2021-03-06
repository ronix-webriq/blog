import { Box, Divider, Typography } from '@material-ui/core';
import React from 'react';
import DrawerDesign from '../../design/drawerDesign';
import { fetchProjects } from '../../sanityConfig/config'
import TableDesign from '../../design/tableDesign';

function AllProjectsComponent() {
    const [projects, setProjects] = React.useState(null);

    React.useEffect(() => {
        fetchProjects(setProjects)
    }, [])

    return (
        <DrawerDesign>
            <Box padding={2}>
                <Typography variant='h4'>
                    Projects
                </Typography>
                <Divider />
            </Box>
            <Box padding={2}>
                {projects===null ? <div>Loading...</div>:<TableDesign project={projects}/>}
            </Box>
        </DrawerDesign>
    )
}

export default AllProjectsComponent
