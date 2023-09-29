import {NextResponse} from 'next/server';

const routeMiddleware = req => {
  console.log('middleware', req.nextUrl.pathname);
  const isUserLoggedIn = req.cookies.get('isLoggedIn')?.value;
  console.log('user', isUserLoggedIn);

  if (!isUserLoggedIn) {
    return NextResponse.redirect('http://localhost:3000/');
  }
};
export const config = {
  matcher: ['/home', '/movies', '/tv-shows'],
};

export default routeMiddleware;
