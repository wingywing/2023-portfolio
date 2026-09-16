// Filters the home page case study grid by role.
// The filter bar ships hidden and is revealed here, so with JS off every
// case study stays visible rather than being filtered into nothing.
(function () {
    var filters = document.querySelector('[data-case-study-filters]');
    var grid = document.querySelector('[data-case-study-grid]');
    var status = document.querySelector('[data-case-study-status]');

    if (!filters || !grid) {
        return;
    }

    var chips = Array.prototype.slice.call(filters.querySelectorAll('[data-filter]'));
    var items = Array.prototype.slice.call(grid.querySelectorAll('.case-study-item'));

    filters.hidden = false;

    function apply(active) {
        var shown = 0;

        items.forEach(function (item) {
            var roles = (item.getAttribute('data-roles') || '').split(' ');
            var matches = active === 'all' || roles.indexOf(active) !== -1;
            item.hidden = !matches;
            if (matches) {
                shown += 1;
            }
        });

        chips.forEach(function (chip) {
            chip.setAttribute('aria-pressed', String(chip.getAttribute('data-filter') === active));
        });

        if (status) {
            if (active === 'all') {
                status.textContent = 'Showing all ' + shown + ' case studies.';
            } else {
                var label = filters.querySelector('[data-filter="' + active + '"] span');
                status.textContent = 'Showing ' + shown +
                    (shown === 1 ? ' case study' : ' case studies') +
                    (label ? ' in ' + label.textContent.trim() : '') + '.';
            }
        }
    }

    chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
            apply(chip.getAttribute('data-filter'));
        });
    });

    apply('all');
})();
