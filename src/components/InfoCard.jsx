import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const InfoCard = ({ timeWorked, company, jobTitle, responsabilities, index }) => {
    return (
        <Card
            style={{
                maxWidth: 400,
                width: '100%',
                marginBottom: 20,
                marginLeft: index % 2 === 1 ? 'auto' : 0,
                marginRight: index % 2 === 0 ? 'auto' : 0
            }}
        >
            <CardContent>
                <Typography variant='h5'>{timeWorked}</Typography>
                <Typography variant='h6'>{jobTitle}</Typography>
                <Typography variant='subtitle1'>{company}</Typography>
                <Typography variant='body2'>
                    <ul>
                        {responsabilities.map((responsability, index) => (
                            <li key={index}>{responsability}</li>
                        ))}
                    </ul>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoCard