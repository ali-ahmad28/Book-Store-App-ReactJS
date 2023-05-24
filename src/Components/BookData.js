import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BookDetails } from './BookDetails';
import { Box, List, ListItem, ListItemText, Button } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';

export const BookData = () => {
    const [bookData, setBookData] = useState([]);
    const [displayDialog, setDisplayDialog] = useState(false);
    const [selectedBook, setSelectedBook] = useState();
    const [page, setPage] = useState(1);

    const getData = async () => {
        try {
            console.log("here")
            const books = await axios.get(`https://gutendex.com/books?page=${page}`)
            setBookData(prevBooks => [...prevBooks, ...books.data.results]);
            setPage(prevPage => prevPage + 1);
            console.log(page)
        }
        catch (e) {
            console.log(e)
        }
    }
    const handleClose = () => {
        setDisplayDialog(false)
    }
    const handleClick = (book) => {
        setSelectedBook(book);
        setDisplayDialog(true)
    }

    const handleLoadMore = () => {
        getData();
      };


    useEffect(() => {
        getData()
    }, [])

    return (
        <Box >
            <List >
                {bookData.map((book, index) => (
                    <ListItem key={index}>
                        <ListItemText>Book ID: {JSON.stringify(book.id)} <Box display="flex" flexDirection="row" justifyContent="center"><Button variant="outlined" color="primary" style={{ marginRight: '500px' }} onClick={() => handleClick(book)}>
                            Description
                        </Button></Box></ListItemText>
                        {displayDialog && <BookDetails bookData={selectedBook} handleClose={handleClose} />}
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="primary" style={{ margin: '100px' }} onClick={handleLoadMore}>Load More Books...</Button>
        </Box>
    )
}
