console.log("MAi index.js hu");

//Initialize the news api parameters
let source = 'bbc-news';
let apiKey = 'a96b47cd74694f9cac294c6d59ebec54';


//Grab the news Container
let newsAccordion = document.getElementById('newsAccordion');

//Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);

//What to do when response is ready
xhr.onload = function () {
	if (this.status === 200) {
		let json = JSON.parse(this.responseText);
      let articles = json.articles;
      let newsHTML = "";
		// console.log(articles);
      articles.forEach(function(element,index){
         let news = `<div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-12">
         <div class="news-card">
            <div class="news-card-image">
               <img src="${element["urlToImage"]}" alt="news-image" class="img-fluid">
            </div>
            <div class="news-card-content">
               <span class="date">${element["publishedAt"]}</span>
               <p class="title">${element["title"]}</p>
               <p class="description">${element["description"]}</p>
               <a href="${element["url"]}" target="_blank" class="read-more">Read More</a>
            </div>
         </div>    
         </div>`;
         newsHTML += news;
      });

      newsAccordion.innerHTML = newsHTML;

	}
	else{
		console.log("Some error occured");
	}
}

xhr.send()

