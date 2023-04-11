let janji = new Promise((resolve , reject) => {
  //isi dari promise yang akan dibuat

})


setTimeout(() =>{
  if(janji === "menonton film"){
    resolve("maka kamu akan senang")
  } else {
    reject("kamu tidak menonton film")
  }
  }, 20000 )


//method untuk mengetest promise
  janji.then((result) => {
    alert(result)
  }).catch(Error => {
    alert(Error)
  })

  