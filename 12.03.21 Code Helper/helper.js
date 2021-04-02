const fs = require('fs');
const path = require('path');

//let nodePath = process.argv[0];
//let appPath = process.argv[1];
//let className = process.argv[2];
//let param1 = process.argv[3];
//let data = "";
 
//console.log("nodePath: " + nodePath);
//console.log("appPath: " + appPath);
//console.log();
//console.log("name: " + className);
//console.log("age: " + param1);

class CodeHelper {

    constructor() {
        this.className = "";
        this.methodName = "";
        this.data = "";
        this.check = -1;
    }

    writeFile() {
        fs.writeFile(this.className + ".js", this.data, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("file written");
        });
    }

    run() {
        for (let item of process.argv) {
            if (item.includes("-help")) {
                this.data = "Enter class=className to create a class.\nEnter -ctor to create a class with constructor.\nEnter -meth to create a class with method.\n";
                this.check = -2;
                break;
            }
            if (item.includes("class")) {
                this.className = item.substring(item.indexOf("class=") + 6);
                this.data = `class ${this.className} {`
                this.check = 0;
            }
            if (item.includes("-ctor")) {
                this.data += `\n\n\tconstructor() {\n\n\t}`;
            }
            if (item.includes("-meth")) {
                this.methodName = item.substring(item.indexOf("-meth=") + 6);
                this.data += `\n\n\t${this.methodName}() {\n\n\t}`;
                break;
            }
        }
        
        if (this.check == 0) {
            this.data += `\n\n}\n\nmodule.export = ${this.className};`;      
            this.writeFile();
        }
        else if (this.check == -2) {
            console.log(this.data);
        }
    }
}

module.export = CodeHelper;

