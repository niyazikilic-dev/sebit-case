import { MdPlayArrow } from 'react-icons/md';

export const renderHtml = (post) => {
  let html = '';
  switch (post.type) {
    case 'quote':
      html = (
        <>
          <div className='quote'>
            <span>{post['quote-text']}</span>
          </div>
          <span
            dangerouslySetInnerHTML={{ __html: '—' + post['quote-source'] }}
            className='quote-source'
          ></span>
        </>
      );

      break;
    case 'photo':
      html = (
        <>
          <div className='photo'>
            <img src={post['photo-url-400']} />
          </div>
          <span
            dangerouslySetInnerHTML={{ __html: post['photo-caption'] }}
            className='photo-caption'
          ></span>
        </>
      );
      break;

    case 'link':
      html = (
        <>
          <div className='link'>
            <a href=''>{post['link-text']}</a>
          </div>
          <span
            dangerouslySetInnerHTML={{ __html: post['link-description'] }}
            className='link-description'
          ></span>
        </>
      );

      break;
    case 'conversation':
      html = (
        <>
          <div className='conversation'>
            {post.conversation.map((conv, index) => (
              <div
                className={`${
                  index % 2 === 0 ? 'odd' : 'even'
                } conversation-item`}
              >
                <span>{conv.label}</span>
                <span> {conv.phrase}</span>
              </div>
            ))}
          </div>
        </>
      );

      break;

    case 'regular':
      html = (
        <>
          <div className='regular'>
            {post['regular-title'] && <h2>{post['regular-title']}</h2>}
            <div
              dangerouslySetInnerHTML={{ __html: post['regular-body'] }}
            ></div>
          </div>
        </>
      );
      break;
    case 'audio':
      html = (
        <>
          <div className='audio'>
            <div className='tracker'>
              <span>
                {' '}
                <MdPlayArrow />
              </span>
              <span>Listen </span>
            </div>
            <div
              className='audio-caption'
              dangerouslySetInnerHTML={{ __html: post['audio-caption'] }}
            ></div>
          </div>
        </>
      );

      break;
    default:
      break;
  }
  return html;
};

export const dateFormatter = (date) => {
  let newDate = new Date(date).toLocaleDateString('en-Us');
  let newDateDay = new Date(date).toLocaleDateString('en-Us', {
    weekday: 'long',
  });
  newDate = newDate.split('.').join('/');
  let html = (
    <>
      <span className='date-day'>{newDateDay.slice(0, 3).toUpperCase()}</span>
      <div className='date-month'>
        <span>{newDate}</span>
      </div>
    </>
  );
  return html;
};
