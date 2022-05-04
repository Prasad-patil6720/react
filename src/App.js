
import './App.css';
import Form from './Form';
import Header from './Header';
import HexaColor from './HexaColor';
import UserCard from './UserCard';


function App() {
  const mainStyle={
    width:"100%",
    height:"50%"
  }
return <div style={mainStyle} className='App'>

 {/* <Form /> */}
 {/* <HexaColor /> */}
 <UserCard />
</div>
}

export default App;
