//Random quotes
const api = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback=';

async function getQuote() {
  try {
    await axios.get(api)
      .then((getData) => {
        $('#quote-button').on('click', function () {
          let content = '';
          let author = '';
          const num = Math.floor(Math.random() * 30);
          author = getData.data[num].title;
          content = getData.data[num].content;
          $('#quote').html(content);
          $('#author').html(`- ${author}`);
        })
      });
    //Share quote on Twitter
    $('#twitter-button').on('click', function () {
      const text = `${$('#quote').text()} ${$('#author').html()}`;
      const link = `https://twitter.com/intent/tweet?text=${text}&hashtags=freeCodeCamp`;
      window.open(link, '_blank');
    });
  } catch (error) {
    console.log(error);
  }
}

getQuote();