var $footer = document.querySelector('#footer');
var $footerLink = $footer.querySelector('a');

/**
 * 1. Replace the footer text with the company's URL if it has been added
 * 2. Hide the footer if there is no URL to show
 */
if ($footerLink) { /* [1] */
    $footer.innerHTML = '<strong>Find out more</strong>: ' + $footerLink.getAttribute('href');
} else { /* [2] */
    $footer.style.display = 'none';
}
