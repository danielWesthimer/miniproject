import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";

function AppReact() {

  const [data, useData] = useState([])


  return (<div>
    
  </div>)
}
export default AppReact;

/*

  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
 */


/* to={`./${file.fileName}?action=${e}`} */


// return (<div>
//     {data.map((file, idx) => <Link key={idx} to={`/${file}`}>{file}</Link>)}
//     <Outlet />
// </div>)
// ', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({a: 1, b: 'Textual content'})
//   }
// {
//   method: 'PUT',
//   body: formData
// }