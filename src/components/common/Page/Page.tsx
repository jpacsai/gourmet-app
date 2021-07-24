import React from 'react';

import './Page.scss';

type PageProps = {
  title: string;
};

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <div className="page">
      <h2 className="page__title">{title}</h2>
      {children}
    </div>
  );
};

export default Page;
