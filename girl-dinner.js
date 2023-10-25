<<<<<<< Updated upstream
//email shopping list
function openEmailClient() {
            var subject = "Shopping List For Recipe #1: Adult Lunchable";
            var body = "Ingredients List: \n\n" +
                       "- Fancy Cheeses, like gouda, manchego, brie, etc.\n" +
                       "- Meats, like proscuitto, salami, smoked meats, and some people even like tinned fish like sardines! \n" +
                       "- Dips, like hummus or spichach artichoke dip\n" +
                       "- Fruit, like sliced apples or strawberries\n" +
                       "- Something Crunchy, like chips, pretzels, or nuts\n" +
                       "- Pickles...or some other slightly vinegary item to add a little sour flavor to the mix \n" +
                       "- Whatever else your heart desires" +
                       "The imporant thing to remember about Girl Dinner is that it's whatever you want it to be!";
            var mailtoLink = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
            window.location.href = mailtoLink;
        }
        document.getElementById("contactButton").addEventListener("click", openEmailClient);

=======
>>>>>>> Stashed changes
//image carousel
    const myCarousel = document.getElementById('test-carousel');
    const carousel = new bootstrap.Carousel(myCarousel, {
      interval: 500, // Set the desired interval (in milliseconds)
    });
  
    myCarousel.addEventListener('mouseenter', () => {
      carousel.cycle(); 
    });
  
    myCarousel.addEventListener('mouseleave', () => {
      carousel.pause();
    });
