import React,{useState} from 'react'
import { uploadFile } from './firebase/config'


function App() {
  const [file, setFile] = useState(null)

const handleSubmit = async (e) => {
  e.preventDefault();
  const result = await uploadFile(file)
  console.log(result)
}


  return (
    <form  onSubmit={handleSubmit}>
      <input type="file" name='' id='' onChange={ (e) => setFile(e.target.files[0])}/>
      <button>
        upload
      </button>
    </form>
  )
}

export default App