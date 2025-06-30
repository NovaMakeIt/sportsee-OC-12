import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
