document.getElementById('downloadBtn').addEventListener('click', function() {
    // Replace 'your-app-filename.apk' with the actual filename of your APK.
    //var apkFilename = 'app-debug.apk';
    
    // Replace 'path/to/your/apk/' with the actual path to your APK file.
    var apkPath = 'app/DogBreed.zip' ;

    // Combine the path and filename to create the full download link.
    var downloadLink = apkPath;

    // Redirect the user to the download link.
    window.location.href = downloadLink;
});
