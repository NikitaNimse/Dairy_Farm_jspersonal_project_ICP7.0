function Inc4(){
    const  quantitytext=document.getElementById('qnty-text4');
    const showQuantity=document.getElementById('show-quantity4');
    const showtotal=document.getElementById('show-total4');

  let quantity= parseInt( quantitytext.innerText);
  
   if(quantity<10)
   {
        quantitytext.innerText=++quantity;
   }
  else
  {
    alert("you cant add more than 10 products");
  }
  showQuantity.innerText=`${quantity}*20`;
  showtotal.innerText= `Total:${quantity*20}`;
}


function Dec4(){
    const  quantitytext=document.getElementById('qnty-text4');
    const showQuantity=document.getElementById('show-quantity4');
    const showtotal=document.getElementById('show-total4');
    
  let quantity= parseInt( quantitytext.innerText);
    
 if(quantity>0)
 {
        quantitytext.innerText=--quantity;
        
 }
  else
  {
    alert("buy at least one product");
  }
  showQuantity.innerText=`${quantity}*20`;
  showtotal.innerText=`Total:${quantity*20 }`;

}



function Inc5(){
    const  quantitytext=document.getElementById('qnty-text5');
    const showQuantity=document.getElementById('show-quantity5');
    const showtotal=document.getElementById('show-total5');

  let quantity= parseInt( quantitytext.innerText);
  
   if(quantity<10)
   {
        quantitytext.innerText=++quantity;
   }
  else
  {
    alert("you cant add more than 10 products");
  }
  showQuantity.innerText=`${quantity}*50`;
  showtotal.innerText= `Total:${quantity*50}`;
}


function Dec5(){
    const  quantitytext=document.getElementById('qnty-text5');
    const showQuantity=document.getElementById('show-quantity5');
    const showtotal=document.getElementById('show-total5');
    
  let quantity= parseInt( quantitytext.innerText);
    
 if(quantity>0)
 {
        quantitytext.innerText=--quantity;
        
 }
  else
  {
    alert("buy at least one product");
  }
  showQuantity.innerText=`${quantity}*50`;
  showtotal.innerText=`Total:${quantity*50 }`;

}




function Inc6(){
    const  quantitytext=document.getElementById('qnty-text6');
    const showQuantity=document.getElementById('show-quantity6');
    const showtotal=document.getElementById('show-total6');

  let quantity= parseInt( quantitytext.innerText);
  
   if(quantity<10)
   {
        quantitytext.innerText=++quantity;
   }
  else
  {
    alert("you cant add more than 10 products");
  }
  showQuantity.innerText=`${quantity}*30`;
  showtotal.innerText= `Total:${quantity*30}`;
}


function Dec6(){
    const  quantitytext=document.getElementById('qnty-text6');
    const showQuantity=document.getElementById('show-quantity6');
    const showtotal=document.getElementById('show-total6');
    
  let quantity= parseInt( quantitytext.innerText);
    
 if(quantity>0)
 {
        quantitytext.innerText=--quantity;
        
 }
  else
  {
    alert("buy at least one product");
  }
  showQuantity.innerText=`${quantity}*30`;
  showtotal.innerText=`Total:${quantity*30 }`;

}