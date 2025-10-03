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
    // Making a for loop that creates 10 buttons with a set class and individual id's
    let defaultColors = []
    for(let i = 0; i < 10; i++){
        let btn = document.createElement("button")
        btn.id = `btn${i}`
        btn.className = "btn"
        btn.innerHTML = "I'm a button"
        document.getElementById("buttonGroup").appendChild(btn)
        // giving the buttons their "default" color
        let baseColor = btn.style.backgroundColor = getRandomColor()
        defaultColors.push(baseColor)
    }
    console.log(`Default Colors ${defaultColors}`)
    // creating the random color function
    function getRandomColor() {
      // Generate a random number between hex code limits
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      // Pad to make 6-digit code
      return `#${randomColor.padStart(6, '0')}`;
    }
    // color select
    function colorSelect(selectElem) {
        let color = selectElem.value;
        let buttons = document.getElementsByClassName("btn");
        for (let i = 0; i < buttons.length; i++) {
            if (color === "default") {
                // using the stored colors from earlier to reset the colors
                buttons[i].style.backgroundColor = defaultColors[i];
            } else if (color === "random") {
                //  random color for each button made by using the random color function
                buttons[i].style.backgroundColor = getRandomColor();
            } else {
                // using the values set within the selections we set the button colors
                buttons[i].style.backgroundColor = color;
            }
        }
    }