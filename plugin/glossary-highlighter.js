/**
 * glossary-highlighter.js
 * A Simple glossary/word highlighter plugin
 * 2020-09-02 - version 1.0.0
 * https://github.com/gorkhali125/glossary-highlighter/blob/master/glossary-highlighter.js
 * 
 * Copyright 2020 Deepesh khanal
 * Release under MIT License
 * https://opensource.org/licenses/MIT
 */

(function (jQuery) {

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

})(jQuery);