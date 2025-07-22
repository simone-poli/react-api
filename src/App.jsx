import { useState, useEffect } from 'react'


function App() {

  const urlActress = "https://lanciweb.github.io/demo/api/actresses/"
  const urlActors = "https://lanciweb.github.io/demo/api/actors/ "
  const [actressInfo, setActressInfo] = useState(null)
  const [actorsInfo, setActorsInfo] = useState(null)

  useEffect(() => {
    fetch(urlActress)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setActressInfo(data)
      })
  }, [])
  
  
  useEffect(() => {
    fetch(urlActors)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setActorsInfo(data)
      })
  }, [])

  return (
    <>
      <h1 className="text-center bg-danger p-3">Actress</h1>
      
      <section>
        <div className="container mt-4">
          <div className="row row-cols-1 row-cols-md-5 g-3">
            {actressInfo && actressInfo.map(info => {
              return (
                <div className="col" key={info.id}>
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
      <h1 className="text-center bg-primary p-3 mt-4" >Actors</h1>
      
      <section>
        <div className="container mt-4">
          <div className="row row-cols-1 row-cols-md-5 g-3">
            {actorsInfo && actorsInfo.map(info => {
              return (
                <div className="col" key={info.id}>
                  <div className="card">
                    <img className="card-img-top" src={info.image} alt="" />
                    <div className="card-body d-flex flex-column">
                      <h4>{info.name}</h4>
                      <p dateTime={info.birth_year}>Burn in: {info.birth_year}</p>
                      <p>{info.nationality}</p>
                      <p className="fw-bold">{info.biography}</p>
                      <p className="text-primary">Awards: {info.awards}</p>
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
