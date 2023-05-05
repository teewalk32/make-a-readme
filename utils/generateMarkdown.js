// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title} ![alt](https://img.shields.io/badge/License-${data.License}-blue)

  ## Description 
  ${data.Description}

  ## Table of Contents

   Description
  
   Installation

   Usage

   License

   Contributing

   Username

   Profile

   Email

   video of project 

   https://drive.google.com/file/d/1Y4C9yipCSEOFQLxKJXVDTt_L6Jqzytib/view


  ## Installation
  ${data.Installation}

  ## Usage

  ${data.Usage}

  ## License
  ${data.License}

  ## Contributing
  ${data.Contributing}

  ## Username
  ${data.Username}

  ## Profile
  ${data.Profile}

  ## Email
  ${data.Email}
`;
}

module.exports = generateMarkdown;
