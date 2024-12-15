```javascript
// pages/about.js
export default function About() {
  return (
    <div>
      <img
        src="/missing-image.jpg"
        alt="Missing Image"
        onError={(e) => {
          e.target.onerror = null; // Prevents infinite error loop
          e.target.src = '/fallback-image.jpg'; // Replace with fallback image
        }}
      />
      About Page
    </div>
  );
}
```