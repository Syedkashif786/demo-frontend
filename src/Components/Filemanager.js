import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import "./manager.css";

const FileManager = () => {

  const url = 'https://demob1-0.herokuapp.com';
  const apiUrl = 'http://localhost:5000'
  const [fileList, setFileList] = useState([]);


  const getFileDataFromBackend = async () => {
    const res = await fetch(url + '/file/getall');
    const data = await res.json();
    console.log(data);
    setFileList(data);
  }

  useEffect(() => {
    getFileDataFromBackend();
  }, [])

  const deleteFile = async (id) => {
    console.log(id);
    const response = await fetch(url + '/file/delete/' + id, { method: 'DELETE' })
    if (response.status === 200) {
      console.log('user deleted');
      // toast.success('User Deleted 😎');
      getFileDataFromBackend();
    }
  }


  const uploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);

    const fd = new FormData();
    fd.append("myfile", file);
    console.log('uploading File ...');


    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then(async (res) => {
      console.log(res.status);
      console.log(url + '/' + file.name);

      if (file.type.startsWith('video')) {
        fetch(apiUrl + '/util/gen-vid-preview', {
          method: 'POST',
          body: JSON.stringify({
            url: url + '/' + file.name
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(data => {
            console.log(data);
            fetch(url + '/file/add', {
              method: 'POST',
              body: JSON.stringify({
                file: file.name,
                thumbnail: apiUrl + '/util/ret-vid-preview/' + data.previewid,
                createdAt: new Date()
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(res => {
              if (res.status === 200) {
                setTimeout(() => {
                  getFileDataFromBackend();
                }, 5000);
                toast.success("Image Uploaded!!", {
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                });
              }
            })
          })

      } else {
        fetch(apiUrl + '/util/gen-doc-preview', {
          method: 'POST',
          body: JSON.stringify({
            url: url + '/' + file.name
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(data => {
            console.log(data);
            fetch(url + '/file/add', {
              method: 'POST',
              body: JSON.stringify({
                file: file.name,
                thumbnail: apiUrl + '/util/ret-doc-preview/' + data.previewid,
                createdAt: new Date()
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(res => {
              if (res.status === 200) {
                getFileDataFromBackend();
                toast.success("Image Uploaded!!", {
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                });
              }
            })

          })
      }


    });
  };

  const displayFiles = () => {
    return fileList.map(file => (
      <div class="col">
        <div class="card h-100">
          <img src={file.thumbnail} class="card-img-top" alt="No Preview" />
          <div class="card-body">
            <h5 class="card-title">{file.file}</h5>
            <p class="card-text">
              {new Date(file.createdAt).toLocaleDateString()}
            </p>
            {/* <button type="button" class="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">Add</button> */}
            <button type="button" class="btn btn-outline-danger btn-rounded" data-mdb-ripple-color="dark" onClick={() => { deleteFile(file._id) }}>Delete</button>
          </div>
        </div>
      </div>
    ))
  }


  return (

    <div className='container'>
        <div className="card-body">
      <div className="card">
          <input className='form-control text-black' onChange={uploadFile} type="file" />
          <br />
          <div class="container text-center">
            <div class="row row-cols-1 row-cols-md-4 g-4">
              {displayFiles()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FileManager;