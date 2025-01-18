import dotenv from "dotenv";

dotenv.config();

import {
	sendEmail,
} from "../mailtrap/emails.js";

export const send = async (req, res) => {
	const { name, email, message } = req.body;
	try {
        if(!name || !email || !message) {
            throw new Error("Please fill in all fields.");
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            throw new Error("Email is invalid.");
        }

        const sender = { name, email, message };

        await sendEmail(sender);
		res.status(200).json({ success: true, message: 'Email sent successfully.' });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};