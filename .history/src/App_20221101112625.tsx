// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from './state';
// import { RootState } from './state/reducers';

// function App() {
//   const state = useSelector((state: RootState) => state.bank)
//   const dispatch = useDispatch();

//   // Khác React Redux *
//   const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)

//   return (
//     <div className="App">
//       <h1>{state}</h1>
//       <button onClick={() => depositMoney(1000)}>Deposit</button>
//       <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
//       <button onClick={() => bankrupt()}>Bankrupt</button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from "./components/AddBook";
import "./App.css";
import BooksList from "./components/BookList";

function App() {
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id: string) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };
  
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
