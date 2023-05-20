const nodemailer = require("../config/nodemailer");

exports.send_new_user = (data) => {
  console.log("Inside new signup mailer");

  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "New User Signed Up!",
    html: "<h3>Hello<h3/>" + data.firstName + " <h3>thanks for signup</h3>",
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error occurred during mail sending", err);
      return;
    }
    console.log("Mail Sent Successfully");
  });
};
