
export default function Students({data}) {
    return(
        <div>
                <table className='border gap-3'>
                <tr className='gap-3 border'>
                <th>Names</th>
                <th>Age</th>
                <th>Country</th>
                <th>Description</th>
                </tr>
            {data?.map((item,index)=>{
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
    )
}
 