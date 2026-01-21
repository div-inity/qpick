export default {
  namespaced: true,
  state: {
    products: [
      {
        id: 1,
        name: 'Apple BYZ S852I',
        price: 2927,
        old_price: 3527,
        rating: 4.7,
        img: require('@/assets/img/Image1.svg'),
        meta: {
          type: 'headphones',
        },
      },
      {
        id: 2,
        name: 'Apple EarPods',
        price: 2327,
        rating: 4.5,
        img: require('@/assets/img/Image2.svg'),
        meta: {
          type: 'headphones',
        },
      },
      {
        id: 3,
        name: 'Apple EarPods',
        price: 2327,
        rating: 4.5,
        img: require('@/assets/img/Image3.svg'),
        meta: {
          type: 'headphones',
        },
      },
      {
        id: 4,
        name: 'Apple BYZ S852I',
        price: 2927,
        rating: 4.7,
        img: require('@/assets/img/Image1.svg'),
        meta: {
          type: 'headphones',
        },
      },
      {
        id: 5,
        name: 'Apple EarPods',
        price: 2327,
        rating: 4.5,
        img: require('@/assets/img/Image2.svg'),
        meta: {
          type: 'headphones',
        },
      },
      {
        id: 6,
        name: 'Apple EarPods',
        price: 2327,
        rating: 4.5,
        img: require('@/assets/img/Image3.svg'),
        meta: {
          type: 'headphones',
        },
      },
      {
        id: 7,
        name: 'Apple AirPods',
        price: 9527,
        rating: 4.7,
        img: require('@/assets/img/Image4.svg'),
        meta: {
          type: 'wireless',
        },
      },
      {
        id: 8,
        name: 'GERLAX GH-04',
        price: 6527,
        rating: 4.7,
        img: require('@/assets/img/Image5.svg'),
        meta: {
          type: 'wireless',
        },
      },
      {
        id: 9,
        name: 'BOROFONE BO4',
        price: 7527,
        rating: 4.7,
        img: require('@/assets/img/Image6.svg'),
        meta: {
          type: 'wireless',
        },
      },
    ],
    
  },
  getters: {
    getProducts: (state) => state.products,
    getHeadphones: (state) => {
      const h = state.products.filter(p => p.meta.type == 'headphones');
      return h;
    },
    getWireless: (state) => {
      const w = state.products.filter(p => p.meta.type == 'wireless');
      return w;
    },
  },
  mutations: {},
  actions: {},
}