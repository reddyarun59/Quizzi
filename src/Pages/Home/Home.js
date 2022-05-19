import { TextField, MenuItem, Button } from '@mui/material'
import React from 'react'
import "./Home.css"
import Categories from '../../Data/Catogaries'

import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';

import { useNavigate } from 'react-router-dom';




const Home = ({name, setName, fetchQuestions}) => {
    const history = useNavigate();

    const [category, setCategory]=React.useState("")
    const [difficulty, setDifficulty]=React.useState("")
    const [error,setError]=React.useState(false)
    const handleSubmit=()=>{
        if(!name || !category || !difficulty){
            setError(true)
            return;
        }
        else{
            setError(false)
            fetchQuestions(category,difficulty);
            //<HistoryRouter history={history}>
                history("/quiz")
            //</HistoryRouter>
        }
    }

  return (
    <div className="content">
        <div className="settings">
            <span style={{fontSize:30}}>Quiz Settings</span>
            {error&&<ErrorMessage>Please Fill All the fields</ErrorMessage>}
            <div className="settings__select">
                <TextField label="Enter Your Name" varient="outlined" onChange={(e)=>setName(e.target.value)}/>
                <TextField select label="Select Category" varient="outlined" style={{marginTop:20}} onChange={(e)=>setCategory(e.target.value)} value={category}>
                    {Categories.map((cat)=>(
                       <MenuItem key={cat.category} value={cat.value}> {cat.category} </MenuItem>
                    ))}
                </TextField>
                <TextField select label="Select Difficulty" varient="outlined" style={{marginTop:20}} onChange={(e)=>{setDifficulty(e.target.value)}} value={difficulty}>
                    <MenuItem key="Easy" value="easy">Easy</MenuItem>
                    <MenuItem key="Medium" value="medium">Medium</MenuItem>
                    <MenuItem key="Hard" value="hard">Hard</MenuItem>
                </TextField>
                <Button varient="contained" color="primary" onClick={handleSubmit}>Start Quiz</Button>
            </div>
        </div>
        <img src="./quiz-img.svg"/>
    </div>
  )
}

export default Home