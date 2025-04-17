"use client";

import { useEffect, useState } from 'react';
import { Wrench, CreditCard, Package, Phone, Car, Coffee, Heart, Truck, ShoppingCart, Briefcase, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';

export default function ServicesPage() {
  const [propertyServices, setPropertyServices] = useState([]);
  const [lifeServices, setLifeServices] = useState([]);
  const [communityServices, setCommunityServices] = useState([]);

  useEffect(() => {
    // 获取所有服务数据
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        setPropertyServices(data.propertyServices.map(service => ({
          ...service,
          icon: getServiceIcon(service.type)
        })));
        setLifeServices(data.lifeServices.map(service => ({
          ...service,
          icon: getServiceIcon(service.type)
        })));
        setCommunityServices(data.communityServices.map(service => ({
          ...service,
          icon: getServiceIcon(service.type)
        })));
      })
      .catch(error => console.error('Failed to fetch services:', error));
  }, []);

  // 根据服务类型返回对应的图标组件
  const getServiceIcon = (type) => {
    const icons = {
      repair: <Wrench size={24} />,
      payment: <CreditCard size={24} />,
      delivery: <Package size={24} />,
      consultation: <Phone size={24} />,
      parking: <Car size={24} />,
      shopping: <Coffee size={24} />,
      health: <Heart size={24} />,
      housekeeping: <Truck size={24} />,
      groupBuy: <ShoppingCart size={24} />,
      secondHand: <Briefcase size={24} />,
      interest: <Users size={24} />,
      phone: <Phone size={24} />
    };
    return icons[type] || <Phone size={24} />;
  };

  return (
    <>
      <PageHeader title="便民服务" />

      <div className="flex-1 overflow-auto pb-16">
        {/* 搜索栏 */}
        <div className="px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索服务"
              className="w-full py-2 px-4 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-3 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* 轮播广告 */}
        <div className="mx-4 my-3 bg-white rounded-lg shadow overflow-hidden h-40">
          <img
            src="/api/placeholder/400/160"
            alt="广告"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 物业服务 */}
        <div className="m-4 p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-800 mb-3">物业服务</h2>
          <div className="grid grid-cols-4 gap-3">
            {propertyServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-1">
                  {service.icon}
                </div>
                <span className="text-xs text-gray-800 text-center">{service.title}</span>
                <span className="text-xs text-gray-500 text-center">{service.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 生活服务 */}
        <div className="m-4 p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-800 mb-3">生活服务</h2>
          <div className="grid grid-cols-4 gap-3">
            {lifeServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-1">
                  {service.icon}
                </div>
                <span className="text-xs text-gray-800 text-center">{service.title}</span>
                <span className="text-xs text-gray-500 text-center">{service.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 社区服务 */}
        <div className="m-4 p-4 bg-white rounded-lg shadow mb-4">
          <h2 className="text-lg font-medium text-gray-800 mb-3">社区服务</h2>
          <div className="grid grid-cols-4 gap-3">
            {communityServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-1">
                  {service.icon}
                </div>
                <span className="text-xs text-gray-800 text-center">{service.title}</span>
                <span className="text-xs text-gray-500 text-center">{service.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Navigation />
    </>
  );
}
