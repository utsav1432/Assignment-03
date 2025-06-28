function isEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
function isNumeric(phone) {
    var regex = /^\d{10}$/;
    return regex.test(phone.replace(/\D/g, ''));
}

$(document).ready(function () {
    $("#phone").on("input", function () {
        var value = $(this).val();
        // Remove all non-digit characters
        value = value.replace(/\D/g, '');
        // Limit to 10 digits
        value = value.substring(0, 10);
        $(this).val(value);
    });

    $("#btn").click(function (e) {
        e.preventDefault();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var password = $("#password").val();
        var confirmpassword = $("#confirmpassword").val();
        var result = $("#errors");
        var missingfields = "";
        var errormessage = "";

        result.html("").removeClass('success').removeClass('errors');
        $("#success").html("").removeClass('errors').addClass('success').hide();

        // Validate password
        if (password === "") {
            missingfields += "<p>Password not filled.</p>";
        } else if (password.length < 8) {
            errormessage += "<p>Password must be at least 8 characters.</p>";
        } else if (!/[A-Z]/.test(password)) {
            errormessage += "<p>Must include at least one uppercase letter (A-Z).</p>";
        } else if (!/[a-z]/.test(password)) {
            errormessage += "<p>Must include at least one lowercase letter (a-z).</p>";
        } else if (!/[0-9]/.test(password)) {
            errormessage += "<p>Must include at least one number (0-9).</p>";
        } else if (!/[!@#$%^&*()\-_=+{}|;:",.<>?[\]\\]/.test(password)) {
            errormessage += "<p>Must include at least one special character (!@#$%^&*, etc).</p>";
        }
        // Check for missing fields
        if (email === "") {
            missingfields += "<p>Email not filled.</p>";
        }
        if (phone === "") {
            missingfields += "<p>Phone Number not filled.</p>";
        }
        if (confirmpassword === "") {
            missingfields += "<p>Confirm Password not filled.</p>";
        }

        // Validate email and phone
        if (email && !isEmail(email)) {
            errormessage += "<p>Email id is not valid.</p>";
        }
        if (phone && !isNumeric(phone)) {
            errormessage += "<p>Phone number must be exactly 10 digits (no spaces or symbols).</p>";
        }
        if (password && confirmpassword && password !== confirmpassword) {
            errormessage += "<p>Passwords do not match.</p>";
        }
        // Display messages
        if (errormessage === "" && missingfields === "") {
            $("#success").html("<p>Registration successful!</p>").show();
            setTimeout(function () {
                location.reload();
            }, 3000);
        } 
        else {
            result.html(errormessage + missingfields).addClass('errors').show();
        }
    });
    $("#passwordToggle").click(function (e) {
        e.preventDefault();
        var passwordField = $("#password");
        var type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);
        $(this).text(type === 'text' ? 'Hide' : 'Show');
    });
    $("#confirmPasswordToggle").click(function () {
        var confirmPasswordField = $("#confirmpassword");
        if (confirmPasswordField.attr('type') === 'password') {
            confirmPasswordField.attr('type', 'text');
            $(this).text('Hide');
        } else {
            confirmPasswordField.attr('type', 'password');
            $(this).text('Show');
        }
    });
});