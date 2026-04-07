const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let students = [];
let passes = [];
let routes = [];

let routeId = 1;
let studentId = 1;
let passId = 1;

// ROUTES
app.get("/routes", (req, res) => res.json(routes));

app.post("/routes", (req, res) => {
const route = { id: routeId++, ...req.body };
routes.push(route);
res.json(route);
});

app.put("/routes/:id", (req, res) => {
const id = parseInt(req.params.id);
routes = routes.map(r => r.id === id ? { id, ...req.body } : r);
res.json({ message: "Updated" });
});

app.delete("/routes/:id", (req, res) => {
const id = parseInt(req.params.id);
routes = routes.filter(r => r.id !== id);
res.json({ message: "Deleted" });
});

// STUDENTS
app.get("/students", (req, res) => res.json(students));

app.post("/students", (req, res) => {
const student = { id: studentId++, ...req.body };
students.push(student);
res.json(student);
});

// PASSES
app.get("/passes", (req, res) => res.json(passes));

app.post("/passes", (req, res) => {
const pass = { id: passId++, ...req.body };
passes.push(pass);
res.json(pass);
});

app.listen(5000, () => {
console.log("Server running on port 5000 🚀");
});
