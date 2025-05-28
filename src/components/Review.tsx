import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

const Review = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.yelp.com/embed/widgets.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const reviews = [
    {
      id: '0QLDuCgYpjmc01WOnI-8XA',
      user: 'Joe I.',
      userUrl: 'https://www.yelp.com/user_details?userid=T7pej0pcx3EQItBWR7fHlA',
      reviewUrl: 'https://www.yelp.com/biz/small-business-tax-orange?hrid=0QLDuCgYpjmc01WOnI-8XA'
    },
    {
      id: 'YWwPyo4O4iceI5lW9aU6CQ',
      user: 'Celine S.',
      userUrl: 'https://www.yelp.com/user_details?userid=wqdny_uX5M_JPOtjx0qC_w',
      reviewUrl: 'https://www.yelp.com/biz/small-business-tax-orange?hrid=YWwPyo4O4iceI5lW9aU6CQ'
    },
    {
      id: '0QLDuCgYpjmc01WOnI-8XA',
      user: 'Joe I.',
      userUrl: 'https://www.yelp.com/user_details?userid=T7pej0pcx3EQItBWR7fHlA',
      reviewUrl: 'https://www.yelp.com/biz/small-business-tax-orange?hrid=0QLDuCgYpjmc01WOnI-8XA'
    },
    {
      id: 'YWwPyo4O4iceI5lW9aU6CQ',
      user: 'Celine S.',
      userUrl: 'https://www.yelp.com/user_details?userid=wqdny_uX5M_JPOtjx0qC_w',
      reviewUrl: 'https://www.yelp.com/biz/small-business-tax-orange?hrid=YWwPyo4O4iceI5lW9aU6CQ'
    },
  ];

  const [emblaRef] = useEmblaCarousel({ loop: false } as EmblaOptionsType);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
};

export default Review;
