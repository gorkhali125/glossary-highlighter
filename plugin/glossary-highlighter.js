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
        var glossaries = {
            'hungry': 'feeling or showing the need for food',
            'rumbling': 'a continuous deep, resonant sound',
            'aardvark': 'a nocturnal badger-sized burrowing mammal of Africa, with long ears, a tubular snout, and a long extensible tongue, feeding on ants and termites',
            'pinafore': 'a collarless sleeveless dress worn over a blouse or jumper',
            'humbugs': 'deceptive or false talk or behaviour',
            'nibble': 'take small bites out of',
            'hefty': 'large and heavy',
            'broomstick': 'a brush with twigs at one end and a long handle, on which, in children\'s literature, witches are said to fly',
            'souvenir': 'a thing that is kept as a reminder of a person, place, or event',
            'shrugged': 'raise (one\'s shoulders) slightly and momentarily to express doubt, ignorance, or indifference'
        };

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
                    jQuery('.holder').css({ top: e.pageY, left: e.pageX, position: 'absolute', background: '#eee' });
                    jQuery('.holder').css({ color: '#000000', padding: '5px', 'border-radius': '5px', 'font-size': '13px', 'width': '200px' });
                }
            }
        });

        jQuery('span.highlight').on('mouseout', function (e) {
            jQuery(this).css('cursor', 'default');
            jQuery('.holder').hide();
        });
    });
})(jQuery);