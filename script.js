let c = document.getElementsByClassName("content");
let t = document.querySelectorAll(".title a");
let time = document.querySelectorAll(".timestamp");
let grid = document.querySelectorAll(".grid-container");
let l = document.querySelectorAll(".links");
let b = document.querySelectorAll(".circle");
let cursorElem = document.getElementById("cursor");

console.log(grid);

for (let i = 0; i < grid.length; i++){

grid[i].onclick = function(){

        if(c[i].style.display == "block"){
            c[i].style.display = "none";
        } else{
            c[i].style.display = "block";            
        }

    }

    grid[i].onmouseover = function(){

        this.style.color = "#e94f29";
        time[i].style.color = "#e94f29";
        l[i].style.color = "#e94f29";
        b[i].style.color = "#e94f29";
        b[i].style.border = "2px solid #e94f29";

    }
    
    grid[i].onmouseout = function(){

            this.style.color = "#262f2e";
            time[i].style.color = "#262f2e";
            l[i].style.color = "#262f2e";
            b[i].style.color = "#262f2e";
            b[i].style.border = "2px solid #262f2e";

        
}

}

document.onmousemove = function(e){

    cursorElem.style.top = (e.pageY) + "px";
    cursorElem.style.left = (e.pageX) + "px";

}