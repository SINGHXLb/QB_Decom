using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace QB2API.Model
{
    public partial class QBDBContext : DbContext
    {
        public QBDBContext()
        {
        }

        public QBDBContext(DbContextOptions<QBDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<QuestionSet> QuestionSets { get; set; } = null!;
        public virtual DbSet<QuestionStore> QuestionStores { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<UserQuestionSet> UserQuestionSets { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfiguration config = new ConfigurationBuilder()
                                      .AddJsonFile("appsettings.json")
                                      .AddEnvironmentVariables()
                                      .Build();
            string conn = config.GetRequiredSection("ConnectionStrings").GetValue<string>("QBDatabase");
            if (!optionsBuilder.IsConfigured)
            {
 
                optionsBuilder.UseSqlServer(conn);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<QuestionSet>(entity =>
            {
                entity.HasKey(e => e.Guid);

                entity.ToTable("QuestionSet");

                entity.Property(e => e.Guid).ValueGeneratedNever();

                entity.Property(e => e.CreatedBy).HasMaxLength(50);

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.QuestionSetName).HasMaxLength(50);
            });

            modelBuilder.Entity<QuestionStore>(entity =>
            {
                entity.HasKey(e => e.Guid)
                    .HasName("PK_Questions");

                entity.ToTable("QuestionStore");

                entity.Property(e => e.Guid).ValueGeneratedNever();

                entity.Property(e => e.CreationDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Guid)
                    .HasName("PK_Table1");

                entity.Property(e => e.Guid).ValueGeneratedNever();

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.LastUpdatedBy).HasMaxLength(50);

                entity.Property(e => e.LastUpdatedOn).HasColumnType("datetime");
            });

            modelBuilder.Entity<UserQuestionSet>(entity =>
            {
                entity.HasKey(e => e.Guid);

                entity.ToTable("UserQuestionSet");

                entity.Property(e => e.Guid).ValueGeneratedNever();

                entity.Property(e => e.CreatedBy).HasMaxLength(50);

                entity.Property(e => e.CreationDate).HasColumnType("datetime");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
