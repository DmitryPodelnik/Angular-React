export function uploadFile (file) {
        
    console.log(file.name);

    // checking file type  
    if (!['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'].includes(file.type)) {
        alert('Only images are allowed.');
        return;
    }

    // checking file size
    if ((file.size < 40000 || file.size > 625000) && file.size !== null) {
        alert("File size must be between 40kb and 5mb");
        return;
    }

};