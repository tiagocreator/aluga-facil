import { IconPhone } from '@tabler/icons-react';

const BookBanner: React.FC = () => {
  return (
    <div className='book-banner'>
      <div className='book-banner__overlay'></div>
      <div className='container'>
        <div className='text-content'>
          <h2>Entre em contato agora mesmo!</h2>
          <span>
            <IconPhone width={40} height={40} />
            <h3>(123) 456-7869</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookBanner;
