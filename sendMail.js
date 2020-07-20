const nodemailer = require('nodemailer');
const Email = require('email-templates');
const config = require('./authData');


const transporter = nodemailer.createTransport({
		host: config.HOST,
		port: config.PORT,
		secure: true,
		auth: {
			user: config.USER,
			pass: config.PASSWORD
		},
		tls: {
          rejectUnauthorized: false
      }
});

const email = new Email({
	transport: transporter,
	send: true,
	preview: false,
});

 email.send({
      template: 'hello',
      message: {
        from: 'example@email.com',
        to: 'example2@email.com',
      },
      locals: {
        fname: 'John',
        lname: 'Snow',
      },
    }).then(() => console.log('email has been send!'));
