# Ototypo
Ototypo avoid line breaks before punctuation marks, parenthesis and curly braces by adding narrow no-break space instead of space. Mostly usefull for French Website.
## Install
```HTML
<script type="text/javascript" src="ototypo.js"></script>
```
## Initalize
```JavaScript
$('p').ototypo();		
```
## Setting up
You can choose to enable/disable it with specific marks. 
```JavaScript
$('p').ototypo({
		
	'QuestionMark': true,
    'ExclamationPoint': true,
    'Colon': true,
    'SemiColon': true,
	'Parenthesis': true,
	'CurlyBrace': true
           
	});		
```