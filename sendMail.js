const nodemailer = require('nodemailer');
const Email = require('email-templates');

const transporter = nodemailer.createTransport({
		host: 'smtp.seznam.cz',
		port: 465,
		secure: true,
		auth: {
			user:'cumlikator1@email.cz',
			pass: 'lamasvetajahodapohoda'
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
        from: 'cumlikator1@email.cz',
        to: 'kopkayan@outlook.cz',
      },
      locals: {
        fname: 'John',
        lname: 'Snow',
      },
    }).then(() => console.log('email has been send!'));
