import './App.css'
import ApiFetch from './ApiFetch'

function App() {

  return (
    <>
    <h1  style={{textAlign:'center',marginTop:'40px'}}>Random user On Refresh</h1>
     <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center '>
      
        <div style={{width:'700px',height:'600px'}} className='bg-warning shadow rounded rounded-3'>
        <ApiFetch/>
        </div>
     </div>
    </>
  )
}

export default App