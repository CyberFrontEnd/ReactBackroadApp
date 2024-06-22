import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  {id:1,href:'#home', text:'home'},
  {id:2,href:'#about', text:'about'},
  {id:3,href:'#services', text:'services'},
  {id:4,href:'#tours', text:'tours'},
];

export const socialLinks = [
  {id:1, href: 'https://www.twitter.com', icon: 'fab fa-facebook'},
  {id:2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
  {id:3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace'}
];

export const services = [
  {id:1, icon:'fas fa-wallet fa-fw', title:'saving money', text: '\n' +
      '              Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
      '              Asperiores, officia.\n' +
      '            '},

  {id:2, icon:'fas fa-wallet fa-fw', title:'saving money', text: '\n' +
      '              Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
      '              Asperiores, officia.\n' +
      '            '},
  {id:3, icon:'fas fa-wallet fa-fw', title:'saving money', text: '\n' +
      '              Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
      '              Asperiores, officia.\n' +
      '            '},
];


export const tours = [
  {
    id: 1,
    image: tour1,
    data: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' +
      '              vitae tempore voluptatum maxime reprehenderit eum quod\n' +
      '              exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6',
    cost: 2100
  },
  {
    id: 2,
    image: tour2,
    data: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' +
      '              vitae tempore voluptatum maxime reprehenderit eum quod\n' +
      '              exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6',
    cost: 2300
  },
  {
    id: 3,
    image: tour3,
    data: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' +
      '              vitae tempore voluptatum maxime reprehenderit eum quod\n' +
      '              exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6',
    cost: 2400
  },
  {
    id: 4,
    image: tour4,
    data: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' +
      '              vitae tempore voluptatum maxime reprehenderit eum quod\n' +
      '              exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6',
    cost: 3100
  }
]