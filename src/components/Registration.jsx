import React, { useEffect, useState } from 'react'
export default function Registration() {
    const [name,nextName] = useState('')
    const [age,nextAge] = useState('')
    const [data,nextData] = useState([])
    const [country,nextCountry] = useState('')
    const [description,nextDescription] = useState('')

let stu = []
const register = (e)=>{
    e.preventDefault();
    nextData([...data,{name,age,country}])
}
    return(
        <div>
            <form className='grid gap-5' onSubmit={register}>
                <label>Names<input className='border' type='text' required onChange={(e)=>nextName(e.target.value)}/></label>
                <label>Age<input className='border' type='text' required onChange={(e)=>nextAge(e.target.value)}/></label>
                <select className='border' value={country} onChange={(e)=> nextCountry(e.target.value)}>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Burundi">Burindi</option>
                    <option value="Rwanda">Rwanda</option>
                </select>
                <textarea className='border' value={description} onChange={(e)=> nextDescription(e.target.value)}></textarea>
                <input className='border' type='submit'/>
            </form> 
            <div>
            {data.map((item,index)=>{
                return(
                    <div>
                        <h1>{item.name}</h1>
                        <h1>{item.age}</h1>
                        <h1>{item.country}</h1>
                    </div>
                )
            })}
            </div>
        </div>
) 
}