(function() {
    let iframe = document.createElement("iframe");
    iframe.src = "https://rsuperbi.github.io/widgetteste/"; // Substituir pelo seu link
    iframe.style.position = "fixed";
    iframe.style.bottom = "20px";
    iframe.style.right = "20px";
    iframe.style.width = "350px";
    iframe.style.height = "450px";
    iframe.style.border = "none";
    iframe.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    iframe.style.borderRadius = "10px";
    iframe.style.zIndex = "9999";
    
    document.body.appendChild(iframe);
})();

