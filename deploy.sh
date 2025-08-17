#!/bin/bash
# Deployment script for Hostinger

echo "Building React application..."
npm run build

echo "Creating deployment folders..."
mkdir -p deploy/static-hosting
mkdir -p deploy/wordpress-theme

echo "Preparing static hosting files..."
cp -r dist/* deploy/static-hosting/
cp .htaccess deploy/static-hosting/

echo "Preparing WordPress theme files..."
cp -r wordpress-theme/* deploy/wordpress-theme/
cp -r dist/assets deploy/wordpress-theme/

echo "Deployment files ready!"
echo ""
echo "For Static Hosting:"
echo "1. Upload contents of 'deploy/static-hosting' to your domain's public folder"
echo ""
echo "For WordPress Theme:"
echo "1. Zip the 'deploy/wordpress-theme' folder"
echo "2. Upload via WordPress Admin > Appearance > Themes > Add New > Upload"
echo ""
