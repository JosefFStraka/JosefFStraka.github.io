console.clear()
console.log("%cLiveWorkSheets solver by M4GicPi3#1337", "font-size:1em;color:red;background:black;border:1px solid yellow;padding:0.5em")
let selectboxs = document.querySelectorAll(".selectbox")
let editabledivs = document.querySelectorAll(".editablediv")
let selectabledivs = document.querySelectorAll(".selectablediv")
let joindivs = document.querySelectorAll(".joindiv")

//selectabledivs
for (let i = 0; i < selectabledivs.length; i++) {
    var id = parseInt(selectabledivs[i].id.replace('selectablediv',''))
    if (selectabledivs[i].id.endsWith(id) && contenidoaguardar[id][0] == "select:yes") selectabledivs[i].onclick()
}
//editablediv
for (let i = 0; i < editabledivs.length; i++) {
    let idnum = editabledivs[i].id.replace("textbox","")
    editabledivs[i].innerText = contenidoaguardar[idnum][0];
}
//selectbox
for (var i = 0;i < selectboxs.length;i++) {
  const box = selectboxs[i]
  const options = box.options
  var rightOption = -1
  for (var j = 0; j < options.length; j++) {
    if (options[j].value == true) {
      rightOption = j
      options.selectedIndex = j
      break
    }
  }
}
//drag & drop
for (let i = 0; i < contenidoaguardar.length; i++) {
    let drag_number = ""
    if (contenidoaguardar[i][0].includes("drag:")) {drag_number = contenidoaguardar[i][0].replace("drag:","")} else continue;
    for (let j = 0; j < contenidoaguardar.length; j++) {
        let drop_number = ""
        if (contenidoaguardar[j][0].includes("drop:")) {drop_number = contenidoaguardar[j][0].replace("drop:","")} else continue;
        if (drag_number == drop_number) {
            let drag_el = document.getElementById("dragablediv"+i)
            let drop_el = document.getElementById("dropdiv"+j)
            drag_el.style.top = drop_el.style.top
            drag_el.style.left = drop_el.style.left
        }
    }
}
//join - lines
if (joindivs.length > 0) {
    document.getElementById("elsvgdefinitivo").innerHTML = ""
    let startId = parseInt(joindivs[0].id.split("joindiv").join(""))
    for (let i = 0; i < joindivs.length; i+=2) {
        let rndX = (Math.random()-0.5) * 10
        let rndY = (Math.random()-0.5) * 20
        let el1 = joindivs[i]
        let el2 = joindivs[i+1]
        let lineStr = `<line x1=#${el1.offsetLeft+el1.offsetWidth/2+rndX}# y1=#${el1.offsetTop+el1.offsetHeight/2+rndY}# x2=#${el2.offsetLeft+el2.offsetWidth/2+rndX}# y2=#${el2.offsetTop+el2.offsetHeight/2+rndY}# stroke=#darkblue# stroke-width=#5#/>`
        contenidorellenado[startId + i][5]     = lineStr
        contenidorellenado[startId + i + 1][5] = lineStr
        document.getElementById("elsvgdefinitivo").innerHTML += lineStr.split('#').join('"');
    }
}

comprobarRespuestas(1)
respuestascomprobadas = 0
editabledivs.forEach((el)=>{
    el.setAttribute("contenteditable", "true")
})
console.log(`${pnt}/10 points!`)
capanotas.style.fontSize = "100px"
