#!/bin/bash

echo "====================================="
echo "  Social Media App - Quick Start"
echo "====================================="
echo ""

echo "Starting MongoDB..."
echo "(Make sure MongoDB is installed and running)"
echo ""

echo "Opening backend server..."
cd Socialmedia/backend && npm run dev &
BACKEND_PID=$!

sleep 2

echo "Opening frontend server..."
cd ../frontend && npm run dev &
FRONTEND_PID=$!

sleep 2

echo ""
echo "====================================="
echo "   ✅ App should open shortly!"
echo "====================================="
echo ""
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop servers"
echo ""

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
