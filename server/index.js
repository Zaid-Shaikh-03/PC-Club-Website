import express from "express";
import cors from "cors";
import pg from "pg";

const app = express();
const port = 5000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "college",
    password: "postZaid@2023",
    port: 5432,
});

db.connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
    res.send("server is running")
});


app.post("/", async (req, res) => {
    const { userData } = req.body;
    console.log(userData);
    const name = userData.name;
    const email = userData.email;
    const branch = userData.branch;
    const acyr = userData.acYr;
    const roll = userData.roll;
    const domain = userData.domain;
    const q1 = userData.q1;
    const q2 = userData.q2;

    try {
        await db.query(
            "INSERT INTO users (name, email, branch, acyr, roll, domain, q1, q2) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
            [name, email, branch, acyr, roll, domain, q1, q2]
        );
    } catch (err) {
        console.log(err);
    }

    res.json({ "message": "Form Submitted" });
});


app.listen(port, () => {
    console.log("Listening on port ${ port }");
});