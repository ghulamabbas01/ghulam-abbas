import axios from "axios";

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        var data = JSON.stringify({
          service_id: process.env.ACCOUNT_SID,
          template_id: process.env.TEMPLATE_ID,
          user_id: process.env.USER_ID,
          template_params: {
            to: "",
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName,
            phone: body.phone,
            address: body.address,
          },
        });

        var config = {
          method: "post",
          url: "https://api.emailjs.com/api/v1.0/email/send",
          headers: {
            origin: "http://localhost",
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            res.status(200).json({
              success: true,
              message: "Email sent! Please check your email!",
            });
          })
          .catch(function (error) {
            res.status(400).json({
              success: false,
              message: error,
            });
          });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
