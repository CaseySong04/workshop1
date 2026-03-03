document.addEventListener('DOMContentLoaded', function() {
    
    var button = document.getElementById('click-button')
    var image = document.getElementById('dog-image');

    var buttonPressed =0;

    button.addEventListener('click', function(){
        button.classList.add('jackInTheBox-animation');

        if( buttonPressed=== 0){
            buttonPressed=1
            image.classList.add('opacity-0');

        } else {
            buttonPressed=0
            button.classList.add('jackInTheBox-animation');
            image.classList.remove('opacity-0')
        }
        
    })

});