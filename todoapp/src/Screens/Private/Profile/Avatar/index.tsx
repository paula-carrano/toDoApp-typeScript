import { AuthContext } from '../../../../contexts/AuthProvider';
import React, { useContext, useState } from 'react';
import { storage } from "../../../../utils/firebase-config"
//import { Camera } from 'react-bootstrap-icons'

const Avatar = () => {
    const { user } = useContext(AuthContext)

    const [fileName, setFileName] = useState()
    const [fileObject, setFileObject] = useState(null)


    const handleChangeFileInput = (e) => {
        let name = e.target.files[0].name;
        let imgObject = e.target.files[0];

        setFileName(name);
        setFileObject(imgObject)
    }

    const doUpload = (e) => {
        e.preventDefault()
        const ref = storage.ref(`images/imagesProfile/${fileName}`)
        ref.put(fileObject)
        console.log("exito")
    }
    // `https://firebasestorage.googleapis.com/vO/b/todo-app-7e18b.appspot.com/o/images%2FimagesProfile%2F${fileName}` })

    // https://firebasestorage.googleapis.com/v0/b/todo-app-7e18b.appspot.com/o/images%2FimagesProfile%2FIMG_20180321_225026.jpg?alt=media&token=ca415864-e791-487b-a89a-3d013f50efa1


    return (
        <div className="profile d-flex justify-content-center">
            <div className="row flex-column">
                <div className="col userName">
                    <h1>{user.displayName} </h1>
                </div>
                <div className="col userPhoto">
                    <img
                        src={user.photoURL}
                        alt="user-avatar"
                        className="rounded-circle"
                    />
                </div>
                <div className="col userChangePhoto mt-3">
                    <p>Agregar nuevas fotos</p>
                    <div className="input-group">
                        <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={(e) => handleChangeFileInput(e)} />
                        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={doUpload}>Subir imagen</button>
                        {/* <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={doDownload}>Bajar imagen</button> */}
                    </div>
                </div>
            </div>


        </div>
    );
}

export { Avatar };
