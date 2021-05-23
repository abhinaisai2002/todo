var a = document.querySelector("input[type='text']");
var btn = document.querySelector(".add-item");


function clicked(e){
        if(e.target.name == "create-outline"){
                var edit = e.target.parentElement.parentElement.parentElement.children[0];
                var todo = prompt("Please enter your name:", edit.innerText);
                if(todo != null && todo != " "){
                        edit.innerText = todo
                }
        }
        else if (e.target.name == "trash-outline"){
                var del = e.target.parentElement.parentElement.parentElement
                del.remove()
        }
}
btn.addEventListener('click',function(e){
    
        e.preventDefault();
        
        var link = document.querySelector(".list");
        var li = document.createElement('li');
        li.className = "inner1"
        li.innerHTML = "<h1>"+ a.value +"</h1>"

        spn = document.createElement('SPAN')

        var btn1 = document.createElement('button')
        btn1.innerHTML = '<ion-icon name="create-outline"></ion-icon>'
        var btn2 = document.createElement('button')
        btn2.innerHTML = '<ion-icon name="trash-outline"></ion-icon>'
        btn1.className = "btn"
        btn2.className = "btn"
        btn1.addEventListener('click',clicked)
        btn2.addEventListener('click',clicked)
        spn.append(btn1)
        spn.append(btn2)
        li.append(spn)
        link.append(li)
});
var deletebtn = document.querySelectorAll(".btn")

for(var i=0;i<deletebtn.length;i++){
        
        deletebtn[i].addEventListener('click',clicked);
}