import React from 'react';
import PostMemory from './Components/PostMemory';
import ShowMemory from './Components/ShowMemory';


function App() {
  return (
    <div className="min-height d-flex flex-column">
      <header className="App-header">
        <h1 className='text-center mt-3'>Post a memory</h1>
      </header>
      <main>
          <PostMemory></PostMemory>
          <ShowMemory></ShowMemory>
      </main>
      <footer>
        <p className="text-center">created by Aziz  {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
