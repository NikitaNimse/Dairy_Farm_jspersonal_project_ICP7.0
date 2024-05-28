function Inc7(){
    const  quantitytext=document.getElementById('qnty-text7');
    const showQuantity=document.getElementById('show-quantity7');
    const showtotal=document.getElementById('show-total7');

  let quantity= parseInt( quantitytext.innerText);
  
   if(quantity<10)
   {
        quantitytext.innerText=++quantity;
   }
  else
  {
    alert("you cant add more than 10 products");
  }
  showQuantity.innerText=`${quantity}*150`;
  showtotal.innerText= `Total:${quantity*150}`;
}


function Dec7(){
    const  quantitytext=document.getElementById('qnty-text7');
    const showQuantity=document.getElementById('show-quantity7');
    const showtotal=document.getElementById('show-total7');
    
  let quantity= parseInt( quantitytext.innerText);
    
 if(quantity>0)
 {
        quantitytext.innerText=--quantity;
        
 }
  else
  {
    alert("buy at least one product");
  }
  showQuantity.innerText=`${quantity}*150`;
  showtotal.innerText=`Total:${quantity*150 }`;

}



function Inc8(){
    const  quantitytext=document.getElementById('qnty-text8');
    const showQuantity=document.getElementById('show-quantity8');
    const showtotal=document.getElementById('show-total8');

  let quantity= parseInt( quantitytext.innerText);
  
   if(quantity<10)
   {
        quantitytext.innerText=++quantity;
   }
  else
  {
    alert("you cant add more than 10 products");
  }
  showQuantity.innerText=`${quantity}*300`;
  showtotal.innerText= `Total:${quantity*300}`;
}


function Dec8(){
    const  quantitytext=document.getElementById('qnty-text8');
    const showQuantity=document.getElementById('show-quantity8');
    const showtotal=document.getElementById('show-total8');
    
  let quantity= parseInt( quantitytext.innerText);
    
 if(quantity>0)
 {
        quantitytext.innerText=--quantity;
        
 }
  else
  {
    alert("buy at least one product");
  }
  showQuantity.innerText=`${quantity}*300`;
  showtotal.innerText=`Total:${quantity*300 }`;

}




function Inc9(){
    const  quantitytext=document.getElementById('qnty-text9');
    const showQuantity=document.getElementById('show-quantity9');
    const showtotal=document.getElementById('show-total9');

  let quantity= parseInt( quantitytext.innerText);
  
   if(quantity<10)
   {
        quantitytext.innerText=++quantity;
   }
  else
  {
    alert("you cant add more than 10 products");
  }
  showQuantity.innerText=`${quantity}*200`;
  showtotal.innerText= `Total:${quantity*200}`;
}


function Dec9(){
    const  quantitytext=document.getElementById('qnty-text9');
    const showQuantity=document.getElementById('show-quantity9');
    const showtotal=document.getElementById('show-total9');
    
  let quantity= parseInt( quantitytext.innerText);
    
 if(quantity>0)
 {
        quantitytext.innerText=--quantity;
        
 }
  else
  {
    alert("buy at least one product");
  }
  showQuantity.innerText=`${quantity}*200`;
  showtotal.innerText=`Total:${quantity*200 }`;

}