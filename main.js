    const butt = document.querySelector('#burger');
    
    butt.onclick = function showMenu() {
        const x = document.querySelector('#menu');
        if (x.style.display === 'none') {
            x.style.display = 'contents';
        } else {
            x.style.display = 'none';
        }
    }