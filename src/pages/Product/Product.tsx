import { useState , useEffect } from "react";
import "./product.css";
import Navbar from "../../components/Navbar/Navbar";
import naruto from "../../assets/naruto.jpg";
import mil from "../../assets/1984.jpg"
import dom from "../../assets/domcasmurro.jpg"
import hobbit from "../../assets/hobbit.jpg"
import percy from "../../assets/percy.jpg"
import menina from "../../assets/menina.jpg"
import harry from "../../assets/harry.jpg"
import it from "../../assets/it.jpg"
import { useNavigate , useParams} from 'react-router-dom';

interface Book {
    id: number;
    title: string;
    genre: string;
    image: string;
    price: string;
    description: string;
  }
  
  const books: Book[] = [
    { id: 1, title: '1984', genre: 'Ficção', image: mil , price: 'R$ 29,90' , description: "Tematicamente, centra-se nas consequências do totalitarismo, da vigilância em massa e da lavagem cerebral na sociedade. Orwell, um socialista democrático, modelou o Estado autoritário descrito no romance com base na União Soviética stalinista e na Alemanha Nazista." },
    { id: 2, title: 'Dom Casmurro', genre: 'Drama', image: dom ,price: 'R$ 89,90' , description: "Dom Casmurro é um romance de Machado de Assis que conta a história de amor entre Bento Santiago e Capitu, e as desventuras que ambos enfrentam. A obra é considerada um dos romances mais importantes da literatura brasileira" },
    { id: 3, title: 'O Hobbit', genre: 'Fantasia', image: hobbit , price: 'R$ 45,90' , description: " é um livro infantojuvenil de alta fantasia escrito pelo filólogo e professor britânico J. R. R. Tolkien. Publicado originalmente em 21 de setembro de 1937, foi aclamado pela crítica, sendo nomeado à Medalha Carnegie e recebendo um prêmio do jornal norte-americano New York Herald Tribune de melhor ficção juvenil. O romance se mantém popular com o passar dos anos e é reconhecido como um clássico da literatura infantil, tendo vendido mais de 190 milhões de cópias." },
    { id: 4, title: 'Naruto', genre: 'Anime', image: naruto, price: 'R$ 19,90' , description: "Naruto [ a ] é umasérie de mangá japonesa escrita e ilustrada por Masashi Kishimoto . Conta a história de Naruto Uzumaki , um jovem ninja que busca o reconhecimento de seus colegas e sonha em se tornar Hokage, o líder de sua aldeia. A história é contada em duas partes: a primeira se passa na pré-adolescência de Naruto (volumes 1 a 27) e a segunda na adolescência (volumes 28 a 72)." },
    { id: 5, title: 'Percy Jackson', genre: 'Aventura', image: percy, price: 'R$ 69,90' , description: "Percy Jackson) é uma série literária composta por cinco livros de aventura, romance, suspense e fantasia, escritos pelo estadunidense Rick Riordan, que retrata a mitologia grega no século XXI.[1] O personagem principal da série é Percy Jackson, que descobre ser um meio-sangue filho de Poseidon, deus do mar.[1] Além dele, outros personagens principais secundários são Annabeth Chase, filha de Atena, Grover Underwood, um sátiro adolescente" },
    { id: 6, title: 'A Menina que Roubava Livros', genre: 'Drama', image: menina, price: 'R$ 29,90' , description:"The Book Thief tem como narradora a Morte, cuja função é recolher a alma de todos aqueles que morrem. Durante a sua passagem pela Alemanha, na Segunda Guerra Mundial, ela encontra a protagonista, Liesel Meminger, numa estação de comboio enquanto o seu irmão mais novo é enterrado próximo ao local. A menina, ao perceber que o coveiro deixou um livro, O manual do coveiro, cair na neve, rouba-o e é levada, então, até a cidade fictícia de Molching, onde a sua mãe pretende entregá-la a uma família para que a adotem."},
    { id: 7, title: 'Harry Potter', genre: 'Fantasia', image: harry, price: 'R$ 59,90' , description: "Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter (Harry Tiago Potter, no Brasil), que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts." },
    { id: 8, title: 'IT - A Coisa', genre: 'Terror', image: it , price: 'R$ 89,90', description: "Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas."},
  ];


    interface Props {
        books: Book[];
      }
      

const Product: React.FC<Props> = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const booksPerPage = 3;

    const start = currentPage * booksPerPage;
    const visibleBooks = books.slice(start, start + booksPerPage);

    const handleNext = () => {
        if (start + booksPerPage < books.length) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const handlePrevious = () => {
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1);
        }
      };

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
    <div>
      <Navbar />
      <div className="products">
        <div className="card-product card mb-3"> 
          <div className="row g-0">
            <div className="col-md-4">
              <img src={book?.image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="container-text col-md-8">
              <div className="card-body">
                <h2 className="card-title">{book?.title}</h2>
                <p className="card-text">
                    {book?.description}
                </p>
                <h4>{book?.price}</h4>
                  <div className="container-btn">
                    <button className="btn-buy btn-car btn btn-success ">
                      Comprar agora
                    </button>
                    <button className="btn-car btn btn-outline-secondary">
                      Adicionar ao carrinho
                    </button>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Quantidade
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">1</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">2</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">3</a>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="container-books">
          <button onClick={handlePrevious} className="btn btn-primary" disabled={currentPage === 0}>
            ◀ Anterior
            </button> 
    <main className="container my-4 flex-grow-1">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {visibleBooks.map((book) => (
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
            <button
    onClick={handleNext}
    className="btn btn-primary"
    disabled={start + booksPerPage >= books.length}
  >
    Próximo ▶
    </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;