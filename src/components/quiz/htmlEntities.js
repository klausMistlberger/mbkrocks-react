export function convertHTMLEntities (string) {
    return string
        .replace( /&quot;/g, '"' )
        .replace( /&ldquo;/g, '“' )
        .replace( /&rdquo;/g, '”' )
        .replace( /&#039;/g, "'" )
        .replace( /&lsquo;/g, "‘" )
        .replace( /&rsquo;/g, "’" )
        .replace( /&Aring;/g, "Å" )
        .replace( /&aring;/g, 'å' )
        .replace( /&amp;/g, '&' )
        .replace( /&eacute;/g, 'é' )
        .replace( /&deg;/g, '°' )
        .replace( /&uuml;/g, 'ü' )
        .replace( /&ouml;/g, 'ö' )
};