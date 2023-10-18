import React, {useState } from 'react'
import Students from './Students'
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
        <div className='flex justify-center w-full'>
        <div className='grid gap-20'>
            <form className='grid gap-5 bg-indigo-600 px-20 py-10 rounded-xl  h-96' onSubmit={register}>
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
            <table className='table-auto border border-slate-500'>
                <thead>
                    <tr className=''>
                    <th className='border border-slate-600'>Names</th>
                    <th className='border border-slate-600'>Age</th>
                    <th className='border border-slate-600'>Country</th>
                    <th className='border border-slate-600'>Description</th>
                    </tr>
                </thead>
                <tbody>
            {data.map((item,index)=>{
                return(
                    
                    <tr key={index} className=''>
                        <td className='border border-slate-700'>{item.name}</td>
                        <td className='border border-slate-700'>{item.age}</td>
                        <td className='border border-slate-700'>{item.country}</td>
                        <td className='border border-slate-700'>{item.description}</td>
                    </tr>
                    
                )
            })}
            </tbody>
            </table>
            </div>
        </div>
        </div>
) 
}
