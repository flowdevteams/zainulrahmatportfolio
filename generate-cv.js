const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Setup
const outputPath = path.join(__dirname, 'public', 'CV_Zainul_Rahmat_Saputra.pdf');
const doc = new PDFDocument({ margin: 50, size: 'A4' });

doc.pipe(fs.createWriteStream(outputPath));

// Colors and Fonts
const primaryColor = '#171717'; // Dark gray/black
const secondaryColor = '#525252'; // Medium gray
const accentColor = '#3b82f6'; // Blue accent (tech vibe)

// Helper function to draw a line
const drawLine = (y) => {
  doc.strokeColor('#e5e5e5').lineWidth(1).moveTo(50, y).lineTo(545, y).stroke();
};

// Header
doc.fontSize(28).font('Helvetica-Bold').fillColor(primaryColor).text('Zainul Rahmat Saputra', { align: 'left' });
doc.fontSize(14).font('Helvetica').fillColor(accentColor).text('Web Developer & Entrepreneur', { align: 'left' });
doc.moveDown(0.5);

doc.fontSize(10).fillColor(secondaryColor).font('Helvetica');
doc.text('Padang, Indonesia | zainulrhmt368@gmail.com | +62 877 0916 5697');
doc.text('Portfolio: https://flowdevteams.com');
doc.moveDown(1);
drawLine(doc.y);
doc.moveDown(1);

// Profile
doc.fontSize(14).font('Helvetica-Bold').fillColor(primaryColor).text('PROFILE');
doc.moveDown(0.5);
doc.fontSize(10).font('Helvetica').fillColor(secondaryColor);
doc.text(
  "A passionate web developer and multifaceted individual who thrives at the intersection of technology, business, and creativity. While pursuing a degree in Information Systems, I run Flowdev Teams—a digital service business focused on building impactful web solutions—and also work in the maritime industry assisting seafarers."
);
doc.moveDown(1.5);

// Experience
doc.fontSize(14).font('Helvetica-Bold').fillColor(primaryColor).text('EXPERIENCE');
doc.moveDown(0.5);

// Experience 1
doc.fontSize(11).font('Helvetica-Bold').fillColor(primaryColor).text('Founder & Web Developer', { continued: true });
doc.font('Helvetica').text(' | Flowdev Teams', { align: 'left' });
doc.fontSize(10).fillColor(accentColor).text('2023 - Present');
doc.moveDown(0.3);
doc.fontSize(10).fillColor(secondaryColor);
doc.text('- Lead a digital services agency building modern websites and web applications.');
doc.text('- Design and implement custom business solutions, e-commerce platforms, and landing pages.');
doc.text('- Drive client acquisition and ensure high-quality project delivery using modern tech stacks (React, Next.js).');
doc.moveDown(1);

// Experience 2
doc.fontSize(11).font('Helvetica-Bold').fillColor(primaryColor).text('Document & Visa Processing Specialist', { continued: true });
doc.font('Helvetica').text(' | Masagena Jaya Maritim', { align: 'left' });
doc.fontSize(10).fillColor(accentColor).text('Current Position');
doc.moveDown(0.3);
doc.fontSize(10).fillColor(secondaryColor);
doc.text('- Verify the authenticity and validity of seafarer documents to ensure compliance with maritime regulations.');
doc.text('- Manage and track document expiration dates to prevent sailing complications.');
doc.text('- Assist over 100+ seafarers with visa applications and processing across 15+ countries.');
doc.moveDown(1.5);

// Education
doc.fontSize(14).font('Helvetica-Bold').fillColor(primaryColor).text('EDUCATION');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').fillColor(primaryColor).text('Bachelor of Information Systems', { continued: true });
doc.font('Helvetica').text(' | STIE Bina Tunggal Bekasi', { align: 'left' });
doc.fontSize(10).fillColor(accentColor).text('2022 - Present (Currently 6th Semester)');
doc.moveDown(0.3);
doc.fontSize(10).fillColor(secondaryColor);
doc.text('- Focusing on software development, business systems, and database management.');
doc.moveDown(1.5);

// Skills
doc.fontSize(14).font('Helvetica-Bold').fillColor(primaryColor).text('TECHNICAL SKILLS');
doc.moveDown(0.5);
doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text('Web Technologies: ', { continued: true });
doc.font('Helvetica').fillColor(secondaryColor).text('React, Next.js, HTML, CSS, JavaScript, TypeScript, Tailwind CSS.');
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text('Tools & Design: ', { continued: true });
doc.font('Helvetica').fillColor(secondaryColor).text('Git, GitHub, Figma, UI/UX Prototyping, Framer Motion.');
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text('Soft Skills: ', { continued: true });
doc.font('Helvetica').fillColor(secondaryColor).text('Project Management, Client Relations, Document Compliance, Problem Solving.');

// Finalize PDF file
doc.end();

console.log('CV successfully generated at ' + outputPath);
