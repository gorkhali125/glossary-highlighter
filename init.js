(function () {
    jQuery(document).ready(function () {
        var highlightText = jQuery('.body');

        var glossaries = ['matters', 'hungry', 'rumbling', 'began'];
        if (glossaries != null) {
            for (var key in glossaries) {
                var glossaryTerm = glossaries[key];
                highlightText.highlight(glossaryTerm, "highlight");
            }
        }

        jQuery('span.highlight').css({ 'background-color': '#DDDCDA', 'padding': '1px', 'border-radius': '1px' });
    });
})();