var getlist = document.getElementById("list");
var editItem;

function addtodo() {
    var getinp = document.getElementById("inp");
    if (getinp.value === "") {
        alert("Please enter a task!");
        return;
    }

    if (editItem) {

        editItem.firstChild.textContent = getinp.value;
        editItem = null;
    }
    else {
        getlist.innerHTML += `
        <li>${getinp.value}
    <button onclick="update(this)">Update</button>
        <button onclick="del(this)">Delete</button>
        </li>`;
    }
    getinp.value = "";
}

function update(e) {
    var getinp = document.getElementById("inp");

    getinp.value = e.parentNode.firstChild.textContent;
    editItem = e.parentNode;
}

function del(e) {
    e.parentNode.remove();
}
function delall(){

 getlist.innerHTML=''


}




