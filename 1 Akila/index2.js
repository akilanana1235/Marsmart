function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "marsmartshop@gmail.com",
	Password : "newpassword1235**",
	To : 'akilananayakkara1999@gmail.com',
	From : "marsmartshop@gmail.com",
	Subject : "Marsmart Fav List",
	Body : "testing123",
	}).then(
		message => alert("mail sent successfully")
	);
}