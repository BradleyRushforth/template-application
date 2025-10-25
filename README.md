# Template Application Setup Guide

Follow these steps to get your application running locally:

## 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <repo-folder>
```

## 2. Install Dependencies

```bash
npm install

# Ensure to Run this command as it's not automatically included in `npm install`
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

```

## 3. (Optional) Check Node.js Version

Make sure you are using a compatible Node.js version (e.g., 18.x or later):

```bash
node -v
```

## 4. Start the Development Server

```bash
npm run dev
```

The app should now be running locally. Check the terminal output for the local URL (usually http://localhost:5173).

---

## Next Steps

Now that the template is set up, you can:

- Push to a new repository on your preferred git provider
- Start building your new application using this template as a foundation

For any issues or questions, refer to the documentation or open an issue in your new repository.
