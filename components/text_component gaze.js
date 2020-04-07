< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    script src = "https://aframe.io/releases/1.0.4/aframe.min.js" > < /script> <
    script src = "https://unpkg.com/aframe-event-set-component@5.0.0/dist/aframe-event-set-component.min.js" > < /script> <
    script src = "components/text_component.js" > < /script> <
    link rel = "stylesheet"
type = "text/css"
href = "css/style.css" >
    <
    title > Wachterliedpaviljoen goes digital - DEMO < /title>




<
body >


    <
    a - scene >
    <
    a - assets >
    <
    img id = "paveljoen"
src = "./img/Wachterliedpaviljoen.jpg" >
    <
    img id = "logo"
src = "./img/thuismaker.jpg" >
    <
    /a-assets> <
    a - sky src = "#paveljoen" > < /a-sky>

<
a - entity position = "0 1.6 0"
camera look - controls wasd - controls cursor = "rayOrigin: mouse" > < /a-entity> <
    a - entity position = "0 0 -5" >
    <
    a - entity id = "myBtn1"
geometry = "primitive: sphere;  radius: 1.5; "
rotation = "0 0 0"
position = "0 0 -3"
material = "src: #logo"
animation = "property: rotation; to: 0 360 0; loop: true; dur: 10000"
content = "title:Welkom bij het Wachterliedpaviljoen!; content:Dit is de demo voor de digitale VR omgeving; image: img/logo.jpg; imageAlignment:right" >
    <
    /a-entity>

<
/a-scene> <
div id = "textModal"
class = "modal " >
    <
    span id = "closeBtn"
class = "close" > & times; < /span> <
div class = "modal-content " >
    <
    div id = "flex-inner"
class = "flex-box" >
    <!--Flexbox is easy to to switch the order (left/right) of the image -->
    <
    div id = "text" >
    <
    h1 id = "modal-title" > < /h1> <
    p id = "modal-text" > < /p> <
    /div> <
    div id = "image" >
    <
    img id = "modal-image"
src = ""
alt = "" >
    <
    /div> <
    /div> <
    /div> <
    /div> <
    /head> <
    /body>

<
/html>     };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target === modal) {
    hidemodal();
}
};
});
// When the user clicks on <closeBtn> (x), close the modal
closeBtn.addEventListener('click', function(evt) {
    hidemodal();
});
//Function to hide the modal
function hidemodal() {
    modal.style.display = "none";
    closeBtn.style.display = "none";
}

}
});