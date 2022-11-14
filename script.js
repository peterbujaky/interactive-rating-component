const submittButton = document.getElementById("submitButton");
const ratingButtons = document.getElementsByClassName("btn-rating");
const thankYouDiv = document.getElementById("thankyoudiv");
const thankYouImgDiv = document.getElementById("thankyouimg");
const thankyouText = document.createElement("p");
const thankYouImg = document.createElement("img");
thankYouImg.src = "./images/illustration-thank-you.svg"


            for (var i = 0; i < ratingButtons.length; i++ ) {
            ratingButtons[i].addEventListener("click", function() {
                var rating = this.innerHTML;

                submittButton.addEventListener("click", function() {
                
                    document.getElementById('component').style.textAlign = "center";
                    document.querySelector('h3').innerHTML = "Thank You!";;
                    document.querySelector('p').innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

                    thankYouImgDiv.appendChild(thankYouImg);
                    thankYouDiv.appendChild(thankyouText);
                    thankyouText.innerHTML = `You selected  ${rating} out of 5`;
                    thankyouText.classList.add("ratingText");
                    thankYouImgDiv.classList.add("thankyouimg");
                    
                    

                    document.querySelector(".buttons").remove();
                    document.getElementById("iconstar").remove();
                    submittButton.remove();

                })
            })
        }




      
