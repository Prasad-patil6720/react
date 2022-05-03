
import './App.css';


function App() {
  const header = (
    <header style={{backgroundColor:'aqua',fontSize:'10px',border:"2px solid red "}}>
      <h1>welcome to 30 days of javascript</h1>
      <h2>this is start yesterday</h2>
      <h3>welcome to react family</h3>

      <p>prasad patil</p>
      <small>3 may,2022</small>
    </header>
  )
const style={backgroundColor:"orange",fontSize:"32px",border:"4px solid gray"}
  const main=(
    <main style={style}>
      <p>prerequisite of react</p>
      <ul>
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
      </ul>
    </main>
  )

  const footer=(
    <footer>
      <p>&copy; prasad patil</p>
    </footer>
  )
  const name="prasad";
  const lastName="patil";
  const techh=["mongodb","express","react","node"];
const date=new Date();
  return (
    <div className="App">
    {/* {header}
    {main}
    {footer} */}

    <h1>my name is {name} and sirname is {lastName}</h1>
    <p>Date is : {date.getFullYear()}</p>

    <strong>{techh}</strong>
    </div>
  );
}

export default App;
