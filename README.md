# blog.abhijoymandal
Blog for AI papers

## Setup

This is a Jekyll-based blog boilerplate for GitHub Pages.

### To deploy on GitHub Pages:

1. Create a new repository on GitHub named `yourusername.github.io` (for user site) or any name for project site.
2. Push this code to the repository.
3. In repository settings, enable GitHub Pages and select the source branch (usually `main` or `master`).
4. For project sites, set the baseurl in `_config.yml` to `/repository-name`.

### Adding Blog Posts

- Add new posts to the `_posts/` folder.
- File name format: `YYYY-MM-DD-title.md`
- Include front matter: `layout: default`, `title: "Post Title"`, `date: YYYY-MM-DD`
- Optional: Add a `thumbnail` field in front matter for custom thumbnail image URL

### Custom Thumbnails

To use custom thumbnails, add to the post front matter:
```
thumbnail: /path/to/your/image.jpg
```

Then update the tile HTML to use `{{ post.thumbnail | default: 'https://via.placeholder.com/200x120/667eea/ffffff?text=Thumbnail' }}`

### Features

- Home page with introduction and post tiles.
- Automatic tile generation for all posts in `_posts/`.
- Pagination: Shows top 5 tiles initially, "Show More" button reveals 10 more.
- Responsive design.

### Customization

- Edit `index.html` for the home page content.
- Modify `assets/css/style.css` for styling.
- Update `assets/js/script.js` for pagination logic.
- Change `_config.yml` for site settings.
