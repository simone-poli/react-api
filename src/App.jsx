import { useState, useEffect } from 'react'


function App() {

  const url = "https://lanciweb.github.io/demo/api/actresses/"
  const [actressInfo, setActressInfo] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setActressInfo(data)
      })
  }, [])

  return (
    <>
      <h1 className="text-center bg-secondary p-3">Actress and Actor</h1>
      <section>
        <div className="container mt-4">
          <div className="row row-cols-1 row-cols-md-5 g-3">
            {actressInfo && actressInfo?.map(info => {
              return (
                <div className="col" key = {info.id}>
                  <div className="card">
                    <img className="card-img-top" src={info.image} alt="" />
                    <div className="card-body d-flex flex-column">
                      <h4>{info.name}</h4>
                      <p dateTime={info.birth_year}>Burn in: {info.birth_year}</p>
                      <p>{info.nationality}</p>
                      <p className="fw-bold">{info.biography}</p>
                      <p className="text-danger">Awards: {info.awards}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
