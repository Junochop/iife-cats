CatStore.catXHR();

document.getElementById("fancyPetStore").addEventListener('click', (event) =>{
  
  if(event.target.id.indexOf("adopt") === 0){
   //adopt is the first word of an id ..do something
   console.log('event', event);

   let catIndex = event.target.id.split('-')[1];
   CatStore.adoptCat(catIndex)
  }
});



document.getElementById("all").addEventListener('click', (event)=>{
  console.log('callan event', event);
  let cats = CatStore.getCats();
  let owners = CatStore.getOwners();

  CatStore.combineArrays(cats, owners);
});  

document.getElementById("homeless").addEventListener('click', (event)=>{
 
  CatStore.getCatsByOwner(0);

});

document.getElementById("zoe").addEventListener('click', (event)=>{
  
  CatStore.getCatsByOwner(1);

});

document.getElementById("callan").addEventListener('click', (event)=>{
  console.log('callan event', event);
  CatStore.getCatsByOwner(2);
});

document.getElementById("lauren").addEventListener('click', (event)=>{
 
  CatStore.getCatsByOwner(3);
});









