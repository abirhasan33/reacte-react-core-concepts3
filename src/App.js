import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <h2>Abir hasan</h2>
      <Counter></Counter>
      <LodeCommrnts></LodeCommrnts>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);

  const handeleIncrase = () => setCount(count + 100);
  const handeleDecrase = () => setCount(count - 100);

  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handeleIncrase}>Inctease</button>
      <button onClick={handeleDecrase}>Dectease</button>
    </div>
  )
}

function LodeCommrnts() {
  const [comments, setCommites] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setCommites(data))
  },[])

  return(
    <div>
      <h2>Commit: {comments.length}</h2>
      {
        comments.map(comment => <Commit email={comment.email} body={comment.body} id={comment.id} name={comment.name}></Commit>)
      }
    </div>
  )
}

function Commit (props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Email: {props.email}</h4>
      <h5>Body: {props.body}</h5>
      <h4>Id: {props.id}</h4>
    </div>
  )
}

export default App;
