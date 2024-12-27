
import  { useMemo, useEffect, useState } from "react";

import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table";


import api from "../api";
import { Url } from "../constants";

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example

// Styling
const HEADER_COLOR = "black"; // Define the color constant

const Path="/api/add/"
const HEADER_SIZE = "20px"; 

const FONT_TYPE = "'Roboto', 'Helvetica', 'Arial', sans-serif"; // Define the font type constant

const STYLE ={ sx: { color: HEADER_COLOR ,fontSize:HEADER_SIZE,fontFamily: FONT_TYPE ,FontStyle:"italic"}}

//Main

export default function Pupils_list() {

    const [data, setData] = useState([]);
    const [, setLoading] = useState(true);
    const [ ,setError] = useState(null);
    
    useEffect(() => {
    
            
        const fetchData = async () => {
            try {   
                const response = await api.get(`${Url}${Path}`); 
                
                // Replace with your API URL
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);













  const columns = useMemo(
    () => [
        {
            accessorFn: (data) => data.name, //simple recommended way to define a column
            header: "Name ",
            muiTableHeadCellProps: STYLE, //custom props
            // eslint-disable-next-line react/prop-types
            Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
          },


          {
            accessorFn: (data) => data.surname, //simple recommended way to define a column
            header: "Surname",
            muiTableHeadCellProps: STYLE, //custom props
            // eslint-disable-next-line react/prop-types
            Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
          },


      {
        accessorFn: (data) => data.dob, //simple recommended way to define a column
        header: "Date of Birth",
        muiTableHeadCellProps: STYLE, //custom props
        // eslint-disable-next-line react/prop-types
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
      {
        accessorFn: (data) => data.birthcert, //simple recommended way to define a column
        header: "Birth Cert No",
        muiTableHeadCellProps: STYLE, //custom props
        // eslint-disable-next-line react/prop-types
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },


      {
        accessorFn: (data) => data.grade, //simple recommended way to define a column
        header: "Grade",
        muiTableHeadCellProps: STYLE, //custom props
        // eslint-disable-next-line react/prop-types
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
      
      {
        accessorFn: (data) => data.address, //simple recommended way to define a column
        header: "Home Address",
        muiTableHeadCellProps: STYLE, //custom props
        // eslint-disable-next-line react/prop-types
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
       
      {
        accessorFn: (data) => data.parent, //simple recommended way to define a column
        header: "Parent",
        muiTableHeadCellProps: STYLE, //custom props
        // eslint-disable-next-line react/prop-types
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
       
      {
        accessorFn: (data) => data.id_number, //simple recommended way to define a column
        header: "ID Number",
        muiTableHeadCellProps: STYLE, //custom props
        // eslint-disable-next-line react/prop-types
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
     
      {
        accessorFn: (data) => data.cell_number, //simple recommended way to define a column
        header: "Cell number",
        muiTableHeadCellProps: STYLE, //custom props
        // eslint-disable-next-line react/prop-types
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
    


    ],
    []
  );

  const table = useMaterialReactTable({
    data,
    columns
  });

  return   <MaterialReactTable table={table} />;
}
