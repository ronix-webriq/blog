import { Divider, Typography } from '@material-ui/core'
import React from 'react'
import DrawerDesign from '../design/drawerDesign'

function DashboardView() {
    return (
        <div>
            <DrawerDesign>
                <Typography variant="h4">
                    Dashboard
                </Typography>
                <Divider />
            </DrawerDesign>
        </div>
    )
}

export default DashboardView
