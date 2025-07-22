import { useState, useEffect } from 'react'


function App() {
  
  const url = "https://lanciweb.github.io/demo/api/actresses/" 
  const [urlApi, setUrlApi] = useState(url)


  fetch(urlApi)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })

  return (
    <>
      
    </>
  )
}

export default App
