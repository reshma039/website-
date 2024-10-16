function validateForm() {
    const password = document.getElementById('password').value;
    const fileUpload = document.getElementById('fileUpload').value;
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).{16,}$/;

    // Password Validation
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 16 characters long, alphanumeric, and include at least one special character.');
        return false;
    }

    // File Upload Validation
    const fileExtension = fileUpload.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png'].indexOf(fileExtension) === -1) {
        alert('Only JPG and PNG formats are allowed for the profile picture.');
        return false;
    }
	
	document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Show success message
    document.getElementById('successMessage').style.display = 'block';
    return true;
}


