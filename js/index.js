//Random quotes
$(document).ready(function() {
  $("#quote-button").on("click", function() {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback=", function(a) {
      let content = "",
        author = "",
        num = Math.floor(Math.random() * 30);
      author = a[num]["title"];
      content = a[num]["content"];
      $("#quote").html(content);
      $("#author").html("- " + author);
    });
  });
});
//Share quote on Twitter
$("#twitter-button").on("click", function() {
  const text = `${$('#quote').text()} ${$('#author').html()}`;
  const link = `https://twitter.com/intent/tweet?text=${text}&hashtags=freeCodeCamp`;
  window.open(link, '_blank');
});
