function TestsFunction() {
    var T = document.getElementById("project-body");
    T.style.display = "block";  // <-- Set it to block
}
var i=1;
function Tests1Function() {
    var T = document.getElementById("resume-body");
    if(i==1)
    {
    T.style.display = "block";  // <-- Set it to block
    i=0;
    }
    else
    {
        T.style.display = "none";  // <-- Set it to block
       i=1;
    }
}
function Tests2Function() {
    var T = document.getElementById("contact-body");
    T.style.display = "block";  // <-- Set it to block
}