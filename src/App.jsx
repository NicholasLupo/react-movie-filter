import { useState } from "react"

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

  return (
    <>
      <main>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          {
            films.map(film => (

              <option value={film.id}>{film.genre}</option>

            ))
          }
        </select>
        <ul className="list-unstyled">
          {
            films.map(film => (
              <li key={film.id}>{film.title}</li>
            ))
          }
        </ul>
      </main>
    </>
  )
}

export default App
