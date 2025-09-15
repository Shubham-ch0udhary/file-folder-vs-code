import { FolderItem } from "./FolderItem";
const FolderTree = ({data, addData, deleteData}) => {
    return (
        <ul>
            {data.map((item) => <li key={item.id}><FolderItem fileItem={item} addData={addData} deleteData={deleteData}/></li>)}
        </ul>

    )
}
export default FolderTree;