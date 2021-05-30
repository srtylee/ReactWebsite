import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFolder } from '@fortawesome/free-solid-svg-icons'


const Service = () => {

    const [file, setFile] = React.useState("");

    function handleUpload(event) {
        setFile(event.target.files[0]);
      }
    return (
        <>
        <div>
                <br /><h1><FontAwesomeIcon icon={faFolder} />&nbsp; File Manager</h1>
                <br/> <div id="upload-box">
                    <input type="file" onChange={handleUpload} />
                    <p>Filename: {file.name}</p>
                </div>
            </div>
            
        </>
    )
}
export default Service;