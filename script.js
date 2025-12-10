function addTask(){
  let val = document.getElementById('taskInput').value;
  if(!val) return;
  let li = document.createElement('li');
  li.innerText = val;
  document.getElementById('taskList').appendChild(li);
  document.getElementById('taskInput').value = '';
}
