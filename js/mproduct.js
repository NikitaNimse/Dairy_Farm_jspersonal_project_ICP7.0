function Inc1(){
    const  quantitytext=document.getElementById('qnty-text1');
    const showQuantity=document.getElementById('show-quantity1');
    const showtotal=document.getElementById('show-total1');

  let quantity= parseInt( quantitytext.innerText);
  
   if(quantity<10)
   {
        quantitytext.innerText=++quantity;
   }
  else
  {
    alert("you cant add more than 10 products");
  }
  showQuantity.innerText=`${quantity}*40`;
  showtotal.innerText= `Total:${quantity*40}`;
}


function Dec1(){
    const  quantitytext=document.getElementById('qnty-text1');
    const showQuantity=document.getElementById('show-quantity1');
    const showtotal=document.getElementById('show-total1');
    
  let quantity= parseInt( quantitytext.innerText);
    
 if(quantity>0)
 {
        quantitytext.innerText=--quantity;
        
 }
  else
  {
    alert("buy at least one product");
  }
  showQuantity.innerText=`${quantity}*40`;
  showtotal.innerText=`Total:${quantity*40 }`;

}



function Inc2(){
    const  quantitytext=document.getElementById('qnty-text2');
    const showQuantity=document.getElementById('show-quantity2');
    const showtotal=document.getElementById('show-total2');

  let quantity= parseInt( quantitytext.innerText);
  
   if(quantity<10)
   {
        quantitytext.innerText=++quantity;
   }
  else
  {
    alert("you cant add more than 10 products");
  }
  showQuantity.innerText=`${quantity}*500`;
  showtotal.innerText= `Total:${quantity*500}`;
}


function Dec2(){
    const  quantitytext=document.getElementById('qnty-text2');
    const showQuantity=document.getElementById('show-quantity2');
    const showtotal=document.getElementById('show-total2');
    
  let quantity= parseInt( quantitytext.innerText);
    
 if(quantity>0)
 {
        quantitytext.innerText=--quantity;
        
 }
  else
  {
    alert("buy at least one product");
  }
  showQuantity.innerText=`${quantity}*500`;
  showtotal.innerText=`Total:${quantity*500}`;

}




function Inc3(){
    const  quantitytext=document.getElementById('qnty-text3');
    const showQuantity=document.getElementById('show-quantity3');
    const showtotal=document.getElementById('show-total3');

  let quantity= parseInt( quantitytext.innerText);
  
   if(quantity<10)
   {
        quantitytext.innerText=++quantity;
   }
  else
  {
    alert("you cant add more than 10 products");
  }
  showQuantity.innerText=`${quantity}*35`;
  showtotal.innerText= `Total:${quantity*35}`;
}


function Dec3(){
    const  quantitytext=document.getElementById('qnty-text3');
    const showQuantity=document.getElementById('show-quantity3');
    const showtotal=document.getElementById('show-total3');
    
  let quantity= parseInt( quantitytext.innerText);
    
 if(quantity>0)
 {
        quantitytext.innerText=--quantity;
        
 }
  else
  {
    alert("buy at least one product");
  }
  showQuantity.innerText=`${quantity}*35`;
  showtotal.innerText=`Total:${quantity*35 }`;

}