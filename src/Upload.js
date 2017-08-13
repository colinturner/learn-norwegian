window.onload = function() {
		var fileInput = document.getElementById('fileInput');
    var error = document.getElementById('error');
    var congratsOptions = ["Great choice!", "You're so good at this!", "What a selection! Wow!"];

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;

      // Check that the user submitted a .txt file
			if (file.type.match(textType)) {
        var randomCongratsMessage = congratsOptions[Math.floor(Math.random() * congratsOptions.length)];
        error.innerText = randomCongratsMessage;

				var reader = new FileReader();
        reader.readAsText(file);

        // Passes the .txt file's contents as a string to the WordCount function
				reader.onload = function() {
          new WordCount(reader.result).format();
				}

        // Prompt user to upload a .txt type file
			} else {
				error.innerText = "Please upload a .txt file!";
			}
		});
}

// I got inspiration for this code from: http://blog.teamtreehouse.com/reading-files-using-the-html5-filereader-api
