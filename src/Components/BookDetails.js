import React, { useState } from 'react'
import { Dialog, Paper, Typography, Box, List, ListItem, ListItemText, Button} from '@mui/material'

export const BookDetails = ({ bookData, handleClose }) => {
    const imgURL = bookData.formats["image/jpeg"]
    return (
        <>
            <Dialog open={true}>
                <Paper
                    sx={{
                        width: '500px',
                        height: '600px',
                    }}
                >
                    <Typography variant="h4" fontWeight="bold" textAlign='center'>Desciption</Typography>
                    <Typography variant="h6" fontWeight="bold" margin="4px">Title</Typography>
                    <Typography variant="body1" color="textPrimary" margin="10px">
                        {bookData.title}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" margin="4px">Authors</Typography>
                    <Box >
                        <List >
                            {bookData.authors.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={JSON.stringify(item.name)} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Typography variant="h6" fontWeight="bold" margin="4px">Cover Page</Typography>
                    <Box
                        component="img"
                        src={imgURL}
                        alt="Image description"
                        width={200}
                        height={200}
                    />
                    <Button variant="contained" color="primary" onClick={handleClose} style={{ marginTop: '70px' }}>
                        Close
                    </Button>
                </Paper>
            </Dialog>
        </>
    )
}
