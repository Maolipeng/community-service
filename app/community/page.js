"use client";

import { useState } from 'react';
import { MessageCircle, Calendar, ThumbsUp, Share2, MoreHorizontal, Camera } from 'lucide-react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('推荐');
  
  const tabs = ['推荐', '最新', '热门', '活动'];
  
  const posts = [
    {
      id: 1,
      author: '张先生',
      avatar: '/api/placeholder/40/40',
      time: '10分钟前',
      content: '有没有人知道附近哪里有靠谱的钟点工阿姨？需要每周打扫一次卫生。',
      likes: 5,
      comments: 8,
      type: '问答'
    },
    {
      id: 2,
      author: '王阿姨',
      avatar: '/api/placeholder/40/40',
      time: '30分钟前',
      content: '小区西门的面包店新出的肉松面包特别好吃，推荐大家尝尝！',
      images: ['/api/placeholder/120/80', '/api/placeholder/120/80'],
      likes: 18,
      comments: 6,
      type: '分享'
    },
    {
      id: 3,
      author: '物业管理员',
      avatar: '/api/placeholder/40/40',
      time: '2小时前',
      content: '下周六上午将在小区中心广场举办"邻里节"活动，有趣味运动会、美食分享会等环节，欢迎大家踊跃报名参加！',
      likes: 32,
      comments: 15,
      type: '活动'
    },
    {
      id: 4,
      author: '李女士',
      avatar: '/api/placeholder/40/40',
      time: '昨天',
      content: '有人丢了钥匙吗？我在电梯口捡到一串钥匙，上面有一个小熊挂件。失主请联系我认领。',
      images: ['/api/placeholder/120/80'],
      likes: 24,
      comments: 3,
      type: '寻物'
    }
  ];
  
  const activities = [
    {
      id: 1,
      title: '小区亲子活动日',
      time: '4月20日 15:00',
      location: '中心花园',
      participants: 18,
      limit: 30,
      image: '/api/placeholder/140/80'
    },
    {
      id: 2,
      title: '社区健康讲座',
      time: '4月22日 10:00',
      location: '活动中心',
      participants: 25,
      limit: 50,
      image: '/api/placeholder/140/80'
    },
    {
      id: 3,
      title: '小区棋牌比赛',
      time: '4月25日 19:00',
      location: '休闲室',
      participants: 12,
      limit: 16,
      image: '/api/placeholder/140/80'
    }
  ];

  const headerRightContent = (
    <>
      <button className="p-1 rounded-full hover:bg-blue-500">
        <MessageCircle size={20} />
      </button>
      <button className="ml-3 p-1 rounded-full hover:bg-blue-500">
        <Camera size={20} />
      </button>
    </>
  );

  return (
    <>
      <PageHeader title="社区交流" rightContent={headerRightContent} />

      {/* 选项卡导航 */}
      <div className="bg-white sticky top-16 z-10 shadow-sm">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-3 text-center text-sm font-medium ${
                activeTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto pb-16">
        {activeTab !== '活动' ? (
          // 帖子列表
          <div className="divide-y divide-gray-100 bg-white">
            {posts.map((post) => (
              <div key={post.id} className="p-4">
                {/* 帖子头部 */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                      <h3 className="text-sm font-medium">{post.author}</h3>
                      <p className="text-xs text-gray-500">{post.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full mr-2">
                      {post.type}
                    </span>
                    <button className="text-gray-400">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </div>
                
                {/* 帖子内容 */}
                <div className="mb-3">
                  <p className="text-sm text-gray-800">{post.content}</p>
                  
                  {/* 图片展示 */}
                  {post.images && (
                    <div className="flex mt-2 space-x-2">
                      {post.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`图片${index+1}`}
                          className="rounded-md w-24 h-16 object-cover"
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                {/* 帖子底部 */}
                <div className="flex text-gray-500 text-sm border-t border-gray-50 pt-2">
                  <button className="flex items-center mr-6">
                    <ThumbsUp size={16} className="mr-1" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center mr-6">
                    <MessageCircle size={16} className="mr-1" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center">
                    <Share2 size={16} className="mr-1" />
                    <span>分享</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // 活动列表
          <div className="p-4">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {activities.map((activity, index) => (
                <div key={activity.id} className={`p-4 ${index !== activities.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-20 h-16 rounded-md object-cover mr-3"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{activity.title}</h3>
                      <div className="flex text-xs text-gray-500 mt-1">
                        <Calendar size={12} className="mr-1" />
                        <span>{activity.time}</span>
                      </div>
                      <div className="flex text-xs text-gray-500 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{activity.location}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        已报名: {activity.participants}/{activity.limit}
                      </div>
                    </div>
                    <button className="px-3 h-8 text-xs bg-blue-500 text-white rounded-full self-center">
                      报名
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Navigation />
      
      {/* 发帖悬浮按钮 */}
      <button className="fixed right-4 bottom-20 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </>
  );
}
