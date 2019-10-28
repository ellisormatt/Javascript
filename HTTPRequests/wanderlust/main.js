/*
Wanderlust

Using fetch, async, and await, you’ll request information from the 
Foursquare API and OpenWeather API to create a travel website.

Foursquare:
Client ID: MXZTF2YCS5XXPIJVZK3AACZL4GBEOIL0HVBC520NVYL1HFKX
Client Secret: XSPH3APK4AL4IZ5BW3RSBC3GPLGA5A4LKCHVEWLK5DCJ5IFC

OpenWeather:
API Key: 1a8f2ecabdf4f80cc641c59f4d173c3e
*/



// Foursquare API Info
const clientId = 'MXZTF2YCS5XXPIJVZK3AACZL4GBEOIL0HVBC520NVYL1HFKX';
const clientSecret = 'XSPH3APK4AL4IZ5BW3RSBC3GPLGA5A4LKCHVEWLK5DCJ5IFC';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = '1a8f2ecabdf4f80cc641c59f4d173c3e';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20191028`;
}

const getForecast = () => {

}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = '';
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)