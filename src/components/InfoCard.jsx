import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const InfoCard = ({ timeWorked, company, jobTitle, responsabilities, index }) => {
    return (
        <Card
            style={{
                width: '100%',
                marginTop: 10
            }}
        >
            <CardContent>
                <Typography variant='h5'>{timeWorked}</Typography>
                <Typography variant='h6'>{jobTitle}</Typography>
                <Typography variant='subtitle1'>{company}</Typography>
                <Typography variant='body2'>
                    <ul>
                        {responsabilities.map((responsability, id) => (
                            <li key={id}>{responsability}</li>
                        ))}
                    </ul>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoCard