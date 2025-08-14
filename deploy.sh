#!/bin/bash

# IPP EGYPT React App Deployment Script

echo "🚀 Starting deployment process for IPP EGYPT React App..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed. Please install Node.js and npm first.${NC}"
    exit 1
fi

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi

# Run tests (if any)
echo -e "${YELLOW}🧪 Running tests...${NC}"
npm test -- --coverage --watchAll=false

# Build the application
echo -e "${YELLOW}🔨 Building the application...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully!${NC}"

# Create deployment package
echo -e "${YELLOW}📦 Creating deployment package...${NC}"
tar -czf ipp-egypt-build.tar.gz build/

echo -e "${GREEN}✅ Deployment package created: ipp-egypt-build.tar.gz${NC}"

# Display deployment instructions
echo -e "${GREEN}📋 Deployment Instructions:${NC}"
echo "1. Upload the 'build' folder to your web server"
echo "2. Configure your web server to serve index.html for all routes"
echo "3. Ensure your server supports gzip compression for better performance"
echo "4. Set up proper caching headers for static assets"

echo -e "${GREEN}🎉 Deployment process completed successfully!${NC}"
