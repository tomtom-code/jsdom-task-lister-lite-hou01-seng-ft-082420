document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //console.log('We be loaded')
  let form = document.querySelector('#create-task-form')
  //console.log('this is my form,', form)
  form.addEventListener('submit', function(e){
    
    e.preventDefault();
    const newTask = document.querySelector('#new-task-description').value
    //console.log(newTask)

  

    //create post the new task
    let li = document.createElement('li')
    li.innerText = newTask
    
    //create button
    let button = document.createElement('button')
    button.innerText = 'x'
    li.append(button)
    
    //put that (newtask + x button) to the ul-tasks 
    let tasks = document.querySelector('#tasks')
    tasks.append(li)


    // give the button the function to remove the li-new task
    button.addEventListener('click', function(){
      li.remove()

    });
    form.reset()

    



    

    

  })
   
});
