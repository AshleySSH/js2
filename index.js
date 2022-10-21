let div = document.createElement ('div') ;
let textNode = document.createTextNode ('Заходит улитка в бар')
document.body.append(div); 
div.append(textNode);
div.classList.add('hui');
let a = false;
function showJoke() { 
    if (a==false) {
        let li = document.createElement ('li');
        let ul = document.createElement ('ul');
        div.append(ul);
        let joke = document.createTextNode ('Колобок повесился');
        li.append (joke);
        ul.append(li);
        let li2 = document.createElement ('li');
        let joke2 = document.createTextNode ('Рыба утонула');
        li2.append (joke2);
        ul.append(li2);
        let li3 = document.createElement ('li');
        let joke3 = document.createTextNode ('Русалка села на шпагат');
        li3.append (joke3);
        ul.append(li3);
        let li4 = document.createElement ('li');
        let joke4 = document.createTextNode ('Заходит улитка в бар');
        li4.append (joke4);
        ul.append(li4);
       
            ul.classList.add ('Vlad'); 
            let Vlad = document.querySelector('.Vlad');
             a = true; 

    }
}
    function  multi()  {
        let inp_1 = document.getElementById('inp_1').value,
        inp_2 = document.getElementById('inp_2').value; 
        //console.log (inp_1*inp_2);c
        document.getElementById ('result1').value = (inp_1*inp_2);
       

}

function as() {
    let as = document.getElementById('as').value;
    console.log(as)
    document.getElementById ('result1').value = as;

}
