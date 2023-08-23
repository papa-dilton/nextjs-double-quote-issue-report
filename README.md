# Reproduction
To reproduce the problem, simply run `yarn build` or `npm run build` on a Windows computer.
While Next tries to build static pages, `/blog/[slug]/page.tsx` lines 4-8 produce an error, as Next cannot create the file `"hello"-says-the-slug.html`. The website otherwise works fine if those lines are commented out.
