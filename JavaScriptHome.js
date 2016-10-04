

   var ypos,content;
    function parallexContent () {
      ypos = window.pageYOffset;
      image = document.getElementById('content');
      image.style.top = ypos * -0.1 + 'em';
    }
    window.addEventListener('scroll',parallexContent);
    
    
     var ypos,secondContent;
    function parallex () {
      ypos = window.pageYOffset;
      image = document.getElementById('secondContent');
      image.style.top = ypos * -0.1 + 'em';
    }
    window.addEventListener('scroll',parallex);
   