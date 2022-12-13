const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name 
	fs.writeFile(fileName,fileContent,(err)=>{
		console.log(err);
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName,'utf-8',(err,data)=>{
		if(err)
		console.log(err);
		else
		 console.log(data);
		
	})

}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent,(err)=>{
		console.log(err);
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName,(err)=>{
		console.log(err);
	})
}
myFileWriter('file8.txt','My name is');
myFileReader('file8.txt');
myFileUpdater('file8.txt',' swetha');
// myFileDeleter('file8.txt');



module.exports = { myFileWriter, myFileUpdater, myFileReader,myFileDeleter}