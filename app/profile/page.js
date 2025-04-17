"use client";

import { Bell, CreditCard, Car, Package, Heart, Star, MessageSquare, HelpCircle, Settings, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';

export default function ProfilePage() {
  const menuItems = [
    {
      title: '我的服务',
      items: [
        { icon: <CreditCard size={20} className="text-blue-500" />, label: '我的缴费', badge: '2' },
        { icon: <Package size={20} className="text-green-500" />, label: '我的报修' },
        { icon: <Car size={20} className="text-orange-500" />, label: '我的车辆', badge: '1' },
        { icon: <MessageSquare size={20} className="text-purple-500" />, label: '我的投诉' }
      ]
    },
    {
      title: '社区互动',
      items: [
        { icon: <Star size={20} className="text-yellow-500" />, label: '我的活动' },
        { icon: <Heart size={20} className="text-red-500" />, label: '我的收藏' }
      ]
    },
    {
      title: '系统设置',
      items: [
        { icon: <HelpCircle size={20} className="text-gray-500" />, label: '帮助中心' },
        { icon: <Settings size={20} className="text-gray-500" />, label: '设置' }
      ]
    }
  ];

  const headerRightContent = (
    <>
      <button className="p-1 rounded-full hover:bg-blue-500">
        <Bell size={20} />
      </button>
      <button className="ml-3 p-1 rounded-full hover:bg-blue-500">
        <Settings size={20} />
      </button>
    </>
  );

  return (
    <>
      <PageHeader title="个人中心" rightContent={headerRightContent} />

      <div className="flex-1 overflow-auto pb-16">
        {/* 个人信息卡片 */}
        <div className="bg-white p-4 shadow">
          <div className="flex items-center">
            <div className="relative">
              <img
                src="/api/placeholder/80/80"
                alt="头像"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                编辑
              </div>
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center">
                <h2 className="text-lg font-medium text-gray-800">张先生</h2>
                <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">业主</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">2号楼 1单元 102室</p>
            </div>
            <button className="text-blue-500 flex items-center text-sm">
              完善信息
              <ChevronRight size={16} />
            </button>
          </div>
          
          {/* 状态卡片 */}
          <div className="flex mt-4 text-center">
            <div className="flex-1 p-2">
              <div className="text-lg font-medium text-gray-800">5</div>
              <div className="text-xs text-gray-500">待处理</div>
            </div>
            <div className="flex-1 p-2 border-l border-r border-gray-100">
              <div className="text-lg font-medium text-gray-800">8</div>
              <div className="text-xs text-gray-500">已完成</div>
            </div>
            <div className="flex-1 p-2">
              <div className="text-lg font-medium text-gray-800">230</div>
              <div className="text-xs text-gray-500">积分</div>
            </div>
          </div>
        </div>
        
        {/* 消息提醒卡片 */}
        <div className="m-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
              <Bell size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-800">您有3条未读消息</h3>
              <p className="text-xs text-gray-600 mt-0.5">包含2条物业通知和1条报修回复</p>
            </div>
            <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded-full">
              查看
            </button>
          </div>
        </div>

        {/* 菜单列表 */}
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="m-4 bg-white rounded-lg shadow overflow-hidden">
            <h3 className="p-3 text-gray-700 font-medium text-sm border-b border-gray-100">
              {section.title}
            </h3>
            <div className="divide-y divide-gray-100">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center p-4">
                  <div className="mr-3">{item.icon}</div>
                  <span className="flex-1 text-sm text-gray-800">{item.label}</span>
                  {item.badge && (
                    <span className="mr-2 px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* 退出登录 */}
        <div className="m-4 mb-8">
          <button className="w-full py-3 text-center bg-white text-gray-500 rounded-lg shadow">
            退出登录
          </button>
        </div>
      </div>

      <Navigation />
    </>
  );
}