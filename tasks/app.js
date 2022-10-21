function message() {
    var num=prompt();
    if (num<=0) {
      alert("Error: Please Enter Valid Number");  
    } else {
for (let i = 1; i < num; i++) {
if ((i%2)==1) {
    document.write(i + "<br>")
}
}
    }
}

