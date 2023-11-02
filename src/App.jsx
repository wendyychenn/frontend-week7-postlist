import { useEffect, useRef, useState } from 'react';
import PostList from './components/PostList';

import './App.css'

function App() {
  
  return (
    <>
      <div>
        <h1>Recent Posts</h1>
        <PostList />
       
      </div>
    </>
  )
}

export default App;
