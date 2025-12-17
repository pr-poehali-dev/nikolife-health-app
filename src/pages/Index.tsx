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
  const [activeSection, setActiveSection] = useState('library');

  const habits = [
    { name: 'Утренняя зарядка', progress: 85, streak: 12 },
    { name: 'Медитация', progress: 70, streak: 8 },
    { name: 'Стакан воды', progress: 100, streak: 21 },
    { name: 'Здоровый сон', progress: 60, streak: 5 },
  ];

  const workouts = [
    { title: 'HIIT тренировка', duration: '20 мин', level: 'Средний', category: 'Кардио' },
    { title: 'Йога для спины', duration: '30 мин', level: 'Начальный', category: 'Гибкость' },
    { title: 'Силовая тренировка', duration: '45 мин', level: 'Продвинутый', category: 'Сила' },
  ];

  const meals = [
    { name: 'Овсянка с ягодами', calories: 320, protein: 12, time: 'Завтрак' },
    { name: 'Куриный салат', calories: 450, protein: 35, time: 'Обед' },
    { name: 'Лосось с овощами', calories: 520, protein: 42, time: 'Ужин' },
  ];

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

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workouts.map((workout, i) => (
                      <Card key={i} className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover-scale">
                        <div className="flex items-center justify-between mb-4">
                          <Badge>{workout.category}</Badge>
                          <Badge variant="outline">{workout.level}</Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{workout.title}</h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Icon name="Clock" size={18} />
                          <span>{workout.duration}</span>
                        </div>
                        <Button className="w-full mt-4">
                          <Icon name="Play" size={18} className="mr-2" />
                          Начать
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'nutrition' && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">План питания</h2>
                    <p className="text-gray-600">Персональные рекомендации и рецепты</p>
                  </div>

                  <Card className="p-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">1850 ккал</h3>
                        <p className="opacity-90">Дневная норма</p>
                      </div>
                      <div className="text-right">
                        <h3 className="text-2xl font-bold mb-2">89 г</h3>
                        <p className="opacity-90">Белка</p>
                      </div>
                    </div>
                  </Card>

                  <div className="space-y-4">
                    {meals.map((meal, i) => (
                      <Card key={i} className="p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <Badge variant="secondary" className="mb-2">
                              {meal.time}
                            </Badge>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{meal.name}</h3>
                            <div className="flex gap-6 text-sm text-gray-600">
                              <span>{meal.calories} ккал</span>
                              <span>{meal.protein}г белка</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Icon name="ChevronRight" size={20} />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
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
