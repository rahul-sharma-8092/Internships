// Input Fields and Button...
let userName = document.getElementById("userName");
let password = document.getElementById("password");
let cnfPassword = document.getElementById("cnfPassword");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

// P tag...
let nameSp = document.getElementById("nameSp");
let passwordSp = document.getElementById("passwordSp");
let cnfPasswordSp = document.getElementById("cnfPasswordSp");
let emailSp = document.getElementById("emailSp");
let mobileSp = document.getElementById("mobileSp");

function Validation() {
	// name
	if (userName.value == "" || userName.value.length < 3) {
		nameSp.innerText = "Please Enter Name";
		return false;
	} else {
		nameSp.innerText = "";
	}

	// password
	if (password.value == "" || password.value.length < 8) {
		passwordSp.innerText = "Please Enter Password";
		return false;
	} else {
		passwordSp.innerText = "";
	}

	// Confirm Password
	if (cnfPassword.value == "" || cnfPassword.value !== password.value) {
		cnfPasswordSp.innerText = "Password Not Matched";
		return false;
	} else {
		cnfPasswordSp.innerText = "";
	}

	// Email
	if (email.value == "") {
		emailSp.innerText = "Please Enter Email";
		return false;
	} else {
		emailSp.innerText = "";
	}

	// Mobile
	if (mobile.value == "") {
		mobileSp.innerText = "Please Enter Mobile Number";
		return false;
	} else {
		mobileSp.innerText = "";
	}
	return true;
}

userName.addEventListener("input", () => {
	Validation();
});
password.addEventListener("input", () => {
	Validation();
});
cnfPassword.addEventListener("input", () => {
	Validation();
});
email.addEventListener("input", () => {
	Validation();
});
mobile.addEventListener("input", () => {
	Validation();
});

resetBtn.addEventListener("click", () => {
	nameSp.innerText = "";
	passwordSp.innerText = "";
	cnfPasswordSp.innerText = "";
	emailSp.innerText = "";
	mobileSp.innerText = "";
});
