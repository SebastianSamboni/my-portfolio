import { Box, Typography } from '@mui/material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const SkillItem = ({ skillName, skillLogo, percentage}) => {
    return (
        <Box textAlign='center' mb={3}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={{
                    root: { width: '80px' },
                    path: { stroke: '#007bff' },
                    text: { fill:  '#007bff', fontSize: '16px' },
                }}
            />
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <img src={skillLogo}
                    alt={skillName}
                    style={{
                        width: '45px',
                        height: '45px'
                    }}
                />
                <Typography variant='h6'
                    component='div'
                    color='textSecondary'
                >
                    {skillName}
                </Typography>
            </div>
        </Box>
    )
}

export default SkillItem
