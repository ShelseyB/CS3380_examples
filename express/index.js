import express from "express";

const app = express();
const port = 3000;

// Middleware for json requests
app.use(express.json());

// Serve static files
app.use(express.static("public"));

/** Routes */
app.get("/", (req, res) => {
    res.send("Welcome to CS3380");
});

app.get("/about", (req, res) => {
    res.send("Some info about CS3380");
});

app.get("/user/:uid", (req, res) => {
    const userId = req.params.uid;
    res.send(`User id: ${userId}`);
})

app.post("/submit", (req, res) => {
    // console.log(req);
    const { name, email } = req.body;
    res.json({ message: `Received data: Name - ${name}, Email - ${email}`});
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(port, () => {
    console.log(`Server running at localhost:${port}`);
});