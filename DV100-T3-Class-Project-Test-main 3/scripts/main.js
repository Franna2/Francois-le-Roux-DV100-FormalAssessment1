//creating an array of objects

const plants = [

    {"name": "Fikus Tree",
    "price": 350,
    "description": "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
    "image": "plant1.png"},
  
  {
    "name": "White Sprite Succulent",
    "price": 200,
    "description": "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
    "image": "plant2.png"
  },
  {
    "name": "Snake Plant",
    "price": 400,
    "description": "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
    "image": "plant3.png"
  },
  {
    "name": "Parlour Palm",
    "price": 350,
    "description": "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
    "image": "plant4.png"
  },
  {
    "name": "Japanese Maple",
    "price": 1200,
    "description": "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
    "image": "plant5.png"
  }
    
];


$(document).ready(function(){
//select the plants container and add html from our template 
    


    loadPlants();
});


function loadPlants () {
    for (let i = 0; i < plants.length; i++) {
        console.log(plants[i]);

        $("#plantsContainer").append($("#plantCardTemplate").html());

        let currentChild = $("#plantsContainer").children().eq(i+1);

        $(currentChild).find(".card-img-top").attr('src','assets/' + plants[i].image);

        $(currentChild).find("#nameText").text(plants[i].name);

        $(currentChild).find("#priceText").text('R ' + plants[i].price);

        $(currentChild).find("#descriptionText").text(plants[i].description);
        
        $(currentChild).find("#descriptionText").hide();


    }
}


$("#plantsContainer").on('click', '.card', function(){

    // Toggle the price & description text
    $(this).find("#priceText").toggle();
    $(this).find("#descriptionText").toggle();
  
    // Resize the image to fit the additional content
    $(this).find(".card-img-top").toggleClass("small");
  
  });


  /*-----------------------------------------*/
  /* WISHLIST */

  $(document).ready(function() {
    // Function to remove a row from the table when the "Remove" button is clicked
    $(".remove-button").click(function() {
      $(this).closest("tr").remove();
    });
  });

  


  // main.js

$(document).ready(function() {
  // Clone the plant card template and append it to the plantsContainer
  function addPlantCard(name, price, description) {
    var template = $("#plantCardTemplate").clone().contents();
    template.find("#nameText").text(name);
    template.find("#priceText").text(price);
    template.find("#descriptionText").text(description);
    template.removeClass("d-none");
    $("#plantsContainer").append(template);
  }

  // Handle "Add to Wishlist" button click event
  $(document).on("click", ".add-to-wishlist-button", function() {
    var card = $(this).closest(".card");
    var name = card.find("#nameText").text();
    var price = card.find("#priceText").text();
    var description = card.find("#descriptionText").text();

    
    console.log("Added to Wishlist:", name);

    $(this).text("Added to Wishlist").removeClass("btn-primary").addClass("btn-success").prop("disabled", true);
  });

  addPlantCard("Ficus Tree", "R320", "Graceful and lush, this charming indoor plant...");
});
