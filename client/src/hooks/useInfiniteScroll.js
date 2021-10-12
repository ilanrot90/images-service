import * as React from 'react';

const useInfiniteScroll = ({ callback, isDisabled }) => {
  const observer = React.useRef();
  const [element, setRef] = React.useState();

  React.useEffect(() => {
    if (element && IntersectionObserver) {
      console.log('up');
      observer.current = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!isDisabled && entry.isIntersecting) {
            callback();
          }
        });
      });
      observer.current?.observe(element);
    }

    return () => observer.current?.disconnect();
  }, [callback, element, isDisabled]);

  return setRef;
};

export default useInfiniteScroll;
