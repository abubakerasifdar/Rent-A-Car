
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
            }
        })
        function myFunction() {
            let months = document.getElementById("months").value;
            let choice = document.getElementById("choice").value;
            let TotalPrice;
           
            switch (choice) {
                case "M": {
                    TotalPrice = months * 10
                    output = `You Select the ${choice} and You Entered ${months} Price is 10/day and Your Bill is ${TotalPrice}`;
                    document.getElementById("output").style.background = "brown"
                    break;
                }
                case "C": {
                    TotalPrice = months * 20
                    output = `You Select the ${choice} and You Entered ${months} Price is 20/day and Your Bill is ${TotalPrice}`;
                     document.getElementById("output").style.background = "black"
                    break;
                }
                case "B": {
                    TotalPrice = months * 30
                    output = `You Select the ${choice} and You Entered ${months} Price is 30/day and Your Bill is ${TotalPrice}`;
                     document.getElementById("output").style.background = "purple"
                    break;
                }
                default:{
                    output = "Please Enter Valid Input"
                     document.getElementById("output").style.background = "red"
                    break;
                }
            }
            
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = output        }
  