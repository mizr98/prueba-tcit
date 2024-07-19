using ChallengeApi.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace ChallengeApi.Controllers
{
    [ApiController]
    [Route("post")]
    public class PostController : Controller
    {
        private readonly PostsContext _context;

        public PostController(PostsContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getPosts")]
        public ActionResult<IEnumerable<Posts>> GetPosts()
        {
            var posts = _context.Posts.ToList();
            return Ok(_context.Posts.ToList());

        }

        [HttpGet]
        [Route("getPostById")]
        public ActionResult<Posts> GetPostById(int id)
        {
            var post = _context.Posts.Find(id);

            if(post == null)
            {
                return NotFound();
            }
            return post;

        }

        [HttpPost]
        [Route("addPost")]

        public ActionResult<Posts> AddPost([FromBody] Posts post)
        {
            _context.Posts.Add(post);
            _context.SaveChanges();


            return CreatedAtAction(nameof(GetPostById), new { id = post.Id},post);

        }

        [HttpDelete]
        [Route("deletePost")]
        public ActionResult<Posts> DeletePost([FromBody] int id)
        {
            var post = _context.Posts.Find(id);

            if (post == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(post);
            _context.SaveChanges();

            return NoContent();

        }
    }
}
