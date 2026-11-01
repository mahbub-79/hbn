# House Of BN — Website

A responsive, dark-blue premium corporate website for House Of BN.

## Preview locally
1. Extract the ZIP.
2. Open `index.html` in a browser.
3. For a local development server, use VS Code Live Server or run:
   `python -m http.server 8000`
   Then visit `http://localhost:8000`.

## Run on GitHub Pages
1. Create a new GitHub repository.
2. Upload all files and folders from this ZIP (keep the `assets` folder).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the site.

## Deploy to Firebase Hosting
This is a static website. After installing Firebase CLI and logging in:
1. Run `firebase init hosting` in this project folder.
2. Select your Firebase project.
3. Set the public directory to `.` (current folder).
4. Configure as a single-page app: **No**.
5. If asked to overwrite `index.html`, choose **No**.
6. Run `firebase deploy`.

A sample `firebase.json` is included. If Firebase initialization has already been completed for your project, you can use:
`firebase deploy`

## Contact form note
The contact form uses `mailto:` and opens the visitor's default email application with the message prefilled. It does not store or transmit submissions to a database. For a server-backed form later, connect Firebase/another form service.

## Brand details currently used
- Name: House Of BN
- Tagline: Unlocking IT Potential
- Email: house.bn34@gmail.com
- Phone / WhatsApp: +880 1853-363434
- Address: Bandutiya, Manikganj, Dhaka, Bangladesh
- Focus: Products, Services, Training, Research

Replace the supplied details if they change. Keep the original brand logo and cover image in `assets/`.
