(function($) {
    $.fn.ototypo = function(options) {

        var defauts = {
        	'QuestionMark': true, 		// points d'interrogation   	-> !
            'ExclamationPoint': true, 	// points d'exclamation 	-> ?
            
        	'Colon': true, 				// deux-points 				-> :
        	'SemiColon': true, 			// point-virgules 			-> ;

        	'Parenthesis': true, 		// parenthèses				-> ()

        	'CurlyBrace': true, 		// accolades				-> {}
           
        };

        var parametres = $.extend(defauts, options);

        return this.each(function() {
        
            var html = $(this).html();
            
            if (parametres.QuestionMark) {
                html = html.replace(/[ \u202F]*([?])/g, "\u202F$1 ");
            }

            if (parametres.ExclamationPoint) {
                html = html.replace(/[ \u202F]*([!])/g, "\u202F$1 ");
            }
            
            if (parametres.Colon) {
                 html = html.replace(/[ \u202F]*([:])/g, "\u202F$1 ");
            }

            if (parametres.SemiColon) {
                 html = html.replace(/[ \u202F]*([;])/g, "\u202F$1 ");
            }

            if (parametres.Parenthesis) {
                html = html.replace(/[ ]*([)])/g, "\u202F$1 ").replace(/[ ]*([(])/g, " $1\u202F");
            }

            if (parametres.CurlyBrace) {
                html = html.replace(/[ ]*([}])/g, "\u202F$1 ").replace(/[ ]*([{])/g, " $1\u202F");
            }

            $(this).html(html)
        });
    };
})(jQuery);