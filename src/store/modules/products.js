export default {
  namespaced: true,
  state: {
    products: {
      headphones: [
        {
          id: 1,
          name: 'Apple BYZ S852I',
          price: 2927,
          old_price: 3527,
          rating: 4.7,
          img: require('@/assets/img/Image1.svg'),
        },
        {
          id: 2,
          name: 'Apple EarPods',
          price: 2327,
          rating: 4.5,
          img: require('@/assets/img/Image2.svg'),
        },
        {
          id: 3,
          name: 'Apple EarPods',
          price: 2327,
          rating: 4.5,
          img: require('@/assets/img/Image3.svg'),
        },
        {
          id: 4,
          name: 'Apple BYZ S852I',
          price: 2927,
          rating: 4.7,
          img: require('@/assets/img/Image1.svg'),
        },
        {
          id: 5,
          name: 'Apple EarPods',
          price: 2327,
          rating: 4.5,
          img: require('@/assets/img/Image2.svg'),
        },
        {
          id: 6,
          name: 'Apple EarPods',
          price: 2327,
          rating: 4.5,
          img: require('@/assets/img/Image3.svg'),
        },
      ],
      wireless: [
        {
          id: 7,
          name: 'Apple AirPods',
          price: 9527,
          rating: 4.7,
          img: require('@/assets/img/Image4.svg'),
        },
        {
          id: 8,
          name: 'GERLAX GH-04',
          price: 6527,
          rating: 4.7,
          img: require('@/assets/img/Image5.svg'),
        },
        {
          id: 9,
          name: 'BOROFONE BO4',
          price: 7527,
          rating: 4.7,
          img: require('@/assets/img/Image6.svg'),
        },
      ]
    },
  },
  getters: {
    getProducts: (state) => state.products,
    getHeadphones: (state) => state.products.headphones,
    getWireless: (state) => state.products.wireless,
  },
  mutations: {},
  actions: {},
}