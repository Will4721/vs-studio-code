
let currentPage= 3
let pages //array med alle elementer med class = page
let colors = ['red','green','blue','lightgreen','orange','lightcyan','lightgrey','lightblue'] 

function setup(){
    console.log("P5.js er loaded")
    select('#page'+ currentPage).addClass('visible')
pages = selectAll('.page')
//nu kan man se at pages er blevet til en liste med alle class = page ting'

console.log(pages.length)

//lav ene masse diver vi kommer ind i page 3
for(c of colors){
    //console.log(c)
    let div = createDiv()
    div.style('background-color', c)
    select('#page3').child(div)
}
}


function shiftpage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
    }
    if(num == "ArrowRight"){
        num = currentPage + 1
    }

    if(isNaN(num) || num > pages.length || num==0){return}
    select("#page" + currentPage).removeClass('visible')
    currentPage = num
    select("#page" + currentPage).addClass('visible')

}

function keyPressed(){
   console.log(key)
    shiftpage(key)
}