import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";


inquirer
.prompt([
    {message: "Type in your URL : ",
     name: "URL"} // the curly braces are because this is a javascript object
])
.then((answers) => {
    const url = answers.URL;// this uses the answer from input named URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
})
.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});