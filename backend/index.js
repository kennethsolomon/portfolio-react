import express from "express";
import dotenv from "dotenv";
import emailRoutes from "./routes/mailtrap.route.js";
import cors from "cors";
import path from "path"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
	app.use(
		cors({
			origin: "http://localhost:5173",
			credentials: true,
		})
	);
}


app.use(express.json()); // allows us to parse incoming requests:req.body
app.use("/api/send-email", emailRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	})
}

app.listen(PORT, () => {
	console.log("Server is running on port: ", PORT);
});