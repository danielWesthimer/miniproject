


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
  async function GetAll2(url) {
    const res = await fetch(url)
    const dataJson = await res.json()
    useData(dataJson)
  }
  async function getData(url, obj) {
    const res = await fetch(url, obj)
    const dataJson = await res.json()
    setFolder(dataJson)
  }

  const arrFolder = [
    { type: "enter", obj: { method: 'GET' } },
    { type: "show", obj: { method: 'GET' } },
    {
      type: "rename", obj: {
        method: 'PUT', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: "rename", newName: "poi" })
      }
    },

    { type: "up", obj: { method: 'PUT' } },
    {
      type: "delete", obj: {
        method: 'PUT', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: "delete", folder: "true" })
      }
    }
  ]

  const arrFile = [
    { type: "info", obj: { method: 'GET' } },
    { type: "show", obj: { method: 'GET' } },
    {
      type: "rename", obj: {
        method: 'PUT', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: "rename", newName: "yosi.txt" })
      }
    },
    { type: "copy", obj: { method: 'PUT' } },
    {
      type: "delete", obj: {
        method: 'PUT', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: "delete", folder: "false" })
      }
    }
  ]

  return (<div>
    <table>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Operations</th>
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
                    <button onClick={() => {
                      if (e.type == "enter" ){GetAll2(`http://localhost:8000/${file.fileName}`, e.obj)}
                     else{ setFiles([]); setSize([]); getData(`http://localhost:8000/${file.fileName}`, e.obj); if (e.type != "enter" && e.type != "show") { GetAll() }
                    }}
                    }>{e.type}</button>
                  </td>)


                : arrFile.map((e, i) =>
                  <td>
                    <button onClick={() => {
                      setFolder([]); setFiles([]); setSize([]);
                      if (e.type === "info") {  setSize(file) }
                      else if (e.type === "show") {
                        setFiles(`http://localhost:8000/${file.fileName}`, e.obj)
                      }
                      else { getData(`http://localhost:8000/${file.fileName}`, e.obj);setTimeout(() => {GetAll() }, 0)  }
                        
                     
                    }
                    }>{e.type}</button>
                  </td>
                )
            }
          </tr>
        )
      }
      <br />

    </table>
    {size.length != 0 && <div>{`name: ${size.fileName} size: ${size.size}Kb  time: ${size.birth}`} </div>}
    {files.length != 0 && <div ><iframe src={files} title="description">{files}</iframe></div>}
    <div>{folder.map((folder) =><p>{ folder.fileName}</p>)}</div>
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