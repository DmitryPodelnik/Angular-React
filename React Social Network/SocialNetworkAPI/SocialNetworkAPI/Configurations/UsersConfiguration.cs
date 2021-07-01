using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SocialNetworkAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SocialNetworkAPI.Configurations
{
    public class UsersConfiguration : IEntityTypeConfiguration<User>
    {
        private SHA256Managed sha256 = new();

        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasData(
                new User[]
                {
                    new User { Id = 1, FirstName = "Dmitry", LastName = "Podelnik", Username = "dmitrypodelnik", Email = "dmitrypodelnik.developer@gmail.com",
                               Password = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes("123123"))), Gender = "Male", Age = 20, City = "Odesa",
                               About = "Учёный-энциклопедист: химик, физикохимик, физик, метролог, экономист, технолог, геолог, метеоролог, нефтяник, педагог, воздухоплаватель, " +
                               "приборостроитель. Профессор Императорского Санкт-Петербургского университета; член-корреспондент (по разряду «физический») " +
                               "Императорской Санкт-Петербургской Академии наук. Среди самых известных открытий — периодический закон химических элементов, " +
                               "один из фундаментальных законов мироздания, неотъемлемый для всего естествознания. Автор классического труда «Основы химии». " +
                               "Тайный советник." },
                    new User { Id = 2, FirstName = "Dmitry2", LastName = "Podelnik2", Username = "dmitrypodelnik2", Email = "dmitrypodelnik2.developer@gmail.com",
                               Password = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes("1231232"))), Gender = "Male", Age = 22, City = "Kyiv",
                               About = "Христианский богослов и философ, влиятельнейший проповедник, епископ Гиппонский (с 395 года), один из Отцов христианской церкви" +
                               "Августин является святым католической, православной и лютеранской церквей " +
                               "(при этом в Православии обычно именуется с эпитетом блаженный — Блаженный Августин)." },
                    new User { Id = 3, FirstName = "Dmitry3", LastName = "Podelnik3", Username = "dmitrypodelnik3", Email = "dmitrypodelnik3.developer@gmail.com",
                               Password = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes("1231233"))), Gender = "Male", Age = 24, City = "Lviv",
                               About = "Американский предприниматель и общественный деятель, филантроп, один из создателей (совместно с Полом Алленом) и бывший " +
                               "крупнейший акционер компании Microsoft. До июня 2008 года являлся руководителем компании; после ухода с поста остался в должности " +
                               "её неисполнительного председателя совета директоров. Также является сопредседателем благотворительного Фонда Билла и Мелинды Гейтс," +
                               " членом совета директоров Berkshire Hathaway, генеральным директором Cascade investment." },
                });
        }
    }
}
