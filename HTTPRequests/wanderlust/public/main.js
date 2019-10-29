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
    try {
      const response = await fetch(urlToFetch);
      if(response.ok) {
        const jsonResponse = await response.json();
        //console.log(jsonResponse);
        const venues = jsonResponse.response.groups[0].items.map(item=>item.venue);
        //console.log(venues);
        return venues;
      }
    } catch (error) {
      console.log (error);
    }
}

const getForecast = async () => {
  urlToFetch = `${weatherUrl}?q=${$input.val()}&APPID=${openWeatherKey}`;
  try {
    const response = await fetch(urlToFetch);
    if(response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    } else {
      throw new Error ('Request failed');
    }
  } catch (error) {
    console.log(error);
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = createVenueHTML(venue.name,venue.location,venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  //const weatherContent = createWeatherHTML();

	let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues=>renderVenues(venues));
  getForecast().then(jsonResponse=>renderForecast(jsonResponse));
  return false;
}

$submit.click(executeSearch)