
export default function Students() {
    const data = JSON.parse(window.localStorage.getItem('students'))
    return(
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
                    <td className="border border-slate-700 px-10">
                      {item.name}
                    </td>
                    <td className="border border-slate-700 px-10">
                      {item.age}
                    </td>
                    <td className="border border-slate-700 px-10">
                      {item.country}
                    </td>
                    <td className="border border-slate-700 px-10">
                      {item.description}
                    </td>
                    <td className="border border-slate-700 px-10">
                      <select>
                        <option value="">Pending</option>
                        <option value="pending">Edit</option>
                        <option>
                          <button onClick={() => deleteStudent(index)}>
                            Deletee
                          </button>
                        </option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    )
}
 