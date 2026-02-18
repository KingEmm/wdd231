export const getData = async(url) => {
    try{
        let response = await fetch(url);
        if(!response.ok){
            console.log("Invalid Url or Bad Response")
            console.log(response.status)
        }

        let data = await response.json();
        
        // console.log(data);
        return data
        }
    catch(error){
        console.log(error)
        }
}


export class Get{
    getFeatured = async(all)=>{
        try{
            const data = await getData('http://127.0.0.1:5500/final/data/product.json');
            let stores = data['stores']
            // console.log(stores);
            const featured = document.querySelector('.featured_product')
            for(let store in stores){
                const products = stores[store].products;
                // console.log(products);
                if(all){
                    for(let product in products){
                        // console.log(product)
                        const prd = products[product];
                        // console.log(prd)
                        let product_card = document.createElement('div');
                        product_card.classList.add('product_card');
                        product_card.innerHTML = `<img width="100" height="100" src="${prd.image}" loading="lazy" alt="product">
                                <p>${prd.name}</p>
                                <p>$${prd.price}</p>
                                <button class='cart_btn' data-value='${prd.id}'>Add to Cart</button>`;
            
                        featured.appendChild(product_card);
                    }
                }
                else{
                    const prd = products.sort(()=> .5 - Math.random()).slice(0, 1)
                    console.log(prd)
                    let product_card = document.createElement('div')
                    product_card.classList.add('product_card')
                    // product_card.value= 
                    product_card.innerHTML = `<img width="100" height="100" src="${prd[0].image}" loading="lazy" alt="product">
                            <p>${prd[0].name}</p>
                            <p>$${prd[0].price}</p>
                            <button class='cart_btn' data-value='${prd[0].id}'>Add to Cart</button>`
        
                    featured.appendChild(product_card);
    
                }
            }
        }
        catch(error){
            console.log('Failed to fetch');
        }
    }

    getProducts = async()=>{
        try{
            const data = await getData('http://127.0.0.1:5500/final/data/product.json');
            let stores = data['stores']
            // console.log(stores);
            // const featured = document.querySelector('.featured_product')
            let list = []
            for(let store in stores){
                const products = stores[store].products;
                products.forEach(element => {
                    list.push(element);
                });
                // console.log(products);
            }
            return list;
        }catch(error){
            console.log(error)
        }
    }
    getLocation = ()=>{
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                return [position.coords.latitude, position.coords.latitude];
            },
            async (error) => {
                console.log('Permision Denied');
                try{
                    let data = await fetch('https://ipapi.co/json/');
                    console.log(data);
                    console.log(data.city);
                    console.log(data.region);
                    console.log(data.country_name);
                }
                catch{
                    console.log("Failed to Get ip");
                }
            }
        )
    }
}


export const addCart = ()=>{
        alert('hi')
}

// export const data = getData('http://127.0.0.1:5500/project/data/product.json');


