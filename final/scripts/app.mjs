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
            const data = await getData('https://kingemm.github.io/wdd231/final/data/product.json');
            let stores = data['stores']
            let symbol = await this.getCurrencySymbol();
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
                                <p>${symbol}${prd.price}</p>
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
                            <p>${symbol}${prd[0].price}</p>
                            <button class='cart_btn' data-value='${prd[0].id}'>Add to Cart</button>`
        
                    featured.appendChild(product_card);
    
                }
            }
        }
        catch(error){
            console.log('Failed to fetch');
        }
    }

    getCurrencySymbol = async()=>{
        let currency = await this.getLocation();
        currency = currency.currency.toUpperCase();
        let symbol = currencySymbols[currency];
        return symbol;
    }

    getProducts = async()=>{
        try{
            const data = await getData('https://kingemm.github.io/wdd231/final/data/product.json');
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
    getLocation = async ()=>{
        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         console.log(position.coords.latitude);
        //         console.log(position.coords.longitude);
        //         return [position.coords.latitude, position.coords.latitude];
        //     },
        //     async (error) => {
                console.log('Permision Denied');

                let data = await getData('https://ipapi.co/json/');
                console.log(data);
                return data;
                // try{
                //     let data = await fetch('https://ipapi.co/json/');
                //     console.log(data);
                //     console.log(data.city);
                //     console.log(data.region);
                //     console.log(data.country_name);
                // }
                // catch{
                //     console.log("Failed to Get ip");
                // }
        //     }
        // )
    }
}


// export const addCart = ()=>{
//         alert('hi')
// }

export const currencySymbols = {
  USD: "$",
  EUR: "€",
  GBP: "£", 
  JPY: "¥",
  CNY: "¥",
  CHF: "CHF",
  CAD: "C$",
  AUD: "A$",
  NZD: "NZ$",
  NGN: "₦",
  ZAR: "R",
  GHS: "₵",
  KES: "KSh",
  EGP: "£",
  MAD: "د.م.",
  TZS: "TSh",
  UGX: "USh",
  XOF: "CFA",
  XAF: "CFA",
  AED: "د.إ",
  SAR: "﷼",
  QAR: "﷼",
  KWD: "د.ك",
  BHD: ".د.ب",
  OMR: "﷼",
  ILS: "₪",
  TRY: "₺",
  IRR: "﷼",
  INR: "₹",
  PKR: "₨",
  BDT: "৳",
  LKR: "Rs",
  NPR: "₨",
  THB: "฿",
  IDR: "Rp",
  MYR: "RM",
  SGD: "S$",
  PHP: "₱",
  KRW: "₩",
  VND: "₫",
  HKD: "HK$", 
  TWD: "NT$",
  SEK: "kr",
  NOK: "kr",
  DKK: "kr", 
  PLN: "zł",
  CZK: "Kč", 
  HUF: "Ft",  
  RON: "lei",
  BGN: "лв", 
  HRK: "kn", 
  RUB: "₽",  
  UAH: "₴",
  MXN: "$",
  BRL: "R$",
  ARS: "$",
  CLP: "$",
  COP: "$",
  PEN: "S/",
  BOB: "Bs.", 
  DOP: "RD$",
  JMD: "J$", 
  TTD: "TT$",  
};


// export const data = getData('http://127.0.0.1:5500/project/data/product.json');


