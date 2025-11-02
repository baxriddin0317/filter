import { NextRequest, NextResponse } from 'next/server';

// Mock products data (like Lorem Ipsum for images)
const mockProducts = [
  {
    title: "TG фиш прямо с завода",
    country: "Ирак",
    dialogs: 128,
    channels: 13,
    passwordStatus: "Без пароля",
    spamblockStatus: "Без спамблока",
    date: "20 февраля 2024 | 14:41",
    price: 20,
    phishingLabel: true
  },
  {
    title: "TG фиш прямо с завода",
    country: "Ирак",
    dialogs: 128,
    channels: 13,
    passwordStatus: "Без пароля",
    spamblockStatus: "Спамблок",
    date: "20 февраля 2024 | 14:41",
    price: 20,
    phishingLabel: true
  },
  {
    title: "TG фиш прямо с завода",
    country: "Ирак",
    dialogs: 128,
    channels: 13,
    passwordStatus: "С паролем",
    spamblockStatus: "Без спамблока",
    date: "20 февраля 2024 | 14:41",
    price: 20,
    phishingLabel: true
  },
  {
    title: "TG фиш прямо с завода",
    country: "Ирак",
    dialogs: 128,
    channels: 13,
    passwordStatus: "С паролем",
    spamblockStatus: "Спамблок",
    date: "20 февраля 2024 | 14:41",
    price: 20
  },
];

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    
    // Simulate API delay (like real API)
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter products based on query params (mock filtering logic)
    let filteredProducts = [...mockProducts];
    
    // Apply filters from query params
    const priceFrom = searchParams.get('priceFrom');
    const priceTo = searchParams.get('priceTo');
    if (priceFrom || priceTo) {
      const min = priceFrom ? Number(priceFrom) : 0;
      const max = priceTo ? Number(priceTo) : Infinity;
      filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max);
    }
    
    const searchString = searchParams.get('searchString');
    if (searchString) {
      filteredProducts = filteredProducts.filter(p => 
        p.title.toLowerCase().includes(searchString.toLowerCase())
      );
    }
    
    // Add more filter logic as needed...
    
    // Return filtered products
    return NextResponse.json(filteredProducts, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
