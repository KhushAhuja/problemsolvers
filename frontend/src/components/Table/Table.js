import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProblems } from '../../redux/actions/problemActions'
import './Table.css'

const PracticeTable = () => {

  
  const dispatch = useDispatch()

  const getAllProblems = useSelector(state=> state.getAllProblems)
  const {Allproblems} = getAllProblems
  
  useEffect(()=>{
      dispatch(getProblems())
    },[dispatch]
  )

  console.log(Allproblems);
  

  
  return (
    <table class="practice-table">
  <thead className='bg-[#0f6d6d]'>
    <th>Name</th>
    <th>Submission</th>
    <th>Difficulty</th>
    <th>Contest Code</th>
  </thead>
  <tbody>
    {
      Allproblems && Allproblems.map(problem=>(
        <tr>
          <td data-label="Name"><Link to={problem._id}>{problem.name}</Link></td>
          <td data-label="Submission">{problem.submission}</td>
          <td data-label="Difficulty">{problem.difficulty}</td>
          <td data-label="Contest Code">{problem.contest_code}</td>
        </tr>
      ))
    }

  </tbody>
</table>
  )
}

export default PracticeTable