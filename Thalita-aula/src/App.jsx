import { useState } from 'react'
import './App.css'
import TenisNike from './assets/tenisnike.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos"> 

        {/*Produto 1 */}
      <div  className="card">
       <h2>Tenis Nike </h2>
       <p className="desc"> Um lindo tenis da Nike</p>
       <p className="preco"> R$ 799,99 </p>
       <p className="avaliaco"> ★ ★ ★ ★ ☆ </p>
       <img src={TenisNike} alt="" className="img-prod"/>
       </div>

       </section>
        <section className="produtos"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
