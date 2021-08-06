using Blog_WebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_WebAPI.Configurations
{
    public class ArticlesConfiguration : IEntityTypeConfiguration<Article>
    {
        public void Configure(EntityTypeBuilder<Article> builder)
        {
            builder.HasData(
                new Article[]
                {
                    new Article
                    {
                        Id = 1,
                        Title = "ADO.NET",
                        Content = "ADO.NET (ActiveX Data Object) — технология, предоставляющая доступ и управление данными, хранящимся в базе данных или других источниках (Microsoft SQL Server, Microsoft Access, Microsoft Excel, Microsoft Outlook, Microsoft Exchange, Oracle, OLE DB, ODBC, XML, текстовые файлы), основанных на платформе .NET Framework и входящая в состав .NET Framework 2.0, представляет собой набор библиотек.",
                        Username = "Dmytro Podelnik",
                        Date = DateTime.Now.ToShortDateString(),
                        UserId = 1,
                    },

                    new Article
                    {
                        Id = 2,
                        Title = "ASP.NET",
                        Content = "ASP.NET — платформа разработки веб - приложений, в состав которой входит: веб - сервисы, программная инфраструктура, модель программирования, от компании Майкрософт.",
                        Username = "Dmytro Podelnik",
                        Date = DateTime.Now.ToShortDateString(),
                        UserId = 1,
                    },

                    new Article
                    {
                        Id = 3,
                        Title = "C#",
                        Content = "C# (произносится си шарп) — объектно-ориентированный язык программирования. Разработан в 1998—2001 годах группой инженеров компании Microsoft под руководством Андерса Хейлсберга и Скотта Вильтаумота как язык разработки приложений для платформы Microsoft .NET Framework. Впоследствии был стандартизирован как ECMA-334 и ISO/IEC 23270.",
                        Username = "Dmytro Podelnik",
                        Date = DateTime.Now.ToShortDateString(),
                        UserId = 1,
                    },

                    new Article
                    {
                        Id = 4,
                        Title = "C++",
                        Content = "C++ (читается си-плюс-плюс) — компилируемый, статически типизированный язык программирования общего назначения. Поддерживает такие парадигмы программирования, как процедурное программирование, объектно-ориентированное программирование, обобщённое программирование. Язык имеет богатую стандартную библиотеку, которая включает в себя распространённые контейнеры и алгоритмы, ввод-вывод, регулярные выражения, поддержку многопоточности и другие возможности. C++ сочетает свойства как высокоуровневых, так и низкоуровневых языков. В сравнении с его предшественником — языком C — наибольшее внимание уделено поддержке объектно-ориентированного и обобщённого программирования.",
                        Username = "Dmytro Podelnik",
                        Date = DateTime.Now.ToShortDateString(),
                        UserId = 1,
                    },

                    new Article
                    {
                        Id = 5,
                        Title = "JavaScript",
                        Content = "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262).JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.",
                        Username = "Dmytro Podelnik",
                        Date = DateTime.Now.ToShortDateString(),
                        UserId = 1,
                    },
                    new Article
                    {
                        Id = 6,
                        Title = "WPF",
                        Content = "Windows Presentation Foundation (WPF) — аналог WinForms, система для построения клиентских приложений Windows с визуально привлекательными возможностями взаимодействия с пользователем, графическая (презентационная) подсистема в составе .NET Framework (начиная с версии 3.0), использующая язык XAML.",
                        Username = "Dmytro Podelnik",
                        Date = DateTime.Now.ToShortDateString(),
                        UserId = 1,
                    },
                });
        }
    }
}
