# Assets Integration Guide

## Image Assets Used from Original Website

### Logo
- **Main Logo**: `https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/05/logo.png`
- **Size**: 591x200px
- **Usage**: Header navigation, mobile menu
- **Format**: PNG with transparency

### Hero Background
- **Hero Image**: `https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/05/hero_section-1.jpg`
- **Usage**: Main hero section background
- **Format**: JPG optimized for web
- **Implementation**: CSS background-image with overlay for better text readability

### Company Video
- **YouTube URL**: `https://youtu.be/gJkE8OQQ2qM`
- **Usage**: About section company overview video
- **Format**: YouTube embedded video with custom player
- **Features**: Custom thumbnail, play button, responsive design

### Favicon & Icons
- **32x32 Favicon**: `https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/05/cropped-icon-32x32.png`
- **192x192 Icon**: `https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/05/cropped-icon-192x192.png`
- **Apple Touch Icon**: `https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/05/cropped-icon-180x180.png`

### Phone Icon
- **SVG Icon**: `https://raptor.gamezawy.com/ipp/wp-content/uploads/2023/04/wd-furniture-phone.svg`
- **Usage**: Contact information display
- **Format**: SVG vector graphic

### CALIPPO Machine Gallery
The About section showcases 6 high-quality images of CALIPPO machinery:

1. **Machine 1** (Horizontal): `https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/07/ماكينة-كاليبو-1CALIPPO-1-scaled.jpg`
   - Dimensions: 2560x1707px
   - Alt Text: "CALIPO Machine 1 - Horizontal packaging system"

2. **Machine 2** (Vertical): `https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/07/ماكينة-كاليبو-2CALIPPO-1-scaled.jpg`
   - Dimensions: 1707x2560px
   - Alt Text: "CALIPO Machine 2 - Vertical packaging unit"

3. **Machine 3**: `https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/07/ماكينة-كاليبو-3CALIPPO-1-scaled.jpg`
   - Dimensions: 1707x2560px
   - Alt Text: "CALIPO Machine 3 - Advanced sealing technology"

4. **Machine 4**: `https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/07/ماكينة-كاليبو-4CALIPPO-1-scaled.jpg`
   - Dimensions: 1707x2560px
   - Alt Text: "CALIPO Machine 4 - Multi-lane packaging solution"

5. **Machine 5**: `https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/07/ماكينة-كاليبو-5CALIPPO-1-scaled.jpg`
   - Dimensions: 1707x2560px
   - Alt Text: "CALIPO Machine 5 - High-speed production line"

6. **Machine 6**: `https://raptor.gamezawy.com/ipp/wp-content/uploads/2025/07/ماكينة-كاليبو-6CALIPPO-1-scaled.jpg`
   - Dimensions: 1707x2560px
   - Alt Text: "CALIPO Machine 6 - Quality control system"

## Implementation Details

### Images Configuration
All image URLs are centralized in `src/assets/images.ts`:
- Organized by category (logo, heroBg, favicon, calippo machines)
- Easy to update and maintain
- Supports internationalization for alt texts

### Hero Section Background
- Uses actual company hero image with dark overlay for text readability
- Responsive background sizing (cover)
- Maintains original aspect ratio across devices
- Subtle floating animations complement the real image

### Responsive Image Loading
- Implements lazy loading for performance
- Includes proper alt texts for accessibility
- Supports both English and Arabic translations
- Hover animations and interactive effects

### SEO & Accessibility
- Proper alt attributes for screen readers
- Semantic HTML structure
- Optimized image loading
- Meta tags for social sharing

## Future Improvements

### Image Optimization
1. **CDN Integration**: Consider using Cloudinary or ImageKit for automatic optimization
2. **WebP Support**: Convert to modern image formats for better compression
3. **Responsive Images**: Implement srcset for different screen sizes
4. **Progressive Loading**: Add blur-up or skeleton loading states

### Local Assets
If you want to host images locally:
1. Download images to `public/assets/images/`
2. Update `src/assets/images.ts` with local paths
3. Optimize images for web delivery
4. Implement proper caching headers

### Performance
- Preload critical images (logo, hero)
- Use IntersectionObserver for lazy loading
- Implement image compression
- Add loading states and error fallbacks

## Usage Examples

```tsx
import { images } from '../assets/images';

// Logo usage
<img src={images.logo} alt="IPP EGYPT" />

// Machine gallery
{Object.entries(images.calippo).map(([key, src]) => (
  <img key={key} src={src} alt={t(`about.imageAlt.${key}`)} />
))}
```

All images from the original HTML have been properly integrated and are now displaying in the React application with enhanced user experience and accessibility features.
