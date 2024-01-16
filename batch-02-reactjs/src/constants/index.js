export const LOCATION = {
  TAB: '/',
  BUTTON_ACCORDIONS: '/button-accordions',
  IMAGES: '/hinh-anh-hay',
  FORM_BASIC: '/form/basic',
  FORM_LOGIN: '/form/login',
  POSTS: '/bai-viet',
  USERS: '/tac-gia',
  POST_DETAIL: '/bai-viet/:id',
  USER_DETAIL: '/tac-gia/:id',
  USE_CALLBACK: '/use-callback',
  USE_REF: '/use-ref',
  MUSIC: '/music',
  NOT_FOUND: '*',
};

export const locations = [
  {
    path: LOCATION.TAB,
    name: 'Tabs',
  },
  {
    path: LOCATION.BUTTON_ACCORDIONS,
    name: 'Button',
  },
  {
    path: LOCATION.IMAGES,
    name: 'Image',
  },
  {
    path: LOCATION.FORM_BASIC,
    name: 'Form basic',
  },
  {
    path: LOCATION.FORM_LOGIN,
    name: 'Form Login',
  },
  {
    path: LOCATION.POSTS,
    name: 'Posts',
  },
  {
    path: LOCATION.POST_DETAIL,
    name: 'Posts detail',
  },
  {
    path: LOCATION.USER_DETAIL,
    name: 'User detail',
  },
  {
    path: LOCATION.USE_CALLBACK,
    name: 'Callback',
  },
  {
    path: LOCATION.USE_REF,
    name: 'Ref',
  },
  {
    path: LOCATION.MUSIC,
    name: 'Music',
  },
  {
    path: LOCATION.NOT_FOUND,
    name: 'Not found',
    isHidden: true,
  },
]

export const USD = 24500;
