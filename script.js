const addButon = document.getElementById("buton");
const addtodo = document.getElementById("name");
const listtodo= document.getElementById("tasklistbox");
const clearButon = document.querySelector("#clearall");
 
addButon.addEventListener("click", todoelaveet);
clearButon.addEventListener("click", todolarisil);
 const array = [];
const sortList = (list) =>
  [...list].sort((a, b) => {
    const A = a.textContent,
      B = b.textContent;
    return A < B ? -1 : A > B ? 1 : 0;
  }); 
function todoelaveet() {
    if (addtodo.value == "")      
        alert("TO DO DAXIL EDIN");
    else {
        var li = document.createElement("li");
        li.innerText =addtodo.value

        var i = document.createElement("i");
        li.appendChild(i);
        listtodo.appendChild(li);

        addtodo.value = "";

        for (var i = 0; i < clearButon.length; i++) {
            clearButon[i].addEventListener("click", todosil);
        }
    }
}
 
function todosil() {
    var secim = confirm("are you sure?");
    if (secim == true) {
        var silinecek = this.parentElement;
        silinecek.remove();
    }
}
function todolarisil() {
    var secim = confirm("Hamisi silinsin?");
    if (secim == true) {
        var silinecekler = document.querySelectorAll("li");
 
        for (var j = 0; j < silinecekler.length; j++) {
            silinecekler[j].remove();
        }
    }
}
