import React from "react";
import RecruitmentForm from "./components/RecruitmentForm/index";
import "./App.css";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <RecruitmentForm />
      </Container>
    </div>
  );
}

export default App;
