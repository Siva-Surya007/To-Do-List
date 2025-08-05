const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addtask(){
    const task = inputBox.value.trim()
    if(!task){
        alert('Write Down A Task !!!')
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
    <label>
        <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;


    listContainer.appendChild(li)
    inputBox.value="";

    const editBtn = li.querySelector('.edit-btn')
    const taskSpan = li.querySelector('span')
    const deleteBtn = li.querySelector('.delete-btn')


    editBtn.addEventListener('click',()=>{
        const update = prompt("Edit Task:", taskSpan.textContent);
        if(update !== null){
            taskSpan.textContent = update;  
        }
    });

    deleteBtn.addEventListener('click',()=>{
            li.remove()

    })
}
    
