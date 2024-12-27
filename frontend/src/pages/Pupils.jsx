import  { useState ,useEffect} from 'react'
import { School} from 'lucide-react'
import api from '../api';
import { Url } from '../constants';

import 'react-international-phone/style.css';
 

function Pupils() {
   const [name, Name] = useState("");
   const  [surname, Surname] = useState("");
    const [dob, DOB] = useState("");
    const [grade, Grade]= useState("");
    const [birthcert, Birthcert]= useState("");
    const [address, Address]= useState("");
    const [parent, Parent]= useState("");
    const [id_number, Id_number]= useState("");
    const [cell_number, Cell_number]= useState("");


   

    const Path ="/api/add/"
  useEffect(() => {
    getForm();
}, []);


const getForm = () => {
  api
      .get(`${Url}${Path}`)
      .then((res) => res.data)
      .then((data) => {

          console.log(data);
      })
      .catch((err) => alert(err));
};






  

  const handleSubmit = (e) => {
    e.preventDefault();
    api
        .post(`${Url}${Path}`, { name,surname,dob ,grade,birthcert,address,parent,id_number,cell_number})
        .then((res) => {
            if (res.status === 201) alert(` ${name}  has been added `);
            else alert("Failed to add pupil ");
            getForm();
        })
        .catch((err) => alert(err));
};


  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full w-full  max-w-lg mx-auto">
        <div className="flex items-center justify-center mb-6">
          <School className="text-red-500 mr-5" size={24} />
          <h1 className="text-2xl font-bold text-blue-600">Enter New Pupil </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 space-x-50 w-full" >
          <div>
            <label htmlFor="name" className="block text-l font-medium text-gray-700">Name</label>
            <input

              type="text"
              id="name"
              name="Name"
              value={name}
              placeholder='Enter Name of child'
              onChange={(e) => Name(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  border p-2 rounded"
            />
          </div>
         
          <div>
            <label htmlFor="surname" className="block text-l font-medium text-gray-700  ">Surname</label>
            <input
              type="text"
              id="surname"
              rows={2}
              name="surname"
               placeholder='Enter Surname of pupil'
              value={surname}
              onChange={(e) => Surname(e.target.value)}
              required
              
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
            />
          </div>



          <div>
            <label htmlFor="birthcert" className="block text-l font-medium text-gray-700  ">Birth Certificate Number</label>
            <input
              type="text"
              id="birthcert"
              name="birthcert"
              value={birthcert}
              onChange={(e) => Birthcert(e.target.value)}
              required
              
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
            />
          </div>



        


          <div>
            <label htmlFor="" className="block text-l font-medium text-gray-700  ">Permanent Home Address</label>
            <textarea
             rows={5}
              id="address"
              name="address"
              value={address}
              onChange={(e) => Address(e.target.value)}
              required
              
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
            />
          </div>
                    

      


         

    <div>
            <label htmlFor="dob" className="block text-l font-medium text-gray-700">DOB</label>
            <input
            type='date'
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) =>DOB (e.target.value)}
              className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
           />
          </div>

          <div>
          <label htmlFor="grade" className="block text-l font-medium text-gray-700">Grade</label>
            <select value={grade} onChange={(e) =>Grade (e.target.value)} name='grade' id='grade'
                className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
          
              >
                <option value="">Select a Grade</option>
                <option value="ECD A">ECD A</option>
                <option value="ECD B">ECD B</option>
                <option value="grade 1">1</option>
                <option value="grade 2">2</option>
                <option value="grade 3"> 3</option>
                <option value="grade 4"> 4</option>
                <option value="grade 5"> 5</option>
                <option value="grade 6"> 6</option>
                <option value="grade 7"> 7</option>

                
            </select>
           
        </div>

        <div>
            <label htmlFor="parent" className="block text-l font-medium text-gray-700">Parent</label>
            <input
            type='text'
              id="parent"
              name="parent"
              value={parent}
              onChange={(e) =>Parent (e.target.value)}
              className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
           />
          </div>


          <div>
            <label htmlFor="id_number" className="block text-l font-medium text-gray-700">ID Number of Parent</label>
            <input
            type='text'
              id="id_number"
              name="id_number"
              value={id_number}
              onChange={(e) =>Id_number (e.target.value)}
              className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
           />
          </div>


          <div>
            <label htmlFor="cell_number" className="block text-l font-medium text-gray-700">Cell Phone Number of Parent</label>
            <input
            type='text'
              id="cell_number"
              name="cell_number"
              value={cell_number}
              onChange={(e) =>Cell_number (e.target.value)}
              className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
           />
          </div>


        
         
         
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Pupil
          </button>
        </form>
      </div>
    </div>
  )
}

export default Pupils


