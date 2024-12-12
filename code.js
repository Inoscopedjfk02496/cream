
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "http://code.jquery.com/jquery-2.2.1.min.js";

    script.onreadystatechange = handler;
    script.onload = handler;

    head.appendChild(script);
$(body).append("<div style = 'width:100px; height:100px; background:red;'></div>");
console.log("c");
