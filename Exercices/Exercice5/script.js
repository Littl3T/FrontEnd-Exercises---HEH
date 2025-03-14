window.onload = function() {
    setTimeout(() => {
        let emails = document.getElementsByClassName('email');

        Array.from(emails).forEach(element => {
            if (element.classList.contains('std')) {
                element.textContent = element.textContent + "@std.heh.be";
            } else {
                element.textContent = element.textContent + "@heh.be";
            }
        });
    }, 250);
};