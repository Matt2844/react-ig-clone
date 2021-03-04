import React, { useContext, useState } from "react"
import "./style.css"
import { SignInBtn } from "../../components"
import { UserContext } from "../../contexts/user"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';


export default function CreatePost () {
  const [user, setUser] = useContext(UserContext).user
  const [caption, setCaption] = useState("")

  const handleChange = () => {

  }

  const handleUpload = () => {

  }

  return (
    <div className="create-post">
      {user ? (
        <div className="create-post-logged-in">
          <p>Create Post</p>
          <div>
            <textarea
              className="create-post-textarea"
              rows="3"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            >

            </textarea>
          </div>
          <div className="create-post-logged-in-bottom">
            <div className="create-post-image-upload">
              <label htmlFor="fileInput">
                <AddAPhotoIcon style={{ cursor: "pointer", fontSize: "20px" }} />
              </label>
              <input type="file" accept="image/*" onChange={handleChange} />
            </div>
            <button
              className="create-post-upload-button"
              onClick={handleUpload}
              style={{ color: caption ? '#000' : 'lightgrey' }}
            >
              Upload
            </button>
          </div>
        </div>
      ) : (
          <div>
            <SignInBtn />
            <p>to Post & Comment</p>
          </div>
        )}
    </div>
  )
}