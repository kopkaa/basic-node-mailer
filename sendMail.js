const nodemailer = require('nodemailer');
const Email = require('email-templates');
const config = require('./authData');
const path = require('path');


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

	views: {
		root: path.resolve('emails'),
		options: {
			extension:'njk',
		}
	}
});

console.log(email.views);

/* email.send({
      template: 'hello',
      message: {
        from: config.USER,
        to: 'kopkayan@outlook.cz',
      },
      locals: {
        fname: 'John',
        lname: 'Snow',
      },
    }).then(() => console.log('email has been send!'));*/
