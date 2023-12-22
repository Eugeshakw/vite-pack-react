
import './App.css'
import data from '../data.json'
function App() {
const user = data.currentUser.username;

console.log(import.meta.env);
  return (
    <>
      
      <h1 className='text-3xl font-bold underline'>{user}</h1>
      
    </>
  )
}

export default App
