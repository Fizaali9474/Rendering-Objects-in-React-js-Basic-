import logo from './logo.svg';
import './App.css';
function App() {
const text="Hello World";
const textt="Hello World Object";
const list=['Hello World 1' , 'Hello World 2' , 'Hello World 3'];
const data="We";
const abc="Are";
const alphabet="United";
const table=[
  {Company : 'ABC' ,
Jobs : 'Javascript'
},
{
  Company : 'XYZ' ,
  Jobs : 'Angular'
}
]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>{text}</h1>
        <p>{textt}</p>
        <ul>
          {list.map(function(item)
          {
            return<li>{item}</li>
          }
          )}
        </ul>
        <p>{data}</p>
        <p>{abc}</p>
        <p>{alphabet}</p>
        <table border="2" >
<tr>
  <th>Company</th>
  <th>Jobs</th>
</tr>
{table.map(function(item)
          {
            return<tr>
              <td>{item.Company}</td>
              <td>{item.Jobs}</td>
              </tr>
          }
          )}
        </table><br></br>
      </header>
    </div>
  );
}
export default App;
