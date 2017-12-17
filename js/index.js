//Random quotes
$(document).ready(function() {
  $("#quote-button").on("click", function() {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback=", function(a) {
      var content = "",
        author = "",
        num = Math.floor(Math.random() * 30);
      author = a[num]["title"];
      content = a[num]["content"];
      $("#quote").html(content);
      $("#author").html("- " + author);
    });
  });
});

$("#twitter-button").on("click", function() {
  var text = document.getElementById('quote').textContent + ' ' + document.getElementById('author').innerHTML;
  var link = "https://twitter.com/intent/tweet?text=" + text + "&hashtags=freeCodeCamp";
  window.open(link, '_blank');
});
