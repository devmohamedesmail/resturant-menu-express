function previewImage(event) {
    const input = event.target;
    const preview = document.getElementById('preview');
    
    // Check if a file is selected
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Set the src of the preview image to the uploaded file
            preview.src = e.target.result;
            // Make the preview image visible
            preview.classList.remove('hidden');
        };
        reader.readAsDataURL(input.files[0]);
    }
}