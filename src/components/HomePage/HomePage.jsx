import Featured from './Featured/Featured';
import './HomePage.css';
import List from './List/List';
import Navbar from './Navbar/Navbar';

const HomePage = () => {
  return (
    <div className="home">
        <Navbar/>
        <Featured type={'movie'}/>
        <List/>
        <List/>
        <List/>

    </div>
  )
}

export default HomePage;