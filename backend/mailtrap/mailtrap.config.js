import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
	endpoint: process.env.MAILTRAP_ENDPOINT,
	token: process.env.MAILTRAP_TOKEN,
});

export const to = {
    email: process.env.MAILTRAP_TO,
	name: "Kenneth Solomon",
};

export const from = {
    email: process.env.MAILTRAP_FROM,
    name: "Kenneth Solomon",
  };