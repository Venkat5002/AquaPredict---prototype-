# 🌊 AquaPredict Web Application

A beautiful, modern web interface for real-time water quality monitoring of Telangana's iconic lakes.

## ✨ Features

- **Live Real-time Dashboard**: Live updates every 6 hours for all water bodies
- **Indian Lakes Monitoring**: Hussain Sagar, Fox Sagar Lake, and Ameenpur Lake
- **Interactive Charts**: 7-day trend analysis with Recharts
- **Dynamic Risk Assessment**: Real-time risk calculation based on current readings
- **Live Status Indicator**: Shows when data was last updated
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Built with React, Tailwind CSS, and Lucide icons

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🛠️ Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/
│   ├── DashboardHeader.js    # Main navigation header
│   ├── MetricsOverview.js    # Summary statistics cards
│   ├── WaterBodyCard.js      # Individual water body cards
│   └── TrendChart.js         # Interactive charts
├── App.js                    # Main application component
├── index.js                  # React entry point
└── index.css                 # Tailwind CSS styles
```

## 🏞️ Monitored Lakes

### Hussain Sagar
- **Location**: Hyderabad, Telangana
- **Coordinates**: 17.4239° N, 78.4738° E
- **Status**: Iconic heart-shaped lake in the center of Hyderabad

### Fox Sagar Lake
- **Location**: Hyderabad, Telangana  
- **Coordinates**: 17.4567° N, 78.4567° E
- **Status**: Important water body in the northern part of Hyderabad

### Ameenpur Lake
- **Location**: Sangareddy, Telangana
- **Coordinates**: 17.6234° N, 78.2345° E
- **Status**: Biodiversity hotspot and important wetland ecosystem

## 🎨 Technologies Used

- **React 18** - Modern UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Beautiful chart library
- **Lucide React** - Modern icon library

## 📊 Data Visualization

The web app includes:
- **Line Charts** showing 7-day trends for pH, dissolved oxygen, and turbidity
- **Risk Level Indicators** with color coding
- **Real-time Metrics** with trend indicators
- **Interactive Tooltips** for detailed data exploration

## 🔧 Customization

### Adding New Water Bodies
Edit the `generateWaterData` function in `App.js` to add more water bodies.

### Styling
Modify `tailwind.config.js` and `src/index.css` for custom styling.

### Charts
Customize charts in `TrendChart.js` using Recharts components.

## 🌐 Deployment

The app can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

## 📱 Mobile Responsive

The dashboard is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones

## 🎯 Next Steps

Potential enhancements:
- Real-time data integration with your Java backend
- User authentication
- Alert notifications
- Historical data analysis
- Export functionality
- Mobile app version

---

**Enjoy your beautiful AquaPredict web dashboard!** 🌊✨
