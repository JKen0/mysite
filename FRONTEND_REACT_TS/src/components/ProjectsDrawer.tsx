import { useState, CSSProperties } from 'react';
import { Box } from '@mui/material';

const drawerWidth = 240;

const ProjectsDrawer = () => {
    const drawerStyle: CSSProperties = {
        width: drawerWidth,
        flexShrink: 0,
    };

    const drawerPaperStyle: CSSProperties = {
        width: drawerWidth,
    };

    const toolbarStyle: React.CSSProperties = {
        ...drawerStyle,
    };

    return (
        <Box
            sx={{
                width: 240,
                height: 100,
                borderRadius: 1,
                bgcolor: 'primary.main',
                '&:hover': {
                    bgcolor: 'primary.dark',
                },
            }}
            style={{
                position: "fixed",
                padding: "0", // Set padding to 0 to ignore parent padding
            }}
        />
    )
}

export default ProjectsDrawer