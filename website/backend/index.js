// Code for mongoose config in backend
// Filename - backend/index.js

// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://skip:S3rurrll!@hungry-chompers.qbraipd.mongodb.net/?retryWrites=true&w=majority&appName=Hungry-Chompers', {
	dbName: 'Hungry-Chompers',
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => console.log('Connected to Hungry-Chompers database'))
.catch(err => console.log(err));

// Schema for users of app
const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		unique: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

const FoodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    restaurant: { type: String, required: true },
    ingredients: { type: [String], required: true }
});
const Food = mongoose.model('food', FoodSchema);


// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by 
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.post("/register", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.get("/foods", async (req, resp) => {
    try {
        const foods = await Food.find();
        resp.json(foods);
    } catch (err) {
        console.error(err);
        resp.status(500).send("Error retrieving foods");
    }
});


app.listen(5000);
