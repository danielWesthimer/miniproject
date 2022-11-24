import React from 'react';
import { useState, useEffect } from 'react';
// import { Link, Outlet } from "react-router-dom";

function AppReact() {
  const [data, useData] = useState([])
  const [folder, setFolder] = useState([])
  const [files, setFiles] = useState([])
  const [size, setSize] = useState([])

  useEffect(() => { GetAll() }, [])

  async function GetAll() {
    const res = await fetch("http://localhost:8000")
    const dataJson = await res.json()
    useData(dataJson)
  }
  async function getData(url, obj) {
    const res = await fetch(url, obj)
    const dataJson = await res.json()
    setFolder(dataJson)
  }

  const arrFolder = [
    { type: "info", obj: { method: 'GET' } },
    { type: "show", obj: { method: 'GET' } },
    { type: "rename", obj: { method: 'PUT' } },
    { type: "copy", obj: { method: 'PUT' } },
    { type: "delete", obj: { method: 'PUT' } }
  ]
  const arrFile = [
    { type: "enter", obj: { method: 'GET' } },
    { type: "show", obj: { method: 'GET' } },
    { type: "rename", obj: { method: 'PUT' } },
    { type: "up", obj: { method: 'PUT' } },
    { type: "delete", obj: { method: 'PUT' } }
  ]

  console.log(folder);
  return (<div>
    <table>
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      {
        data.map((file, idx) =>
          <tr>
            <td>{file.fileName}</td>
            <td>{file.isDirectory ? "folder" : file.fileName.split('.')[1]}</td>
            {
              file.isDirectory ?
                arrFolder.map((e, i) =>
                  <td>
                    <button onClick={() =>{ e.type==="info"?setSize(file.size): setFiles([]), getData(`http://localhost:8000/${file.fileName}`, e.obj) }}>{e.type}</button>
                  </td>
                )
                : arrFile.map((e, i) =>
                  <td>
                    <button onClick={() => { setFolder([]), setFiles(`http://localhost:8000/${file.fileName}`, e.obj) }}>{e.type}</button>
                  </td>
                )
            }
          </tr>
        )
      }
      <br />

    </table>
    {size&&<div>{size}</div>}
    {files.length != 0 && <div ><iframe src={files} title="description">{files}</iframe></div>}
    <div>{folder.map((folder) => folder.fileName)}</div>
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