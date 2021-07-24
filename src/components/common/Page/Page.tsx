import React from 'react';
import classnames from 'classnames';

import './Page.scss';

type PageProps = {
  title: string;
  className?: string;
};

const Page: React.FC<PageProps> = ({ title, children, className }) => {
  return (
    <div className={classnames('page', className)}>
      <h2 className="page__title">{title}</h2>
      {children}
    </div>
  );
};

export default Page;
