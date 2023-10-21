export default function Students() {
  const data = JSON.parse(window.localStorage.getItem("students"));
  
  const deleteStudent = (id) => {
    return data.filter((item, index) => index !== id);
  };
  return (
    <div>
      <table className=" border border-slate-500">
        <thead className="">
          <tr className="">
            <th className="border border-slate-600 px-10">Names</th>
            <th className="border border-slate-600 px-10">Age</th>
            <th className="border border-slate-600 px-10">Country</th>
            <th className="border border-slate-600 px-10">Description</th>
            <th className="border border-slate-600 px-10">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index} className="">
                <td className="border border-slate-700 px-10">{item.name}</td>
                <td className="border border-slate-700 px-10">{item.age}</td>
                <td className="border border-slate-700 px-10">
                  {item.country}
                </td>
                <td className="border border-slate-700 px-10">
                  {item.description}
                </td>
                <td className="border flex border-slate-700 px-10 gap-2">
                  <button className="border bg-green-500 px-2 py-1 rounded-md">Edit</button>
                  <button className="border bg-red-500 px-2 py-1 rounded-md" onClick={()=>deleteStudent(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
