<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple HTML Form</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/form.js"></script>
</head>
<body>
<form name="Form" onsubmit="return validateForm()" >
<img src="img/res.jpeg" class="avatar">

    <div class="box">
        <label>Full Name</label>
        <input type="text" name="name" id="name">
        <div class="error" id="nameErr"></div>
    </div>
    <div class="box">
        <label>Age</label>
        <input type="text" name="age" id="age">
        <div class="error" id="ageErr"></div>
    </div>
    <div class="box">
        <label>Address</label>
        <input type="text" name="address" id="address">
        <div class="error" id="addressErr"></div>
    </div>
    <div class="box">
        <label>Mobile Number</label>
        <input type="text" name="mobile" maxlength="12" id="mobile">
        <div class="error" id="mobileErr"></div>
    </div>

    <div class="box">
        <label>Email Address</label>
        <input type="text" name="email" id="email">
        <div class="error" id="emailErr"></div>
    </div>
    <div class="box">
        <label>Gender</label>
        <div class="form-inline" id="gender">
            <label><input type="radio" name="gender" value="male"> Male</label>
            <label><input type="radio" name="gender" value="female"> Female</label> 
        </div>
        <div class="error" id="genderErr"></div>
    </div>
          
    <div class="box">
        <input type="submit" value="Submit">
    </div>
</form>


</body>
</html>