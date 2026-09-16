// Filters the home page case study grid.
// The panel ships hidden and is revealed here, so with JS off every case study
// stays visible rather than being filtered into nothing.
(function () {
    var panel = document.querySelector('[data-filter-panel]');
    var disclosure = document.querySelector('[data-filter-disclosure]');
    var grid = document.querySelector('[data-case-study-grid]');
    var status = document.querySelector('[data-case-study-status]');
    var empty = document.querySelector('[data-case-study-empty]');
    var clear = document.querySelector('[data-filter-clear]');
    var search = document.querySelector('[data-filter-search]');

    if (!panel || !grid) {
        return;
    }

    var boxes = Array.prototype.slice.call(panel.querySelectorAll('[data-filter-group]'));
    var items = Array.prototype.slice.call(grid.querySelectorAll('.case-study-item'));
    var wide = window.matchMedia('(min-width: 1024px)');

    panel.hidden = false;

    // The disclosure only collapses on narrow screens; above that the summary
    // is hidden by CSS, so the panel has to stay open or it would be unusable.
    function syncDisclosure() {
        if (disclosure) {
            disclosure.open = wide.matches;
        }
    }
    syncDisclosure();
    if (wide.addEventListener) {
        wide.addEventListener('change', syncDisclosure);
    } else if (wide.addListener) {
        wide.addListener(syncDisclosure);
    }

    // Checked boxes, grouped: within a group the options are OR'd, and the
    // groups are AND'ed together. No checkboxes in a group means "any".
    function selections() {
        var groups = {};
        boxes.forEach(function (box) {
            if (!box.checked) {
                return;
            }
            var name = box.getAttribute('data-filter-group');
            (groups[name] = groups[name] || []).push(box.value);
        });
        return groups;
    }

    function matches(item, groups, query) {
        if (query && (item.getAttribute('data-search') || '').toLowerCase().indexOf(query) === -1) {
            return false;
        }

        var topics = groups.topics;
        if (topics && topics.length) {
            var roles = (item.getAttribute('data-roles') || '').split(' ');
            var hit = topics.some(function (topic) {
                return roles.indexOf(topic) !== -1;
            });
            if (!hit) {
                return false;
            }
        }

        var years = groups.year;
        if (years && years.length && years.indexOf(item.getAttribute('data-year')) === -1) {
            return false;
        }

        return true;
    }

    function apply() {
        var groups = selections();
        var query = search ? search.value.trim().toLowerCase() : '';
        var active = Object.keys(groups).length > 0 || query !== '';
        var shown = 0;

        items.forEach(function (item) {
            var keep = matches(item, groups, query);
            item.hidden = !keep;
            if (keep) {
                shown += 1;
            }
        });

        if (empty) {
            empty.hidden = shown !== 0;
        }

        if (clear) {
            clear.hidden = !active;
        }

        if (status) {
            if (!active) {
                status.textContent = 'Showing all ' + shown + ' case studies.';
            } else {
                // Plural agrees with the total, not the filtered count.
                status.textContent = 'Showing ' + shown + ' of ' + items.length + ' case studies.';
            }
        }
    }

    // Reflect each dropdown's selection in its summary, so a collapsed
    // dropdown still shows what it is filtering by.
    function syncDropdowns() {
        var dropdowns = Array.prototype.slice.call(
            panel.querySelectorAll('[data-filter-dropdown]'));

        dropdowns.forEach(function (dropdown) {
            var label = dropdown.querySelector('[data-filter-dropdown-value]');
            if (!label) {
                return;
            }
            var picked = Array.prototype.slice.call(
                dropdown.querySelectorAll('input:checked')).map(function (input) {
                    return input.value;
                });
            label.textContent = picked.length ? picked.join(', ') : 'Any';
        });
    }

    boxes.forEach(function (box) {
        box.addEventListener('change', function () {
            syncDropdowns();
            apply();
        });
    });

    if (search) {
        search.addEventListener('input', apply);
    }

    if (clear) {
        clear.addEventListener('click', function () {
            boxes.forEach(function (box) {
                box.checked = false;
            });
            if (search) {
                search.value = '';
            }
            syncDropdowns();
            apply();
        });
    }

    // A form submit would reload the page and lose the filter state.
    panel.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    syncDropdowns();
    apply();
})();
