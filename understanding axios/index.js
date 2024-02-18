const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios 
  .get("https://crudcrud.com/api/a4d55ea3a5064795ab40435738292a1f/todo")
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err))
}

function postTodo() {
  // Write your code here
  axios 
  .post("https://crudcrud.com/api/a4d55ea3a5064795ab40435738292a1f/todo",{
    title: "Learn Axios",
    completed: false
  })
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err))
}

function putTodo() {
  // Write your code here
  axios 
  .put("https://crudcrud.com/api/a4d55ea3a5064795ab40435738292a1f/todo/65d0ea4b6227a803e824d320",{
    title: "Learn Axios",
    completed: true
  })
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err))

  
}

function deleteTodo() {
  // Write your code here
  axios 
  .delete("https://crudcrud.com/api/a4d55ea3a5064795ab40435738292a1f/todo/65d0ea4b6227a803e824d320",{
    
  })
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err))

}
