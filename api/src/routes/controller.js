

ordenarObjeto = (item)=>{
  // console.log(item)
  let arr =[]
  console.log(item.analyzedInstructions)
    if (item.analyzedInstructions) {
      item.analyzedInstructions.forEach(item =>{

          item.steps.forEach(i =>{
            arr.push(i.step)
          })
      })
    }else{ arr.push(item.instructions)}

   obj = {
      id: item.id,
      title: item.title,
      summary: item.summary,
      spoonacularScore: item.spoonacularScore,
      healthScore: item.healthScore,
      instructions: arr,
      image: item.image,
      api: item.api,
   }
   return obj
}

module.exports = {
  ordenarObjeto:ordenarObjeto
}