# Temperature Converter Website

## Project Overview

This project is an interactive temperature converter website developed using HTML5, CSS3, and JavaScript. It allows users to enter a temperature value, select the input unit, and convert the value into Celsius, Fahrenheit, and Kelvin.

## Objective

The objective of this project is to create a simple, user-friendly temperature conversion tool with real-time input validation and proper handling of temperature limits.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Features

- Numeric temperature input field
- Celsius, Fahrenheit, and Kelvin input unit selection
- Conversion into all three temperature units
- Convert button for performing calculations
- Displays converted values with correct unit labels
- Validation for empty input
- Validation for non-numeric input
- Handles absolute zero violations
- User-friendly error messages
- Clean and centered user interface
- Responsive design for desktop and mobile devices
- CSS Flexbox for layout
- Interactive JavaScript functionality

## Temperature Conversion Formulas

### Celsius to Fahrenheit

°F = (°C × 9/5) + 32

Fahrenheit to Celsius
°C = (°F − 32) × 5/9

Celsius to Kelvin
K = °C + 273.15

Kelvin to Celsius
°C = K − 273.15

Project Structure
WebDev-L3-TemperatureConverter/
│
├── index.html
├── style.css
├── script.js
└── README.md
How to Run
Download or clone the project.
Open the project folder in Visual Studio Code.
Make sure index.html, style.css, and script.js are in the same folder.
Open index.html in a web browser.
Enter a temperature value.
Select the input unit.
Click the Convert Temperature button.
The converted values will be displayed.
Input Validation

The website validates user input before performing the conversion.

Empty input displays an error message.
Non-numeric input displays a validation message.
Temperatures below absolute zero are rejected.

The minimum possible temperatures are:

Celsius: -273.15 °C
Fahrenheit: -459.67 °F
Kelvin: 0 K
Responsive Design

The website is designed to work on both desktop and mobile screen sizes. CSS media queries are used to adjust the layout for smaller screens.

Project Purpose

This project was developed as part of the AICTE OIB-SIP Web Development and Designing Internship, Level 1 – Task 3: Temperature Converter Website.