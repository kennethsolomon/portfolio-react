import { mailtrapClient, from, to } from "./mailtrap.config.js";

export const sendEmail = async (sender) => {

	try {
		const response = await mailtrapClient.send({
			from: from,
			to: [to],
			subject: sender.name + " - " + sender.email,
			text: sender.message,
			category: "kennethsolomon.com",
		});
		// const response = await mailtrapClient.send({
		// 	from: sender,
		// 	to: recipient,
		// 	subject: "Verify your email",
		// 	html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
		// 	category: "Email Verification",
		// });

		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending email`, error);

		throw new Error(`Error sending email: ${error}`);
	}
};
