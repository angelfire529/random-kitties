
let request = require('request')
class CatService {
 static  _INSTANCE = null;

 static getInstance() {
    return !this._INSTANCE ? this._INSTANCE = new CatService() : this._INSTANCE;
 }
 
    GetRandomCat() {
        const config = {
            headers: {
                'X-Forwarded-Proto': 'http',
                'X-Forwarded-For': '54.243.143.247, 23.21.160.161',
                'X-Forwarded-Host': ''
            }
        }
        let promise = new Promise(function(resolve, reject) {
            request.get('https://evening-dusk-97569.herokuapp.com/api/cat', config, function (err, resp, body) {
                if (!err) {
                    const src = JSON.parse(body);
                    resolve(src);
                }
                else {
                    reject(err);
                }
            });
        });
        return promise;
    }

    GetImagesByCategory(category) {
        let cats = JSON.parse(localStorage.getItem('categories'))|| [];
        const found = cats.find(cat => {
            return cat.category.toLowerCase() === category.toLowerCase();
        });

        if (found) {
            return found.images;
        }
        return [];
    }

    AddCategory(newCategory, pic) {
        let categories = JSON.parse(localStorage.getItem('categories'));
        const newCat = { category: newCategory, images: [pic]};
        if (!categories) {
            categories = [newCat]
        }
        else {
         let index = -1;
         for(let i = 0; i < categories.length; i++) {
             if (categories[i].category.toLowerCase() === newCategory.toLowerCase()) {
                index = i;
                break;
             }
         }
         if  (index !== -1) {
             categories[index].images.push(pic);
         }
          else {
              categories.push(newCat);
          }
        }

        localStorage.setItem('categories', JSON.stringify(categories));
    }

    Exists(category) {
        let existing = JSON.parse(localStorage.getItem('categories')) || []
        const found = existing.find(e => { return e.category.toLowerCase() === category.toLowerCase()});
        return  found ? true : false;
    }
}



export default CatService.getInstance();