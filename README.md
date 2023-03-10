# **note-taker**

## **Project Description**

This application allows users to take, save, and delete notes. Any changes in the notes data are stored into a JSON file. Existing notes will be automatically retrived from this file on page refresh. Express.js is implemented for efficient routing.

## **URLs**
- [Deployed Application URL](https://note-taker-jouriena11.herokuapp.com/)
- [GitHub Repository URL](https://github.com/jouriena11/note-taker)

## **Table of Contents**
- <a href="#installation">Installation</a>
- <a href="#technologies-used">Technologies Used</a>
- <a href="#usage">Usage</a>
- <a href="#future-development">Future Development</a>


## **Installation**
The following npm libraries must be installed to run this application:
- Express.js version 4.16.4
- UUID version 8.3.2

The installations can be done conveniently by the running the following command line at the root directory: \
```
npm i
```

## **Technologies used**
- HTML
- CSS
- Bootstrap
- JavaScript
- Node.js
- Express.js
- UUID

## **Usage**
Click 'Get Started' button to start the application.

<p align="left">
    <img width="700px" src="./public/assets/img/screenshot-get-started.jpg">
</p>

To Save a note -- Enter BOTH the note title and text, and a save button will appear on the top right corner of the page. Click the button to save the note.

<p align="left">
    <img width="700px" src="./public/assets/img/screenshot-save-note.jpg">
</p>

To Read an existing note -- Select a note you want to read from the notes list on the left side of the page. The note content will appear on the right side of the page.

<p align="left">
    <img width="700px" src="./public/assets/img/screenshot-read-note.jpg">
</p>

To Delete an existing note -- Select a bin button on the note you wish to delete.

<p align="left">
    <img width="700px" src="./public/assets/img/screenshot-delete-note.jpg">
</p>

## **Future Development**
- to allow editing existing notes