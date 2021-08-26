function readArrays(slog) 
{
var fso = new ActiveXObject("Scripting.FileSystemObject");
var myFile = fso.OpenTextFile("C:\\Temp\\ubaza.csv", 1, false);						// Uèitavanje ulazne baze

var inputArray;
inputArray = myFile.ReadLine().split(';')											// ";" separator csv datoteke
for(i=0;i<inputArray.length;i++) 
{
 arrayNames[i]= inputArray[i];
 globalArray[arrayNames[i]]= new Array;                                             // Uèitavanje polja baze
}
var rowNum = 0;
while (!myFile.AtEndOfStream) 
{
  inputArray = myFile.ReadLine().split(';');
  for(i=0;i<inputArray.length;i++) 
	{
    	globalArray[arrayNames[i]][rowNum] = inputArray[i]
	}
 	rowNum +=1;																		// Slijedeæi slog
}