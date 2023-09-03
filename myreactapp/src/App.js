import logo from './logo.svg';
import './App.css';

function App() {

  var a =5;
  var b ='riya';
  var obj ={name:'diksha',id:99}
  var arr=[1,2,3,4,5]

  var obj2=[{name:'riya', roll:34},
  {name:'priya',roll:22}]
  
  return (
    <>
    <p>{a}</p>
    <br/>
    <h1>{b}</h1>

    {obj.name}
    <br/>
    {arr}
    <br/> 
    {/* {obj2} */}
    </>
  );
}

export default App;
