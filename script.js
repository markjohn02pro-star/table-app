


function submitData (){

    let table = Number(document.getElementById("tablenumber").value)
    let range = Number(document.getElementById("tablerange").value)

    for (let loop = 1; loop <= range; loop++) {
          let syntax = `${table} + ${loop} = {table*loop}`
         document.getElementById("result").innerHTML += `<p> ${syntax}</p>`

        
    }

      alert("table print sucessfully")
    


}
