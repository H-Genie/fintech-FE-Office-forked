import type { ReactNode } from 'react';

const ContentSection = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex items-center justify-center h-full'>{children}</div>
  );
};

export default ContentSection;
