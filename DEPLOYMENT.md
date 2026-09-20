# Deploying Sonali's Portfolio to Vercel

Your portfolio is fully configured and ready for production deployment on Vercel with zero configuration required.

---

## Option 1: One-Click GitHub + Vercel Deployment (Recommended)

This is the standard industry method that provides automatic deployments on every commit.

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Set the repository name to: `sonali-portfolio`.
3. Choose **Public** and do NOT initialize with README (the repository is already initialized locally).
4. Click **Create repository**.

### Step 2: Push Your Local Code to GitHub
Run the following commands in PowerShell from this directory:
```powershell
git remote add origin https://github.com/sonali-panigrahi2605/sonali-portfolio.git
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Log in to [vercel.com](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Under **Import Git Repository**, select `sonali-portfolio`.
4. Vercel will automatically detect:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.
6. In ~30 seconds, your website will be live at:
   `https://sonali-portfolio.vercel.app` (or your custom domain)!

---

## Option 2: Deploy Directly via Terminal (Vercel CLI)

You can also deploy directly from your local terminal using the Vercel CLI:

1. In PowerShell, navigate to this directory:
   ```powershell
   cd C:\Users\panig\.gemini\antigravity\scratch\sonali-portfolio
   ```

2. Run the deployment command:
   ```powershell
   npx vercel
   ```

3. Follow the interactive prompts:
   - **Log in**: Press Enter to open browser login (or verify via email).
   - **Set up and deploy?**: Type `Y`
   - **Which scope?**: Select your personal account
   - **Link to existing project?**: Type `N`
   - **What’s your project’s name?**: `sonali-portfolio`
   - **In which directory is your code located?**: `./`
   - **Want to modify settings?**: Type `N` (uses `vercel.json` defaults)

4. For immediate production release:
   ```powershell
   npx vercel --prod
   ```

---

## Configuration Details
- **Configuration File**: [`vercel.json`](file:///C:/Users/panig/.gemini/antigravity/scratch/sonali-portfolio/vercel.json)
- **Framework**: Vite + React
- **Output Directory**: `dist`
- **SPA Rewrites**: Enabled for client-side navigation