// Tool tiles can be dragged around and spring back to where they started.
// Pointer events rather than a library: the tiles are positioned by the grid,
// so all this needs to do is offset them with a transform and release it.
(function () {
    var tiles = Array.prototype.slice.call(document.querySelectorAll('#home-tools .tile'));

    if (!tiles.length || !window.PointerEvent) {
        return;
    }

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    tiles.forEach(function (tile) {
        var startX = 0;
        var startY = 0;
        var pointerId = null;

        tile.classList.add('is-draggable');

        function move(event) {
            if (event.pointerId !== pointerId) {
                return;
            }
            tile.style.transform =
                'translate(' + (event.clientX - startX) + 'px,' + (event.clientY - startY) + 'px)';
        }

        function release(event) {
            if (event.pointerId !== pointerId) {
                return;
            }
            pointerId = null;
            tile.classList.remove('is-dragging');
            window.removeEventListener('pointermove', move);
            window.removeEventListener('pointerup', release);
            window.removeEventListener('pointercancel', release);

            // Spring back. The transition is cleared afterwards so the next
            // drag tracks the pointer instead of easing behind it.
            tile.style.transition = reduceMotion
                ? 'transform .15s ease-out'
                : 'transform .7s cubic-bezier(.2, 1.6, .4, 1)';
            tile.style.transform = 'translate(0px,0px)';

            window.setTimeout(function () {
                tile.style.transition = '';
                tile.style.transform = '';
            }, reduceMotion ? 160 : 720);
        }

        tile.addEventListener('pointerdown', function (event) {
            // Let links and middle/right clicks behave normally.
            if (event.button !== 0 || tile.tagName === 'A') {
                return;
            }
            pointerId = event.pointerId;
            startX = event.clientX;
            startY = event.clientY;
            tile.style.transition = '';
            tile.classList.add('is-dragging');
            window.addEventListener('pointermove', move);
            window.addEventListener('pointerup', release);
            window.addEventListener('pointercancel', release);
        });
    });
})();
