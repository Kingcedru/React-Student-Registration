import React, {useState } from 'react'
import { NavLink, Route} from 'react-router-dom'
export default function Registration() {
    const [name,nextName] = useState('')
    const [age,nextAge] = useState('')
    const [data,nextData] = useState([])
    const [country,nextCountry] = useState('')
    const [description,nextDescription] = useState('')

const register = (e)=>{
    e.preventDefault();
    nextData([...data,{name,age,country,description}])
}
    return(
        <div>
            <form className='grid gap-5' onSubmit={register}>
                <label>Names<input className='border' type='text' required onChange={(e)=>nextName(e.target.value)}/></label>
                <label>Age<input className='border' type='text' required onChange={(e)=>nextAge(e.target.value)}/></label>
                <select className='border' value={country} onChange={(e)=> nextCountry(e.target.value)}>
                    <option value=""></option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Burundi">Burindi</option>
                    <option value="Rwanda">Rwanda</option>
                </select>
                <textarea className='border' value={description} onChange={(e)=> nextDescription(e.target.value)}></textarea>
                <input className='border' type='submit'/>
            </form> 
            <div>
            <table className='border gap-3'>
                <tr className='gap-3 border'>
                <th>Names</th>
                <th>Age</th>
                <th>Country</th>
                <th>Description</th>
                </tr>
            {data.map((item,index)=>{
                return(
                    <tr key={index} className='gap-3 border'>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.country}</td>
                        <td>{item.description}</td>
                    </tr>
                )
            })}
            </table>
            </div>
        </div>
) 
}