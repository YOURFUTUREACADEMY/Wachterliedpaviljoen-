AFRAME.registerComponent('content', {

    schema: {
        title: {
            type: 'string',
            default: 'Here will be HTML formated title '
            // Title of the text
        },
        content: {
            type: 'string',
            default: 'Here will be HTML formated text '
            // The text it self
        },
        image: {
            type: 'asset',
            default: ''
            // The image file
        },
        imageAlignment: {
            type: 'string',
            default: 'right'
            // Position of the image in the modal
        }
    },

    init: function () {

    },
    update: function () {
        const textTitle = this.data.title; // Get the title from data
        const textContent = this.data.content; // Get the text content from data
        const image = this.data.image; // Get the image src from data
        const imagePos = this.data.imageAlignment; // Get the image alignment from data
        const modal = document.getElementById('textModal');// Get the modal
        const closeBtn = document.getElementById("closeBtn");// Get the modal

        // When the user clicks the button, open the modal and show the title, text, image and placement of the image
        this.el.addEventListener('click', function (evt) {
            document.getElementById("modal-image").src = image;
            document.getElementById("modal-image").onload = function () {
                document.getElementById("modal-title").innerHTML = textTitle;
                document.getElementById("modal-text").innerHTML = textContent;
                if (imagePos === "left") {
                    document.getElementById("flex-inner").style.flexDirection = "row-reverse";
                } else {
                    document.getElementById("flex-inner").style.flexDirection = "row";
                }
                modal.style.display = "block";
                closeBtn.style.display = "block";
            };

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event){
                if (event.target === modal) {
                    hidemodal();
                }
            };
        });
        // When the user clicks on <closeBtn> (x), close the modal
        closeBtn.addEventListener('click', function (evt) {
         hidemodal();
        });
        //Function to hide the modal
        function hidemodal(){
            modal.style.display = "none";
            closeBtn.style.display = "none";
        }

    }
});

