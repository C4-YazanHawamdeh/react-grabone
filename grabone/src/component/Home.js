
import 'bootstrap/dist/css/bootstrap.min.css';

import { HiOutlineMail } from 'react-icons/hi';
import { BsChevronRight } from 'react-icons/bs';

import './home.css';

const arr = [
    [{
        img: "https://main-cdn.grabone.co.nz/goimage/fullsize/04415f855d95d575353119fea8cd15609e6e0e9f.jpg",
        title: "Luxury 5-Star Auckland Stay at...",
        dis: "Cordis",
        oldDis: "Auckland",
        bou: "160 bought",
        oldPrice: "$580",
        realPrice: "$279"
    },
    {
        img: "	https://main-cdn.grabone.co.nz/goimage/fullsize/6b81f9371561130e09120e51db955f21e7560244.jpg",
        title: " Full Head of Highlights Package & Style Cut",
        dis: "Vivo Hair and Skin Clinic",
        oldDis: null,
        bou: "123 bought",
        oldPrice: "$350",
        realPrice: "$195"
    }
    ],
    ///////////////////////////////////
    [{
        img: "https://main-cdn.grabone.co.nz/goimage/fullsize/04415f855d95d575353119fea8cd15609e6e0e9f.jpg",
        title: "Full Head of Highlights incl. Colour-Lock...",
        dis: "Vivo Hair and Skin Clinic",
        oldDis: null,
        bou: "129 bought",
        oldPrice: "$350",
        realPrice: "$195"
    },
    {
        img: "	//main-cdn.grabone.co.nz/goimage/325x225/ff50551fb8472dc60ec0d23111b44d28da0e4031.jpg",
        title: "Mt Cheeseman Ski area Lift Pass",
        dis: "mt Cheesman Ski Area",
        oldDis: "Christchurch",
        bou: "58 bought",
        oldPrice: "$45",
        realPrice: "$25"
    },
    {
        img: "//main-cdn.grabone.co.nz/goimage/325x225/89ecfea8250981ccc43c46178732d39dd62fdaed.jpg",
        title: "Delicious Branch or Lunch Experince",
        dis: "Westie Bistro",
        oldDis: "Auckland",
        bou: null,
        oldPrice: null,
        realPrice: "$40"
    },
    {
        img: "//main-cdn.grabone.co.nz/goimage/325x225/c95d9252741dedd00435295fec7c46bacc2fea7a.jpg",
        title: "5-Star Luxury Canterbury Getway",
        dis: "Fable Terrace Down M Gallery",
        oldDis: "Christchrch",
        bou: null,
        oldPrice: "$802",
        realPrice: "$399"
    },
    {
        img: "	https://main-cdn.grabone.co.nz/goimage/fullsize/6b81f9371561130e09120e51db955f21e7560244.jpg",
        title: "helloFresh Spical Offer",
        dis: "HelloFresh",
        oldDis: null,
        bou: "51 bought",
        oldPrice: "$93.93",
        realPrice: "$38.93"
    },
    {
        img: "//main-cdn.grabone.co.nz/goimage/325x225/429bdc7463188ea876f71130326094d6452ad12f.jpg",
        title: "Three-Day Able Tasman Self Guided Walk",
        dis: "Wilson Able Tasman National Park",
        oldDis: null,
        bou: "312 bought",
        oldPrice: "$1,445",
        realPrice: "$1,145"
    },
    {
        img: "//main-cdn.grabone.co.nz/goimage/325x225/c95d9252741dedd00435295fec7c46bacc2fea7a.jpg",
        title: "Central Auckland Boutique Stay for Two",
        dis: "Fable Auckland M Gallery",
        oldDis: "Auckland Central",
        bou: "57 bought",
        oldPrice: "$535",
        realPrice: "$299"
    },
    {
        img: "//main-cdn.grabone.co.nz/goimage/325x225/500e431528ed4f318f474246766024e7d80e4642.jpg",
        title: "Laser Teeth Whitening",
        dis: "Brazlilian Beauty Therapy",
        oldDis: "Mount Eden",
        bou: null,
        oldPrice: "$300",
        realPrice: "$79"
    },
    ],

    ///////////////////////////////////////////////////////////////////////////

    [
        {
            img: "https://mediacdn.grabone.co.nz/asset/cWllOdaxqn",
            title: "Ugg colleciton",
            dis: "muliple deals",
            oldDis: "Mount Eden",
            bou: null,
            oldPrice: "$300",
            realPrice: "$79"
        },
        {
            img: "https://mediacdn.grabone.co.nz/asset/DKqrqrT4pw",
            title: "Vivo Hair & Beauty",
            dis: "Brazlilian Beauty Therapy",
            oldDis: "Mount Eden",
            bou: null,
            oldPrice: "$300",
            realPrice: "$79"
        },
        {
            img: "	https://mediacdn.grabone.co.nz/asset/YaFw5GkDiY",
            title: "South island Getaways",
            dis: "Multiple deals",
            oldDis: "Mount Eden",
            bou: null,
            oldPrice: "$300",
            realPrice: "$79"
        },
        {
            img: "https://mediacdn.grabone.co.nz/asset/ZF4G1zPBzJ",
            title: "/bedroom Essentials",
            dis: "Multiple deals",
            oldDis: "Mount Eden",
            bou: null,
            oldPrice: "$300",
            realPrice: "$79"
        }

    ],
    //////////////////////////////////////////////////////////////////////////////
    [
        {
            img: "	//main-cdn.grabone.co.nz/goimage/325x225/4449bd298076c9b6ab9c79974d392331d4c89c9a.jpg",
            title: "Stay in the marlboroigh Sound for..",
            dis: "The Portaage - a THC Group Hotel",
            oldDis: "marlboroigh Sound",
            bou: "24 bought",
            oldPrice: "$673",
            realPrice: "$258"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/5c54db2750d537a7f9de07f1f1a151eb60d7447d.jpg",
            title: "Four-Star Family Rotorua Getway",
            dis: "Distinction Hotel - Rotorua",
            oldDis: null,
            bou: "545 bought",
            oldPrice: "$339",
            realPrice: "$169"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/1719b96c9ee175f185dc95a848bc4085fc4b0cba.jpg",
            title: "Luxury 4.5-star at Heritage quee..",
            dis: "Heritage queeenstwon",
            oldDis: "Queenstwon - Wanaka",
            bou: "474 bought",
            oldPrice: "$377",
            realPrice: "$179"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/d78d4bff7e79786fea3f2f75727cabe38051ffda.jpg",
            title: "Inclusive Hanmer Springs Getaway",
            dis: "Hanmer Springs hotel",
            oldDis: "Christchurch",
            bou: "17 bought",
            oldPrice: "$420",
            realPrice: "$189"
        }

    ],
    [
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/161d5965835747ec1354560cedbc63e57c9ff4e0.jpg",
            title: "Pen Fishing Rod Reel",
            dis: null,
            oldDis: null,
            bou: "7 bought",
            oldPrice: null,
            realPrice: "$54"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/2ac0497a45fd29fa6099fac020aa3df74c8ccb07.jpg",
            title: "Outdoor Pop-Up Tent",
            dis: null,
            oldDis: null,
            bou: null,
            oldPrice: null,
            realPrice: "$81"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/cb2e8a7624506dc5ceda5375d25e2d7a8763a06e.jpg",
            title: "Keychain Flashing Tool",
            dis: null,
            oldDis: null,
            bou: "5 bought",
            oldPrice: null,
            realPrice: "$29"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/23231ea52a5c5d1c56a071edf53f47967808cc13.jpg",
            title: "COB Head Mounted Outdoor Light H..",
            dis: null,
            oldDis: null,
            bou: "13 bought",
            oldPrice: null,
            realPrice: "$21"
        }


    ],
    [
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/b114de4ad1c555f0adae79a6df9c02bb8a28f686.jpg",
            title: "Xiaomi Mi Smart Band 6 Fitness TRaaker",
            dis: 'Urban Global Ltd',
            oldDis: null,
            bou: null,
            oldPrice: null,
            realPrice: "$74.99"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/8af35727db7708e67a241baf6e093ea61dfc57c3.jpg",
            title: "Box of Tamarillos",
            dis: 'Oakridge Fresh',
            oldDis: null,
            bou: null,
            oldPrice: null,
            realPrice: "$43"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/1caadf5602a682d9030d90f72c022fe6309f667c.jpg",
            title: "Full-Body Massage Chair",
            dis: null,
            oldDis: null,
            bou: null,
            oldPrice: null,
            realPrice: "$2,099.95"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/b762f60871814f5ad9c2c981e8a3edb9cc1b9331.jpg",
            title: "Eight-piece Comforter Set",
            dis: null,
            oldDis: null,
            bou: "40 bought",
            oldPrice: null,
            realPrice: "$139"
        }
    ],
    [
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/1b377a01e3ed108cbc421de894f12bb8a373047b.jpg",
            title: "Remuera Dining Experince for Two",
            dis: 'Remuurea Local & Laneway',
            oldDis: null,
            bou: "31 bought",
            oldPrice: '$40',
            realPrice: "$20"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/3462531ba0c33cb51e3960a80e2389b0d3c9c13a.jpg",
            title: "Five-Course European Dining Experien..",
            dis: 'Monsieur Madame',
            oldDis: 'Mount Eden',
            bou: "96 bought",
            oldPrice: null,
            realPrice: "$69"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/a16e1c19073e43ec821942ef496a2a2f4a6f6bde.jpg",
            title: "New zealands first Pure Kombucha ",
            dis: 'New Leaf Kombucha Ltd',
            oldDis: 'Grey Lynn',
            bou: "56 bought",
            oldPrice: '$23',
            realPrice: "$18"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/98b16cf6ea96602b9c32cdd62af5aa38d5e5e451.jpg",
            title: "Adult Ice Bar Entry incl. a Cocktail  ",
            dis: 'Minus 5° ICE BAR Queenstown',
            oldDis: 'Queenstown',
            bou: "570 bought",
            oldPrice: '$35',
            realPrice: "$16"
        }
    ],

    ////////////////////////////////////////////////////////////////////////

    [
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/6244364596f91c3551db8fbb41c3ff1bf5204978.jpg",
            title: "hair curling band",
            dis: 'Elah Hair And Beauty Limited',
            oldDis: null,
            bou: "7 bought",
            oldPrice: null,
            realPrice: "$15.50"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/171df40d41a3c909f29c526fe87acb3ee9b06b78.jpg",
            title: "Portable handheld pctopus massager",
            dis: null,
            oldDis: null,
            bou: "5 bought",
            oldPrice: null,
            realPrice: "$20"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/871d82637a4798b359a6ee1564a5bf31d9f2dbbd.jpg",
            title: "Rechargeable Nail Drill Machine",
            dis: null,
            oldDis: null,
            bou: "3 bought",
            oldPrice: null,
            realPrice: "$162"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/d0ca1346a04c2d12d7d800e3005631a02925a172.jpg",
            title: "Portable Electric Breast Pump ",
            dis: null,
            oldDis: null,
            bou: null,
            oldPrice: null,
            realPrice: "$48"
        }
    ],

    [
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/de226fd04db45b3b59a3f814a7ad2d3232f5cdd2.jpg",
            title: "10pc Plant & Tree Trunk Protectors",
            dis: null,
            oldDis: null,
            bou: "7 bought",
            oldPrice: null,
            realPrice: "$61.50"
        },
        {
            img: " //main-cdn.grabone.co.nz/goimage/325x225/d63330a34a5653d6b4a43969c61be925fc2085d6.jpg",
            title: "Three-Piece Reusable Ziplock..",
            dis: null,
            oldDis: null,
            bou: "6 bought",
            oldPrice: null,
            realPrice: "$22"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/89c01e3f7368fcf50dc13447ce2c56826acb1472.jpg",
            title: "Elastic Office chair Cover",
            dis: null,
            oldDis: null,
            bou: "13 bought",
            oldPrice: null,
            realPrice: "$22"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/f2dc298aa4f9b8e7568f02ca40a370e2628f2d0e.jpg",
            title: "Urban Industrial Pipe Clothing Rack",
            dis: null,
            oldDis: null,
            bou: '14 bought',
            oldPrice: null,
            realPrice: "$129"
        }
    ],

    //////////////////////////////////////////

    [
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/94051fc2b57dff6bb3707053f25c6d1dc94c8176.jpg",
            title: "Yoga Mat Storge Bag",
            dis: null,
            oldDis: null,
            bou: "9 bought",
            oldPrice: null,
            realPrice: "$19.50"
        },
        {
            img: " //main-cdn.grabone.co.nz/goimage/325x225/3f6f5be951d096406fcd94fdc0c229d8ebddd59d.jpg",
            title: "Recumbent Bike",
            dis: 'TSB Living',
            oldDis: null,
            bou: "1 bought",
            oldPrice: null,
            realPrice: "$373"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/73f39818f52d250be97650f0294f874b112b5bdf.jpg",
            title: "Solo Tennis Trainer",
            dis: null,
            oldDis: null,
            bou: "8 bought",
            oldPrice: null,
            realPrice: "$30"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/c71514105aed069a86d65a2877187432e6c61dbb.jpg",
            title: "Sports Waist Trainer",
            dis: null,
            oldDis: null,
            bou: '20 bought',
            oldPrice: null,
            realPrice: "$22"
        }
    ],

    //////////////////////////////////////////////////////////////


    [
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/63738afccd1682c9a5dfbd1822690c451e26c0a0.jpg",
            title: "Seven-Piece Sponge Scourer Car P..",
            dis: null,
            oldDis: null,
            bou: "9 bought",
            oldPrice: null,
            realPrice: "$18"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/3fea0ec663d3863874e2f3f50cc72cbd36dd2536.jpg",
            title: "Car Bluetooth Receiver FM Transmi",
            dis: null,
            oldDis: null,
            bou: "6 bought",
            oldPrice: null,
            realPrice: "$28"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/56f69802f8b0f89982f5d212b16375b610036711.jpg",
            title: "Car Net Organiser",
            dis: null,
            oldDis: null,
            bou: "3 bought",
            oldPrice: null,
            realPrice: "$35"
        },
        {
            img: "//main-cdn.grabone.co.nz/goimage/325x225/a209a756e692db63bfe02e42171aef444cbde24e.jpg",
            title: "Dashboard Camera with Motion Dete",
            dis: null,
            oldDis: null,
            bou: '17 bought',
            oldPrice: null,
            realPrice: "$41"
        }
    ],
]
const Home = () => {


    return (
        <>
            <div className='imgHeader mt-5'>
                <img src="https://mediacdn.grabone.co.nz/asset/3pC7sBYlTK" class="desktopheaderimage" alt="Click Frenzy Mayhem"></img>

            </div>
            <strong className='imgHeader mt-4'>For savings on big brands you love, <a href="https://clickfrenzy.co.nz/" className='reg'> register here.</a> </strong>
            <div className='group'>
                <div className='container-fluid col-11'>

                    <div className='row mt-4'>

                        <div class="card card1 col-lg-3 m-2 hide " >
                            <div className='test'>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item item-title"><p className='titP'>Discover</p></li>
                                    <li class="list-group-item">Featured Auuckland deals</li>
                                    <li class="list-group-item">Collection</li>
                                    <li class="list-group-item">Escapes</li>
                                    <li class="list-group-item">Picked for you</li>
                                    <li class="list-group-item">Activiteies, events & Outdoors</li>
                                    <li class="list-group-item">Store</li>
                                    <li class="list-group-item">Resturants, Bars, Cafes</li>
                                    <li class="list-group-item">Beatuty, Massage & Spa</li>
                                    <li class="list-group-item">House & Garden</li>
                                    <li class="list-group-item">Fitness & Sports</li>
                                    <li class="list-group-item">Automotive</li>

                                </ul>
                            </div>
                        </div>
                        {
                            arr[0].map(ele => {
                                return (
                                    <div className='card card1 col-sm col-lg-4 m-2'>

                                        <div className=' '>
                                            {/* <div className='tile'> */}
                                                <img class="card-img-top " src={ele.img} alt="Card image cap" />
                                                {/* <span class="overlay">
                                                    <h1 className='hidden-text visible-text'>THIS IS A TITLE</h1>
                                                </span> */}
                                            {/* </div> */}

                                            <div class="card-body  ">
                                                <div>
                                                    <h5 class="card-title justify-contant-start" style={{ fontSize: '17px' }}>{ele.title}</h5>
                                                    <span style={{ color: "#01b2ee", fontSize: '15px' }}>{ele.dis}</span>
                                                    <p class="card-text" style={{ fontSize: '15px', color: '#92a2ad' }}>{ele.oldDis}</p>

                                                </div>

                                                <div className='bottomDis row'>

                                                    <p class="card-text col-lg-9 col-sm-8 pt-4 text2" style={{ fontSize: '14px', color: '#92a2ad' }}>{ele.bou}</p>
                                                    <div className='price col-lg-3 col-sm-4 ' style={{ paddingRight: "20px", marginTop: '10px' }}>
                                                        <h5 class="card-text1   " style={{ fontSize: '1rem' }}><span className='old' style={{ padding: '15px 8px 0px 0px'}}>{ele.oldPrice}</span><span style={{ padding: "0px 0px 0px 0px", fontSize: '1.9rem', color: "#01b2ee" }} > {ele.realPrice}</span>
                                                        </h5>

                                                    </div>
                                                </div>

                                            </div>
                                        </div></div>
                                )
                            })
                        }


                    </div>
                </div></div>
            <div className='card2 container-fluid col-11 ' >
                <div class="card text-center " style={{ width: '100rem' }}>

                    <div class="card-body3 row">
                        <div className=' col-lg-6 col-sm-12'>
                            <p class="card-text text1 get">Get the best deals delivered direct to your inbox each day</p>
                        </div>
                        <div class="input-group col-sm-12 col-lg-6 inp  inp2">
                            <input type="text" class="form-control" placeholder="Enter Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-primary btn1" type="button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* /////////////////// */}
      

            {/* ========================================================================================== */}
            <div className='container-fluid col-11'>
                <h1 style={{ fontWeight: "650", color: "#4f5864" }} className="mt-4">Featured Auckland deals     <button class="btn btn-primary " type="button">view more <BsChevronRight /></button></h1>

                <div className='row mt-4'>
                    {
                        arr[1].map(ele => {
                            return (

                                <div className=' cardSection2 col-sm-6 col-lg-3 mt-3 '>

                                    <div className='test card mx-2'>

                                        <img class="card-img-top" src={ele.img} alt="Card image cap" />

                                        <div class="card-body">
                                            <div>
                                                <h5 class="card-title justify-contant-start" style={{ fontSize: '17px' }}>{ele.title}</h5>
                                                <span style={{ color: "#01b2ee", fontSize: '15px' }}>{ele.dis}</span>
                                                <p class="card-text" style={{ fontSize: '15px', color: '#92a2ad' }}>{ele.oldDis}</p>

                                            </div>
                                            <div className='bottomDis row'>
                                                <p class="card-text col-lg-9 col-sm-8 pt-4 text2" style={{ fontSize: '14px', color: '#92a2ad' }}>{ele.bou}</p>
                                                <div className='price col-lg-3 col-sm-4 ' style={{ paddingRight: "20px", marginTop: '10px' }}>
                                                    <h5 class="card-text1   " style={{ fontSize: '0.8rem' }}><span className='old' style={{ padding: '15px 8px 0px 0px' }}>{ele.oldPrice}</span><span  style={{ padding: "0px 0px 0px 0px", fontSize: '1.8rem', color: "#01b2ee" }} > {ele.realPrice}</span>
                                                    </h5>

                                                </div>
                                            </div>

                                        </div>
                                    </div></div>

                            )

                        })
                    } </div></div>



            {/* //////////////////////////////////////////////////////////////// */}




            <div className='container-fluid col-11'>
                <h1 style={{ fontWeight: "650", color: "#4f5864" }} className="mt-4">Collections   <button class="btn btn-primary " type="button">view more <BsChevronRight /></button></h1>

                <div className='row mt-4'>
                    {
                        arr[2].map(ele => {
                            return (

                                <div className=' cardSection2 col-sm-6 col-lg-3 mt-2 '>

                                    <div className='test1 card mx-2'>

                                        <img class="card-img-top" src={ele.img} alt="Card image cap" />

                                        <div class="card-body">
                                            <div style={{ textAlign: 'center' }}>
                                                {/* <h5 class="card-title justify-contant-start">{ele.title}</h5> */}
                                                <span>{ele.dis}</span>
                                                <p class="card-text" style={{ color: "#01b2ee" }}>{ele.oldDis}</p>
                                                <button type="button" class="btn btn-outline-primary">View Collection</button>

                                            </div>
                                            {/* <div className='bottomDis row'>
                                                <p class="card-text col-lg-5 col-sm-5 pt-3 text2">{ele.bou}</p>
                                                <div className='price col-lg-7 col-sm-7 row' style={{padding:"0px"}}>
                                                <p class="card-text  col-lg-6 col-sm-6 pt-3" style={{paddingLeft:"30px",fontSize:'1rem'}}>{ele.oldPrice}</p>
                                                <p class="card-text col-lg-6 col-sm-6" style={{padding:"0px 0px 10px 0px",fontSize:'2rem',color:"#01b2ee"}}>{ele.realPrice}</p>
                                                </div>
                                                </div> */}

                                        </div>
                                    </div></div>

                            )

                        })
                    } </div></div>




            {/* ///////////////////////////////////////////////////////////////////////////////// */}


            <div className='container-fluid col-11'>
                <h1 style={{ fontWeight: "650", color: "#4f5864" }} className="mt-4">Escapes    <button class="btn btn-primary " type="button">view more <BsChevronRight /></button></h1>

                <div className='row mt-4'>
                    {
                        arr[3].map(ele => {
                            return (

                                <div className=' cardSection2 col-sm-6 col-lg-3 mt-3 '>

                                    <div className='test card mx-2'>

                                        <img class="card-img-top" src={ele.img} alt="Card image cap" />

                                        <div class="card-body">
                                            <div>
                                                <h5 class="card-title justify-contant-start" style={{ fontSize: '17px' }}>{ele.title}</h5>
                                                <span style={{ color: "#01b2ee", fontSize: '15px' }}>{ele.dis}</span>
                                                <p class="card-text" style={{ fontSize: '15px', color: '#92a2ad' }}>{ele.oldDis}</p>

                                            </div>
                                            <div className='bottomDis row'>
                                                <p class="card-text col-lg-9 col-sm-8 pt-4 text2" style={{ fontSize: '14px', color: '#92a2ad' }}>{ele.bou}</p>
                                                <div className='price col-lg-3 col-sm-4 ' style={{ paddingRight: "20px", marginTop: '10px' }}>
                                                    <h5 class="card-text1   " style={{ fontSize: '0.8rem' }}><span className='old' style={{ padding: '15px 8px 0px 0px' }}>{ele.oldPrice}</span><span style={{ padding: "0px 0px 0px 0px", fontSize: '1.8rem', color: "#01b2ee" }} > {ele.realPrice}</span>
                                                    </h5>

                                                </div>
                                            </div>

                                        </div>
                                    </div></div>

                            )

                        })
                    } </div></div>


            {/* //////////////////////////////////////////////////////////////////////////// */}



            <div className='container-fluid col-11'>
                <h1 style={{ fontWeight: "650", color: "#4f5864" }} className="mt-4">Activiteies, Events & Outdoors    <button class="btn btn-primary " type="button">view more <BsChevronRight /></button></h1>

                <div className='row mt-4'>
                    {
                        arr[4].map(ele => {
                            return (

                                <div className=' cardSection2 col-sm-6 col-lg-3 mt-3 '>

                                    <div className='test card mx-2'>

                                        <img class="card-img-top" src={ele.img} alt="Card image cap" />

                                        <div class="card-body">
                                            <div>
                                                <h5 class="card-title justify-contant-start">{ele.title}</h5>
                                                <span>{ele.dis}</span>
                                                <p class="card-text" style={{ color: "#01b2ee" }}>{ele.oldDis}</p>

                                            </div>
                                            <div className='bottomDis row'>
                                                <p class="card-text col-lg-7 col-sm-5 pt-3 text2">{ele.bou}</p>
                                                <div className='price col-lg-5 col-sm-7 row' style={{ padding: "0px" }}>
                                                    <p class="card-text  col-lg-6 col-sm-6 pt-3 old" style={{ paddingLeft: "30px", fontSize: '1rem' }}>{ele.oldPrice}</p>
                                                    <p class="card-text col-lg-6 col-sm-6" style={{ padding: "0px 0px 10px 0px", fontSize: '2rem', color: "#01b2ee" }}>{ele.realPrice}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div></div>

                            )

                        })
                    } </div></div>






            {/* /////////////////////////////////////////////////////////////////////////// */}


            <div className='container-fluid col-11'>
                <h1 style={{ fontWeight: "650", color: "#4f5864" }} className="mt-4">Restaurants, Bars, Cafes  <button class="btn btn-primary " type="button">view more <BsChevronRight /></button></h1>

                <div className='row mt-4'>
                    {
                        arr[6].map(ele => {
                            return (

                                <div className=' cardSection2 col-sm-6 col-lg-3 mt-3 '>

                                    <div className='test card mx-2'>

                                        <img class="card-img-top" src={ele.img} alt="Card image cap" />

                                        <div class="card-body">
                                            <div>
                                                <h5 class="card-title justify-contant-start" style={{ fontSize: '17px' }}>{ele.title}</h5>
                                                <span style={{ color: "#01b2ee", fontSize: '15px' }}>{ele.dis}</span>
                                                <p class="card-text" style={{ fontSize: '15px', color: '#92a2ad' }}>{ele.oldDis}</p>

                                            </div>
                                            <div className='bottomDis row'>
                                                <p class="card-text col-lg-9 col-sm-8 pt-4 text2" style={{ fontSize: '14px', color: '#92a2ad' }}>{ele.bou}</p>
                                                <div className='price col-lg-3 col-sm-4 ' style={{ paddingRight: "20px", marginTop: '10px' }}>
                                                    <h5 class="card-text1   " style={{ fontSize: '0.8rem' }}><span className='old' style={{ padding: '15px 8px 0px 0px' }}>{ele.oldPrice}</span><span style={{ padding: "0px 0px 0px 0px", fontSize: '1.8rem', color: "#01b2ee" }} > {ele.realPrice}</span>
                                                    </h5>

                                                </div>
                                            </div>

                                        </div>
                                    </div></div>

                            )

                        })
                    } </div></div>


            {/* ///////////////////////////////////////////////////////////////////////////// */}




            <div className='container-fluid col-11'>
                <h1 style={{ fontWeight: "650", color: "#4f5864" }} className="mt-4">Beauty, Massage & Spa   <button class="btn btn-primary " type="button">view more <BsChevronRight /></button></h1>

                <div className='row mt-4'>
                    {
                        arr[7].map(ele => {
                            return (

                                <div className=' cardSection2 col-sm-6 col-lg-3 mt-3 '>

                                    <div className='test card mx-2'>

                                        <img class="card-img-top" src={ele.img} alt="Card image cap" />

                                        <div class="card-body">
                                            <div>
                                                <h5 class="card-title justify-contant-start" style={{ fontSize: '17px' }}>{ele.title}</h5>
                                                <span style={{ color: "#01b2ee", fontSize: '15px' }}>{ele.dis}</span>
                                                <p class="card-text" style={{ fontSize: '15px', color: '#92a2ad' }}>{ele.oldDis}</p>

                                            </div>
                                            <div className='bottomDis row'>
                                                <p class="card-text col-lg-9 col-sm-8 pt-4 text2" style={{ fontSize: '14px', color: '#92a2ad' }}>{ele.bou}</p>
                                                <div className='price col-lg-3 col-sm-4 ' style={{ paddingRight: "20px", marginTop: '20px' }}>
                                                    <h5 class="card-text1   " style={{ fontSize: '0.8rem' }}><span className='old' style={{ padding: '15px 8px 0px 0px' }}>{ele.oldPrice}</span><span style={{ padding: "0px 0px 10px 0px", fontSize: '1.8rem', color: "#01b2ee" }} > {ele.realPrice}</span>
                                                    </h5>

                                                </div>
                                            </div>

                                        </div>
                                    </div></div>

                            )

                        })
                    } </div></div>


            {/* /////////////////////////////////////////////////////////////////////////////// */}




            <div className='container-fluid col-11'>
                <h1 style={{ fontWeight: "650", color: "#4f5864" }} className="mt-4">House & Garden  <button class="btn btn-primary " type="button">view more <BsChevronRight /></button></h1>

                <div className='row mt-4'>
                    {
                        arr[8].map(ele => {
                            return (

                                <div className=' cardSection2 col-sm-6 col-lg-3 mt-3 '>

                                    <div className='test card mx-2'>

                                        <img class="card-img-top" src={ele.img} alt="Card image cap" />

                                        <div class="card-body">
                                            <div>
                                                <h5 class="card-title justify-contant-start" style={{ fontSize: '17px' }}>{ele.title}</h5>
                                                <span style={{ color: "#01b2ee", fontSize: '15px' }}>{ele.dis}</span>
                                                <p class="card-text" style={{ fontSize: '15px', color: '#92a2ad' }}>{ele.oldDis}</p>

                                            </div>
                                            <div className='bottomDis row'>
                                                <p class="card-text col-lg-9 col-sm-8 pt-4 text2" style={{ fontSize: '14px', color: '#92a2ad' }}>{ele.bou}</p>
                                                <div className='price col-lg-3 col-sm-4 ' style={{ paddingRight: "20px", marginTop: '20px' }}>
                                                    <h5 class="card-text1   " style={{ fontSize: '0.8rem' }}><span className='old' style={{ padding: '15px 8px 0px 0px' }}>{ele.oldPrice}</span><span style={{ padding: "0px 0px 10px 0px", fontSize: '1.8rem', color: "#01b2ee" }} > {ele.realPrice}</span>
                                                    </h5>

                                                </div>
                                            </div>

                                        </div>
                                    </div></div>

                            )

                        })
                    } </div></div>

            {/* ///////////////////////////////////////////////////////////////////////////////////// */}


            <div className='container-fluid col-11'>
                <h1 style={{ fontWeight: "650", color: "#4f5864" }} className="mt-4">Fitness & Sports  <button class="btn btn-primary " type="button">view more <BsChevronRight /></button></h1>

                <div className='row mt-4'>
                    {
                        arr[9].map(ele => {
                            return (

                                <div className=' cardSection2 col-sm-6 col-lg-3 mt-3 '>

                                    <div className='test card mx-2'>

                                        <img class="card-img-top" src={ele.img} alt="Card image cap" />

                                        <div class="card-body">
                                            <div>
                                                <h5 class="card-title justify-contant-start" style={{ fontSize: '17px' }}>{ele.title}</h5>
                                                <span style={{ color: "#01b2ee", fontSize: '15px' }}>{ele.dis}</span>
                                                <p class="card-text" style={{ fontSize: '15px', color: '#92a2ad' }}>{ele.oldDis}</p>

                                            </div>
                                            <div className='bottomDis row'>
                                                <p class="card-text col-lg-9 col-sm-8 pt-4 text2" style={{ fontSize: '14px', color: '#92a2ad' }}>{ele.bou}</p>
                                                <div className='price col-lg-3 col-sm-4 ' style={{ paddingRight: "20px", marginTop: '20px' }}>
                                                    <h5 class="card-text1   " style={{ fontSize: '0.8rem' }}><span className='old' style={{ padding: '15px 8px 0px 0px' }}>{ele.oldPrice}</span><span style={{ padding: "0px 0px 10px 0px", fontSize: '1.8rem', color: "#01b2ee" }} > {ele.realPrice}</span>
                                                    </h5>

                                                </div>
                                            </div>

                                        </div>
                                    </div></div>

                            )

                        })
                    } </div></div>


            {/* //////////////////////////////////////////////////////////////////////////////// */}




            <div className='container-fluid col-11'>
                <h1 style={{ fontWeight: "650", color: "#4f5864" }} className="mt-4">Automotive <button class="btn btn-primary " type="button">view more <BsChevronRight /></button></h1>

                <div className='row mt-4'>
                    {
                        arr[10].map(ele => {
                            return (

                                <div className=' cardSection2 col-sm-6 col-lg-3 mt-3 '>

                                    <div className='test card mx-2'>

                                        <img class="card-img-top" src={ele.img} alt="Card image cap" />

                                        <div class="card-body">
                                            <div>
                                                <h5 class="card-title justify-contant-start" style={{ fontSize: '17px' }}>{ele.title}</h5>
                                                <span style={{ color: "#01b2ee", fontSize: '15px' }}>{ele.dis}</span>
                                                <p class="card-text" style={{ fontSize: '15px', color: '#92a2ad' }}>{ele.oldDis}</p>

                                            </div>
                                            <div className='bottomDis row'>
                                                <p class="card-text col-lg-9 col-sm-8 pt-4 text2" style={{ fontSize: '14px', color: '#92a2ad' }}>{ele.bou}</p>
                                                <div className='price col-lg-3 col-sm-4 ' style={{ paddingRight: "20px", marginTop: '20px' }}>
                                                    <h5 class="card-text1   " style={{ fontSize: '0.8rem' }}><span className='old' style={{ padding: '15px 8px 0px 0px' }}>{ele.oldPrice}</span><span style={{ padding: "0px 0px 10px 0px", fontSize: '1.8rem', color: "#01b2ee" }} > {ele.realPrice}</span>
                                                    </h5>

                                                </div>
                                            </div>

                                        </div>
                                    </div></div>

                            )

                        })
                    } </div></div>
           
        </>
    )
}

export default Home