//Products data (images, discriptions etc)
const appleProducts = [
    {
        model: 'iPhone 15 Pro Max 256gb Natural Titanium',
        image: 'images/apple/iphone.jpeg',
        price: '1200$',
        discription: 'The new Max has titanium sides rather than stainless steel, which saves the 19g but also shifts the balance of the phone towards its centre, making it feel lighter than it is. The design otherwise sticks closely to that introduced with the iPhone 12 Pro Max in 2020, with just a little bit of softening around the edges and slimmer bezels around the screen.',
    }, 
    {
        model: 'iPad Pro 11" M1 LTE 256gb Space Grey',
        image: 'images/apple/ipad.jpeg',
        price: '1000$',
        discription: 'The iPad Pro 11 is the smaller and, especially in terms of display, somewhat weaker version, of which the 4th generation was introduced in October 2022. At first glance, the tablet is virtually indistinguishable from its predecessor, but has received a performance update under the hood. ',
    },
    {
        model: 'AirPods Pro 2gen',
        image: 'images/apple/airpods.jpeg',
        price: '250$',
        discription: 'The AirPods Pro deliver excellent noise cancellation, but you might notice that the ANC seems weak initially. Simply wait a few seconds. The earphones first need to measure the surrounding noise and create a custom ANC profile appropriate for your current environment. And then, when it kicks in, its exceptional.',
    },
    {
        model: 'MacBook Pro 14" M1 Pro',
        image: 'images/apple/macbook.jpeg',
        price: '1500$',
        discription: 'The Mini-LED screen of the MacBook Pro 14 manages brightness values of more than 1500 nits in combination with HDR contents, but is otherwise limited to around 500 nits. This is a bit annoying, especially outdoors where a higher brightness would help. There is now an app called Vivid, which removes this limitation, so you can use the maximum brightness in every situation.',
    },
    {
        model: 'iMac 24" M3',
        image: 'images/apple/imac.jpeg',
        price: '1600$',
        discription: 'Its also the first iMac with Apples own M1 processor, and as weve seen from other M1 machines, the hardware is overall very reliable. That said, there are just a few quirks I hoped Apple wouldve addressed by now. ',
    },
]
const playstationProducts = [
    {
        model: 'Sony PlayStation 4 Slim 1Tb',
        image: 'images/playstation/ps4.jpeg',
        price: '300$',
        discription: 'The PS4 Slim offers the same insides as the original PS4 but benefits from a sleeker design that also conveniently shaves off a few figures from the price tag. Its a fantastic console, even compared to the PS4 Pro and the next-gen PS5, so even though it may be starting to show its age, it doesnt stutter for a moment.',
    }, 
    {
        model: 'Sony PlayStation 5 Blu-Ray 825gb',
        image: 'images/playstation/ps5.jpeg',
        price: '550$',
        discription: 'With the combination of a fresh UI, rapid SSD-fuelled load times, immersive 3D audio, and incredibly powerful hardware, the PS5 takes some generational strides over the PS4. For these reasons and more, once youve started playing the PS5, its hard to stop.',
    },
    {
        model: 'Sony PlayStation 3 Slim 320gb',
        image: 'images/playstation/ps3.jpeg',
        price: '100$',
        discription: 'The vast majority of PS3 consoles sold to date (Sony has shipped over 24 million of them so far) have been sold at a loss - even the original 60GB version which retailed at £425 made a thumping loss per unit.',
    },
    {
        model: 'Sony PlayStation Portable',
        image: 'images/playstation/psp.jpeg',
        price: '100$',
        discription: 'The hours I spent waiting for my flight, and the long journey home did little to dampen my excitement. Due to a disastrous clashing of work diaries, my wife was catching a plane to New York while I was landing at Heathrow airport, so I really did have nothing else to do when I arrived home but unbox the PS2 and get comfy on the couch.',
    },
    {
        model: 'Sony PlayStation Classic',
        image: 'images/playstation/classic.png',
        price: '200$',
        discription: 'Perhaps the harshness of the upscaling could have been mitigated had Sony included any alternative visual filters, such as a CRT simulation, to soften the image as found in Nintendo’s rival micro machines. But sadly, there are no visual settings to adjust whatsoever, which is disappointing.',
    },
]
const xboxProducts = [
    {
        model: 'Xbox',
        image: 'images/xbox/xbox1.jpeg',
        price: '100$',
        discription: 'Its March in 1999 and Sony is a year away from releasing its recently announced PlayStation 2. From a technological standpoint, the PS2 is a peerless powerhouse. Early demos showcase incredible 3D visuals and beautiful animation. Sony talks about modem support and DVD playback. This is the future of gaming, and we havent seen anything like it.',
    }, 
    {
        model: 'Xbox 360 Slim',
        image: 'images/xbox/xboxslim.jpeg',
        price: '150$',
        discription: 'When Microsoft launched the original Xbox at the end of 2001 I flew to New York to pick up a console, because the UK release date was several months after the US launch. Thankfully this time Microsoft hasnt made us Brits wait too long to get our hands on the goodies – a wait of a couple of weeks is bearable, and definitely doesnt warrant a trans-Atlantic crossing.',
    },
    {
        model: 'Xbox One S',
        image: 'images/xbox/ones.jpeg',
        price: '200$',
        discription: 'Three years after the Xbox One, the Xbox One S has been designed to take its place. As the smaller, quieter, higher-quality gaming console, it had a lot to say for itself, which is why its worked itself up to be one of the most highly-praised consoles to date.',
    },
    {
        model: 'Xbox Series X',
        image: 'images/xbox/seriesx.jpeg',
        price: '500$',
        discription: 'Lets talk power, folks! With a whopping 1TB SSD, its like having a storage vault for every gaming adventure imaginable. The 16GB RAM felt like having a brain that processes game data quicker than a cheetah chasing its prey. The console revved up like a finely tuned sports car, promising gaming speeds faster than my cat chasing a laser pointer.',
    },
    {
        model: 'Xbox Series S',
        image: 'images/xbox/seriess.jpeg',
        price: '300$',
        discription: 'The Xbox Series S is the best next-gen console for anyone on a budget or without a high-end 4K TV, with the added performance power allowing for significantly better graphics than what’s possible with an Xbox One S. The stingy 364GB storage capacity is inexcusable for a console lacking a disk drive, making the addition of a new 1TB Carbon Black model in June a welcome one.',
    },
]
const gamepadsProducts = [
    {
        model: 'Sony DualShock 4 Black',
        image: 'images/gamepads/dualshock.jpeg',
        price: '50$',
        discription: 'Although there have been plenty of updates to the DualShock 4 controller since then - and plenty of potentially better designs from rival tech companies - even now, years after launch, this PS4 controller is still as appealing to the eye as it is to the hands.',
    }, 
    {
        model: 'Sony DualSense Edge',
        image: 'images/gamepads/dualsense.jpeg',
        price: '200$',
        discription: 'The DualSense Edge feels like a premium controller; it weighs a tad more than the original DualSense at 322g and feels very sturdy. Every button has great responsiveness, with the back buttons and triggers feeling satisfyingly clicky.',
    }, 
    {
        model: 'Xbox Elite Controller',
        image: 'images/gamepads/elitecontroller.jpeg',
        price: '150$',
        discription: 'The Xbox Elite Wireless Controller is easily the most comfortable controller on the market, with rubberized grips, a cool-to-the-touch finish, and stainless steel components that can be swapped out to suit your needs. It also comes in white to match the special edition white Xbox One X.',
    }, 
    {
        model: 'Nintendo Switch Joy-Con',
        image: 'images/gamepads/joycon.jpeg',
        price: '100$',
        discription: 'The most unique thing about the Joy-Cons are the many ways you can choose to hold and use them. The Switch comes with a Joy-Con Grip giving it more of a traditional controller feel, and the Joy-Con Strap that allows players to hold one in each hand freely and securely. The Joy-Cons can also be attached to the console and played in handheld mode or put into the dock for TV mode.',
    }, 
    {
        model: 'Xbox Controller White',
        image: 'images/gamepads/xboxcontroller.jpeg',
        price: '60$',
        discription: 'The wireless functionality of the controller provides the freedom to move without being tethered by cords. The connection is reliable and responsive, delivering a seamless gaming experience whether Im in the midst of an intense battle or exploring an open-world environment. The controllers wireless range is impressive, ensuring a consistent connection with my Xbox console.',
    }, 
]
const headphonesProducts = [
    {
        model: 'Pulse 3D White',
        image: 'images/headphones/pulse3d.jpeg',
        price: '100$',
        discription: 'Like its predecessors, the new PS5 Pulse 3D Wireless Headset is definitely a strong performer in the sound department, offering detail-rich stereo and surround sound. However, new features like 3D Tempest AudioTech support are what make it one of the top headsets for the console.',
    },
    {
        model: 'Xbox Wireless Headset Black ',
        image: 'images/headphones/xboxheadphones.jpeg',
        price: '200$',
        discription: 'The Xbox Wireless Headset is alright for wireless gaming. These comfortable headphones are for Xbox consoles, so youll want to look elsewhere if you game on other consoles. Their default sound is bass-heavy and can be overwhelming, but their companion software offers a graphic EQ and presets to help you adjust it.',
    },
    {
        model: 'Razer Black Shark V2',
        image: 'images/headphones/razer.jpeg',
        price: '150$',
        discription: 'Had a similar priced set from Turtle Beach which required charging and had very poor sound quality. The BlackShark has great comfort, pretty decent noise cancelation which I didnt expect, and the sound quality is perfect for this price. Hands down superior to any other headset Ive tried for under $100. Ive had some $350 Astros and prefer these. Honestly. Plus, this is one of the few wired headsets Ive found that dont require a separate charge.',
    },
    {
        model: 'AirPods Max Space Grey',
        image: 'images/headphones/apmax.jpeg',
        price: '600$',
        discription: 'The AirPods Max is the best noise canceling headset out right now, but its not the easiest to use or even the most comfortable. The lack of a headphone jack is frustrating, and the “smart” case … isnt. If none of that bothers you, youll love the AirPods Max. If youre not sure this is for you, it probably isnt.',
    },
    {
        model: 'Beats by Dr.Dre Studio 3 Wireless',
        image: 'images/headphones/beats.jpeg',
        price: '400$',
        discription: 'The Beats Studio 3 Wireless are Beats, and therefore Apples, premier full-size wireless headphones, enduring as the brands flagship over-ear headphones since their release in 2017.',
    },
]

