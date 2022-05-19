import React from 'react'

const Quiz = ({name,questions,score,setScore,setQuestions}) => {

    const [options, setOptions]=React.useState()
    const [currQues, setCurrQues]=React.useState(0)
    React.useEffect(()=>{
        console.log(questions)
    },[questions])
  return (
    <div>Quiz</div>
  )
}

export default Quiz