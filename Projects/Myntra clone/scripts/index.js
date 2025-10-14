let itemsContainerElement = document.querySelector(".items-container");
let innerHTML = '';

items.forEach((item)=>{

    innerHTML += `
    <div class="item-container">
                <img class="item-img" src='${item.image}'alt="item1">
                <div class="rating">
                    ${item.rating.stars}⭐ | ${item.rating.count} 
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-nam">${item.item_name}</div>
                <div class="pric">
                    <span class="currnet-price">Rs ${item.current_price}</span>
                    <span class="orignal-price">Rs ${item.original_price} </span>
                    <span class="discount-price">(${item. discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag">Add To Bag</button>
            </div>
  `;
})

 itemsContainerElement.innerHTML = innerHTML

//   <div class="item-container">
//                 <img class="item-img" src='${items.item_image}'alt="item1">
//                 <div class="rating">
//                     ${items.ratings.stars}⭐ | ${items.ratings.numOfReview} 
//                 </div>
//                 <div class="company-name">${items.company_name}</div>
//                 <div class="item-nam">${items.item_name}</div>
//                 <div class="pric">
//                     <span class="currnet-price">Rs ${items.current_price}</span>
//                     <span class="orignal-price">Rs ${items.orignal_price} </span>
//                     <span class="discount-price">(${items.discount_price}% OFF)</span>
//                 </div>
//                 <button class="btn-add-bag">Add To Bag</button>
//             </div>

// `;
