var CatStore = ((oldCatStore) => {
  let cats = []; //cannot overwrite array so switching to let

 oldCatStore.getCats = () => {
  	return cats;
  }
 oldCatStore.setAllCats = (allMyCats) => {
  	cats = allMyCats;
  };

	return oldCatStore;
})(CatStore || {});

// var crap = (()=> {

// })();


