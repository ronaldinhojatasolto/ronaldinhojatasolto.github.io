function nigthMode() {
    let check = document.querySelector('input');
    document.querySelector('input').addEventListener('click', () => {
        // A propriedade `checked` retorna um `boolean`.
        console.log(check.checked);
    });
    
    if(check.checked == false){
        document.getElementsByTagName("body")[0].style.backgroundColor = "#FFFFFF";
        document.getElementsByTagName("body")[0].style.color = "#111111";
    }
    else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#192734";
        document.getElementsByTagName("body")[0].style.color = "#F8F8FF";
    }
    
}