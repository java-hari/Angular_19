
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/user",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/user"
  },
  {
    "renderMode": 2,
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "route": "/data-binding"
  },
  {
    "renderMode": 2,
    "route": "/structural-directive"
  },
  {
    "renderMode": 2,
    "route": "/attribute-directive"
  },
  {
    "renderMode": 2,
    "route": "/built-in-pipes"
  },
  {
    "renderMode": 2,
    "route": "/tdf"
  },
  {
    "renderMode": 2,
    "route": "/rf"
  },
  {
    "renderMode": 2,
    "route": "/crud"
  },
  {
    "renderMode": 2,
    "route": "/adduser"
  },
  {
    "renderMode": 2,
    "route": "/viewuser"
  },
  {
    "renderMode": 2,
    "route": "/updateuser"
  },
  {
    "renderMode": 2,
    "route": "/resourceapi"
  },
  {
    "renderMode": 2,
    "route": "/reusable"
  },
  {
    "renderMode": 2,
    "route": "/parent"
  },
  {
    "renderMode": 2,
    "route": "/storage"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 5180, hash: 'b620a8be6a024692df6ee4004bdf10271a3fb423908becb8a3264f3bd22f7eb1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1279, hash: '542cca228b9d50a058ddcc02db66f5b3d821d0228268fc0b1d21052d95f20ee0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'user/index.html': {size: 24405, hash: '275c43440efadc7f87af70d82166381c7beda7c044048386a5e9d7187ef07b82', text: () => import('./assets-chunks/user_index_html.mjs').then(m => m.default)},
    'structural-directive/index.html': {size: 25357, hash: '3e9ded38918c2e503f120e57a089dd12002e61147f05f0bbe0d88cba0cffbdcd', text: () => import('./assets-chunks/structural-directive_index_html.mjs').then(m => m.default)},
    'data-binding/index.html': {size: 23280, hash: '99e259779065163e78684d9435e111e4ac5dad8c7f172dffebd44445366836a8', text: () => import('./assets-chunks/data-binding_index_html.mjs').then(m => m.default)},
    'attribute-directive/index.html': {size: 27233, hash: 'cd7f635a7fda727e6efdcf1c54734e692043139386cd492005d67d7a1b364874', text: () => import('./assets-chunks/attribute-directive_index_html.mjs').then(m => m.default)},
    'tdf/index.html': {size: 28501, hash: '07a3f965dc50cab47a8e7877ec0429604d72db2075e7af8d9e432390d95d3dec', text: () => import('./assets-chunks/tdf_index_html.mjs').then(m => m.default)},
    'rf/index.html': {size: 29592, hash: '72eac3a87aa9a2b6d5c187ca1884fb04874a883f1ea9563cf452036dd0dc49a8', text: () => import('./assets-chunks/rf_index_html.mjs').then(m => m.default)},
    'crud/index.html': {size: 26904, hash: '91e4e535db49076e8e9372a1d8d002d001028b8322989cc06d9597525226add9', text: () => import('./assets-chunks/crud_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 28259, hash: '04ac06de485b6e71f76e22a5d89a4be08014c90a0631efadf5e86c9b5d4bbb02', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'adduser/index.html': {size: 26764, hash: '2688b63c7ecbe3749abc1a2011d10e71823fb81339a7f93e6de4e905360e5d97', text: () => import('./assets-chunks/adduser_index_html.mjs').then(m => m.default)},
    'viewuser/index.html': {size: 25463, hash: '3a0c62c7e10e9d00af0b67dba746f33ec2cf5bed45e51c6a1e383f32b817e2e5', text: () => import('./assets-chunks/viewuser_index_html.mjs').then(m => m.default)},
    'updateuser/index.html': {size: 26782, hash: 'e2ea17ac091afcd7baea68e7306acbd4539b2880c3b2181779b3926b4620ebfa', text: () => import('./assets-chunks/updateuser_index_html.mjs').then(m => m.default)},
    'reusable/index.html': {size: 23579, hash: '1316d2b334bdc1781fb8e46e6d1846d807a4e59f39485c664c2f1b1986af3094', text: () => import('./assets-chunks/reusable_index_html.mjs').then(m => m.default)},
    'parent/index.html': {size: 27467, hash: '92a27df1a7ea41e16a18c2a55c5cffb93eb131b528b8abe5cfdd3dc0549de2d3', text: () => import('./assets-chunks/parent_index_html.mjs').then(m => m.default)},
    'storage/index.html': {size: 26764, hash: '7b4b2895989b03fbfe2acb322012cc4f6064bde9e28318b46666831c7502d9a2', text: () => import('./assets-chunks/storage_index_html.mjs').then(m => m.default)},
    'resourceapi/index.html': {size: 26425, hash: '1f52656e4d856ee7f540d66e6c9cd818c651135e7db30987190cd03c28fc5003', text: () => import('./assets-chunks/resourceapi_index_html.mjs').then(m => m.default)},
    'built-in-pipes/index.html': {size: 24070, hash: 'e958caa51d067cf0034133098b5e78df0c882fcf1691effdf319e66aa7d35786', text: () => import('./assets-chunks/built-in-pipes_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
