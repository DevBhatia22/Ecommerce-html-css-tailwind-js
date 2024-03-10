//menu and options
const menu = document.querySelector('#menu');
const options = document.querySelector('#options');
menu.addEventListener('click', ()=>{
    options.classList.toggle('hidden');
});

//card hover
const card = document.querySelectorAll('.card');
card.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        item.childNodes[7].classList.toggle('md:invisible');
    });
      
    item.addEventListener('mouseleave', function() {
        item.childNodes[7].classList.toggle('md:invisible');
    });
});


//card hover
card.forEach((item, index) => {
    item.classList.add('hover:scale-110', 'transition', 'duration-500', 'hover:bg-amber-200');
})
//search
const cards = document.querySelectorAll('.cards');
if(cards.length > 0){
    const list = document.querySelector('#list');
    const search = document.querySelector('#search');
    const searcher = document.querySelector('.searcher');
    const selecter = document.querySelector('#selecter');
    let word = "";
    searcher.addEventListener('click', ()=>{
        word = search.value;
        word = word.toLowerCase();
        cards.forEach((item, index) => {
            if(!item.childNodes[1].childNodes[3].innerText.toLowerCase().includes(word) || !item.classList.contains(selecter.value)){
                item.classList.add('hidden');
                console.log(item.childNodes[1].childNodes[3].innerText.toLowerCase());
            }
            else{
                item.classList.remove('hidden');
            }
        });
    });

    //selecter
    selecter.addEventListener('change',()=>{
        cards.forEach((item, index) => {
            if(item.classList.contains(selecter.value) && item.childNodes[1].childNodes[3].innerText.toLowerCase().includes(word)){
                item.classList.remove('hidden');
            }
            else{
                item.classList.add('hidden');
            }
        });
    });
}
//cart
const addToCart = document.querySelector('.addToCart');
if(addToCart){
    addToCart.addEventListener('click',()=>{
        const parent = addToCart.parentNode.parentNode;
        const image = parent.childNodes[1].childNodes[1];
        const name = parent.childNodes[3].childNodes[1].innerText;
        const price = Number(parent.childNodes[3].childNodes[3].innerText.slice(1));
        localStorage.setItem(name, price);
        console.log(localStorage);
        addToCart.innerText = "Done";
    });
}

const cart = document.querySelector('.cart');
const all = ['Clasic Series: Alpha', 'Clasic Series: Beta', 'Clasic Series: Gama', 'Nova Series: Alpha', 'Nova Series: Beta', 'Nova Series: Gama', 'Retro Series: Alpha', 'Retro Series: Beta', 'Retro Series: Gama', 'Sapphire Skytime', 'Quantum', 'Crimson'];
const imgs = ['../image/Designer (34).jpeg', '../image/Designer (37).jpeg', '../image/lol.jpeg', '../image/Designer (38).jpeg', '../image/Designer (39).jpeg', '../image/Designer.jpeg', '../image/Designer (35).jpeg', '../image/1.jpeg', '../image/Designer (1).jpeg', '../image/Gemini_Generated_Image.jpg', '../image/lol1.jpeg', '../image/Designer (2).jpeg']
let total = 0;
if(cart){
    for(let i in all){
        if(localStorage.getItem(all[i])){
            let temp = document.createElement('div');
            temp.innerHTML = `<div class="flex h-20 gap-10 items-center">
            <img src="${imgs[i]}" class="h-full">
            <div class = "w-40">
                ${all[i]}
            </div>
            <div>
                ${localStorage.getItem(all[i])}
            </div>
            <span class="material-symbols-outlined">
                close
            </span>
            </div>`;
            temp.childNodes[0].childNodes[7].addEventListener('click',()=>{
                total -= Number(temp.childNodes[0].childNodes[5].innerText);
                localStorage.removeItem(temp.childNodes[0].childNodes[3].innerText);
                temp.parentNode.removeChild(temp);
                document.getElementById('total').innerHTML = "Total = " + total;
            })
            temp.classList.add('flex', 'gap-10');
            cart.appendChild(temp);
            console.log(localStorage.getItem(all[i]));
            total += Number(localStorage.getItem(all[i]));
        }
    }
    document.getElementById('total').innerHTML = "Total = " + total;
    document.getElementById('bye').addEventListener('click', ()=>{
        cart.innerHTML = " ";
        for(let i in all){
            if(localStorage.getItem(all[i])){
                localStorage.removeItem(all[i]);
            }
        }
        alert(`Thank you for Buying, i have no idea how you made the payment but here you are, paid ${total} frekin $s lol. So yeah, thank you, your watch is with Dev, The Greates Dev, Dev Bhatia, Thanks Mortal)`);
        total = 0;
        document.getElementById('total').innerHTML = "Total = " + total;
    });
}

//signup
const signup = document.getElementById('submit1');
console.log(signup);
document.querySelector('form').addEventListener('submit', (e)=> {e.preventDefault()});
if(signup){
    signup.addEventListener('click',()=>{
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        localStorage.setItem(username, password);
        alert("Done");
    });
}

//login
const login = document.getElementById('submit');
document.querySelector('form').addEventListener('submit', (e)=> {e.preventDefault()});
if(login){
    login.addEventListener('click',()=>{
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if(localStorage.getItem(username) != password){
            alert("access denied");
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
        }
        else{
            alert("access granted");
        }
    });
}