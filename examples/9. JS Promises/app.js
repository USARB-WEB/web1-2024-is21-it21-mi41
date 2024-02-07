const articles = [];


document.addEventListener('DOMContentLoaded', function () {
    getArticlesAsync().then(articles => {
        console.log(articles);
        let output = '';
        
    });

    // rederArticles(getArticlesSync());
    // renderMagicData(getMagicDataSync());

    getArticlesAsync().then(articles => {
        rederArticles(articles);
    }).catch(err => {
        document.getElementById('articles-container').innerHTML = 'Error loading articles';
    })
    
    

    getMagicDataAsync().then(data => {
        document.getElementById('async-loaded').innerHTML = data;
    });
    
})


function rederArticles(articles) {
    let output = '';
    articles.forEach(article => {
        output += `
            <div class="article">
                <h3>${article.title}</h3>
                <p>${article.content}</p>
            </div>
        `;
    });
    document.getElementById('articles-container').innerHTML = output;
    document.getElementById('loading').style.display = 'none';
}

function renderMagicData(data) {
    document.getElementById('async-loaded').innerHTML = data;
}

function getArticlesAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(articles.length > 0){
                resolve(articles);
            } else {
                reject('No articles found');
            }
            
            
        }, 2000);
    });
}


function getMagicDataAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Something magical happened!');
        }, 3000);
    });
}


function getArticlesSync() {
    setTimeout(() => {
        return articles;
    }, 2000);
}

function getMagicDataSync() {
    return 'Something magical happened!';
}