//Const and variables 
const appleCard = appleProducts.map( items => createProductCard(items));
const playstationCard = playstationProducts.map( items => createProductCard(items));
const xboxCard = xboxProducts.map( items => createProductCard(items));
const gamepadCard = gamepadsProducts.map( items => createProductCard(items));
const headphonesCard = headphonesProducts.map( items => createProductCard(items));

const menuNodes = {
    tags: document.querySelector('.category_list'),
}

const cardContainer = document.querySelector('.container_card');
const infoCardItem = document.querySelector('.info_card');

//Main listener
menuNodes.tags.addEventListener('click', showItemCards);



// Functions 
function showItemCards (event) {
    cardContainer.innerHTML = '';
    infoCardItem.innerHTML = '';
    infoCardItem.style.right = '-50%';

    if (event.target.textContent === 'Apple') {
        cardContainer.append(...appleCard);
    } else if (event.target.textContent === 'PlayStation') {
        cardContainer.append(...playstationCard);
    } else if (event.target.textContent === 'Xbox') {
        cardContainer.append(...xboxCard);  
    } else if (event.target.textContent === 'Gamepads') {
        cardContainer.append(...gamepadCard);
    } else if (event.target.textContent === 'Headphones') {
        cardContainer.append(...headphonesCard);
    }
    cardContainer.addEventListener('click', buyProductBar);
};

