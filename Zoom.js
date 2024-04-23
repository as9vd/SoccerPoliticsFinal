document.addEventListener('DOMContentLoaded', function () {
    var table = document.querySelector('.routing-table');

    function checkZoom() {
        var zoomLevel = window.outerWidth / window.innerWidth;
        if (zoomLevel > 1.3) {
            table.style.display = 'none';
        } else {
            table.style.display = 'flex';
        }
    }

    checkZoom();
    window.addEventListener('resize', checkZoom);
});
