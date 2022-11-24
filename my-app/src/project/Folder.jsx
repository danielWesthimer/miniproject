import React from 'react'

const Folder = ({data}) => {
    const [folder, setFolder] = useState([])
    const arrFolder = [
        { type: "info", obj: { method: 'GET' } },
        { type: "show", obj: { method: 'GET' } },
        { type: "rename", obj: { method: 'PUT' } },
        { type: "copy", obj: { method: 'PUT' } },
        { type: "delete", obj: { method: 'PUT' } }
    ]

    async function getData(url, obj) {
        const res = await fetch(url, obj)
        const dataJson = await res.json()
        setFolder(dataJson)
    }
    return (
        <div>
            <table>
                {arrFolder.map((e, i) =>
                    <td>
                        
                    </td>)
                }
            </table>
        </div>
    )
}

export default Folder