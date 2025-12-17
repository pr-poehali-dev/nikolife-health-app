import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedWorkout, setSelectedWorkout] = useState<number | null>(null);
  const [workoutProgress, setWorkoutProgress] = useState<number[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);
  const [mealPlan, setMealPlan] = useState<{[key: string]: number}>({});

  const habits = [
    { name: 'Утренняя зарядка', progress: 85, streak: 12 },
    { name: 'Медитация', progress: 70, streak: 8 },
    { name: 'Стакан воды', progress: 100, streak: 21 },
    { name: 'Здоровый сон', progress: 60, streak: 5 },
  ];

  const workouts = [
    { 
      id: 0,
      title: 'HIIT тренировка', 
      duration: '20 мин', 
      level: 'Средний', 
      category: 'Кардио',
      description: 'Высокоинтенсивная интервальная тренировка для сжигания калорий',
      calories: 280,
      exercises: [
        { name: 'Прыжки с разведением', duration: '45 сек', rest: '15 сек' },
        { name: 'Бёрпи', duration: '45 сек', rest: '15 сек' },
        { name: 'Высокие колени', duration: '45 сек', rest: '15 сек' },
        { name: 'Планка', duration: '45 сек', rest: '15 сек' },
      ],
      videoPlaceholder: true
    },
    { 
      id: 1,
      title: 'Йога для спины', 
      duration: '30 мин', 
      level: 'Начальный', 
      category: 'Гибкость',
      description: 'Комплекс упражнений для укрепления и расслабления спины',
      calories: 150,
      exercises: [
        { name: 'Поза кошки-коровы', duration: '2 мин', rest: '30 сек' },
        { name: 'Поза ребенка', duration: '3 мин', rest: '30 сек' },
        { name: 'Скрутка лежа', duration: '2 мин', rest: '30 сек' },
        { name: 'Поза собаки мордой вниз', duration: '2 мин', rest: '30 сек' },
      ],
      videoPlaceholder: true
    },
    { 
      id: 2,
      title: 'Силовая тренировка', 
      duration: '45 мин', 
      level: 'Продвинутый', 
      category: 'Сила',
      description: 'Комплексная силовая тренировка на все группы мышц',
      calories: 380,
      exercises: [
        { name: 'Приседания', duration: '3 подхода × 12', rest: '60 сек' },
        { name: 'Отжимания', duration: '3 подхода × 15', rest: '60 сек' },
        { name: 'Выпады', duration: '3 подхода × 10', rest: '60 сек' },
        { name: 'Планка с подъемом рук', duration: '3 подхода × 30 сек', rest: '60 сек' },
      ],
      videoPlaceholder: true
    },
  ];

  const recipes = [
    { 
      id: 0,
      name: 'Овсянка с ягодами', 
      calories: 320, 
      protein: 12, 
      carbs: 54,
      fats: 6,
      time: 'Завтрак',
      cookTime: '10 мин',
      difficulty: 'Легко',
      ingredients: ['100г овсяных хлопьев', '200мл молока', '50г черники', '50г малины', '1 ст.л. меда'],
      steps: ['Залейте овсянку молоком и варите 5-7 минут', 'Добавьте ягоды и мед', 'Перемешайте и подавайте теплым']
    },
    { 
      id: 1,
      name: 'Куриный салат', 
      calories: 450, 
      protein: 35, 
      carbs: 25,
      fats: 18,
      time: 'Обед',
      cookTime: '20 мин',
      difficulty: 'Средне',
      ingredients: ['150г куриной грудки', '100г листьев салата', '1 огурец', '1 помидор', 'Оливковое масло', 'Лимонный сок'],
      steps: ['Отварите или запеките куриную грудку', 'Нарежьте овощи и курицу', 'Смешайте с салатными листьями', 'Заправьте маслом и лимонным соком']
    },
    { 
      id: 2,
      name: 'Лосось с овощами', 
      calories: 520, 
      protein: 42, 
      carbs: 20,
      fats: 28,
      time: 'Ужин',
      cookTime: '25 мин',
      difficulty: 'Средне',
      ingredients: ['200г филе лосося', '150г брокколи', '100г моркови', 'Специи по вкусу', 'Лимон'],
      steps: ['Запекайте лосось в духовке при 180°C 15 минут', 'Приготовьте овощи на пару', 'Подавайте с лимоном']
    },
    { 
      id: 3,
      name: 'Греческий йогурт с орехами', 
      calories: 280, 
      protein: 18, 
      carbs: 22,
      fats: 12,
      time: 'Завтрак',
      cookTime: '5 мин',
      difficulty: 'Легко',
      ingredients: ['200г греческого йогурта', '30г грецких орехов', '20г миндаля', '1 ст.л. меда', 'Корица'],
      steps: ['Выложите йогурт в миску', 'Добавьте измельченные орехи', 'Полейте медом и посыпьте корицей']
    },
    { 
      id: 4,
      name: 'Киноа с овощами', 
      calories: 380, 
      protein: 14, 
      carbs: 58,
      fats: 10,
      time: 'Обед',
      cookTime: '30 мин',
      difficulty: 'Легко',
      ingredients: ['100г киноа', '1 болгарский перец', '1 цукини', 'Чеснок', 'Оливковое масло'],
      steps: ['Отварите киноа согласно инструкции', 'Обжарьте нарезанные овощи с чесноком', 'Смешайте киноа с овощами']
    },
    { 
      id: 5,
      name: 'Запеченная индейка', 
      calories: 480, 
      protein: 45, 
      carbs: 18,
      fats: 22,
      time: 'Ужин',
      cookTime: '35 мин',
      difficulty: 'Средне',
      ingredients: ['200г филе индейки', '150г батата', 'Розмарин', 'Чеснок', 'Оливковое масло'],
      steps: ['Замаринуйте индейку со специями', 'Запекайте с бататом при 190°C 30 минут', 'Подавайте с зеленью']
    },
  ];

  const meals = recipes.slice(0, 3);

  const articles = [
    { title: 'Основы здорового питания', category: 'Питание', readTime: '5 мин' },
    { title: 'Техники управления стрессом', category: 'Ментальное здоровье', readTime: '8 мин' },
    { title: 'Восстановление после тренировок', category: 'Тренировки', readTime: '6 мин' },
  ];

  const chats = [
    { name: 'Группа по йоге', lastMessage: 'Завтра занятие в 10:00', time: '2 мин', unread: 3 },
    { name: 'Питание и рецепты', lastMessage: 'Отличный рецепт смузи!', time: '1 ч', unread: 0 },
    { name: 'Поддержка и мотивация', lastMessage: 'Молодцы, продолжайте!', time: '3 ч', unread: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="flex h-screen">
        <aside className="w-20 lg:w-64 bg-white border-r border-gray-200 flex flex-col items-center lg:items-stretch p-4 space-y-2">
          <div className="mb-8 text-center lg:text-left">
            <h1 className="text-2xl font-bold text-emerald-600 hidden lg:block">Nikolife</h1>
            <span className="text-2xl lg:hidden">🌿</span>
          </div>

          <nav className="flex-1 space-y-2">
            <Button
              variant={activeSection === 'dashboard' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveSection('dashboard')}
            >
              <Icon name="Home" className="lg:mr-2" size={20} />
              <span className="hidden lg:inline">Главная</span>
            </Button>

            <Button
              variant={activeSection === 'library' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveSection('library')}
            >
              <Icon name="BookOpen" className="lg:mr-2" size={20} />
              <span className="hidden lg:inline">Библиотека</span>
            </Button>

            <Button
              variant={activeSection === 'workouts' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveSection('workouts')}
            >
              <Icon name="Dumbbell" className="lg:mr-2" size={20} />
              <span className="hidden lg:inline">Тренировки</span>
            </Button>

            <Button
              variant={activeSection === 'nutrition' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveSection('nutrition')}
            >
              <Icon name="Apple" className="lg:mr-2" size={20} />
              <span className="hidden lg:inline">Питание</span>
            </Button>

            <Button
              variant={activeSection === 'mental' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveSection('mental')}
            >
              <Icon name="Brain" className="lg:mr-2" size={20} />
              <span className="hidden lg:inline">Ментальное</span>
            </Button>

            <Button
              variant={activeSection === 'habits' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveSection('habits')}
            >
              <Icon name="Target" className="lg:mr-2" size={20} />
              <span className="hidden lg:inline">Привычки</span>
            </Button>

            <Button
              variant={activeSection === 'chat' ? 'default' : 'ghost'}
              className="w-full justify-start relative"
              onClick={() => setActiveSection('chat')}
            >
              <Icon name="MessageCircle" className="lg:mr-2" size={20} />
              <span className="hidden lg:inline">Чаты</span>
              <Badge className="absolute -top-1 -right-1 lg:relative lg:top-0 lg:right-0 lg:ml-auto px-2 py-0 text-xs">
                4
              </Badge>
            </Button>

            <Button
              variant={activeSection === 'profile' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveSection('profile')}
            >
              <Icon name="User" className="lg:mr-2" size={20} />
              <span className="hidden lg:inline">Профиль</span>
            </Button>
          </nav>
        </aside>

        <main className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-8 max-w-7xl mx-auto">
              {activeSection === 'dashboard' && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Добрый день, Анна! 👋</h2>
                    <p className="text-lg text-gray-600">Сегодня отличный день для новых достижений</p>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6">
                    <Card className="p-6 bg-gradient-to-br from-emerald-500 to-teal-500 text-white hover-scale cursor-pointer relative overflow-hidden">
                      <div className="relative z-10">
                        <Icon name="Flame" size={28} className="mb-3 opacity-90" />
                        <p className="text-3xl font-bold mb-1">1,240</p>
                        <p className="text-sm opacity-90">Калорий сожжено</p>
                      </div>
                      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="75.36" transform="rotate(-90 50 50)" />
                        </svg>
                      </div>
                    </Card>

                    <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white hover-scale cursor-pointer relative overflow-hidden">
                      <div className="relative z-10">
                        <Icon name="Footprints" size={28} className="mb-3 opacity-90" />
                        <p className="text-3xl font-bold mb-1">8,450</p>
                        <p className="text-sm opacity-90">Шагов сегодня</p>
                      </div>
                      <div className="absolute bottom-2 right-2 flex gap-1 opacity-20">
                        <div className="w-2 h-16 bg-white rounded-full"></div>
                        <div className="w-2 h-20 bg-white rounded-full"></div>
                        <div className="w-2 h-12 bg-white rounded-full"></div>
                        <div className="w-2 h-24 bg-white rounded-full"></div>
                        <div className="w-2 h-18 bg-white rounded-full"></div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white hover-scale cursor-pointer relative overflow-hidden">
                      <div className="relative z-10">
                        <Icon name="Heart" size={28} className="mb-3 opacity-90" />
                        <p className="text-3xl font-bold mb-1">78</p>
                        <p className="text-sm opacity-90">Пульс (уд/мин)</p>
                      </div>
                      <div className="absolute bottom-0 right-0 w-full h-16 opacity-20">
                        <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
                          <path d="M0,30 Q10,30 20,15 T40,30 T60,30 Q70,30 80,15 T100,30 T120,30 Q130,30 140,15 T160,30 T180,30 Q190,30 200,15" fill="none" stroke="white" strokeWidth="3" />
                        </svg>
                      </div>
                    </Card>

                    <Card className="p-6 bg-gradient-to-br from-amber-500 to-orange-500 text-white hover-scale cursor-pointer relative overflow-hidden">
                      <div className="relative z-10">
                        <Icon name="Trophy" size={28} className="mb-3 opacity-90" />
                        <p className="text-3xl font-bold mb-1">21</p>
                        <p className="text-sm opacity-90">Дней подряд</p>
                      </div>
                      <div className="absolute bottom-2 right-2 grid grid-cols-5 gap-1 opacity-20">
                        {[...Array(15)].map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-white rounded-sm"></div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-6">
                    <Card className="lg:col-span-2 p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-gray-900">Привычки на сегодня</h3>
                        <Button variant="ghost" size="sm">
                          <Icon name="Plus" size={16} className="mr-1" />
                          Добавить
                        </Button>
                      </div>
                      <div className="space-y-4">
                        {habits.slice(0, 3).map((habit, i) => (
                          <div key={i} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors relative overflow-hidden">
                            <div className="flex items-center justify-between mb-3 relative z-10">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                  <Icon name="Check" size={18} className="text-emerald-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900">{habit.name}</h4>
                                  <p className="text-sm text-gray-600">{habit.progress}% выполнено</p>
                                </div>
                              </div>
                              <Badge className="bg-amber-500">
                                <Icon name="Flame" size={12} className="mr-1" />
                                {habit.streak}
                              </Badge>
                            </div>
                            <div className="relative">
                              <Progress value={habit.progress} className="h-2 relative z-10" />
                              <div className="absolute -top-8 right-0 text-5xl font-bold text-emerald-100 select-none pointer-events-none">
                                {habit.progress}%
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Быстрые действия</h3>
                      <div className="space-y-3">
                        <Button 
                          variant="outline" 
                          className="w-full justify-start h-auto py-4"
                          onClick={() => setActiveSection('workouts')}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                              <Icon name="Dumbbell" size={20} className="text-emerald-600" />
                            </div>
                            <div className="text-left">
                              <p className="font-semibold text-gray-900">Тренировка</p>
                              <p className="text-xs text-gray-600">Начать сейчас</p>
                            </div>
                          </div>
                        </Button>

                        <Button 
                          variant="outline" 
                          className="w-full justify-start h-auto py-4"
                          onClick={() => setActiveSection('nutrition')}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                              <Icon name="Apple" size={20} className="text-blue-600" />
                            </div>
                            <div className="text-left">
                              <p className="font-semibold text-gray-900">План питания</p>
                              <p className="text-xs text-gray-600">На сегодня</p>
                            </div>
                          </div>
                        </Button>

                        <Button 
                          variant="outline" 
                          className="w-full justify-start h-auto py-4"
                          onClick={() => setActiveSection('mental')}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                              <Icon name="Brain" size={20} className="text-purple-600" />
                            </div>
                            <div className="text-left">
                              <p className="font-semibold text-gray-900">Медитация</p>
                              <p className="text-xs text-gray-600">15 минут</p>
                            </div>
                          </div>
                        </Button>
                      </div>
                    </Card>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-gray-900">Рекомендованные тренировки</h3>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setActiveSection('workouts')}
                        >
                          Все
                          <Icon name="ChevronRight" size={16} className="ml-1" />
                        </Button>
                      </div>
                      <div className="space-y-3">
                        {workouts.slice(0, 2).map((workout, i) => (
                          <div 
                            key={i} 
                            className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-all cursor-pointer relative overflow-hidden group"
                            onClick={() => {
                              setActiveSection('workouts');
                              setSelectedWorkout(i);
                            }}
                          >
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                              <Icon name="Dumbbell" size={128} className="text-emerald-600" />
                            </div>
                            <div className="relative z-10">
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="secondary">{workout.category}</Badge>
                                <Badge variant="outline">{workout.level}</Badge>
                              </div>
                              <h4 className="font-semibold text-gray-900 mb-2">{workout.title}</h4>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <Icon name="Clock" size={14} />
                                  {workout.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Icon name="Flame" size={14} />
                                  {workout.calories} ккал
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>

                    <Card className="p-6 relative overflow-hidden">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-gray-900">Питание на сегодня</h3>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setActiveSection('nutrition')}
                        >
                          Подробнее
                          <Icon name="ChevronRight" size={16} className="ml-1" />
                        </Button>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-2 left-2 w-20 h-20 border-4 border-emerald-300 rounded-full"></div>
                          <div className="absolute bottom-2 right-2 w-16 h-16 border-4 border-teal-300 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between relative z-10">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Осталось калорий</p>
                            <p className="text-2xl font-bold text-gray-900">610 ккал</p>
                          </div>
                          <div className="relative w-20 h-20">
                            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                              <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                              <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="83" className="transition-all duration-500" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-sm font-bold text-gray-900">67%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {meals.slice(0, 2).map((meal, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
                              <div>
                                <p className="font-semibold text-gray-900 text-sm">{meal.name}</p>
                                <p className="text-xs text-gray-600">{meal.time}</p>
                              </div>
                            </div>
                            <p className="text-sm font-semibold text-gray-900">{meal.calories} ккал</p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              )}

              {activeSection === 'library' && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Библиотека здоровья</h2>
                    <p className="text-gray-600">Статьи, видео и материалы для вашего развития</p>
                  </div>

                  <Tabs defaultValue="articles" className="w-full">
                    <TabsList className="mb-6">
                      <TabsTrigger value="articles">Статьи</TabsTrigger>
                      <TabsTrigger value="videos">Видео</TabsTrigger>
                      <TabsTrigger value="audio">Аудио</TabsTrigger>
                    </TabsList>

                    <TabsContent value="articles" className="space-y-4">
                      {articles.map((article, i) => (
                        <Card key={i} className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover-scale">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <Badge variant="secondary" className="mb-3">
                                {article.category}
                              </Badge>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Icon name="Clock" size={16} />
                                  {article.readTime}
                                </span>
                              </div>
                            </div>
                            <Icon name="BookmarkPlus" size={20} className="text-gray-400 hover:text-emerald-600 transition-colors" />
                          </div>
                        </Card>
                      ))}
                    </TabsContent>

                    <TabsContent value="videos" className="space-y-4">
                      <Card className="p-6">
                        <p className="text-gray-500 text-center py-8">Видеоматериалы скоро появятся</p>
                      </Card>
                    </TabsContent>

                    <TabsContent value="audio" className="space-y-4">
                      <Card className="p-6">
                        <p className="text-gray-500 text-center py-8">Аудиоматериалы скоро появятся</p>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              )}

              {activeSection === 'workouts' && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Функциональные тренировки</h2>
                    <p className="text-gray-600">Персонализированные программы под ваш уровень</p>
                  </div>

                  {selectedWorkout === null ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {workouts.map((workout, i) => (
                        <Card key={i} className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover-scale">
                          <div className="flex items-center justify-between mb-4">
                            <Badge>{workout.category}</Badge>
                            <Badge variant="outline">{workout.level}</Badge>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{workout.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">{workout.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={16} />
                              {workout.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Flame" size={16} />
                              {workout.calories} ккал
                            </span>
                          </div>
                          <Button 
                            className="w-full"
                            onClick={() => setSelectedWorkout(i)}
                          >
                            <Icon name="Play" size={18} className="mr-2" />
                            Начать
                          </Button>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <Button 
                        variant="ghost" 
                        onClick={() => setSelectedWorkout(null)}
                        className="mb-4"
                      >
                        <Icon name="ArrowLeft" size={18} className="mr-2" />
                        Назад к тренировкам
                      </Button>

                      <Card className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <Badge>{workouts[selectedWorkout].category}</Badge>
                              <Badge variant="outline">{workouts[selectedWorkout].level}</Badge>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                              {workouts[selectedWorkout].title}
                            </h2>
                            <p className="text-gray-600 mb-4">{workouts[selectedWorkout].description}</p>
                            <div className="flex items-center gap-6 text-sm text-gray-600">
                              <span className="flex items-center gap-2">
                                <Icon name="Clock" size={18} />
                                {workouts[selectedWorkout].duration}
                              </span>
                              <span className="flex items-center gap-2">
                                <Icon name="Flame" size={18} />
                                {workouts[selectedWorkout].calories} ккал
                              </span>
                              <span className="flex items-center gap-2">
                                <Icon name="Target" size={18} />
                                {workouts[selectedWorkout].exercises.length} упражнений
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-900 rounded-lg aspect-video mb-6 flex items-center justify-center">
                          <div className="text-center text-white">
                            <Icon name="Play" size={64} className="mx-auto mb-4 opacity-70" />
                            <p className="text-lg opacity-70">Видео тренировки</p>
                          </div>
                        </div>

                        <div className="space-y-4 mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Упражнения</h3>
                          {workouts[selectedWorkout].exercises.map((exercise, idx) => (
                            <Card key={idx} className="p-4 bg-gray-50">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">
                                    {idx + 1}
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900">{exercise.name}</h4>
                                    <p className="text-sm text-gray-600">
                                      {exercise.duration} • Отдых {exercise.rest}
                                    </p>
                                  </div>
                                </div>
                                <Button 
                                  variant={workoutProgress.includes(idx) ? "secondary" : "outline"}
                                  size="sm"
                                  onClick={() => {
                                    if (workoutProgress.includes(idx)) {
                                      setWorkoutProgress(workoutProgress.filter(i => i !== idx));
                                    } else {
                                      setWorkoutProgress([...workoutProgress, idx]);
                                    }
                                  }}
                                >
                                  {workoutProgress.includes(idx) ? (
                                    <>
                                      <Icon name="Check" size={16} className="mr-1" />
                                      Готово
                                    </>
                                  ) : (
                                    'Отметить'
                                  )}
                                </Button>
                              </div>
                            </Card>
                          ))}
                        </div>

                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Прогресс тренировки</span>
                            <span className="text-sm font-medium text-emerald-600">
                              {workoutProgress.length} / {workouts[selectedWorkout].exercises.length}
                            </span>
                          </div>
                          <Progress 
                            value={(workoutProgress.length / workouts[selectedWorkout].exercises.length) * 100} 
                            className="h-3"
                          />
                        </div>

                        <div className="flex gap-4">
                          <Button 
                            className="flex-1"
                            disabled={workoutProgress.length !== workouts[selectedWorkout].exercises.length}
                            onClick={() => {
                              setWorkoutProgress([]);
                              setSelectedWorkout(null);
                            }}
                          >
                            <Icon name="CheckCircle" size={18} className="mr-2" />
                            Завершить тренировку
                          </Button>
                          <Button variant="outline">
                            <Icon name="Heart" size={18} />
                          </Button>
                          <Button variant="outline">
                            <Icon name="Share2" size={18} />
                          </Button>
                        </div>
                      </Card>
                    </div>
                  )}
                </div>
              )}

              {activeSection === 'nutrition' && (
                <div className="space-y-6 animate-fade-in">
                  {selectedRecipe === null ? (
                    <>
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">План питания</h2>
                          <p className="text-gray-600">Создайте персональное меню из рецептов</p>
                        </div>
                        <Button onClick={() => {
                          const breakfast = recipes.filter(r => r.time === 'Завтрак')[0]?.id || 0;
                          const lunch = recipes.filter(r => r.time === 'Обед')[0]?.id || 1;
                          const dinner = recipes.filter(r => r.time === 'Ужин')[0]?.id || 2;
                          setMealPlan({ breakfast, lunch, dinner });
                        }}>
                          <Icon name="Sparkles" size={18} className="mr-2" />
                          Сгенерировать меню
                        </Button>
                      </div>

                      <Card className="p-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                        <div className="grid md:grid-cols-4 gap-6">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">1850</h3>
                            <p className="opacity-90">ккал/день</p>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-2">89г</h3>
                            <p className="opacity-90">Белков</p>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-2">220г</h3>
                            <p className="opacity-90">Углеводов</p>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-2">65г</h3>
                            <p className="opacity-90">Жиров</p>
                          </div>
                        </div>
                      </Card>

                      <Tabs defaultValue="plan" className="w-full">
                        <TabsList className="mb-6">
                          <TabsTrigger value="plan">Моё меню</TabsTrigger>
                          <TabsTrigger value="recipes">Все рецепты</TabsTrigger>
                        </TabsList>

                        <TabsContent value="plan" className="space-y-4">
                          {Object.keys(mealPlan).length === 0 ? (
                            <Card className="p-12 text-center">
                              <Icon name="UtensilsCrossed" size={64} className="mx-auto text-gray-300 mb-4" />
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">Создайте своё меню</h3>
                              <p className="text-gray-600 mb-6">Нажмите "Сгенерировать меню" или выберите рецепты вручную</p>
                              <Button onClick={() => {
                                const breakfast = recipes.filter(r => r.time === 'Завтрак')[0]?.id || 0;
                                const lunch = recipes.filter(r => r.time === 'Обед')[0]?.id || 1;
                                const dinner = recipes.filter(r => r.time === 'Ужин')[0]?.id || 2;
                                setMealPlan({ breakfast, lunch, dinner });
                              }}>
                                <Icon name="Sparkles" size={18} className="mr-2" />
                                Сгенерировать меню
                              </Button>
                            </Card>
                          ) : (
                            <>
                              {['breakfast', 'lunch', 'dinner'].map((mealType) => {
                                const recipeId = mealPlan[mealType];
                                const recipe = recipes.find(r => r.id === recipeId);
                                if (!recipe) return null;
                                
                                return (
                                  <Card key={mealType} className="p-6 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <Badge variant="secondary" className="mb-3">
                                          {recipe.time}
                                        </Badge>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.name}</h3>
                                        <div className="flex gap-6 text-sm text-gray-600 mb-4">
                                          <span className="flex items-center gap-1">
                                            <Icon name="Flame" size={14} />
                                            {recipe.calories} ккал
                                          </span>
                                          <span>Б: {recipe.protein}г</span>
                                          <span>Ж: {recipe.fats}г</span>
                                          <span>У: {recipe.carbs}г</span>
                                          <span className="flex items-center gap-1">
                                            <Icon name="Clock" size={14} />
                                            {recipe.cookTime}
                                          </span>
                                        </div>
                                        <div className="flex gap-2">
                                          <Button 
                                            variant="outline" 
                                            size="sm"
                                            onClick={() => setSelectedRecipe(recipe.id)}
                                          >
                                            Посмотреть рецепт
                                          </Button>
                                          <Button 
                                            variant="ghost" 
                                            size="sm"
                                            onClick={() => {
                                              const newPlan = { ...mealPlan };
                                              delete newPlan[mealType];
                                              setMealPlan(newPlan);
                                            }}
                                          >
                                            <Icon name="X" size={16} />
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </Card>
                                );
                              })}
                              
                              <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Итого за день</h4>
                                    <p className="text-sm text-gray-600">Сбалансированный план питания</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-2xl font-bold text-gray-900">
                                      {Object.values(mealPlan).reduce((sum, id) => {
                                        const recipe = recipes.find(r => r.id === id);
                                        return sum + (recipe?.calories || 0);
                                      }, 0)} ккал
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      Белка: {Object.values(mealPlan).reduce((sum, id) => {
                                        const recipe = recipes.find(r => r.id === id);
                                        return sum + (recipe?.protein || 0);
                                      }, 0)}г
                                    </p>
                                  </div>
                                </div>
                              </Card>
                            </>
                          )}
                        </TabsContent>

                        <TabsContent value="recipes" className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            {recipes.map((recipe, i) => (
                              <Card 
                                key={i} 
                                className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                onClick={() => setSelectedRecipe(i)}
                              >
                                <div className="flex items-center justify-between mb-3">
                                  <Badge variant="secondary">{recipe.time}</Badge>
                                  <Badge variant="outline">{recipe.difficulty}</Badge>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{recipe.name}</h3>
                                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                                  <span className="flex items-center gap-1">
                                    <Icon name="Flame" size={14} />
                                    {recipe.calories} ккал
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Icon name="Clock" size={14} />
                                    {recipe.cookTime}
                                  </span>
                                </div>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="w-full"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    const mealType = recipe.time === 'Завтрак' ? 'breakfast' : recipe.time === 'Обед' ? 'lunch' : 'dinner';
                                    setMealPlan({ ...mealPlan, [mealType]: recipe.id });
                                  }}
                                >
                                  <Icon name="Plus" size={16} className="mr-1" />
                                  Добавить в меню
                                </Button>
                              </Card>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </>
                  ) : (
                    <div className="space-y-6">
                      <Button 
                        variant="ghost" 
                        onClick={() => setSelectedRecipe(null)}
                      >
                        <Icon name="ArrowLeft" size={18} className="mr-2" />
                        Назад к плану питания
                      </Button>

                      <Card className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <Badge>{recipes[selectedRecipe].time}</Badge>
                              <Badge variant="outline">{recipes[selectedRecipe].difficulty}</Badge>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                              {recipes[selectedRecipe].name}
                            </h2>
                            <div className="flex items-center gap-6 text-gray-600">
                              <span className="flex items-center gap-2">
                                <Icon name="Clock" size={18} />
                                {recipes[selectedRecipe].cookTime}
                              </span>
                              <span className="flex items-center gap-2">
                                <Icon name="Flame" size={18} />
                                {recipes[selectedRecipe].calories} ккал
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4 mb-8">
                          <Card className="p-4 bg-emerald-50">
                            <p className="text-sm text-gray-600 mb-1">Калории</p>
                            <p className="text-2xl font-bold text-gray-900">{recipes[selectedRecipe].calories}</p>
                          </Card>
                          <Card className="p-4 bg-blue-50">
                            <p className="text-sm text-gray-600 mb-1">Белки</p>
                            <p className="text-2xl font-bold text-gray-900">{recipes[selectedRecipe].protein}г</p>
                          </Card>
                          <Card className="p-4 bg-amber-50">
                            <p className="text-sm text-gray-600 mb-1">Жиры</p>
                            <p className="text-2xl font-bold text-gray-900">{recipes[selectedRecipe].fats}г</p>
                          </Card>
                          <Card className="p-4 bg-purple-50">
                            <p className="text-sm text-gray-600 mb-1">Углеводы</p>
                            <p className="text-2xl font-bold text-gray-900">{recipes[selectedRecipe].carbs}г</p>
                          </Card>
                        </div>

                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Ингредиенты</h3>
                          <div className="space-y-2">
                            {recipes[selectedRecipe].ingredients.map((ingredient, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span className="text-gray-900">{ingredient}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Приготовление</h3>
                          <div className="space-y-4">
                            {recipes[selectedRecipe].steps.map((step, idx) => (
                              <div key={idx} className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold flex-shrink-0">
                                  {idx + 1}
                                </div>
                                <p className="text-gray-900 pt-1">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button 
                            className="flex-1"
                            onClick={() => {
                              const mealType = recipes[selectedRecipe].time === 'Завтрак' ? 'breakfast' : recipes[selectedRecipe].time === 'Обед' ? 'lunch' : 'dinner';
                              setMealPlan({ ...mealPlan, [mealType]: recipes[selectedRecipe].id });
                              setSelectedRecipe(null);
                            }}
                          >
                            <Icon name="Plus" size={18} className="mr-2" />
                            Добавить в меню
                          </Button>
                          <Button variant="outline">
                            <Icon name="Heart" size={18} />
                          </Button>
                          <Button variant="outline">
                            <Icon name="Share2" size={18} />
                          </Button>
                        </div>
                      </Card>
                    </div>
                  )}
                </div>
              )}

              {activeSection === 'mental' && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Ментальное здоровье</h2>
                    <p className="text-gray-600">Медитации, практики и материалы для внутреннего баланса</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50">
                      <Icon name="Headphones" size={32} className="text-purple-600 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Аудио медитации</h3>
                      <p className="text-gray-600 mb-4">12 практик для расслабления и концентрации</p>
                      <Button variant="outline">Слушать</Button>
                    </Card>

                    <Card className="p-6 bg-gradient-to-br from-blue-50 to-teal-50">
                      <Icon name="BookOpen" size={32} className="text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Дневник эмоций</h3>
                      <p className="text-gray-600 mb-4">Отслеживайте настроение и триггеры стресса</p>
                      <Button variant="outline">Открыть</Button>
                    </Card>
                  </div>
                </div>
              )}

              {activeSection === 'habits' && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Трекер привычек</h2>
                    <p className="text-gray-600">Отслеживайте прогресс и формируйте полезные привычки</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {habits.map((habit, i) => (
                      <Card key={i} className="p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">{habit.name}</h3>
                          <Badge className="bg-amber-500">
                            <Icon name="Flame" size={14} className="mr-1" />
                            {habit.streak}
                          </Badge>
                        </div>
                        <Progress value={habit.progress} className="h-2 mb-2" />
                        <p className="text-sm text-gray-600">{habit.progress}% выполнено</p>
                      </Card>
                    ))}
                  </div>

                  <Button className="w-full md:w-auto">
                    <Icon name="Plus" size={18} className="mr-2" />
                    Добавить привычку
                  </Button>
                </div>
              )}

              {activeSection === 'chat' && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Чаты и сообщества</h2>
                    <p className="text-gray-600">Общайтесь, делитесь опытом и находите поддержку</p>
                  </div>

                  <div className="space-y-3">
                    {chats.map((chat, i) => (
                      <Card key={i} className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover-scale">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-emerald-100 text-emerald-700">
                              {chat.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-semibold text-gray-900">{chat.name}</h3>
                              <span className="text-xs text-gray-500">{chat.time}</span>
                            </div>
                            <p className="text-sm text-gray-600">{chat.lastMessage}</p>
                          </div>
                          {chat.unread > 0 && (
                            <Badge className="ml-2">{chat.unread}</Badge>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'profile' && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Личный кабинет</h2>
                    <p className="text-gray-600">Ваш прогресс и достижения</p>
                  </div>

                  <Card className="p-8">
                    <div className="flex items-start gap-6 mb-8">
                      <Avatar className="h-20 w-20">
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 text-2xl">
                          АП
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Анна Петрова</h3>
                        <p className="text-gray-600 mb-4">С нами 3 месяца</p>
                        <div className="flex gap-4">
                          <Button>Редактировать профиль</Button>
                          <Button variant="outline">Настройки</Button>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-emerald-50 rounded-lg">
                        <Icon name="Trophy" size={32} className="mx-auto text-emerald-600 mb-2" />
                        <p className="text-3xl font-bold text-gray-900 mb-1">24</p>
                        <p className="text-sm text-gray-600">Достижения</p>
                      </div>
                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <Icon name="TrendingUp" size={32} className="mx-auto text-blue-600 mb-2" />
                        <p className="text-3xl font-bold text-gray-900 mb-1">89%</p>
                        <p className="text-sm text-gray-600">Прогресс</p>
                      </div>
                      <div className="text-center p-6 bg-amber-50 rounded-lg">
                        <Icon name="Flame" size={32} className="mx-auto text-amber-600 mb-2" />
                        <p className="text-3xl font-bold text-gray-900 mb-1">21</p>
                        <p className="text-sm text-gray-600">Дней подряд</p>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}