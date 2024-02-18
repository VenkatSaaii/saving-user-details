const putBtn=document.getElementById("put-btn")
const getBtn=document.getElementById("get-btn")
const postBtn=document.getElementById("post-btn")
const deleteBtn=document.getElementById("delete-btn")

postBtn.addEventListener("click",postTodo)
getBtn.addEventListener('click',getTodo)
putBtntBtn.addEventListener('click',putTodo)
deleteBtn.addEventListener('click',deleteTodo)

