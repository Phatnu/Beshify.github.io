function speakText(){
    var text = document.getElementById('txt').value;
    responsiveVoice.speak(text);       
}