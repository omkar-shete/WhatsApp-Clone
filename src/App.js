// BEM__naming--conv 
import './App.css';
//
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat'


function App() {
  return (
     <div className="app">

      <div className='app__body'>
        {/* 1.sidebar */}
        <Sidebar/>
        {/* 2.chat area  */}
        <Chat/>
      </div>
      
    </div>
  );
}

export default App;
