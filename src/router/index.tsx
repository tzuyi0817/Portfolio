import Index from '@/pages/Index';
import NotFound from "@/pages/NotFound";

const ROUTE_CONFIG = [
  { path: '/', element: <Index /> },
  { path: '*', element: <NotFound /> },
];

export default ROUTE_CONFIG;