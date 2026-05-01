import React from 'react';
import data from "../../../../public/data.json"

const detailsPage = async({params}) => {
    const {id}=await params;
    const book = data.find(d=> d.id == id)
  console.log(book);
  
    return (
        <div>
           <p> {book.title}</p>
        </div>
    );
};

export default detailsPage;