import "./style.css"
import logo from "../../assets/ChatGPT Image 14 de abr. de 2025, 20_40_13.png"

export default function Navbar() {
 return (
   <footer>
        <div className="d-flex align-items-center justify-content-between px-4 py-3" style={{ backgroundColor: '#fdfbef' }}>
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" style={{ width: '70px' }} />
        </div>

        <form className="d-flex flex-grow-1 mx-4" style={{ maxWidth: '600px' }}>
          <input className="form-control rounded-start" type="search" placeholder="Buscar livro..." />
          <button className="btn btn-outline-secondary rounded-end" type="submit">🔍</button>
        </form>

        <div className="d-flex align-items-center gap-4 text-dark">
          <div className="text-center">
            <i className="bi bi-calendar-check"></i><br />
            <small>Eventos<br /><strong>da Booking</strong></small>
          </div>
          <div className="text-center">
            <i className="bi bi-heart"></i><br />
            <small>Meus<br /><strong>Favoritos</strong></small>
          </div>
          <div className="text-center">
            <i className="bi bi-person"></i><br />
            <small>Seja bem-vindo!<br /><strong>Faça seu login</strong></small>
          </div>
          <div className="position-relative text-center">
            <i className="bi bi-bag"></i><br />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
          </div>
        </div>
      </div>
   </footer>
 );
}