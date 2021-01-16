import { GET_POSTS } from './types';

export const getPosts = () => async (dispatch) => {
  const response = {
    tumblelog: {
      title: 'Demo',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
      name: 'demo',
      timezone: 'US/Eastern',
      cname: false,
      feeds: [],
    },
    'posts-start': 0,
    'posts-total': 7,
    'posts-type': false,
    posts: [
      {
        id: '236',
        url: 'https://demo.tumblr.com/post/236',
        'url-with-slug':
          'https://demo.tumblr.com/post/236/it-does-not-matter-how-slow-you-go-so-long-as-you',
        type: 'quote',
        'date-gmt': '2006-11-08 19:27:00 GMT',
        date: 'Wed, 08 Nov 2006 14:27:00',
        bookmarklet: 0,
        mobile: 0,
        'feed-item': '',
        'from-feed-id': 0,
        'unix-timestamp': 1163014020,
        format: 'html',
        'reblog-key': 'iKvmNy9T',
        slug: 'it-does-not-matter-how-slow-you-go-so-long-as-you',
        'is-submission': false,
        'like-button':
          '<div class="like_button" data-post-id="236" data-blog-name="demo" id="like_button_236"><iframe id="like_iframe_236" src="https://assets.tumblr.com/assets/html/like_iframe.html?_v=66c22ab5319d742bca5762b8d18f9d06#name=demo&amp;post_id=236&amp;color=black&amp;rk=iKvmNy9T" scrolling="no" width="20" height="20" frameborder="0" class="like_toggle" allowTransparency="true" name="like_iframe_236"></iframe></div>',
        'reblog-button':
          '<a href="https://www.tumblr.com/reblog/236/iKvmNy9T" class="reblog_button"style="display: block;width:20px;height:20px;"><svg width="100%" height="100%" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000"><path d="M5.01092527,5.99908429 L16.0088498,5.99908429 L16.136,9.508 L20.836,4.752 L16.136,0.083 L16.1360004,3.01110845 L2.09985349,3.01110845 C1.50585349,3.01110845 0.979248041,3.44726568 0.979248041,4.45007306 L0.979248041,10.9999998 L3.98376463,8.30993634 L3.98376463,6.89801007 C3.98376463,6.20867902 4.71892527,5.99908429 5.01092527,5.99908429 Z"></path><path d="M17.1420002,13.2800293 C17.1420002,13.5720293 17.022957,14.0490723 16.730957,14.0490723 L4.92919922,14.0490723 L4.92919922,11 L0.5,15.806 L4.92919922,20.5103758 L5.00469971,16.9990234 L18.9700928,16.9990234 C19.5640928,16.9990234 19.9453125,16.4010001 19.9453125,15.8060001 L19.9453125,9.5324707 L17.142,12.203"></path></svg></a>',
        'note-count': '108138',
        tumblelog: {
          title: 'Demo',
          name: 'demo',
          cname: false,
          url: 'https://demo.tumblr.com/',
          timezone: 'US/Eastern',
          avatar_url_512:
            'https://assets.tumblr.com/images/default_avatar_512.png',
          avatar_url_128:
            'https://assets.tumblr.com/images/default_avatar_128.png',
          avatar_url_96:
            'https://assets.tumblr.com/images/default_avatar_96.png',
          avatar_url_64:
            'https://assets.tumblr.com/images/default_avatar_64.png',
          avatar_url_48:
            'https://assets.tumblr.com/images/default_avatar_48.png',
          avatar_url_40:
            'https://assets.tumblr.com/images/default_avatar_40.png',
          avatar_url_30:
            'https://assets.tumblr.com/images/default_avatar_30.png',
          avatar_url_24:
            'https://assets.tumblr.com/images/default_avatar_24.png',
          avatar_url_16:
            'https://assets.tumblr.com/images/default_avatar_16.png',
        },
        'quote-text':
          'It does not matter how slow you go so long as you do not stop.',
        'quote-source':
          'Wisdom of <a href="http://en.wikipedia.org/wiki/Confucius">Confucius</a>',
        tags: ['wisdom'],
      },
      {
        id: '459265350',
        url: 'https://demo.tumblr.com/post/459265350',
        'url-with-slug':
          'https://demo.tumblr.com/post/459265350/passing-through-times-square-by-mareen-fischinger',
        type: 'photo',
        'date-gmt': '2006-11-08 19:26:00 GMT',
        date: 'Wed, 08 Nov 2006 14:26:00',
        bookmarklet: 0,
        mobile: 0,
        'feed-item': '',
        'from-feed-id': 0,
        'unix-timestamp': 1163013960,
        format: 'html',
        'reblog-key': 'gOMUPmdx',
        slug: 'passing-through-times-square-by-mareen-fischinger',
        'is-submission': false,
        'like-button':
          '<div class="like_button" data-post-id="459265350" data-blog-name="demo" id="like_button_459265350"><iframe id="like_iframe_459265350" src="https://assets.tumblr.com/assets/html/like_iframe.html?_v=66c22ab5319d742bca5762b8d18f9d06#name=demo&amp;post_id=459265350&amp;color=black&amp;rk=gOMUPmdx" scrolling="no" width="20" height="20" frameborder="0" class="like_toggle" allowTransparency="true" name="like_iframe_459265350"></iframe></div>',
        'reblog-button':
          '<a href="https://www.tumblr.com/reblog/459265350/gOMUPmdx" class="reblog_button"style="display: block;width:20px;height:20px;"><svg width="100%" height="100%" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000"><path d="M5.01092527,5.99908429 L16.0088498,5.99908429 L16.136,9.508 L20.836,4.752 L16.136,0.083 L16.1360004,3.01110845 L2.09985349,3.01110845 C1.50585349,3.01110845 0.979248041,3.44726568 0.979248041,4.45007306 L0.979248041,10.9999998 L3.98376463,8.30993634 L3.98376463,6.89801007 C3.98376463,6.20867902 4.71892527,5.99908429 5.01092527,5.99908429 Z"></path><path d="M17.1420002,13.2800293 C17.1420002,13.5720293 17.022957,14.0490723 16.730957,14.0490723 L4.92919922,14.0490723 L4.92919922,11 L0.5,15.806 L4.92919922,20.5103758 L5.00469971,16.9990234 L18.9700928,16.9990234 C19.5640928,16.9990234 19.9453125,16.4010001 19.9453125,15.8060001 L19.9453125,9.5324707 L17.142,12.203"></path></svg></a>',
        'note-count': '46641',
        tumblelog: {
          title: 'Demo',
          name: 'demo',
          cname: false,
          url: 'https://demo.tumblr.com/',
          timezone: 'US/Eastern',
          avatar_url_512:
            'https://assets.tumblr.com/images/default_avatar_512.png',
          avatar_url_128:
            'https://assets.tumblr.com/images/default_avatar_128.png',
          avatar_url_96:
            'https://assets.tumblr.com/images/default_avatar_96.png',
          avatar_url_64:
            'https://assets.tumblr.com/images/default_avatar_64.png',
          avatar_url_48:
            'https://assets.tumblr.com/images/default_avatar_48.png',
          avatar_url_40:
            'https://assets.tumblr.com/images/default_avatar_40.png',
          avatar_url_30:
            'https://assets.tumblr.com/images/default_avatar_30.png',
          avatar_url_24:
            'https://assets.tumblr.com/images/default_avatar_24.png',
          avatar_url_16:
            'https://assets.tumblr.com/images/default_avatar_16.png',
        },
        'photo-caption':
          '<p>Passing through Times Square by <a href="http://www.mareenfischinger.com/">Mareen Fischinger</a></p>',
        width: 1280,
        height: 853,
        'photo-url-1280':
          'https://66.media.tumblr.com/tumblr_kzjlfiTnfe1qz4rgho1_1280.jpg',
        'photo-url-500':
          'https://66.media.tumblr.com/tumblr_kzjlfiTnfe1qz4rgho1_500.jpg',
        'photo-url-400':
          'https://66.media.tumblr.com/tumblr_kzjlfiTnfe1qz4rgho1_400.jpg',
        'photo-url-250':
          'https://66.media.tumblr.com/tumblr_kzjlfiTnfe1qz4rgho1_250.jpg',
        'photo-url-100':
          'https://66.media.tumblr.com/tumblr_kzjlfiTnfe1qz4rgho1_100.jpg',
        'photo-url-75':
          'https://66.media.tumblr.com/tumblr_kzjlfiTnfe1qz4rgho1_75sq.jpg',
        photos: [],
        tags: ['Mareen Fischinger', 'New York City', 'Times Square'],
      },
      {
        id: '234',
        url: 'https://demo.tumblr.com/post/234',
        'url-with-slug':
          'https://demo.tumblr.com/post/234/my-favorite-web-site',
        type: 'link',
        'date-gmt': '2006-11-08 19:25:00 GMT',
        date: 'Wed, 08 Nov 2006 14:25:00',
        bookmarklet: 0,
        mobile: 0,
        'feed-item': '',
        'from-feed-id': 0,
        'unix-timestamp': 1163013900,
        format: 'html',
        'reblog-key': 'as2i9gTb',
        slug: 'my-favorite-web-site',
        'is-submission': false,
        'like-button':
          '<div class="like_button" data-post-id="234" data-blog-name="demo" id="like_button_234"><iframe id="like_iframe_234" src="https://assets.tumblr.com/assets/html/like_iframe.html?_v=66c22ab5319d742bca5762b8d18f9d06#name=demo&amp;post_id=234&amp;color=black&amp;rk=as2i9gTb" scrolling="no" width="20" height="20" frameborder="0" class="like_toggle" allowTransparency="true" name="like_iframe_234"></iframe></div>',
        'reblog-button':
          '<a href="https://www.tumblr.com/reblog/234/as2i9gTb" class="reblog_button"style="display: block;width:20px;height:20px;"><svg width="100%" height="100%" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000"><path d="M5.01092527,5.99908429 L16.0088498,5.99908429 L16.136,9.508 L20.836,4.752 L16.136,0.083 L16.1360004,3.01110845 L2.09985349,3.01110845 C1.50585349,3.01110845 0.979248041,3.44726568 0.979248041,4.45007306 L0.979248041,10.9999998 L3.98376463,8.30993634 L3.98376463,6.89801007 C3.98376463,6.20867902 4.71892527,5.99908429 5.01092527,5.99908429 Z"></path><path d="M17.1420002,13.2800293 C17.1420002,13.5720293 17.022957,14.0490723 16.730957,14.0490723 L4.92919922,14.0490723 L4.92919922,11 L0.5,15.806 L4.92919922,20.5103758 L5.00469971,16.9990234 L18.9700928,16.9990234 C19.5640928,16.9990234 19.9453125,16.4010001 19.9453125,15.8060001 L19.9453125,9.5324707 L17.142,12.203"></path></svg></a>',
        'note-count': '9606',
        tumblelog: {
          title: 'Demo',
          name: 'demo',
          cname: false,
          url: 'https://demo.tumblr.com/',
          timezone: 'US/Eastern',
          avatar_url_512:
            'https://assets.tumblr.com/images/default_avatar_512.png',
          avatar_url_128:
            'https://assets.tumblr.com/images/default_avatar_128.png',
          avatar_url_96:
            'https://assets.tumblr.com/images/default_avatar_96.png',
          avatar_url_64:
            'https://assets.tumblr.com/images/default_avatar_64.png',
          avatar_url_48:
            'https://assets.tumblr.com/images/default_avatar_48.png',
          avatar_url_40:
            'https://assets.tumblr.com/images/default_avatar_40.png',
          avatar_url_30:
            'https://assets.tumblr.com/images/default_avatar_30.png',
          avatar_url_24:
            'https://assets.tumblr.com/images/default_avatar_24.png',
          avatar_url_16:
            'https://assets.tumblr.com/images/default_avatar_16.png',
        },
        'link-text': 'My favorite web site',
        'link-url': 'http://',
        'link-description':
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
      },
      {
        id: '233',
        url: 'https://demo.tumblr.com/post/233',
        'url-with-slug':
          'https://demo.tumblr.com/post/233/jack-hey-you-know-what-sucks-lindsey',
        type: 'conversation',
        'date-gmt': '2006-11-08 19:24:00 GMT',
        date: 'Wed, 08 Nov 2006 14:24:00',
        bookmarklet: 0,
        mobile: 0,
        'feed-item': '',
        'from-feed-id': 0,
        'unix-timestamp': 1163013840,
        format: 'html',
        'reblog-key': '5eI0YaaG',
        slug: 'jack-hey-you-know-what-sucks-lindsey',
        'is-submission': false,
        'like-button':
          '<div class="like_button" data-post-id="233" data-blog-name="demo" id="like_button_233"><iframe id="like_iframe_233" src="https://assets.tumblr.com/assets/html/like_iframe.html?_v=66c22ab5319d742bca5762b8d18f9d06#name=demo&amp;post_id=233&amp;color=black&amp;rk=5eI0YaaG" scrolling="no" width="20" height="20" frameborder="0" class="like_toggle" allowTransparency="true" name="like_iframe_233"></iframe></div>',
        'reblog-button':
          '<a href="https://www.tumblr.com/reblog/233/5eI0YaaG" class="reblog_button"style="display: block;width:20px;height:20px;"><svg width="100%" height="100%" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000"><path d="M5.01092527,5.99908429 L16.0088498,5.99908429 L16.136,9.508 L20.836,4.752 L16.136,0.083 L16.1360004,3.01110845 L2.09985349,3.01110845 C1.50585349,3.01110845 0.979248041,3.44726568 0.979248041,4.45007306 L0.979248041,10.9999998 L3.98376463,8.30993634 L3.98376463,6.89801007 C3.98376463,6.20867902 4.71892527,5.99908429 5.01092527,5.99908429 Z"></path><path d="M17.1420002,13.2800293 C17.1420002,13.5720293 17.022957,14.0490723 16.730957,14.0490723 L4.92919922,14.0490723 L4.92919922,11 L0.5,15.806 L4.92919922,20.5103758 L5.00469971,16.9990234 L18.9700928,16.9990234 C19.5640928,16.9990234 19.9453125,16.4010001 19.9453125,15.8060001 L19.9453125,9.5324707 L17.142,12.203"></path></svg></a>',
        'note-count': '46533',
        tumblelog: {
          title: 'Demo',
          name: 'demo',
          cname: false,
          url: 'https://demo.tumblr.com/',
          timezone: 'US/Eastern',
          avatar_url_512:
            'https://assets.tumblr.com/images/default_avatar_512.png',
          avatar_url_128:
            'https://assets.tumblr.com/images/default_avatar_128.png',
          avatar_url_96:
            'https://assets.tumblr.com/images/default_avatar_96.png',
          avatar_url_64:
            'https://assets.tumblr.com/images/default_avatar_64.png',
          avatar_url_48:
            'https://assets.tumblr.com/images/default_avatar_48.png',
          avatar_url_40:
            'https://assets.tumblr.com/images/default_avatar_40.png',
          avatar_url_30:
            'https://assets.tumblr.com/images/default_avatar_30.png',
          avatar_url_24:
            'https://assets.tumblr.com/images/default_avatar_24.png',
          avatar_url_16:
            'https://assets.tumblr.com/images/default_avatar_16.png',
        },
        'conversation-title': null,
        'conversation-text':
          "Jack: Hey, you know what sucks?\nLindsey: vacuums\nJack: Hey, you know what sucks in a metaphorical sense?\nLindsey: black holes\nJack: Hey, you know what just isn't cool?\nLindsey: lava?",
        conversation: [
          {
            name: 'Jack',
            label: 'Jack:',
            phrase: 'Hey, you know what sucks?',
          },
          {
            name: 'Lindsey',
            label: 'Lindsey:',
            phrase: 'vacuums',
          },
          {
            name: 'Jack',
            label: 'Jack:',
            phrase: 'Hey, you know what sucks in a metaphorical sense?',
          },
          {
            name: 'Lindsey',
            label: 'Lindsey:',
            phrase: 'black holes',
          },
          {
            name: 'Jack',
            label: 'Jack:',
            phrase: "Hey, you know what just isn't cool?",
          },
          {
            name: 'Lindsey',
            label: 'Lindsey:',
            phrase: 'lava?',
          },
        ],
        tags: ['funny'],
      },
      {
        id: '459260683',
        url: 'https://demo.tumblr.com/post/459260683',
        'url-with-slug':
          'https://demo.tumblr.com/post/459260683/allison-weiss-fingers-crossed',
        type: 'audio',
        'date-gmt': '2006-11-07 19:23:00 GMT',
        date: 'Tue, 07 Nov 2006 14:23:00',
        bookmarklet: 0,
        mobile: 0,
        'feed-item': '',
        'from-feed-id': 0,
        'unix-timestamp': 1162927380,
        format: 'html',
        'reblog-key': 'wEe8GcU4',
        slug: 'allison-weiss-fingers-crossed',
        'is-submission': false,
        'like-button':
          '<div class="like_button" data-post-id="459260683" data-blog-name="demo" id="like_button_459260683"><iframe id="like_iframe_459260683" src="https://assets.tumblr.com/assets/html/like_iframe.html?_v=66c22ab5319d742bca5762b8d18f9d06#name=demo&amp;post_id=459260683&amp;color=black&amp;rk=wEe8GcU4&amp;root_id=228022847" scrolling="no" width="20" height="20" frameborder="0" class="like_toggle" allowTransparency="true" name="like_iframe_459260683"></iframe></div>',
        'reblog-button':
          '<a href="https://www.tumblr.com/reblog/459260683/wEe8GcU4" class="reblog_button"style="display: block;width:20px;height:20px;"><svg width="100%" height="100%" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000"><path d="M5.01092527,5.99908429 L16.0088498,5.99908429 L16.136,9.508 L20.836,4.752 L16.136,0.083 L16.1360004,3.01110845 L2.09985349,3.01110845 C1.50585349,3.01110845 0.979248041,3.44726568 0.979248041,4.45007306 L0.979248041,10.9999998 L3.98376463,8.30993634 L3.98376463,6.89801007 C3.98376463,6.20867902 4.71892527,5.99908429 5.01092527,5.99908429 Z"></path><path d="M17.1420002,13.2800293 C17.1420002,13.5720293 17.022957,14.0490723 16.730957,14.0490723 L4.92919922,14.0490723 L4.92919922,11 L0.5,15.806 L4.92919922,20.5103758 L5.00469971,16.9990234 L18.9700928,16.9990234 C19.5640928,16.9990234 19.9453125,16.4010001 19.9453125,15.8060001 L19.9453125,9.5324707 L17.142,12.203"></path></svg></a>',
        'note-count': '15132',
        'reblogged-from-url':
          'https://aw-archives.tumblr.com/post/228022847/allison-weiss-fingers-crossed-from-the-2009',
        'reblogged-from-name': 'aw-archives',
        'reblogged-from-title': 'A.W. Tumblr',
        reblogged_from_avatar_url_512:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_512.png',
        reblogged_from_avatar_url_128:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_128.png',
        reblogged_from_avatar_url_96:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_96.png',
        reblogged_from_avatar_url_64:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_64.png',
        reblogged_from_avatar_url_48:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_48.png',
        reblogged_from_avatar_url_40:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_40.png',
        reblogged_from_avatar_url_30:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_30.png',
        reblogged_from_avatar_url_24:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_24.png',
        reblogged_from_avatar_url_16:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_16.png',
        'reblogged-root-url':
          'https://aw-archives.tumblr.com/post/228022847/allison-weiss-fingers-crossed-from-the-2009',
        'reblogged-root-name': 'aw-archives',
        'reblogged-root-title': 'A.W. Tumblr',
        reblogged_root_avatar_url_512:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_512.png',
        reblogged_root_avatar_url_128:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_128.png',
        reblogged_root_avatar_url_96:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_96.png',
        reblogged_root_avatar_url_64:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_64.png',
        reblogged_root_avatar_url_48:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_48.png',
        reblogged_root_avatar_url_40:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_40.png',
        reblogged_root_avatar_url_30:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_30.png',
        reblogged_root_avatar_url_24:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_24.png',
        reblogged_root_avatar_url_16:
          'https://66.media.tumblr.com/avatar_4fbd50d1259e_16.png',
        tumblelog: {
          title: 'Demo',
          name: 'demo',
          cname: false,
          url: 'https://demo.tumblr.com/',
          timezone: 'US/Eastern',
          avatar_url_512:
            'https://assets.tumblr.com/images/default_avatar_512.png',
          avatar_url_128:
            'https://assets.tumblr.com/images/default_avatar_128.png',
          avatar_url_96:
            'https://assets.tumblr.com/images/default_avatar_96.png',
          avatar_url_64:
            'https://assets.tumblr.com/images/default_avatar_64.png',
          avatar_url_48:
            'https://assets.tumblr.com/images/default_avatar_48.png',
          avatar_url_40:
            'https://assets.tumblr.com/images/default_avatar_40.png',
          avatar_url_30:
            'https://assets.tumblr.com/images/default_avatar_30.png',
          avatar_url_24:
            'https://assets.tumblr.com/images/default_avatar_24.png',
          avatar_url_16:
            'https://assets.tumblr.com/images/default_avatar_16.png',
        },
        'id3-artist': 'Allison Weiss',
        'id3-album': '...Was Right All Along',
        'id3-year': '2009',
        'id3-track': '2 of 10',
        'id3-title': 'Fingers Crossed',
        'audio-caption':
          '<p><strong><a href="http://allisonweiss.tumblr.com/">Allison Weiss</a> —</strong> Fingers Crossed</p>',
        'audio-player':
          '<iframe class="tumblr_audio_player tumblr_audio_player_459260683" src="https://demo.tumblr.com/post/459260683/audio_player_iframe/demo/tumblr_ksc4i2SkVU1qz8ouq?audio_file=https%3A%2F%2Fa.tumblr.com%2Ftumblr_ksc4i2SkVU1qz8ouqo1_r2.mp3" frameborder="0" allowtransparency="true" scrolling="no" width="540" height="169"></iframe>',
        'audio-embed':
          '<iframe class="tumblr_audio_player tumblr_audio_player_459260683" src="https://demo.tumblr.com/post/459260683/audio_player_iframe/demo/tumblr_ksc4i2SkVU1qz8ouq?audio_file=https%3A%2F%2Fa.tumblr.com%2Ftumblr_ksc4i2SkVU1qz8ouqo1_r2.mp3" frameborder="0" allowtransparency="true" scrolling="no" width="540" height="169"></iframe>',
        'audio-plays': 0,
      },
      {
        id: '232',
        url: 'https://demo.tumblr.com/post/232',
        'url-with-slug': 'https://demo.tumblr.com/post/232/an-example-post',
        type: 'regular',
        'date-gmt': '2006-11-07 19:22:00 GMT',
        date: 'Tue, 07 Nov 2006 14:22:00',
        bookmarklet: 0,
        mobile: 0,
        'feed-item': '',
        'from-feed-id': 0,
        'unix-timestamp': 1162927320,
        format: 'html',
        'reblog-key': 'jaHD5AfB',
        slug: 'an-example-post',
        'is-submission': false,
        'like-button':
          '<div class="like_button" data-post-id="232" data-blog-name="demo" id="like_button_232"><iframe id="like_iframe_232" src="https://assets.tumblr.com/assets/html/like_iframe.html?_v=66c22ab5319d742bca5762b8d18f9d06#name=demo&amp;post_id=232&amp;color=black&amp;rk=jaHD5AfB" scrolling="no" width="20" height="20" frameborder="0" class="like_toggle" allowTransparency="true" name="like_iframe_232"></iframe></div>',
        'reblog-button':
          '<a href="https://www.tumblr.com/reblog/232/jaHD5AfB" class="reblog_button"style="display: block;width:20px;height:20px;"><svg width="100%" height="100%" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000"><path d="M5.01092527,5.99908429 L16.0088498,5.99908429 L16.136,9.508 L20.836,4.752 L16.136,0.083 L16.1360004,3.01110845 L2.09985349,3.01110845 C1.50585349,3.01110845 0.979248041,3.44726568 0.979248041,4.45007306 L0.979248041,10.9999998 L3.98376463,8.30993634 L3.98376463,6.89801007 C3.98376463,6.20867902 4.71892527,5.99908429 5.01092527,5.99908429 Z"></path><path d="M17.1420002,13.2800293 C17.1420002,13.5720293 17.022957,14.0490723 16.730957,14.0490723 L4.92919922,14.0490723 L4.92919922,11 L0.5,15.806 L4.92919922,20.5103758 L5.00469971,16.9990234 L18.9700928,16.9990234 C19.5640928,16.9990234 19.9453125,16.4010001 19.9453125,15.8060001 L19.9453125,9.5324707 L17.142,12.203"></path></svg></a>',
        'note-count': '24294',
        tumblelog: {
          title: 'Demo',
          name: 'demo',
          cname: false,
          url: 'https://demo.tumblr.com/',
          timezone: 'US/Eastern',
          avatar_url_512:
            'https://assets.tumblr.com/images/default_avatar_512.png',
          avatar_url_128:
            'https://assets.tumblr.com/images/default_avatar_128.png',
          avatar_url_96:
            'https://assets.tumblr.com/images/default_avatar_96.png',
          avatar_url_64:
            'https://assets.tumblr.com/images/default_avatar_64.png',
          avatar_url_48:
            'https://assets.tumblr.com/images/default_avatar_48.png',
          avatar_url_40:
            'https://assets.tumblr.com/images/default_avatar_40.png',
          avatar_url_30:
            'https://assets.tumblr.com/images/default_avatar_30.png',
          avatar_url_24:
            'https://assets.tumblr.com/images/default_avatar_24.png',
          avatar_url_16:
            'https://assets.tumblr.com/images/default_avatar_16.png',
        },
        'regular-title': 'An example post',
        'regular-body':
          '<p>Lorem ipsum dolor sit amet, consectetuer <a href="/">adipiscing elit</a>. Aliquam nisi lorem, pulvinar id, commodo feugiat, vehicula et, mauris. Aliquam mattis porta urna. Maecenas dui neque, rhoncus sed, vehicula vitae, auctor at, nisi. Aenean id massa ut lacus molestie porta. Curabitur sit amet quam id libero suscipit venenatis.</p>\n<ul><li>Lorem ipsum dolor sit amet.</li>\n<li>Consectetuer adipiscing elit. </li>\n<li>Nam at tortor quis ipsum tempor aliquet.</li>\n</ul><p>Cum sociis <a href="/">natoque penatibus</a> et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed ligula. Sed volutpat odio non turpis gravida luctus. Praesent elit pede, iaculis facilisis, vehicula mattis, tempus non, arcu.</p>\n<blockquote>Donec placerat mauris commodo dolor. Nulla tincidunt. Nulla vitae augue.</blockquote>\n<p>Suspendisse ac pede. Cras <a href="/">tincidunt pretium</a> felis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque porttitor mi id felis. Maecenas nec augue. Praesent a quam pretium leo congue accumsan.</p>',
      },
      {
        id: '459009076',
        url: 'https://demo.tumblr.com/post/459009076',
        'url-with-slug':
          'https://demo.tumblr.com/post/459009076/lorem-ipsum-dolor-sit-amet-consectetuer',
        type: 'regular',
        'date-gmt': '2006-10-01 04:00:00 GMT',
        date: 'Sun, 01 Oct 2006 00:00:00',
        bookmarklet: 0,
        mobile: 0,
        'feed-item': '',
        'from-feed-id': 0,
        'unix-timestamp': 1159675200,
        format: 'html',
        'reblog-key': 'uHt0TEhP',
        slug: 'lorem-ipsum-dolor-sit-amet-consectetuer',
        'is-submission': false,
        'like-button':
          '<div class="like_button" data-post-id="459009076" data-blog-name="demo" id="like_button_459009076"><iframe id="like_iframe_459009076" src="https://assets.tumblr.com/assets/html/like_iframe.html?_v=66c22ab5319d742bca5762b8d18f9d06#name=demo&amp;post_id=459009076&amp;color=black&amp;rk=uHt0TEhP" scrolling="no" width="20" height="20" frameborder="0" class="like_toggle" allowTransparency="true" name="like_iframe_459009076"></iframe></div>',
        'reblog-button':
          '<a href="https://www.tumblr.com/reblog/459009076/uHt0TEhP" class="reblog_button"style="display: block;width:20px;height:20px;"><svg width="100%" height="100%" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000"><path d="M5.01092527,5.99908429 L16.0088498,5.99908429 L16.136,9.508 L20.836,4.752 L16.136,0.083 L16.1360004,3.01110845 L2.09985349,3.01110845 C1.50585349,3.01110845 0.979248041,3.44726568 0.979248041,4.45007306 L0.979248041,10.9999998 L3.98376463,8.30993634 L3.98376463,6.89801007 C3.98376463,6.20867902 4.71892527,5.99908429 5.01092527,5.99908429 Z"></path><path d="M17.1420002,13.2800293 C17.1420002,13.5720293 17.022957,14.0490723 16.730957,14.0490723 L4.92919922,14.0490723 L4.92919922,11 L0.5,15.806 L4.92919922,20.5103758 L5.00469971,16.9990234 L18.9700928,16.9990234 C19.5640928,16.9990234 19.9453125,16.4010001 19.9453125,15.8060001 L19.9453125,9.5324707 L17.142,12.203"></path></svg></a>',
        'note-count': '9029',
        tumblelog: {
          title: 'Demo',
          name: 'demo',
          cname: false,
          url: 'https://demo.tumblr.com/',
          timezone: 'US/Eastern',
          avatar_url_512:
            'https://assets.tumblr.com/images/default_avatar_512.png',
          avatar_url_128:
            'https://assets.tumblr.com/images/default_avatar_128.png',
          avatar_url_96:
            'https://assets.tumblr.com/images/default_avatar_96.png',
          avatar_url_64:
            'https://assets.tumblr.com/images/default_avatar_64.png',
          avatar_url_48:
            'https://assets.tumblr.com/images/default_avatar_48.png',
          avatar_url_40:
            'https://assets.tumblr.com/images/default_avatar_40.png',
          avatar_url_30:
            'https://assets.tumblr.com/images/default_avatar_30.png',
          avatar_url_24:
            'https://assets.tumblr.com/images/default_avatar_24.png',
          avatar_url_16:
            'https://assets.tumblr.com/images/default_avatar_16.png',
        },
        'regular-title': null,
        'regular-body':
          '<p>Lorem ipsum dolor sit amet, consectetuer <a href="/">adipiscing elit</a>. Aliquam nisi lorem, pulvinar id, commodo feugiat, vehicula et, mauris. Aliquam mattis porta urna. Maecenas dui neque, rhoncus sed, vehicula vitae, auctor at, nisi. Aenean id massa ut lacus molestie porta. Curabitur sit amet quam id libero suscipit venenatis.</p>',
      },
    ],
  };

  try {
    dispatch({
      type: GET_POSTS,
      payload: response,
    });
  } catch (error) {}
};
