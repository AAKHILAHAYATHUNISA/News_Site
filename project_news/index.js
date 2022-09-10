console.log("hiii");
// sourse = 'bbc-news';
// apikey = 
let newsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsdata.io/api/1/news?apikey=pub_93757ff541fdf5faeb25c49ef763515cf6f9&q=news&country=in&language=en', true);
// console.log("hiii");

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let results = json.results;
        // console.log(results);
        let newsHtml = "";
        results.forEach(function (element, index) {
            console.log(element, index);
            let news =`<div class="card">
                < div class ="card-header" id = "heading${index}" >
        <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}"
                aria-expanded="false" aria-controls="collapse${index}">
                ${element["title"]}
            </button>
        </h5>
        </div >

    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body">
            ${element["content"]}.<a href="${element["link"]}" target="_blank">Read more</a>
        </div>
    </div>
    </div > `
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("some error occured")
    }
}
xhr.send()


