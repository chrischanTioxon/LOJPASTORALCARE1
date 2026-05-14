/**
 * Vercel Speed Insights initialization
 * This script injects the Speed Insights tracking code
 */

// Import the inject function from the Speed Insights package
import { injectSpeedInsights } from '../node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false, // Set to true for development debugging
});
