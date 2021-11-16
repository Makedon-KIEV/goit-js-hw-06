const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


//const createGalleryItem = ({ url, alt }) =>
  //`<li><img src="${url}" alt="${alt}" width = 200 height = 150></li>`;
//const galleryMarkup = images.reduce(
  //(acc, item) => acc + createGalleryItem(item),
  //""
//);
//const galleryList = document.querySelector(".gallery");
//galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
//galleryList.setAttribute("style", "list-style-type:none; display: flex;");




//for (let el of images) document.querySelector('.gallery').insertAdjacentHTML('beforeEnd', `<li><img src="${el.url}" alt="${el.alt}" width = 200 height = 150></li>`);

const list = document.querySelector('.gallery');
const createimg = images.map(image =>
  `<li> <img
src="${image.url}"
//alt="${image.alt}"/>
//</li>`).join("")
list.insertAdjacentHTML('afterbegin', createimg)



//let gallery = '';

//images.map(({ url, alt }) => {
 // gallery += `<li><img src="${url}" alt="${alt}" width="450px"></li>`;
//});

//const galleryElem = document.querySelector('.gallery');
//galleryElem.classList.add('gallery--task-03');
//galleryElem.insertAdjacentHTML('afterbegin', gallery);