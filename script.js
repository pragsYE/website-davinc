document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function showPopup(content) {
    var contentHtml = "<p>" + content + "</p>";
    document.getElementById('popupContent').innerHTML = contentHtml;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Updated showPopup function for boxs
function showBoxPopup(boxContent) {
    document.getElementById('popupContent').innerHTML = boxContent;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

// Add event listeners to boxs elements
document.querySelectorAll('.boxs').forEach(box => {
    box.addEventListener('click', function () {
        var boxContent = this.textContent || this.innerText;
        showBoxPopup(boxContent);
    });
});

function setCustomContent(content) {
  var button = event.target;
  button.style.setProperty('--content', "'" + content + "'");
}

function resetContent() {
  var button = event.target;
  button.style.setProperty('--content', "''");
}
