import { useState } from "react"

// const studentDetails = [
//     {name : "Jay",perCen: 77},
//     {name : "Vishal",perCen: 76},
//     {name : "Jash",perCen: 75},
//     {name : "Vish",perCen: 80},
// ]

// 1st load this data using useState

// derived state 
// 2nd print heighestPer 
// 3rd print Count of student

export const StudentData = ()=>{

    const [studentDetails,setStudentDetails] = useState([
        {name : "Jay",perCen: 99},
        {name : "Vishal",perCen: 76},
        {name : "Jash",perCen: 75},
        {name : "Vish",perCen: 80},
        {name : "Vikas",perCen: 85},
    ]);
    // console.log(studentDetails);
    const totalStudent = studentDetails.length;

    const highestPer = studentDetails.reduce((accum,currentValue)=> {
        // console.log(currentValue.perCen);
        // console.log(currentValue.perCen);
        // console.log("aaa",accum);
        // accum = currentValue.perCen;
        // console.log("aaa",accum);
        if(currentValue.perCen > accum){
            accum = currentValue.perCen;
        }
        return accum;
    },0);
    console.log(highestPer);
    return(
        <>
            <ul>
                {studentDetails.map((curEle,index)=>{
                    return(
                        <li key={index}>name is {curEle.name} and Per is {curEle.perCen}</li>
                    )
                })}
            </ul>
            <div>No of Students : {totalStudent}</div>
            <div>Highest Percentage : {highestPer}</div>
        </>
    )   

}
