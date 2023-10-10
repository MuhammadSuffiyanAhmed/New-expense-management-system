// signup and login



var arr = [];
var users =  localStorage.getItem('Users');
if(users !== null){
    arr = JSON.parse(users)
  };
function sign_up(){
    var  Name = document.getElementById('name').value;
    var  Email = document.getElementById('semail').value;
    var  Password = document.getElementById('spass').value;
    if(Name != '' && Email != '' && Password != ''){
            var obj = {
                Name : Name,
                Email : Email,
                Password : Password
            }
            arr.push(obj)
            localStorage.setItem('Users',JSON.stringify(arr));
            localStorage.setItem('Users_data',JSON.stringify(obj))
            var getUsres = JSON.parse(localStorage.getItem('Users_data'));
            localStorage.setItem('currentusres',JSON.stringify(getUsres));            // localStorage.getItem(getUsers);
            Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Signup has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      }).then(() =>{
                        if(true){
                            location.href ='./login.html'
                        }
                      })
        }else{
            Swal.fire({
                icon: 'error',
                title: '<h3 style="color: #00AD96 ">Oops...</h3>',
                text: 'Sorry, fill the registered foam',
                confirmButtonColor: "#00AD96",
                // iconColor: '#00AD96',
                  
            })
                
        }
        
}
var getUsrs = JSON.parse(localStorage.getItem('currentusres'));
if(getUsrs != null){
    
    document.getElementById('Users_name').innerHTML = getUsrs.Name
    // console.log( getUsrs.Name)
}

function log_in(){
    var email = document.getElementById('lemail').value;
    var password = document.getElementById('lpass').value;
    var filterData = arr.filter(function(data){
        return data.Email === email && data.Password === password
    })
    if(filterData.length){
        Swal.fire({
            icon: 'success',
            title: '<h3 style="color: #00AD96 ">Great! You are now logged in. Click OK to proceed.</h3>',
            confirmButtonColor: "#00AD96",
            // iconColor: '#00AD96',
          }).then(() => {
            if (true) {
              location.href = './index.html';
            }
          });
    }else{
        Swal.fire({
            icon: 'error',
            title: '<h3 style="color: #00AD96 ">Oops...</h3>',
            text: 'Sorry, please Registered',
            confirmButtonColor: "#00AD96",
            iconColor: '#00AD96',
        })
    }
    
}



// expense management system //

let tbody = document.getElementById('expense_managment');
        let userId = 0;
function add(){
    userId++;
  let sno = document.getElementById('emnumber').value;
  let ammount = document.getElementById('emnumber');
  let date = document.getElementById('emdate');
  let text = document.getElementById('emtext');
  let title = text.value;
  let amount2 = ammount.value;
  let dateed = date.value;
  if(title != null || amount2 != null || dateed != null){
      
      let newRow = document.createElement('tr');
      let S_No = document.createElement('tr');
      let S_NOText = document.createTextNode(sno);
        let abc = document.getElementsByTagName('tr').firstChild = userId;
        S_No.innerHTML = abc;
        S_No.setAttribute("class","farwa")
      let description = document.createElement('td');
      description.textContent = title
      let amount = document.createElement('td');
      amount.textContent = amount2
      let dated = document.createElement('td');
      dated.textContent = dateed
      let edit = document.createElement('td');
      edit.setAttribute("class","Edit")
      edit.innerHTML = '<i onclick="editData(this)" class="fa-solid fa-pen-to-square edit"></i>'
      let deleted = document.createElement('td');
      deleted.setAttribute("class","Deleted")
      deleted.innerHTML = '<i onclick="deleted(this)"  class="fa-solid fa-trash deletede"></i>'
      let updated = document.createElement('td');
      let deletebtn = document.createElement('button');
      let deletebtntext =document.createTextNode('<i class="fa-solid fa-trash"></i>');
    //   let btn = document.getElementById('updatedd');
    //   let edit2 = document.createElement('button')
    //   edit2.innerHTML = '<i onclick="editData(this)" class="fa-solid fa-pen-to-square edit"></i>'
       
      deletebtn.appendChild(deletebtntext);
      updated.appendChild(deletebtn)
      newRow.appendChild(S_No)
      newRow.appendChild(description)
      newRow.appendChild(amount)
      newRow.appendChild(dated)
      newRow.appendChild(edit)
      newRow.appendChild(deleted)
    //   newRow.appendChild(edit2)
    
    
      tbody.appendChild(newRow);
    }else{
        Swal.fire({
            icon: 'error',
            title: '<h3 style="color: #00AD96 ">Oops...</h3>',
            text: 'Sorry, fill the registered foam',
            confirmButtonColor: "#00AD96",
            // iconColor: '#00AD96',
              
        })
    
      }
  


}

    let fetchData;
    var popUp = document.getElementById('popup');
    function expensePopup() {
        popUp.style.zIndex = "1"; popUp.style.opacity = "1";

    }
    function closePopup() {
        popUp.style.zIndex = "-1"; popUp.style.opacity = "0";
    }
    function editData(e) {
        document.getElementById('save').style.display = 'none';
        document.getElementById('update').style.display = 'block';
        expensePopup()
        fetchData = e;
    }

        function updateData() {
            closePopup()
            document.getElementById('update').style.display = 'none';
            document.getElementById('save').style.display = 'block';
            fetchData.parentElement.parentElement.children[1].textContent = document.getElementById('description').value;
            fetchData.parentElement.parentElement.children[2].textContent = document.getElementById('amount').value;
            fetchData.parentElement.parentElement.children[3].textContent = document.getElementById('date').value;
            console.log(fetchData)
            document.getElementById('description').value = " ";
            document.getElementById('amount').value = " ";
            document.getElementById('date').value = " ";

        }
        function deleted(e) {
            e.parentElement.parentElement.remove()
        }
        function deleteall(){
            
        }







        let modulasbtn = document.getElementById('modulasbtn');
        
        function clicked(){
            let modulas = document.getElementById('modulas');
            modulas.style.visibility = "visible"
            
        }
        function closemodulas(){
            let modulas = document.getElementById('modulas');
            modulas.style.visibility = "hidden"
        }
        document.getElementById('myFileInput').addEventListener("change",function(){
            const reader = new FileReader();
            location.reload();

            reader.addEventListener("load", () => {
                localStorage.setItem("recent_image", reader.result)
            })

            reader.readAsDataURL(this.files[0])
        })
        document.addEventListener("DOMContentLoaded", () => {
            const recentImageDataURL = localStorage.getItem("recent_image");
            if(recentImageDataURL){
                // document.getElementById("imgPreview").setAttribute("src",recentImageDataURL)
                document.getElementById("imgPreview").style.backgroundImage = `url(${recentImageDataURL})`
                // location.reload();
            }
        })
        function save(){
            location.href = './check.html'
        }





