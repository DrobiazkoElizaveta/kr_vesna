const brand_item = document.getElementById('marka').value
const type_item = document.getElementById('product').value
// console.log(brand_item, type_item);

async function krData(brand_item, type_item) {
  try{
    console.log('Fetch MakeUp started...')
    const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand_item}&product_type=${type_item}`)
    // console.log(response.status);
    const data = await response.json()
    console.log('Data:', getValue(data))
  } catch(e) {
    console.error(e);
  }
}

const spisok = []

function getValue(array) {
  for (let i = 0; i < array.length; i++) {
    // console.log(i);
    spisok[i] = {
      brand: array[i].brand,
      name: array[i].name,
      description: array[i].description,
      image_link: array[i].image_link,
      price: array[i].price,
    }
  }
  // console.log(array);
  // console.log(spisok);
  return spisok
}