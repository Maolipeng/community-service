"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingBag, Users, FileText } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', label: '首页', icon: Home },
    { href: '/services', label: '服务', icon: ShoppingBag },
    { href: '/community', label: '社区', icon: Users },
    { href: '/profile', label: '我的', icon: FileText }
  ];

  return (
    <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-2 z-10">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link key={item.href} href={item.href}>
              <div className="flex flex-col items-center">
                <Icon size={20} className={isActive ? 'text-blue-600' : 'text-gray-500'} />
                <span className={`text-xs mt-1 ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}