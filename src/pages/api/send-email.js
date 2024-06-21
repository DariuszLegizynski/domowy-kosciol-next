import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { name, surname, email, phone, message } = req.body

		try {
			await sendgrid.send({
				to: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
				from: process.env.NEXT_PUBLIC_EMAIL_SENDER,
				subject: `Nowa wiadomośc od ${name}`,
				html: `
          <p><strong>Name:</strong> ${name} ${surname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
			})

			res.status(200).json({ success: true })
		} catch (error) {
			console.error(error)
			res.status(500).json({ success: false, error: error.message })
		}
	} else {
		res.status(405).json({ message: "Method not allowed" })
	}
}
