// Multiplication Table
    function createMultTable(){
        let num = Number(window.prompt("Enter A Number"))
        for(let i = 1; i < 11; i++){
            let item = document.createElement("li")
            item.innerHTML = `${num} * ${i} = ${num * i}`
            document.getElementById("multTable").appendChild(item)
            }
        }

// Colorful Buttons