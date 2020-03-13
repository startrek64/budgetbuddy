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




  /// GOOGLE
  function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const el = document.getElementById('greeting');
    el.textContent = 'Hello ' + profile.getName() + '!';
    const pr = document.getElementById('linkToHome');
    pr.style.visibility = 'visible';
    const link = document.createElement('a');
    link.textContent = 'Continue to Account';
    link.href = 'http://localhost:8080/homepage';
    pr.appendChild(link);
  }


  async function signOut() {
    await gapi.auth2.getAuthInstance().signOut();
    console.log('User signed out.');
    const el = document.getElementById('greeting');
    el.textContent = 'Not Signed In!';
  }
