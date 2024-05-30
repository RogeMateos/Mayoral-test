// Importación de módulos necesarios para la creación del componente Header
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

// Importación del archivo de estilos correspondiente al Header
import styles from "../styles/Header.module.scss";

// Definición de los props que recibe el componente Header
interface HeaderProps {
  sortByPriceDescending: () => void;
  sortByPriceAscending: () => void;
  filterByName: (name: string) => void;
}

// Creación del componente Header
const Header = ({
  sortByPriceDescending,
  sortByPriceAscending,
  filterByName,
}: HeaderProps) => {
  // Definición del estado searchTerm y la función setSearchTerm
  const [searchTerm, setSearchTerm] = useState("");

  // Definición de las funciones que se ejecutan al hacer clic en los botones de ordenar
  const handleSortByPriceDescending = () => {
    sortByPriceDescending();
  };

  const handleSortByPriceAscending = () => {
    sortByPriceAscending();
  };

  // cambiar el valor del input de búsqueda
  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
    filterByName(event.target.value);
  };

 
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          {/* Componente de búsqueda */}
          <InputGroup className={styles["form"]}>
            <InputGroup.Text id="basic-addon1">
              {" "}
              <i className="bi bi-search"></i>{" "}
            </InputGroup.Text>
            <Form.Control
              placeholder="Buscar"
              aria-label="Buscar"
              aria-describedby="basic-addon1"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </InputGroup>
        </Nav>{" "}
        {/* Componente de ordenamiento */}
        <Form className="d-flex">
          <div className={styles["btn"]}>
            <a className="bi bi-plus" onClick={handleSortByPriceDescending}></a>
            <a className="bi bi-dash" onClick={handleSortByPriceAscending}></a>
          </div>
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Header;
