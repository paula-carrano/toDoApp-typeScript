import { AuthContext } from '../../../../contexts/AuthProvider';
import React, { useContext, useState, FC, Dispatch, SetStateAction } from 'react';
import { storage } from "../../../../utils/firebase-config"
import { Camera } from 'react-bootstrap-icons'


const Avatar: FC = () => {
    const { user } = useContext(AuthContext)

    const [fileName, setFileName] = useState<string>()
    const [fileObject, setFileObject] = useState<File>()


    const handleChangeFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null) return // ver si se puede tipar de otra manera

        let name = e.target.files[0].name;
        let imgObject: File = e.target.files[0];

        setFileName(name);
        setFileObject(imgObject)
    }

    const doUpload = () => {
        const ref = storage.ref(`images/imagesProfile/${fileName}`)
        ref.put(fileObject as Blob)
        console.log("exito")
    }
    // `https://firebasestorage.googleapis.com/vO/b/todo-app-7e18b.appspot.com/o/images%2FimagesProfile%2F${fileName}` })

    // https://firebasestorage.googleapis.com/v0/b/todo-app-7e18b.appspot.com/o/images%2FimagesProfile%2FIMG_20180321_225026.jpg?alt=media&token=ca415864-e791-487b-a89a-3d013f50efa1


    return (
        <div className="profile d-flex justify-content-center">
            <div className="row flex-column">
                <div className="col userName">
                    <h1>{user?.displayName} </h1>
                </div>
                <div className="col userPhoto">
                    <img
                        src={user?.photoURL === null ? undefined : user?.photoURL}
                        alt="user-avatar"
                        className="rounded-circle"
                    />
                </div>
                <div className="col userChangePhoto mt-3">
                    <p>Agregar nuevas fotos</p>
                    <div className="input-group">
                        <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={handleChangeFileInput} />
                        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={doUpload}>Subir imagen</button>
                        {/* <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={doDownload}>Bajar imagen</button> */}
                    </div>
                </div>
            </div>


        </div>

    );
}

export { Avatar };
