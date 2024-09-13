const catalog = [
    {
        name:'АК-47',
        img:'https://cdn.britannica.com/70/123170-050-D7AAF458/AK-47.jpg',
        price:500,
        oldPrice:1000,
        currency:'$',
        description:'Какое-то описание'
    
    },
    {
        name:'Nike',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8QHviDsKhfWFi1ehgjERMjfGPFAFHZBDgQ&s',
        price:800,
        oldPrice:1500,
        currency:'$',
        description:'Какое-то описание'
    
    },
    {
        name:'Адидас Кампус',
        img:'https://d2ob0iztsaxy5v.cloudfront.net/product/270077/2700777250_zm.jpg',
        price:750,
        oldPrice:1900,
        currency:'$',
        description:'Какое-то описание'
    
    },
    {
        name:'Кроксы',
        img:'https://i5.walmartimages.com/asr/d15b955f-63ec-4cdc-aaa4-37b28807b81f.6856aa51ea991e5595d5396efb074517.jpeg',
        price:5400,
        oldPrice:3500,
        currency:'$',
        description:'Какое-то описание'
    
    },
]

const cards = document.querySelector('.cards')

catalog.forEach(card => {
    cards.innerHTML +=   `
                 <div class="card">
                    <img src="${card.img }" alt="">
                    <h3>${card.name}</h3>
                    <p>${card.description}</p>
                    <s>${card.oldPrice} ${card.currency}</s>
                    <h4>${card.price}</h4>
                    <button>Купить</button>
                </div>
    `
})
