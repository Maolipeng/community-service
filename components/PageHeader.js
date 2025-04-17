export default function PageHeader({ title, rightContent }) {
    return (
      <header className="sticky top-0 z-10 bg-blue-600 text-white p-4 shadow">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{title}</h1>
          {rightContent && (
            <div className="flex items-center">
              {rightContent}
            </div>
          )}
        </div>
      </header>
    );
  }