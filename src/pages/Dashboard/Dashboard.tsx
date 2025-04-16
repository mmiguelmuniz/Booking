
import { JSX, useState , useEffect } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/card.css';
import '../../styles/navbar.css';
import logo from "../../assets/ChatGPT Image 14 de abr. de 2025, 20_40_13.png"
import carrosel from "../../assets/banner 2.png"
import carrosel1 from "../../assets/banner 43.png"
import carrosel2 from "../../assets/test.png"
import mil from "../../assets/1984.jpg"
import dom from "../../assets/domcasmurro.jpg"
import hobbit from "../../assets/hobbit.jpg"
import naruto from "../../assets/naruto.jpg"
import percy from "../../assets/percy.jpg"
import menina from "../../assets/menina.jpg"
import harry from "../../assets/harry.jpg"
import it from "../../assets/it.jpg"


interface Book {
  id: number;
  title: string;
  genre: string;
  image: string;
  price: string;
}

const books: Book[] = [
  { id: 1, title: '1984', genre: 'Ficção', image: mil , price: 'R$ 29,90'},
  { id: 2, title: 'Dom Casmurro', genre: 'Drama', image: dom ,price: 'R$ 89,90'},
  { id: 3, title: 'O Hobbit', genre: 'Fantasia', image: hobbit , price: 'R$ 45,90'},
  { id: 4, title: 'Naruto', genre: 'Anime', image: naruto, price: 'R$ 19,90' },
  { id: 5, title: 'Percy Jackson', genre: 'Aventura', image: percy, price: 'R$ 69,90' },
  { id: 6, title: 'A Menina que Roubava Livros', genre: 'Drama', image: menina, price: 'R$ 29,90' },
  { id: 7, title: 'Harry Potter', genre: 'Fantasia', image: harry, price: 'R$ 59,90' },
  { id: 8, title: 'IT - A Coisa', genre: 'Terror', image: it , price: 'R$ 89,90'},
];



export default function Dashboard(): JSX.Element {
  const [filtro, setFiltro] = useState<string>('');
  const livrosFiltrados = filtro ? books.filter(book => book.genre === filtro) : books;

  const { id } = useParams();
  const [book, setBook] = useState<Book | undefined>();

  useEffect(() => {
    const found = books.find(b => b.id === Number(id));
    setBook(found);
  }, [id]);





  const navigate = useNavigate();

  const handleClick = (bookId: number) =>{
    navigate(`/Product/${bookId}`);
  }
  return (
    <div className="container-fluid p-0 min-vh-100 d-flex flex-column">

      {/* Navbar */}
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

      {/* Carrossel */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src= {carrosel} className="d-block w-100" alt="banner1" />
          </div>
          <div className="carousel-item">
            <img src={carrosel} className="d-block w-100" alt="banner2" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      

      {/* Filtros por categoria */}
      <div className="bg-white border-bottom py-3">
  <div className="container d-flex flex-wrap justify-content-center gap-3">
    {["Anime", "Ficção", "Fantasia", "Drama", "Aventura", "Romance", "Terror", "Suspense"].map((genre) => (
      <button
        key={genre}
        className={`btn btn-outline-primary px-3 py-2 rounded-pill ${filtro === genre ? 'active' : ''}`}
        onClick={() => setFiltro(genre)}
      >
        {genre}
      </button>
    ))}
  </div>
</div>


      {/* //livros */}
      <main className="container my-4 flex-grow-1">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {livrosFiltrados.map((book) => (
            <div className="col" key={book.id}>
              <div className="card h-100">
                <img src={book.image} className="card-img-top" alt={book.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text text-muted">{book.genre}</p>
                  <p className="card-text fw-bold text-success">{book.price}</p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-success">Adicionar ao carrinho 🛒</button>
                    <button className="btn btn-outline-secondary" onClick={() =>handleClick(book.id)}>Ver mais</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
  style={{ backgroundColor: '#fdfbef', color: '#000' }}
  className="mt-5 pt-4 pb-3"
>

      <div className="container">
    <div className="row text-center text-md-start">

      <div className="col-md-4 mb-4">
        <h5 className="fw-bold mb-2">📬 Contato</h5>
        <p className="mb-1">📧 contato@booking.com</p>
        <p className="mb-1">📞 (81) 90000-0000</p>
        <p>📍 Rua dos Livros, 123 - Recife, PE</p>
      </div>

      <div className="col-md-4 mb-4">
        <h5 className="fw-bold mb-2">🏢 Institucional</h5>
        <p><a href="#" className="text-dark text-decoration-none">Sobre Nós</a></p>
        <p><a href="#" className="text-dark text-decoration-none">Política de Privacidade</a></p>
        <p><a href="#" className="text-dark text-decoration-none">Termos de Uso</a></p>
      </div>

      <div className="col-md-4 mb-4">
        <h5 className="fw-bold mb-2">💳 Pagamento</h5>
        <p className="mb-1">Aceitamos:</p>
        <div className="d-flex gap-2 justify-content-center justify-content-md-start">
          <i className="bi bi-credit-card fs-4"></i>
          <i className="bi bi-paypal fs-4"></i>
          <i className="bi bi-cash-stack fs-4"></i>
          <i className="bi bi-bank fs-4"></i>
        </div>
      </div>
    </div>

    <hr className="border-light" />
    <p className="text-center mb-0">📖 Selo de Qualidade Literária | © 2025 Booking Livraria Online</p>
  </div>
</footer>

    </div>
  );
}
