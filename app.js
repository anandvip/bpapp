// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDxZc7l09MGgF9m2APde3z3COoaAsiYcFA",
      authDomain: "bpreadings2024.firebaseapp.com",
      projectId: "bpreadings2024",
      storageBucket: "bpreadings2024.appspot.com",
      messagingSenderId: "462986345639",
      appId: "1:462986345639:web:74c7d1c5bac6d92028ef82",
      measurementId: "G-ZN40201FEW"
  };

  
  firebase.initializeApp(firebaseConfig);
  const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    size: 'normal',
  });
  
  function sendOTP() {
    const phoneNumber = document.getElementById('phone-number').value;
    const phoneNumberFormatted = `+${phoneNumber}`;
    
    firebase.auth().signInWithPhoneNumber(phoneNumberFormatted, appVerifier)
      .then((confirmationResult) => {
        const verificationCode = prompt('Please enter the verification code sent to your phone:');
        return confirmationResult.confirm(verificationCode);
      })
      .then((result) => {
        // OTP verification successful
        document.getElementById('welcome-message').style.display = 'block';
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  function verifyOTP() {
    const verificationCode = document.getElementById('verification-code').value;
    
    confirmationResult.confirm(verificationCode)
      .then((result) => {
        // OTP verification successful
        document.getElementById('welcome-message').style.display = 'block';
      })
      .catch((error) => {
        console.error(error);
      });
  }