
const FileFormat=(url='')=>{
    const fileExtension=url.split(".").pop();

    
    if(fileExtension==="mp4" || fileExtension==="webm" || fileExtension==="ogg") return "video";

    
    if(fileExtension==="jpg" || fileExtension==="jpeg" || fileExtension==="png" || fileExtension==="gif") return "image";

    
    if(fileExtension==="mp3" || fileExtension==="wav") return "audio";


    return "file";



};


const transformImage = (url = "", width = 100) => {
  
  
    return url;
  };



export {
    FileFormat,
    transformImage,
}