import logo from './logo.svg';
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <HashRouter>
        <Container fluid>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>
              <NavMenu Hi />
            </Col>
          </Row>

          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/login/:from" element={<Login customerLoggedIn={customerLoggedInHandler} />}>
            </Route>
            <Route path="/login" element={<Login customerLoggedIn={customerLoggedInHandler} />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/quiz/:id" element={
              <ProtectedRoute user={user}><Quiz user={user} /></ProtectedRoute>
            }>
            </Route>
          </Routes>

          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>

        </Container>
      </HashRouter>
    </div>
  );
}

export default App;