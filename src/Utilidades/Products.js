const Productos = [
        {
        'id': 1,
        'title': 'fernet',
        'precio': 750,
        'thumbnailUrl': 'https://carrefourar.vtexassets.com/arquivos/ids/226775/7790290101602_02.jpg?v=637715449494370000'
        },
        {
        'id': 2, 
        'title': 'gancia',
        'precio': 500, 
        'thumbnailUrl': 'https://carrefourar.vtexassets.com/arquivos/ids/195245/7790950000160_11.jpg?v=637516045098470000'
        },
        {
        'id': 3,
        'title': 'smirnof', 
        'precio': 600, 
        'thumbnailUrl': 'https://carrefourar.vtexassets.com/arquivos/ids/187357/7791250001345_02.jpg?v=637468601073430000'
        },
        {
        'id': 4, 
        'title': 'baron b', 
        'precio': 1500, 
        'thumbnailUrl': 'https://carrefourar.vtexassets.com/arquivos/ids/174843/7790975022345_01.jpg?v=637468566488530000'
        }
]


let is_ok = true; 

export const getProducts = async(time) => {
        return new Promise((resolve, reject) => {
                if (is_ok) {
                    setTimeout(() => {
                        resolve(Productos)
                    }, time);
                } else {
                    reject("Error")
                }
            });
}