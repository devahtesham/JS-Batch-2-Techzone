const form = document.getElementById("noteForm");
const notesContainer = document.getElementById("notesContainer")
const deleteAllBtnHandler = document.getElementById("deleteAllBtn")
let allNotes = []
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let value = e.target.noteText.value;
    // e.target.noteText.value = ""
    allNotes.push(value)

    // appending in UI
    deleteAllNotes(notesContainer)
    renderingNotes(allNotes)
    form.reset()
})

deleteAllBtnHandler.addEventListener("click",()=>{
    deleteAllNotes(notesContainer)
})

const deleteAllNotes = notesDiv =>{
    notesDiv.innerText = ""
}

const deleteNote = (index)=>{
    allNotes.splice(index, 1)
    deleteAllNotes(notesContainer)
    renderingNotes(allNotes)
}
const editNote = (index)=>{
    let oldValue = allNotes[index]
    let updatedValue = prompt("Enter updated value",oldValue)
    allNotes.splice(index,1,updatedValue)
    deleteAllNotes(notesContainer)
    renderingNotes(allNotes)
}

const renderingNotes = (arrayOfNotes) =>{
    arrayOfNotes.map((note,index)=>{
        notesContainer.innerHTML += `
        <div class="col-8">
            <div class="alert alert-danger d-flex justify-content-between align-items-center">
                <p class="mb-0">
                    ${note}
                </p>
                <div>
                    <button class="btn btn-dark me-3" onclick="editNote(${index})">EDIT</button>
                    <button class="btn btn-warning" onclick="deleteNote(${index})">DELETE</button>
                </div>
            </div>
        </div>
        `
    })
}