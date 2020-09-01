// array of questions for user
const fs = require ("fs")
const inquirer = require("inquirer")
const fileName = "README.md"
const generateMarkdown = require ("./utils/generateMarkdown")


inquirer.prompt([
    
        {message: "What is the name of your Project",name: "Title"},
        {message: "Describe your Project",name: "description"},
        {message: "What CDN do you need to install ?", name:"Installation"},
        {   type: "checkbox",
            message: "What Licence do you want",
            name: "licenses", 
            choices: [
            "IBM",
            "Mozilla",
            "ISC"]
        },
        {message: "What Examples do you want?", 
        name: "examples",
        
        },
        {   type:"checkbox",
            message: "What files are you creating ",
            name: "contrubtions",
            choices:["script","css", "html", ]
        },
        {message: "What is your github username",name: "contact"},
   
]).then((answers)=>{
    // generateReadme(answers)
    const text= generateMarkdown(answers)
    fs.writeFile(fileName,text, {}, (err)=>{
        if (err){
            console.log(error)
            return
        }
        console.log("success")
    })

})
.catch((error) => {

    console.log(error);

});