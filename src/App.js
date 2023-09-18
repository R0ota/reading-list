import { useState } from 'react';
import React from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

 const App = () => {
  const[Books,setBooks]=useState([])
  const editBookById=(id, newtitle)=>{
    const updatedBooks=Books.map((book) => {
  if  (book.id === id) {
  return {...book,title:newtitle}
}
return book;

});
setBooks(updatedBooks)

  }
 
  const deleteBookById=(id) => {
    const updatedBooks=Books.filter((book) => {
      return book.id !== id


    });
    setBooks(updatedBooks)

  }

const createBook=(title) => {
const uppdatedBooks =[
  ...Books ,
  {id: Math.round(Math.random() *999),
   title ,
   } ,
];

  setBooks(uppdatedBooks)

}

  return (
    <div className='app'>
      <h1> Reading list
      </h1>
     < BookList onEdit={editBookById} Books={Books} onDelete={deleteBookById}/>
     < BookCreate onCreate={createBook}/>
    </div>
  )
}

export default App;