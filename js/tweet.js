$('a.tweet').click(function(e){
  e.preventDefault();
  var loc = window.location.href;
  var title  = $.trim($(".subheading").text()).substring(0, 90).split(" ").slice(0, -1).join(" ");
  var shortText = escape(title) + '...' + ' via @npulluri';
  window.open('http://twitter.com/share?url=' + loc + '&text=' + shortText + '&',
      'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +
      ', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
});
