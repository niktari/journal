let t = document.getElementsByClassName("title");
let c = document.getElementsByClassName("content");
let tl = document.querySelectorAll(".title a");
let time = document.querySelectorAll(".timestamp");
let l = document.querySelectorAll(".links");

let images = document.getElementsByTagName("img");

for (let i = 0; i < t.length; i++){

t[i].onclick = function(){

        if(c[i].style.display == "block"){

            c[i].style.display = "none";
            tl[i].style.color = "#262f2e";
            time[i].style.color = "#262f2e";
            l[i].style.color = "#262f2e";

        } else{
            c[i].style.display = "block";
            tl[i].style.color = "#003399";
            time[i].style.color = "#003399";
            l[i].style.color = "#003399";
        }

    }

}

