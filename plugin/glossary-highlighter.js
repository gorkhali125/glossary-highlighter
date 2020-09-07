(function (jQuery) {

    jQuery(document).ready(function () {

        //Main Highlight Function
        jQuery.fn.highlight = function (str, className) {
            if (str.search(/[\[\]?*+|{}\\()@.\n\r]/) == - 1) {
                var regex = new RegExp(str, "gi");
                return this.each(function () {
                    jQuery(this).html(jQuery(this).html().replace(regex, function (match) {
                        return "<span class=\"" + className + "\">" + match + "</span>";
                    }));
                });
            }
        };

        var highlightText = jQuery('.body');
        var glossaries = { 'matters': 'A substance', 'hungry': 'Empty Stomach', 'rumbling': 'Gudung Gudung', 'began': 'Started' };
        if (glossaries != null) {
            for (var glossaryTerm in glossaries) {
                highlightText.highlight(glossaryTerm, "highlight");
            }
            jQuery('<div class="holder"></div>').appendTo('.body');
            jQuery('span.highlight').css({ 'background-color': '#DDDCDA', 'padding': '1px', 'border-radius': '1px' });
        }

        jQuery('span.highlight').on('mouseover', function (e) {
            jQuery(this).css('cursor', 'wait');
            var word = jQuery.trim(jQuery(this).html());
            if (word != '') {
                jQuery('span.highlight').css('cursor', 'default');
                var glossary = glossaries[word];
                if (glossary === null) {
                    jQuery('.holder').hide();
                } else {
                    jQuery('.holder').text(glossary);
                    jQuery('.holder').show();
                    jQuery('.holder').css({ top: e.pageY, left: e.pageX, position: 'absolute', background: '#000000' });
                    jQuery('.holder').css({ color: '#ffffff', padding: '5px', 'border-radius': '5px' });
                }
            }
        });

    });
})(jQuery);