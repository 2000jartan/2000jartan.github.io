// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
        apiKey: "AIzaSyARqxI2N2RdsWHJbby6l3kphVybzocpFRE",
        authDomain: "blacktea-dev.firebaseapp.com",
        databaseURL: "https://blacktea-dev.firebaseio.com",
        projectId: "blacktea-dev",
        storageBucket: "blacktea-dev.appspot.com",
        messagingSenderId: "682597854604",
        appId: "1:682597854604:web:22ab82c775e5cbb03bfaa9",
        measurementId: "G-46CQPBBKTF"
      };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('clients');
  
  // Listen for form submit
//   document.getElementById('contactForm').addEventListener('submit', submitForm);
  submitForm();
  // Submit form
  function submitForm(){
    // e.preventDefault();
  
    // Get values
    // var name = getInputVal('name');
    // var company = getInputVal('company');
    var name='moorthy';
    var ip='192.199.15.3';
  
    // Save message
    saveMessage(name, ip);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
    });
    // alert()
  }