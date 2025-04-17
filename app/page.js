"use client";

import { useState, useEffect } from 'react';
import { Bell, Wrench, Wallet, Users, ShoppingBag, FileText, Calendar, Sun, CloudRain, MoreHorizontal } from 'lucide-react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';

export default function HomePage() {
  const [weather, setWeather] = useState(null);
  const [notices, setNotices] = useState([]);
  const [activities, setActivities] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // 获取天气信息
    fetch('/api/weather')
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(error => console.error('Failed to fetch weather:', error));

    // 获取通知
    fetch('/api/notices')
      .then(res => res.json())
      .then(data => setNotices(data))
      .catch(error => console.error('Failed to fetch notices:', error));

    // 获取活动
    fetch('/api/activities')
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Failed to fetch activities:', error));

    // 获取公告
    fetch('/api/announcements')
      .then(res => res.json())
      .then(data => setAnnouncements(data))
      .catch(error => console.error('Failed to fetch announcements:', error));
  }, []);

  // 模拟紧急通知滚动效果
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNoticeIndex(prev => (prev + 1) % notices.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [notices.length]);

  const menuItems = [
    { icon: <Wrench size={24} />, label: '报修' },
    { icon: <Wallet size={24} />, label: '缴费' },
    { icon: <Users size={24} />, label: '访客' },
    { icon: <Bell size={24} />, label: '公告' },
    { icon: <ShoppingBag size={24} />, label: '团购' },
    { icon: <FileText size={24} />, label: '二手' },
    { icon: <Calendar size={24} />, label: '活动' },
    { icon: <MoreHorizontal size={24} />, label: '更多' }
  ];

  return (
    <>
      <PageHeader title="小区便民服务" />

      <div className="flex-1 overflow-auto pb-16">
        {/* 紧急通知滚动条 */}
        {notices.length > 0 && (
          <div className="bg-red-50 border-l-4 border-red-500 p-3 mx-2 my-2 rounded shadow">
            <div className="flex items-center">
              <Bell size={16} className="text-red-500 mr-2" />
              <p className="text-red-700 text-sm font-medium overflow-hidden whitespace-nowrap">
                {notices[currentNoticeIndex].title}
              </p>
            </div>
          </div>
        )}

        {/* 天气信息 */}
        {weather && (
          <div className="m-2 p-3 bg-white rounded-lg shadow">
            <div className="flex items-center">
              {weather.condition.includes('雨') ? 
                <CloudRain size={24} className="text-blue-500 mr-2" /> : 
                <Sun size={24} className="text-yellow-500 mr-2" />
              }
              <span className="text-gray-700 font-medium">今日天气: {weather.temp}°C {weather.condition}</span>
            </div>
          </div>
        )}

        {/* 功能图标区 */}
        <div className="grid grid-cols-4 gap-4 m-2 p-4 bg-white rounded-lg shadow">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <button className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100">
                {item.icon}
              </button>
              <span className="mt-1 text-xs text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>

        {/* 近期活动 */}
        <div className="m-2 p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-800 mb-3">近期活动</h2>
          {activities.length > 0 && activities.map(activity => (
            <div key={activity.id} className="flex mb-4 border-b border-gray-100 pb-3">
              <img src={activity.image} alt={activity.title} className="w-16 h-16 rounded-lg object-cover mr-3" />
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{activity.title}</h3>
                <div className="flex text-xs text-gray-500 mt-1">
                  <span className="mr-2">{activity.date}</span>
                  <span className="mr-2">{activity.time}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  <span>{activity.location}</span>
                </div>
              </div>
              <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded-full self-center">
                报名
              </button>
            </div>
          ))}
          <button className="w-full text-center text-blue-500 text-sm py-2">
            查看更多活动
          </button>
        </div>

        {/* 物业公告 */}
        <div className="m-2 p-4 bg-white rounded-lg shadow mb-4">
          <h2 className="text-lg font-medium text-gray-800 mb-3">物业公告</h2>
          {announcements.length > 0 && announcements.map(announcement => (
            <div key={announcement.id} className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-800">{announcement.title}</span>
              <span className="text-xs text-gray-500">{announcement.time}</span>
            </div>
          ))}
          <button className="w-full text-center text-blue-500 text-sm py-2">
            查看更多公告
          </button>
        </div>
      </div>

      <Navigation />
    </>
  );
}