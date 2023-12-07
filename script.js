$(document).ready(function() {
    homepage_one();
});

function homepage_one() {
    $.ajax({
		url: "https://smileschool-api.hbtn.info/quotes",
		method: "GET",
		beforeSend: function () {
			var carouselInner = $("#carousel-1");
			carouselInner.empty()
		  // Show loader before making the request
		  $(".loader").show();
		},
		success: function (data) {
		  // Hide loader when the request is successful
		  $(".loader").hide();

		  // Handle the quotes data and dynamically populate the carousel
		  handleCarouselQuotes(data);
          console.log(data);
		  // Initialize the carousel after adding items
		  $("#carouselExampleControls").carousel();
		},
		error: function () {
		  // Handle errors if needed
		  console.error("Error loading quotes");
		  $(".loader").hide();
		},
	  });
	 
}

function handleCarouselQuotes(data) {
	var carouselInner = $("#carousel-1");

	// Clear the loader item
	carouselInner.empty();

	// Loop through the quotes data and create carousel items
	data.forEach(function (quote, index) {
	  var carouselItem = $("<div>", {
		class: "carousel-item" + (index === 0 ? " active" : ""),
	  });

	  var row = $("<div>", {
		class: "row mx-auto align-items-center",
	  });

	  if(quote.name === "John Doe") {
		var colLeft = $("<div>", {
		class: "col-12 col-sm-2 col-lg-2 offset-lg-1 text-center",
	    }).append(
		  $("<img>", {
		    src: "images/profile_5.jpg",
		    class: "d-block align-self-center",
		    alt: "Carousel Pic " + (index + 1),
		  })
	    );
	  }

	  else {
		var colLeft = $("<div>", {
			class: "col-12 col-sm-2 col-lg-2 offset-lg-1 text-center",
			}).append(
			  $("<img>", {
				src: "images/profile_2.jpg",
				class: "d-block align-self-center",
				alt: "Carousel Pic " + (index + 1),
			  })
			);
	  }


	  var colRight = $("<div>", {
		class: "col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0",
	  }).append(
		$("<div>", {
		  class: "quote-text",
		}).append(
		  $("<p>", {
			class: "text-white",
			text: quote.text,
		  }),
		  $("<h4>", {
			class: "text-white font-weight-bold",
			text: quote.name,
		  }),
		  $("<span>", {
			class: "text-white",
			text: quote.title,
		  })
		)
	  );

	  row.append(colLeft, colRight);
	  carouselItem.append(row);
	  carouselInner.append(carouselItem);
	});
  }