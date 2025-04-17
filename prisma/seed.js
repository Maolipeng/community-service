import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 清理现有数据
  await prisma.weather.deleteMany();
  await prisma.notice.deleteMany();
  await prisma.activity.deleteMany();
  await prisma.announcement.deleteMany();
  await prisma.propertyService.deleteMany();
  await prisma.lifeService.deleteMany();
  await prisma.communityService.deleteMany();

  // 创建天气数据
  await prisma.weather.create({
    data: {
      temp: 25,
      condition: '晴朗'
    }
  });

  // 创建紧急通知
  await prisma.notice.createMany({
    data: [
      {
        title: '停水通知：明日凌晨2点-6点进行管道维修',
        content: '因小区供水管道需要维修，明日凌晨2点-6点将暂停供水，请提前储水。',
        type: 'emergency'
      },
      {
        title: '电梯维修通知：1号楼2单元电梯检修',
        content: '1号楼2单元电梯将于本周六进行例行检修，请居民提前安排出行。',
        type: 'normal'
      },
      {
        title: '小区消防演习通知',
        content: '本周日上午10点将在小区进行消防演习，请居民积极参与。',
        type: 'normal'
      }
    ]
  });

  // 创建活动数据
  await prisma.activity.createMany({
    data: [
      {
        title: '邻里节活动',
        date: '2025-04-20',
        time: '15:00-17:00',
        location: '小区中心广场',
        image: '/api/placeholder/400/200',
        description: '趣味运动会、美食分享会等精彩活动等你来参加！'
      },
      {
        title: '社区插花课程',
        date: '2025-04-22',
        time: '14:00-16:00',
        location: '社区活动室',
        image: '/api/placeholder/400/200',
        description: '专业老师教学，感受插花艺术的魅力'
      },
      {
        title: '亲子阅读会',
        date: '2025-04-25',
        time: '10:00-11:30',
        location: '社区图书室',
        image: '/api/placeholder/400/200',
        description: '与孩子一起享受阅读的乐趣'
      }
    ]
  });

  // 创建公告数据
  await prisma.announcement.createMany({
    data: [
      {
        title: '物业费缴纳通知',
        content: '请各位业主及时缴纳2025年第二季度物业费。',
        time: '2025-04-15'
      },
      {
        title: '小区环境整治公告',
        content: '为创造更好的居住环境，我们将开展为期一周的环境整治活动。',
        time: '2025-04-14'
      },
      {
        title: '车位使用规范提醒',
        content: '请各位业主规范停车，保持消防通道畅通。',
        time: '2025-04-13'
      }
    ]
  });

  // 创建物业服务数据
  await prisma.propertyService.createMany({
    data: [
      {
        title: '在线报修',
        description: '24小时响应维修需求',
        icon: 'repair',
        type: 'repair'
      },
      {
        title: '物业缴费',
        description: '支持在线缴纳物业费',
        icon: 'payment',
        type: 'payment'
      },
      {
        title: '快递服务',
        description: '代收发快递',
        icon: 'delivery',
        type: 'delivery'
      },
      {
        title: '物业咨询',
        description: '在线咨询物业服务',
        icon: 'consultation',
        type: 'consultation'
      }
    ]
  });

  // 创建生活服务数据
  await prisma.lifeService.createMany({
    data: [
      {
        title: '车位管理',
        description: '停车位查询及管理',
        icon: 'parking',
        type: 'parking'
      },
      {
        title: '周边商超',
        description: '便利店、超市信息',
        icon: 'shopping',
        type: 'shopping'
      },
      {
        title: '健康服务',
        description: '社区医疗咨询',
        icon: 'health',
        type: 'health'
      },
      {
        title: '家政服务',
        description: '保洁、维修等服务',
        icon: 'housekeeping',
        type: 'housekeeping'
      }
    ]
  });

  // 创建社区服务数据
  await prisma.communityService.createMany({
    data: [
      {
        title: '社区团购',
        description: '优惠团购商品',
        icon: 'groupBuy',
        type: 'groupBuy'
      },
      {
        title: '二手交易',
        description: '闲置物品交易',
        icon: 'secondHand',
        type: 'secondHand'
      },
      {
        title: '兴趣小组',
        description: '结识志同道合的邻居',
        icon: 'interest',
        type: 'interest'
      },
      {
        title: '便民电话',
        description: '常用电话查询',
        icon: 'phone',
        type: 'phone'
      }
    ]
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });