import createMiddleware from "next-intl/middleware";
import { NextRequest } from 'next/server';
import { routing } from "./i18n/routing";

// Create the intl middleware
const intlMiddleware = createMiddleware(routing);

// Export the combined middleware
export default async function middleware(request: NextRequest) {
  // First, set your custom headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);

  // Create a new request with the updated headers
  const updatedRequest = new NextRequest(request.url, {
    headers: requestHeaders,
  });

  // Pass the modified request through the intl middleware
  const response = intlMiddleware(updatedRequest);

  return response;
}

// Keep your existing matcher config
export const config = {
  matcher: ["/", "/(en|ro|ru)/:path*"],
};