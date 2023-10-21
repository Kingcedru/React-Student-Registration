import { useState } from "react";
 
export default function Registration() {
  const [name, nextName] = useState("");
  const [age, nextAge] = useState("");
  const [data, nextData] = useState(JSON.parse(localStorage.getItem('students')||"[]"));
  const [country, nextCountry] = useState("");
  const [description, nextDescription] = useState("");

  const register = (e) => {
    e.preventDefault();
    nextData([...data, { name, age, country, description }]);
    nextName("");
    nextAge("");
    nextCountry("");
    nextDescription("");
    localStorage.setItem('students',JSON.stringify(data))
  };
  
  return (
    <div className="flex justify-center w-full">
      <div className="grid gap-20">
        <form
          className="grid gap-5 bg-indigo-600 px-20 py-10 rounded-xl "
          onSubmit={register}>
          <label>Names</label>
          <input
            className="border rounded-full py-2 px-10"
            type="text"
            value={name}
            placeholder="Enter Names"
            required
            onChange={(e) => nextName(e.target.value)}
          />
          <label>Age</label>
          <input
            className="border rounded-full py-2 px-10"
            type="text"
            value={age}
            placeholder="Enter Age"
            required
            onChange={(e) => nextAge(e.target.value)}
          />
          <select
            className="border py-2"
            value={country}
            onChange={(e) => nextCountry(e.target.value)}>
            <option value="">Country</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Burundi">Burindi</option>
            <option value="Uganda">Uganda</option>
          </select>
          <textarea
            className="border"
            placeholder="Enter description"
            value={description}
            onChange={(e) => nextDescription(e.target.value)}></textarea>
          <input
            className="border rounded-full text-white font-bold hover:bg-red-500 bg-red-600 py-3 w-40"
            name="register"
            type="submit"
          />
        </form>
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
              {data?.map((item, index) => {
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
      </div>
    </div>
  );
}
