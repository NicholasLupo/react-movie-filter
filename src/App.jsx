import { useEffect, useState } from "react"

function App() {

  const films = [
    { id: 1, title: 'Inception', genre: 'Fantascienza' },
    { id: 2, title: 'Il Padrino', genre: 'Thriller' },
    { id: 3, title: 'Titanic', genre: 'Romantico' },
    { id: 4, title: 'Batman', genre: 'Azione' },
    { id: 5, title: 'Interstellar', genre: 'Fantascienza' },
    { id: 6, title: 'Pulp Fiction', genre: 'Thriller' },
  ]


  const [movie, setMovie] = useState(films)
  const [previousGenre, setPreviousGenre] = useState('')

  useEffect(() => {
    if (!previousGenre) {
      setMovie(films)
      return
    }

    setMovie(films.filter((film) => film.genre === previousGenre))
  }, [previousGenre])

  return (
    <main>
      <div className="container">
        <div className="row mt-4">
          <select className="form-select" value={previousGenre} aria-label="Default select example" onChange={e => setPreviousGenre(e.target.value)}>
            <option value="">Open this select menu</option>
            {
              films.map(film => (

                <option key={film.id} value={film.genre}>{film.genre}</option>

              ))
            }
          </select>
          <ul className="list-unstyled mt-4">
            {
              movie.map(movie => (
                <li key={movie.id}>{movie.title}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </main>
  )
}

export default App
