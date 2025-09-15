import { useState } from "react";

export const FolderItem = ({fileItem, addData, deleteData}) => {
    const [open, setOpen] = useState(false);

    const addFileFolder = () => {
        const name = prompt('Enter file name');
        const type = prompt('Enter file type');
        const newItem = {
            name: name,
            id: `${fileItem.id}/${name}`,
            type: type,
            ...(type === "folder" && {children: []})
        }
        addData(newItem, fileItem.id);
    }
    return (
        <div>
            <div style={{margin: "8px"}} onClick={() => setOpen((prev) => !prev)}>{fileItem.name} {fileItem?.type === "folder" && (open  ? '<' : '>')}
                {fileItem.type === "folder" && <button style={{margin: "0 8px"}} onClick={() => addFileFolder(fileItem.id)}>Add + </button>
                 }
                <button onClick={() => deleteData(fileItem.id)}>Delete - </button>
            </div>
            {open && fileItem.type=== "folder" && fileItem.children.map((child) => <ul key={child.id}><FolderItem fileItem={child} addData={addData} deleteData={deleteData}/></ul>)}
        </div>
    )
}