# Tibebcraft Asset Integration Guide

Follow these simple steps to replace the placeholder assets with your actual Tibebcraft branding and media.

## 1. Logo Implementation
- **Status**: ✅ Implemented
- **File**: `/public/showcase/logo.svg`
- **Configuration**: Set with a white background in both `Navbar` and `Footer` for high visibility.
- **Action**: To change the logo, simply overwrite the `logo.svg` file in the `showcase` folder.

## 2. Add Feature Videos & Screenshots
- **Location**: Create a folder named `/public/showcase`.
- **Media Formats**: Supports `.mp4`, `.mov`, `.png`, `.jpg`.
- **Action**: Place your videos (e.g., `dashboard.mov`, `composer.mov`) or screenshots in that folder.
- **Implementation**: In `src/components/Showcase.tsx`, look for the `activeSlide` blocks. Replace the mockup `div`s with:
  ```tsx
  <video 
    src="/showcase/your-video.mov" 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="w-full h-full object-cover" 
  />
  ```
  *Note: For `.mov` files, ensure `playsInline` is included for mobile compatibility.*

## 3. General Landing Media
- **File Name**: `landing.png` or `landing.mov`
- **Location**: `/public`
- **Action**: This will appear in the main Hero section.

## 4. Feature-Specific Media
Each feature card in the "Built for Speed" section targets a specific file in `/public/features/`.
- **Naming**: Use lowercase with hyphens based on the feature title.
  - **Online IDE**: `online-ide.png` or `online-ide.mov`
  - **Build Anything using AI**: `build-anything-using-ai.png` or `build-anything-using-ai.mov`
  - **GitHub Sync**: `github-sync.png` or `github-sync.mov`
  - **AI Autocompletion**: `ai-autocompletion.png` or `ai-autocompletion.mov`
- **Tip**: Videos should be `.mov` or `.mp4`. PNGs or JPGs for static shots.
