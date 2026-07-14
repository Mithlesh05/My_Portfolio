const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const outPath = path.join(__dirname, "..", "public", "resume.pdf");
const doc = new PDFDocument({
  size: "A4",
  margins: { top: 48, bottom: 48, left: 54, right: 54 },
});

const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

const black = "#111111";
const gray = "#444444";
const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

function sectionTitle(title) {
  doc.moveDown(0.7);
  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .fillColor(black)
    .text(title.toUpperCase());
  const y = doc.y + 2;
  doc
    .moveTo(doc.page.margins.left, y)
    .lineTo(doc.page.margins.left + pageWidth, y)
    .strokeColor("#222222")
    .lineWidth(1)
    .stroke();
  doc.moveDown(0.5);
}

function bullet(text) {
  const x = doc.page.margins.left;
  const bulletX = x + 8;
  const textX = x + 18;
  const startY = doc.y;
  doc.font("Helvetica").fontSize(10).fillColor(gray);
  doc.text("•", bulletX, startY, { continued: false, width: 10 });
  doc.text(text, textX, startY, {
    width: pageWidth - 18,
    align: "left",
  });
  doc.moveDown(0.15);
}

// Header
doc
  .font("Helvetica-Bold")
  .fontSize(22)
  .fillColor(black)
  .text("MITHLESH KUMAR SINGH", { align: "center" });

doc.moveDown(0.25);
doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(gray)
  .text("Bokaro | Jharkhand  |  7903402439  |  singhmithleshkumar717@gmail.com", {
    align: "center",
  });
doc.text("LinkedIn", { align: "center", link: "https://linkedin.com", underline: true });

// Objective
sectionTitle("Objective");
doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(gray)
  .text(
    "I seek challenging opportunities where I can fully use my skills for the success of the organization.",
    { align: "left", lineGap: 2 }
  );

// Education
sectionTitle("Education");
doc.font("Helvetica-Bold").fontSize(11).fillColor(black).text("Arka Jain University Jamshedpur", {
  continued: true,
});
doc.font("Helvetica").fontSize(10).fillColor(gray).text("  |  Aug 2021 - April 2025", {
  align: "left",
});
doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(gray)
  .text("Btech in Computer Science  |  CGPA: 8.80");

// Experience / Internship
sectionTitle("Experience / Internship");

doc.font("Helvetica-Bold").fontSize(11).fillColor(black).text("ReGrow Tech India Pvt Ltd", {
  continued: true,
});
doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(gray)
  .text("  |  Software Developer Intern  |  May 2024 - Jun 2024");
bullet(
  "Developed a MERN stack food website for managing recipes, restaurants, and user preferences."
);
bullet(
  "Focused on full-stack development, integrating dynamic front-end design with a robust back-end."
);

doc.moveDown(0.35);
doc.font("Helvetica-Bold").fontSize(11).fillColor(black).text("Generix Info Tech Pvt Ltd", {
  continued: true,
});
doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(gray)
  .text("  |  Software Developer Intern  |  Jun 2023 - Sep 2023");
bullet(
  "Developed an Exam Management System to automate exam administration, student records, and results."
);
bullet("Focused on user-friendly software with strong database integration.");

// Technical Skills
sectionTitle("Technical Skills");
doc.font("Helvetica-Bold").fontSize(10).fillColor(black).text("Languages and Databases: ", {
  continued: true,
});
doc
  .font("Helvetica")
  .fillColor(gray)
  .text("Java, JavaScript, MongoDB, Express.js, Node.js, SQL, PostgreSQL.");

doc.moveDown(0.2);
doc.font("Helvetica-Bold").fontSize(10).fillColor(black).text("Tools: ", { continued: true });
doc
  .font("Helvetica")
  .fillColor(gray)
  .text("VS Code, Microsoft Visual Studio, MongoDB Compass, Postman, Canva, Figma.");

// Projects
sectionTitle("Projects");

doc.font("Helvetica-Bold").fontSize(11).fillColor(black).text("Blog_Website", {
  continued: true,
});
doc.font("Helvetica").fontSize(10).fillColor(gray).text("  |  MERN Stack Project");
bullet(
  "Features for creating, reading, and managing posts with real-time comments and JWT-based authentication."
);

doc.moveDown(0.25);
doc.font("Helvetica-Bold").fontSize(11).fillColor(black).text("Job_Portal_Website", {
  continued: true,
});
doc.font("Helvetica").fontSize(10).fillColor(gray).text("  |  MERN Stack Project");
bullet(
  "A platform connecting job seekers and employers, built with the MERN stack and Supabase."
);

doc.moveDown(0.25);
doc.font("Helvetica-Bold").fontSize(11).fillColor(black).text("Travel Website", {
  continued: true,
});
doc.font("Helvetica").fontSize(10).fillColor(gray).text("  |  Ongoing Project");
bullet(
  "A backend-driven booking platform with modular architecture, implementing REST APIs and database schemas using Postgres & SQL."
);

// Languages
sectionTitle("Languages");
doc.font("Helvetica").fontSize(10).fillColor(gray).text("Hindi, English");

doc.end();

stream.on("finish", () => {
  console.log("Created:", outPath);
});
