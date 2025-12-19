import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Промышленная холодильная камера КХ-2000',
    category: 'Холодильные камеры',
    price: '245 000',
    image: 'https://cdn.poehali.dev/projects/5675b074-0f3c-4510-86ad-7c580ff7eeb2/files/a57b60c6-ae25-472e-bcb3-6ca3c9b7e7a4.jpg',
    specs: {
      volume: '2000 л',
      temp: '-18°C до +5°C',
      power: '2.5 кВт'
    }
  },
  {
    id: 2,
    name: 'Витрина холодильная ВХ-150',
    category: 'Витрины',
    price: '89 500',
    image: 'https://cdn.poehali.dev/projects/5675b074-0f3c-4510-86ad-7c580ff7eeb2/files/99cdc861-ea05-497c-9ac7-5f35714367a0.jpg',
    specs: {
      volume: '150 л',
      temp: '+2°C до +8°C',
      power: '0.4 кВт'
    }
  },
  {
    id: 3,
    name: 'Морозильный шкаф МШ-800',
    category: 'Морозильные шкафы',
    price: '125 000',
    image: 'https://cdn.poehali.dev/projects/5675b074-0f3c-4510-86ad-7c580ff7eeb2/files/ec564a29-8b96-49c7-9c5c-3c75ac3888b6.jpg',
    specs: {
      volume: '800 л',
      temp: '-25°C до -18°C',
      power: '1.8 кВт'
    }
  },
  {
    id: 4,
    name: 'Холодильный стол СХ-4',
    category: 'Столы',
    price: '68 000',
    image: 'https://cdn.poehali.dev/projects/5675b074-0f3c-4510-86ad-7c580ff7eeb2/files/a57b60c6-ae25-472e-bcb3-6ca3c9b7e7a4.jpg',
    specs: {
      volume: '400 л',
      temp: '0°C до +10°C',
      power: '0.6 кВт'
    }
  },
  {
    id: 5,
    name: 'Компрессорный агрегат КА-500',
    category: 'Компрессоры',
    price: '156 000',
    image: 'https://cdn.poehali.dev/projects/5675b074-0f3c-4510-86ad-7c580ff7eeb2/files/99cdc861-ea05-497c-9ac7-5f35714367a0.jpg',
    specs: {
      volume: '500 м³/ч',
      temp: '-30°C до +5°C',
      power: '3.2 кВт'
    }
  },
  {
    id: 6,
    name: 'Ларь морозильный ЛМ-350',
    category: 'Лари',
    price: '52 000',
    image: 'https://cdn.poehali.dev/projects/5675b074-0f3c-4510-86ad-7c580ff7eeb2/files/ec564a29-8b96-49c7-9c5c-3c75ac3888b6.jpg',
    specs: {
      volume: '350 л',
      temp: '-20°C до -12°C',
      power: '0.5 кВт'
    }
  }
];

const categories = [
  { name: 'Холодильные камеры', icon: 'Box', count: 12 },
  { name: 'Витрины', icon: 'Store', count: 8 },
  { name: 'Морозильные шкафы', icon: 'Refrigerator', count: 15 },
  { name: 'Столы', icon: 'Table', count: 10 },
  { name: 'Компрессоры', icon: 'Settings', count: 7 },
  { name: 'Лари', icon: 'Package', count: 6 }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Snowflake" size={28} className="text-primary" />
              <span className="text-xl font-bold text-foreground">ХОЛОДПРОМ</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'catalog', label: 'Каталог' },
                { id: 'about', label: 'О нас' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary uppercase tracking-wide ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button size="sm" className="uppercase tracking-wide">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative py-24 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="uppercase tracking-wider">
                Профессиональное оборудование
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Холодильное оборудование для вашего бизнеса
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Поставляем, устанавливаем и обслуживаем промышленное холодильное оборудование высочайшего качества. Более 10 лет на рынке.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('catalog')}
                  className="uppercase tracking-wide"
                >
                  Смотреть каталог
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('contacts')}
                  className="uppercase tracking-wide"
                >
                  Консультация
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Поддержка</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/5675b074-0f3c-4510-86ad-7c580ff7eeb2/files/a57b60c6-ae25-472e-bcb3-6ca3c9b7e7a4.jpg"
                alt="Холодильное оборудование"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Категории оборудования</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <Icon name={category.icon} size={32} className="mx-auto mb-3 text-primary" />
                  <h3 className="font-medium text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} товаров</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наш каталог</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессиональное холодильное оборудование для магазинов, ресторанов, складов и производств
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 uppercase tracking-wide">
                    {product.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {product.price} ₽
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Separator className="mb-4" />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Объем:</span>
                      <span className="font-medium">{product.specs.volume}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Температура:</span>
                      <span className="font-medium">{product.specs.temp}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Мощность:</span>
                      <span className="font-medium">{product.specs.power}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="gap-2">
                  <Button className="flex-1 uppercase tracking-wide" size="sm">
                    Подробнее
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="ShoppingCart" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Мы специализируемся на поставке и обслуживании профессионального холодильного оборудования для коммерческих предприятий с 2014 года.
                </p>
                <p>
                  Наша команда экспертов предоставляет полный спектр услуг: от подбора оптимального оборудования до установки, пусконаладочных работ и гарантийного обслуживания.
                </p>
                <p>
                  Работаем только с проверенными производителями и гарантируем высокое качество поставляемой продукции.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Гарантия качества</h3>
                    <p className="text-sm text-muted-foreground">До 3 лет на оборудование</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Wrench" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Монтаж</h3>
                    <p className="text-sm text-muted-foreground">Профессиональная установка</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Headphones" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Поддержка</h3>
                    <p className="text-sm text-muted-foreground">Круглосуточная техподдержка</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Truck" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Доставка</h3>
                    <p className="text-sm text-muted-foreground">По всей России</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/5675b074-0f3c-4510-86ad-7c580ff7eeb2/files/99cdc861-ea05-497c-9ac7-5f35714367a0.jpg"
                alt="О нас"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-muted-foreground">
                Свяжитесь с нами для консультации и расчета стоимости
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Icon name="Phone" className="mx-auto mb-4 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Icon name="Mail" className="mx-auto mb-4 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@holodprom.ru</p>
                  <p className="text-muted-foreground">sales@holodprom.ru</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва</p>
                  <p className="text-muted-foreground">ул. Промышленная, 15</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="example@mail.ru"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                      placeholder="Расскажите о ваших потребностях..."
                    />
                  </div>
                  <Button className="w-full uppercase tracking-wide" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Snowflake" size={24} />
                <span className="font-bold text-lg">ХОЛОДПРОМ</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональное холодильное оборудование для вашего бизнеса
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 uppercase tracking-wide text-sm">Каталог</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Холодильные камеры</li>
                <li>Витрины</li>
                <li>Морозильные шкафы</li>
                <li>Компрессоры</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 uppercase tracking-wide text-sm">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Гарантия</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 uppercase tracking-wide text-sm">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@holodprom.ru</li>
                <li>Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            © 2024 ХОЛОДПРОМ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
