
import './App.css';
import axios from 'axios';
import Header from './Components/Header/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home.js'
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import React from 'react'

function App() {
  const [name, setName]=React.useState("")
  const [questions, setQuestions]=React.useState()
  const [score, setScore]=React.useState(0)
  const fetchQuestions=async(category = "", difficulty = "")=>{
  const {data}=await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
  setQuestions(data.results)
  }
  return (
    <BrowserRouter>
      <div className="app" style={{backgroundImage:"url('./70.-Honeydew.jpg')"}}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>} />
          <Route path="/quiz" element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />} />
          <Route path="/result" element={<Result/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
