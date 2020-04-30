function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
  console.log('statusChangeCallback');
  console.log(response);                   // The current login status of the person.
  if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    console.log('connected, testing now');
    testAPI();  
  } else {                                 // Not logged into your webpage or we are unable to tell.
    console.log('not connected, request login');
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this webpage.';
  }
}

function checkLoginState() {               // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function(response) {   // See the onlogin handler
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '108215613344',
    cookie     : true,                     // Enable cookies to allow the server to access the session.
    xfbml      : true,                     // Parse social plugins on this webpage.
    version    : 'v6.0'           // Use this Graph API version for this call.
  });

  FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
    statusChangeCallback(response);        // Returns the login status.
  });

  FB.login(function(response) {            // to generate a login asking for access to the user's birthday
    console.log(response);
  }, {scope: 'user_birthday'});           
};

(function(d, s, id) {                      // Load the SDK asynchronously
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}

function idAndName() {
  console.log('clicked');
  FB.api(
    '/me',
    'GET',
    {"fields":"id,name"},
    function(response) {
      console.log('getting id and name', response);
    }
  );
}

function getFeed() {
  console.log('clicked');
  FB.api(
    '/me/feed',
    'GET',
    {},
    function(response) {
      console.log('getting feed', response);
    }
  );
}

function getPhotos() {
  console.log('clicked');
  FB.api(
    '/me/photos',
    'GET',
    {},
    function(response) {
      console.log('getting photos', response);
    }
  );
}

  function getEvents() {
  console.log('clicked');
  FB.api(
    '/229628251539438',
    function(response) {
      console.log('getting event id 229628251539438', response);
    }
  );
}
