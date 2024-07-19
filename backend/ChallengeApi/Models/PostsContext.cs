using Microsoft.EntityFrameworkCore;
using System;

namespace ChallengeApi.Models
{
    public class PostsContext : DbContext
    {
        public PostsContext(DbContextOptions<PostsContext> options) : base(options) { 

        }

        public DbSet<Posts> Posts { get; set; }
    }
}
