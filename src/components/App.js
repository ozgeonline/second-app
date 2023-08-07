import React from 'react';
import Header from './Header';
import Note from './Note';
import notes from './Notes';
import Footer from './Footer';
import '../index.css';


function App(){
  return(<div>
    <Header />

    {notes.map(noteItem => <Note 
      id={noteItem.id} key={noteItem.id} title={noteItem.title} content={noteItem.content} />
    )}

    <Footer />
  </div>);
}
export default App;