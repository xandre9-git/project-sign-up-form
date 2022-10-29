function passwordMatch () {
  const pwd1 = document.getElementById("password")
  const pwd2 = document.getElementById("confirm-password")

  if (pwd1.value != pwd2.value) {
    pwd2.setCustomValidity('The passwords do not match.');
  } else {
    pwd2.setCustomValidity('');
  }
}

