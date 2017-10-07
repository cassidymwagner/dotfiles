/*
 * Cette oeuvre, creation, site ou texte est sous licence Creative Commons
 * Attribution - Pas d'Utilisation Commerciale - Pas de Modification 4.0 International.
 * Pour acceder a une copie de cette licence, merci de vous rendre a l'adresse suivante
 * http://creativecommons.org/licenses/by-nc-nd/4.0/ ou envoyez un courrier a
 * Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
 *
 * Reverse Youtube Playlist
 * Wolf Creations (http://WolfCreations.fr)
 *
 */


function RYP() {

	if ( arguments.callee._singletonInstance )
		return arguments.callee._singletonInstance;
	arguments.callee._singletonInstance = this;

	this.SCRIPT_VERSION = 2 ;
	//yt-uix-button-toggled playlist-bar-revers-button
	this.ReversePlaylistInfo = {id: 'playlist-bar-revers-button', name: '', classPressed: 'yt-uix-button-toggled', cfgEtat: 'reverseEtat'};
	this.buttonReverse = '<button id="%(id)s" title="%(name)s" tooltip-text="%(name)s" onclick=";return false;" class="yt-uix-tooltip toggle-revers yt-uix-button yt-uix-button-player-controls yt-uix-button-size-default yt-uix-tooltip yt-uix-button-empty %(class)s" type="button" data-button-toggle="true" role="button">' +
			'<span class="yt-uix-button-icon-wrapper">' +
			'<img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-revers" src="http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="%(name)s" title=""></span></button>';

	this.debug = false;
	this.cfg = {'VERSION': this.SCRIPT_VERSION, 'reverseEtat': false};

	this.StateReversed = false;
	this.NBVids = 0;
}

var DEBUG = false;
var sDebug = function( Text ) {
	if ( DEBUG )
		console.info( Text );
};
RYP.prototype.cfgSet = function( Name, Value ) {
	this.cfg[Name] = Value;
	chrome.storage.local.set( this.cfg );

};
RYP.prototype.cfgGet = function( Name ) {
	return this.cfg[Name];
};

RYP.prototype.pageContain = function( Value ) {
	//sDebug( 'pageContain(' + Value + ')' );
	return ($( Value ).length > 0);
};

RYP.prototype.isInUrl = function( Value ) {
	sDebug( 'isInUrl(' + Value + ')' );
	return ($( location ).attr( 'href' ).toString().search( Value ) > -1);
};

RYP.prototype.insertButton = function( htmlCode ) {
	$( '.playlist-nav-controls:first' ).append( htmlCode );
};

RYP.prototype.sortPlaylist = function ( Reverse ) {

	sDebug('Stat : ' + this.StateReversed);
	sDebug('Reverse : ' + Reverse);
	if(this.StateReversed === Reverse)return;
	this.StateReversed = Reverse;
	HREFPrev = $('div.playlist-behavior-controls a.prev-playlist-list-item').attr('href');
	HREFNext = $('div.playlist-behavior-controls a.next-playlist-list-item').attr('href');
	$('div.playlist-behavior-controls a.prev-playlist-list-item').attr('href', HREFNext);
	$('div.playlist-behavior-controls a.next-playlist-list-item').attr('href', HREFPrev);

	Count = this.NBVids;
	sDebug( 'Inversion de la playlist ');
	$( 'ol.playlist-videos-list li' ).each( function( i, li ) {
		$(li).attr({'data-index': Count--})
			 .prependTo('ol.playlist-videos-list');
	} );
	Selected = $('ol.playlist-videos-list>li.currently-playing').attr('data-index');
	$( 'ol.playlist-videos-list:first' ).scrollTop((Selected - 1) * 65);
	/*
	 * @Todo
	 * update thumbnails
	 *
	 */
};

RYP.prototype.InitReverseElements = function () {
	this.NBVids = $( 'ol.playlist-videos-list:first' ).children('li').length;
};


RYP.prototype.InitButtons = function () {
	// On l'active suivant l'etat de la configuration
	this.ReversePlaylistInfo.class = ((this.cfgGet( this.ReversePlaylistInfo.cfgEtat )) ? this.ReversePlaylistInfo.classPressed : '');
	this.ReversePlaylistInfo.name = chrome.i18n.getMessage('ryp_button');
	if(this.ReversePlaylistInfo.name == '')this.ReversePlaylistInfo.name = 'Reverse the order of the playlist'
	// On insere le boutton
	this.insertButton( jQuery.sprintf( this.buttonReverse, this.ReversePlaylistInfo ) );
	sDebug( '* sortPlaylist : ' + this.cfgGet( this.ReversePlaylistInfo.cfgEtat ));
	// On organise la playlist
	this.sortPlaylist(this.cfgGet( this.ReversePlaylistInfo.cfgEtat ));

	// onClick
	$( '#' + this.ReversePlaylistInfo.id + ':last' ).mousedown( function() {
		I = new RYP();
		I.cfgSet( I.ReversePlaylistInfo.cfgEtat, Boolean(!$( this ).hasClass( I.ReversePlaylistInfo.classPressed )) );
	} );
	$( '#' + this.ReversePlaylistInfo.id + ':last' ).attr('onclick', 'window.'+$('ol.playlist-videos-list.yt-uix-scroller').attr('data-scroll-action')+'();return false;');
	// On ajoute un trigger sur le changement
	//changeSet[key].oldValue changeSet[key].newValue);
	chrome.storage.onChanged.addListener(function(changeSet, areaName) {
		I = new RYP();
		if(areaName === 'local')
			for (cfgName in changeSet)
				if(cfgName === I.ReversePlaylistInfo.cfgEtat){
					I.sortPlaylist(changeSet[cfgName].newValue);

				}
	 });

};

RYP.prototype.Action = function() {
	sDebug( 'Action()' );
	if ( !isInUrl( 'list=' ) )
		return;
	if ( pageContain( '#' + this.ReversePlaylistInfo.id ) )
		return;
};

RYP.prototype.Chargement = function() {
	if(this.pageContain('#playlist-bar-revers-button'))return;
	this.StateReversed = false;
	this.NBVids = $( 'ol.playlist-videos-list:first' ).children('li').length;

	chrome.storage.local.get( null, function( result ) {
		I = new RYP();
		if( result.VERSION === undefined || result.VERSION !== I.SCRIPT_VERSION ){
			// Mauvaise version de la config
			chrome.storage.local.clear();
			chrome.storage.local.set(I.cfg, function(){
				sDebug( '*** MAUVAISE version *** ');
				sDebug( 'GetConfig : ');
				sDebug( result );
				I.InitButtons();
			});
		}else{
			// Bonne version de la config
			I.cfg = result;
			sDebug( '*** Bonne version *** ');
			sDebug( 'GetConfig : ');
			sDebug( result );
			I.InitButtons();
		}
	} );


};

function Init(){
	//var S = new RYP();
	//(new RYP()).Chargement();
	setInterval('(new RYP()).Chargement()', 1000);
}
$(function(){
Init();
});
