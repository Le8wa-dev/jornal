import React from 'react';
import clsx from 'clsx';
import { LeftMenu } from '../components/LeftMenu';
import { SideComments } from '../components/SideComments';

interface MainLayoutProps {
  hideMenu?: boolean;
  hideComments?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  hideMenu,
  contentFullWidth,
  hideComments,
  className,
}) => {
  return (
    <div className={clsx('wrapper', className)}>
      {!hideMenu && (
        <div className="leftSide">
          <LeftMenu />
        </div>
      )}
      <div className={clsx('content', { 'content--full': contentFullWidth })}>{children}</div>
      {!hideComments && (
        <div className="rightSide">
          <SideComments />
        </div>
      )}
    </div>
  );
};
