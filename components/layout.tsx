interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <div className="w-full fixed top-0 flex items-center bg-white text-lg font-medium text-gray-700 py-4 border-b">
        {title && <span>{title}</span>}
      </div>
      {children}
      {hasTabBar && <nav></nav>}
    </div>
  );
}
