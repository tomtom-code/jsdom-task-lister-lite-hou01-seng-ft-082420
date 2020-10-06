document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //console.log('We be loaded')
  let form = document.querySelector('#create-task-form')
  //console.log('this is my form,', form)
  form.addEventListener('submit', function(e){
    //console.log(e)
    e.preventDefault();
    const newTask = document.querySelector('#new-task-description').value
    //console.log(newTask)


    let li = document.createElement('li')
    li.innerText = newTask
    let tasks = document.querySelector('#tasks')
    tasks.append(li)

    

  })
   
});
