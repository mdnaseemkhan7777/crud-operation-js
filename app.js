      
let arr = [];
var update_data_index ;
let entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);



function displayDetails(){
    let names = document.getElementById("name").value;
    let user = document.getElementById("user").value;
    let des = document.getElementById("des").value;
    let type = document.getElementById("type").value;

    // if(!names || !user || !des || !type){
    //     alert("please fill the form");
    //     return;
    // }

    let obj = {
      name : names,
      user : user,
      des : des ,
      type : type
    }
    arr.push(obj);
    let list = '';
    for(var i =0; i < arr.length; i++){
      
      let html = '<div class="card mb-3 col-md-4 m-4" style="width: 18rem;">';
      html += '<h5 class="card-title p-2">' +arr[i].name+'</h5>';
      html += '<img src="./tree-g7c231e3ee_1920.jpg" class="card-img-top" alt="...">';
      // html += '<div class="card-body">';
      // html += ' </div>';
      html += '<ul class="list-group list-group-flush" id="ul">';
      html += '<li class="list-group-item">' + "User:  "   +arr[i].user+'</li>';
      html += '<li class="list-group-item">'+  "Describtion:  " +arr[i].des+'</li>';
      html += '<li class="list-group-item">'+ "Type:  " +arr[i].type+'</li>';
      html += ' </ul>';
      html += ' <div class="card-body">';
      html += `<button class="btn-dark m-1" onclick="edit(${i})">Edit</button>`;  
      html += `<button class="btn-dark m-1" onclick='single_delete(${i},this)'>Delete</button>`;  
      html += ' </div>';
      html += '</div>';
      list += html;
  
    }     
    document.getElementById("list").innerHTML= list;
    
    document.getElementById('name').value = '';
    document.getElementById('user').value = '';
    document.getElementById('des').value = '';
    document.getElementById('type').value = '';

   


  }
  
  function edit(index){
    update_data_index = index;
    document.getElementById("update-btn").style.display="inline";
    // console.log(index,e)
    // console.log(arr[index])
    document.getElementById('name').value = arr[index].name;
    document.getElementById('user').value = arr[index].user;
    document.getElementById('des').value = arr[index].des;
    document.getElementById('type').value = arr[index].type;
  }

  function all_delete(){
     arr =[];
   document.getElementById("list").innerHTML='';
  }
 
  function single_delete(index,e){
     arr.splice(index, 1);
     e.parentNode.parentNode.remove();
  }

  function Update (){
    document.getElementById("update-btn").style.display="none";
    arr[update_data_index].name =  document.getElementById("name").value;
    arr[update_data_index].user =  document.getElementById("user").value;
    arr[update_data_index].des = document.getElementById("des").value;
    arr[update_data_index].type = document.getElementById("type").value;
    document.getElementById("list")
    document.getElementById('name').value = '';
    document.getElementById('user').value = '';
    document.getElementById('des').value = '';
    document.getElementById('type').value = '';
  }