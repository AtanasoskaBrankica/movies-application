import {NextResponse} from 'next/server';

const routeMiddleware = req => {
  const isUserLoggedIn = req.cookies.get('isLoggedIn')?.value;

  if (!isUserLoggedIn) {
    return NextResponse.redirect('http://localhost:3000/');
  }
};
export const config = {
  matcher: ['/home', '/movies', '/tv-shows'],
};

export default routeMiddleware;
