import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExtended, setExtended] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });

  }

  function submitNote(event) {
    if (note.title !== "" && note.content !== "")
      {props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
      setExtended(false)
      document.querySelector("p").innerHTML = ""
      event.preventDefault();}
    else document.querySelector("p").innerHTML = "Please fill in all the fields!";event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={{display:(isExtended?"inline":"none")}}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onClick={()=>setExtended(true)}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={(isExtended?3:1)}
        />
          <Zoom in={isExtended}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
          </Zoom>
        <p></p>
      </form>
    </div>
  );
}

export default CreateArea;
