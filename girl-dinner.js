//email shopping list lunchable
function openEmailClientLunch() {
  var subject = "Shopping List For Recipe: Adult Lunchable";
  var body = "Ingredients List: \n\n" +
             "- Fancy Cheeses, like gouda, manchego, brie, etc.\n" +
             "- Meats, like prosciutto, salami, smoked meats, and some people even like tinned fish like sardines! \n" +
             "- Dips, like hummus or spinach artichoke dip\n" +
             "- Fruit, like sliced apples or strawberries\n" +
             "- Something Crunchy, like chips, pretzels, or nuts\n" +
             "- Pickles...or some other slightly vinegary item to add a little sour flavor to the mix \n" +
             "- Whatever else your heart desires \n\n" +
             "- The important thing to remember about Girl Dinner is that it's whatever you want it to be!";
  var mailtoLink = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = mailtoLink;
}
document.getElementById("contactButtonLunch").addEventListener("click", openEmailClientLunch);


//email shopping list sooner swirl
<button id="contactButtonSwirl">Get The Shopping List for Sooner Swirl</button>       

function openEmailClientSwirl() {
  var subject = "Shopping List For Recipe: Sooner Swirl";
  var body = "Ingredients List: \n\n" +
             "Sangria\n" +
             "- Dry red wine\n" +
             "- Frozen berries (it makes it so much darker and prettier, but if you want a pink color, then fine, I will accept frozen mangos or peaches) \n" +
             "- Sweetener (I support Canada and their maple syrup) \n" +
             "- Orange juice (if that’s yo thang, it sweetens nicely)\n" +
             "- Triple sec (to your heart’s desire, I add the alcohol when I make the margarita!) \n" +
             "- Sometimes ice, depending on your preferred crunch level in a slush \n\n" +
             "Margarita\n" + 
             "- Tequila (as much to your heart’s content) \n" +
             "- Lime juice (I like enough to make my lips pucker from the dry red and lime together) \n" +
             "- Ice \n" +
             "- Triple sec (remember how I talked about adding more alcohol before?) \n" +
             "- People say agave, my first love is maple syrup, and thus that is what I add \n";
  var mailtoLink = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = mailtoLink;
}
document.getElementById("contactButtonSwirl").addEventListener("click", openEmailClientSwirl);


//email shopping list tres leches
<button id="contactButtonTres">Get The Shopping List for Tres Leches</button>       

function openEmailClientTres() {
  var subject = "Shopping List For Recipe: Tres Leches";
  var body = "Ingredients List: \n\n" +
             "- all-purpose flour\n" +
             "- baking powder \n" +
             "- salt \n" +
             "- unsalted butter\n" +
             "- granulated sugar\n" +
             "- eggs\n" +
             "- vanilla extract\n" +
             "- evaporated milk \n" +
             "- sweetened condensed milk \n" +
             "- whole milk\n" +
             "- whipped cream\n" +
             "- Ground cinnamon or fresh fruit for garnish (optional) \n";
  var mailtoLink = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = mailtoLink;
}
document.getElementById("contactButtonTres").addEventListener("click", openEmailClientTres);


//email shopping list hummus
<button id="contactButtonHummus">Get The Shopping List for Hummus</button>       

function openEmailClientHummus() {
  var subject = "Shopping List For Recipe: Hummus";
  var body = "Ingredients List: \n\n" +
             "- 15 ounce can chickpeas\n" +
             "- tahini\n" +
             "- extra-virgin olive oil\n" +
             "- lemon juice\n" +
             "- garlic powder\n" +
             "- sea salt\n" +
             "- water, or as needed to blend \n" +
             "- veggies and/or warm pita bread, for serving";
  var mailtoLink = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = mailtoLink;
}
document.getElementById("contactButtonHummus").addEventListener("click", openEmailClientHummus);


//email shopping list smores
<button id="contactButtonSMores">Get The Shopping List for Microwave S'mores</button>       

function openEmailClientSMores() {
  var subject = "Shopping List For Recipe: Microwave S'Mores";
  var body = "Ingredients List: \n\n" +
             "- Graham Crackers\n" +
             "- Mini Marshmallows\n" +
             "- Chocolate Chips\n";
  var mailtoLink = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = mailtoLink;
}
document.getElementById("contactButtonSMores").addEventListener("click", openEmailClientSMores);

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
