
document.cookie.replace(/(?:(?:^|.*;\s*)darkmode\s*\=\s*([^;]*).*$)|^.*$/, "$1") == "true" ? nigthMode(true) : nigthMode(false)
window.onload =  bruxoTaSolto();

function bruxoTaSolto(){
    let status = document.getElementById('situation').textContent;
    let audio = document.getElementById("comemoracao");
    if(status == "Sim"){
        confetti.start();
        audio.play();
    }
}

function nigthMode(CookieMode) {
    let check = document.querySelector('input');
    document.querySelector('input').addEventListener('click', () => {
        // A propriedade `checked` retorna um `boolean`.
        console.log(check.checked);
    });
    
    if(CookieMode == true){
        check.checked = true;
        document.getElementsByTagName("body")[0].style.backgroundColor = "#192734";
        document.getElementsByTagName("body")[0].style.color = "#F8F8FF";
    }
    else if (check.checked == false && CookieMode != true){
        document.cookie = "darkmode=false;";
        document.getElementsByTagName("body")[0].style.backgroundColor = "#FFFFFF";
        document.getElementsByTagName("body")[0].style.color = "#111111";
    } else{
        document.cookie = "darkmode=true;";
        document.getElementsByTagName("body")[0].style.backgroundColor = "#192734";
        document.getElementsByTagName("body")[0].style.color = "#F8F8FF";

    }
    
}