function createProductCard (products) {
    //create template
    const containerCard = document.createElement('div');
    const coverCard = document.createElement('img');
    const titleCard = document.createElement('h2');
    const priceCard = document.createElement('p');

    //attributes and values
    coverCard.setAttribute('data-discription', products.discription);
    containerCard.classList.add('item_card');
    coverCard.setAttribute('src', products.image);
    titleCard.textContent = products.model;
    priceCard.textContent = `Price: ${products.price}`;

    containerCard.append(titleCard, coverCard, priceCard);
    
    return containerCard;
}

function shoppingCart (event) {
    const shoppingCartContainer = document.createElement('div');
    const itemDiscription = document.createElement('h3');
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy!';
    
    buyButton.addEventListener('click', buttonActive);
    itemDiscription.textContent = event.target.getAttribute('data-discription');
    shoppingCartContainer.append(itemDiscription, buyButton);
    
    return shoppingCartContainer;
}

function buyProductBar (event) {
    infoCardItem.innerHTML = '';

    if (event.target.nodeName !== 'IMG') {
        infoCardItem.style.right = '-50%';
    } else {
        infoCardItem.append(shoppingCart(event));
        infoCardItem.style.right = '0';
    }
}

function buttonActive (event) {
        event.target.textContent = 'Succes';
        event.target.style.backgroundColor = 'rgb(58, 210, 78)';
        setTimeout(function() {
            infoCardItem.style.right = '-50%';
            infoCardItem.innerHTML = '';
            cardContainer.innerHTML = '';
        }, 500);
        buyButton.removeEventListener('click', buttonActive);
}


