/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });


  /// GOOGLE
  function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const el = document.getElementById('greeting');
    el.textContent = 'Hello ' + profile.getName() + '!';
  }

  async function signOut() {
    await gapi.auth2.getAuthInstance().signOut();
    console.log('User signed out.');
    const el = document.getElementById('greeting');
    el.textContent = 'Bye!';
  }
