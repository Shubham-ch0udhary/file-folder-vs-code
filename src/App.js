import './App.css';
import { useState, useEffect } from 'react';
import {getDataWithId} from './fileStructureData';
import FolderTree from './components/FolderTree';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getDataWithId());
  }, []);

  const addFileFolder = (newFile, id) => {
    const addData = (fileData) => {
      return fileData?.map((item) => {
        if(item.id === id) {
          return {
            ...item,
            children: [...item.children, newFile]
          }
        } else if(item?.children?.length > 0) {
          return {
            ...item, 
            children: addData(item.children)
          }
        } else {
          return item;
        }
      })
    }
    const newData = addData(data);
    setData(newData);
  }

  const deleteFileFolder = (id) => {
    const deleteData = (fileData) => {
      return fileData?.filter((item) => item.id !== id).map((newItem) => {
        if(newItem?.children?.length) {
          return {
            ...newItem,
            children: deleteData(newItem.children)
          }
        } else {
          return newItem;
        }
      })
    }
    const newFileData=  deleteData(data)
    setData(newFileData);
  }
  return (
    <div className="App">
      <FolderTree data={data} addData={addFileFolder} deleteData={deleteFileFolder}/>
    </div>
  );
}

export default App;
