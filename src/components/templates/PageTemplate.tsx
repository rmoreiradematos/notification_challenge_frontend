import React from "react";

interface PageTemplateProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
  sidebar?: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  header,
  footer,
  sidebar,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">{header}</header>
      <div className="flex flex-1">
        {sidebar && <aside className="w-64 bg-gray-200 p-4">{sidebar}</aside>}
        <main className="flex-1 p-4">{children}</main>
      </div>
      <footer className="bg-gray-800 text-white p-4">{footer}</footer>
    </div>
  );
};

export default PageTemplate;
