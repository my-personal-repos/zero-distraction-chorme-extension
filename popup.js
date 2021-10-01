chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    document.getElementById('url').innerText = tabs[0].title;
})
document.getElementById('btn').addEventListener('click', function(){
    chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
        window.open(tabs[0].url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=50,width=800,height=800");
        window.close()
    })
})