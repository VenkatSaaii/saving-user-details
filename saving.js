function handleFromSubmit(event){
    event.preventDefault()
    const UserDetails={
         username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value
    }

    axios
    .post("https://crudcrud.com/api/a4d55ea3a5064795ab40435738292a1f/appointmentdata",
    UserDetails
    )
    .then((res)=>{showDisplayOnScreen(res.data)
   
   
    
    // to empty the fields 

    document.getElementById('username').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';
    })
    .catch((error)=>console.log(error))
}

    // now print on display
    function showDisplayOnScreen(UserDetails){
        const newli = document.createElement('li')
        newli.appendChild(
            document.createTextNode(`${UserDetails.username} - ${UserDetails.email} - ${UserDetails.phone}`)
        )
        
        //create delete button
            const deleteButton=document.createElement('button')
            deleteButton.textContent='Delete';

            deleteButton.addEventListener('click',function(){
               
                localStorage.removeItem(UserDetails.email)
                newli.remove()
            })

            // create edit button

            const editButton=document.createElement('button')
            editButton.textContent='edit';
            editButton.addEventListener('click',function(){
                localStorage.removeItem(UserDetails.email)

                // now u have to populate the existing values to the input field

               document.getElementById('username').value= UserDetails.username
               document.getElementById('email').value= UserDetails.email
               document.getElementById('phoneno').value=UserDetails.phone

                newli.remove();
            })

            newli.appendChild(deleteButton)
            newli.appendChild(editButton)

            const list= document.querySelector('ul')
            list.appendChild(newli);


            
    }
    module.exports = handleFormSubmit;

